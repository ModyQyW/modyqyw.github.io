# 我讨厌 CentOS

## 背景

最近两个月，我接手了一个旧项目一个新项目，都和 CentOS 7 有关。

### 旧项目

旧项目是基于 VueCLI 4 和 Vue 2 的，已有的服务器是 CentOS 7，只能通过 VPN 连接，需要用该服务器给已有的 Windows Electron 一体机应用增加一个全量更新的功能。

我花了三四天升级了各项依赖，调研而且实现全量更新。当我想要实际把全量更新包放到服务器测试一下时，问题出现了：VPN 很慢而且不稳定，这就导致我一天下来只成功上传一次全量更新包，效率极其低下。为了节省上传时间，我想到可以在服务器上构建后部署。

我需要先在服务器上安装 Node，但是因为服务器的依赖（包括 GCC、MAKE、GLIBC 等）版本都太低了，我连装 Node 都没法正常完成。我只好参考 [这篇文章](https://developer.aliyun.com/article/1099333) 升级了服务器的依赖。

升级依赖后，我发现还是不能正常构建出 32 位的安装包，没法给老旧一体机安装。重新翻看 [electron-builder](https://www.electron.build/multi-platform-build#to-build-app-for-windows-on-linux) 的文档才发现 ，因为服务器是 64 位的，不支持构建 32 位安装包，需要安装 [Wine](https://www.winehq.org/)、重新构建依赖才能正常打包，否则就要使用 Docker 来构建了。

出于各种原因（客户的持续维护需求低、投入产出比不高，工期排期时间不足等），我没有选择 Docker，而是走了前一条路子。最后差不多用了 80 个工作时才最终搞定这一切，比预期多了足足 40 个工作时，多出来的工作时全投入在服务器处理上了。

### 新项目

新项目也是用 CentOS 7 当测试服务器，这次是在阿里云买的服务器。这次，我是想要在服务器上跑 Azure DevOps Pipelines，试运行的时候先是发现 Git 版本太低，没法正常运行。

根据 [Git 官网的提示](https://git-scm.com/download/linux)，我找到了 [IUS](https://ius.io/)。这台服务器很多命令需要加 `sudo` 运行，否则就提示权限不足，不清楚是阿里云设置问题还是别的问题。

```shell
sudo yum remove git
sudo yum install \
https://repo.ius.io/ius-release-el7.rpm \
https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
```

[搜索到最新的 Git 版本](https://github.com/search?q=org%3Aiusrepo+topic%3Arpm+git&s=updated&type=repositories)，然后再安装即可。

```shell
sudo yum install git236
```

解决了 Git 的问题后，仍然没法正常运行 Pipeline。

```shell
/usr/bin/bash --noprofile --norc /home/ecs-user/azure-devops-agent/_work/_temp/eeb7cdb3-e469-4bfe-a11d-428e0d42c62e.sh
node: /lib64/libm.so.6: version `GLIBC_2.27' not found (required by node)
node: /lib64/libc.so.6: version `GLIBC_2.25' not found (required by node)
node: /lib64/libc.so.6: version `GLIBC_2.28' not found (required by node)
node: /lib64/libstdc++.so.6: version `CXXABI_1.3.9' not found (required by node)
node: /lib64/libstdc++.so.6: version `GLIBCXX_3.4.20' not found (required by node)
node: /lib64/libstdc++.so.6: version `GLIBCXX_3.4.21' not found (required by node)

```

我尝试按着之前的参考文章去做升级。在安装过程中，还是遇到了问题。

```shell
configure: error: C++ preprocessor "/lib/cpp" fails sanity check
```

因为预装的 GCC 套件不全，需要手动安装一下，再按照文章来操作，真的啥都要自己装完自己升级，多少有点大病 😡。

```shell
sudo yum install gcc glibc-headers gcc-c++
```

在安装 `glibc`、执行 `sudo make install` 时，又出现了新的错误。这个错误不影响实际使用，只影响我的心情 😡，可以继续操作到结尾。

```shell
/usr/bin/ld: cannot find -lnss_test2
collect2: error: ld returned 1 exit status
Execution of gcc -B/usr/bin/ failed!
The script has found some problems with your installation!
Please read the FAQ and the README file and check the following:
- Did you change the gcc specs file (necessary after upgrading from
  Linux libc5)?
- Are there any symbolic links of the form libXXX.so to old libraries?
  Links like libm.so -> libm.so.5 (where libm.so.5 is an old library) are wrong,
  libm.so should point to the newly installed glibc file - and there should be
  only one such link (check e.g. /lib and /usr/lib)
You should restart this script from your build directory after you've
fixed all problems!
Btw. the script doesn't work if you're installing GNU libc not as your
primary library!
make[1]: *** [Makefile:120: install] Error 1
make[1]: Leaving directory '/opt/glibc-2.31'
make: *** [Makefile:12: install] Error 2
```

有了之前旧项目的经验，更新新项目服务器配置大概只用了 12 个工作时，但我觉得，这仍然是难以承受的。

## 观点

CentOS 的一大特点是稳定、安全，软件包都经过大量测试，受到广大运维的青睐。也因此，软件包大多都比较老旧，要使用新特性就需要自己编译操作，耗费不少时间。

这个取舍值得吗？我觉得对于大部分公司来说不值得。

一方面，很多公司不要求有多少个 9 的稳定性，也不要求系统可靠性层面的稳定，而是要求运维技能的稳定，也就是不用学新东西可以直接上。

另一方面，公司里不一定有运维，开发兼任的情况不少。假如有运维，运维也不乐意为你更新这个依赖那个依赖，万一崩了怎么办呢？谁来负责呢？又是谁来处理呢？

如果让我来选，系统层面我会选择 Ubuntu 或者 Fedora，起码不会告诉你 Git 版本太旧，浪费我宝贵的生命。另外，也该学一下 Docker、Podman、K8s 等容器化技术，早日与运维选择的操作系统脱钩。
