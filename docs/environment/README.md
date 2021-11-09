# 环境配置

所有配置仅供参考，且尽可能使用统一的包管理器安装。Windows 上推荐使用 [Chocolatey](https://chocolatey.org/)，macOS 上推荐使用 [Homebrew](https://brew.sh/)，均不推荐换源。以下给出在 macOS (intel) 上的应用和配置参考，并补充说明在 Windows 上大致如何操作。

## DNS

- [阿里 DNS](http://alidns.com/) - `223.5.5.5`，`223.6.6.6`，`2400:3200::1`，`2400:3200:baba::1`
- [百度 DNS](https://dudns.baidu.com/intro/publicdns/) - `180.76.76.76`，`2400:da00::6666`
- [114 DNS](https://www.114dns.com/) - `114.114.114.114`，`114.114.115.115`
- [DNSPOS DNS](https://www.dnspod.cn/Products/Public.DNS) - `119.29.29.29`
- [Google DNS](https://developers.google.cn/speed/public-dns/docs/using?hl=zh-CN) - `8.8.8.8`，`8.8.4.4`，`2001:4860:4860::8888`，`2001:4860:4860::8844`
- [Cloudflare DNS](https://developers.cloudflare.com/1.1.1.1/setting-up-1.1.1.1/) - `1.1.1.1`，`1.0.0.1`，`2606:4700:4700::1111`，`2606:4700:4700::1001`
- [Open DNS](https://www.opendns.com/) - `208.67.222.222`，`208.67.220.220`

## 浏览器插件

- BitWarden - 密码管理
- Dark Reader - 暗黑模式
- Gitako - 便捷查看 Github
- Lighthouse - 网页性能测试
- React Developer Tools - react 浏览器调试工具
- Sync Sofa - 同步看剧
- Tampermonkey - 插件工具
- uBlock Origin - 广告屏蔽，配置参考 [cjxlist](https://github.com/cjx82630/cjxlist)
- Vue.js devtools - vue 浏览器调试工具
- Wappalyzer - 网页依赖分析
- Window Resizer - 便捷调试响应式网页
- 哔哩哔哩助手

## macOS (intel)

- 在触控板上四指捏合，或者点击底部 `程序坞` 里面的 `启动台`，然后打开 `终端`。

- 点击左上角的 `终端` -> 偏好设置 -> 描述文件，可以选择你想要的基本效果。我这里选择了 `Pro`。

- 安装 [Homebrew](https://brew.sh/) 并链接不同的软件源，方便后续统一安装和更新大量软件。**注意：homebrew 上的软件版本往往会有一些滞后。**

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew tap buo/cask-upgrade # https://github.com/buo/homebrew-cask-upgrade
# Update formulaes and casks
brew cleanup --prune=all && brew upgrade && brew cu -ay && brew cleanup --prune=all
# Check problems
brew doctor
```

- 安装 [VSCode](https://code.visualstudio.com/)，方便编辑文件。

```shell
brew install --cask visual-studio-code
```

- 安装 [Git](https://git-scm.com/)。

```shell
brew install git
```

- 切换默认的 `shell` 到 `zsh`（[终端和 shell 的区别](https://www.ihewro.com/archives/933/)）。

```shell
chsh -s /bin/zsh
sudo chsh -s /bin/zsh
```

- 安装 [oh-my-zsh](https://ohmyz.sh/)。

```shell
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

- 安装 `oh-my-zsh` 的插件 [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting) 和 [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)。

```shell
sudo chmod 777 ~/.oh-my-zsh
sudo git clone https://github.com/zsh-users/zsh-syntax-highlighting ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
sudo git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

- 用 `vscode` 打开默认主题 `robbyrussell` 的配置文件 `~/.oh-my-zsh/themes/robbyrussell.zsh-theme`，简单修改一下然后保存

```shell
code ~/.oh-my-zsh/themes/robbyrussell.zsh-theme
```

```shell
PROMPT="%(?:%{$fg_bold[green]%}➜ :%{$fg_bold[red]%}➜ )"
PROMPT+=' %{$fg[cyan]%}[$PWD]%{$reset_color%} $(git_prompt_info)'

ZSH_THEME_GIT_PROMPT_PREFIX="%{$fg_bold[blue]%}git:(%{$fg[red]%}"
ZSH_THEME_GIT_PROMPT_SUFFIX="%{$reset_color%} "
ZSH_THEME_GIT_PROMPT_DIRTY="%{$fg[blue]%}) %{$fg[yellow]%}✗"
ZSH_THEME_GIT_PROMPT_CLEAN="%{$fg[blue]%})"

```

- 用 `vscode` 打开 `zsh` 的配置文件 `~/.zshrc`，配置 `zsh` 和环境变量。

```shell
code ~/.zshrc
```

```shell
# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="~/.oh-my-zsh"

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
ZSH_THEME="robbyrussell"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in ~/.oh-my-zsh/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to automatically update without prompting.
# DISABLE_UPDATE_PROMPT="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS=true

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in ~/.oh-my-zsh/plugins/*
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git z vscode zsh-syntax-highlighting zsh-autosuggestions)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

# show user
export DEFAULT_USER="$(whoami)"

```

- 保存一下，然后在终端里指定使用 `~/.zshrc`。这一步非常重要，配置完 `~/.zshrc` 之后都要指定一下。后面不再重复这一点。

```shell
source ~/.zshrc
```

- 开始疯狂用 `homebrew` 安装和配置。

```shell
# 驱动
brew tap homebrew/cask-drivers # https://github.com/Homebrew/homebrew-cask-drivers
# 字体
brew tap homebrew/cask-fonts # https://github.com/Homebrew/homebrew-cask-fonts
brew install font-fira-code # https://github.com/tonsky/FiraCode
brew install font-jetbrains-mono # https://github.com/JetBrains/JetBrainsMono
brew install font-roboto # https://github.com/googlefonts/roboto
brew install font-roboto-mono
brew install font-roboto-mono-for-powerline
brew install font-sarasa-gothic # https://github.com/be5invis/Sarasa-Gothic
brew install font-source-code-pro # https://github.com/adobe-fonts/source-code-pro
brew install font-source-code-pro-for-powerline
# 不同版本的应用
brew tap homebrew/cask-versions # https://github.com/Homebrew/homebrew-cask-versions

# 阿里云盘，可替代百度网盘，自建网盘参考 seafile，owncloud 和 nextcloud
brew install --cask adrive
# android studio，开发 Android 用
brew install --cask android-studio # https://developer.android.com/studio/
# another redis desktop manager，redis gui
brew install --cask another-redis-desktop-manager # https://github.com/qishibo/AnotherRedisDesktopManager/
# baidu netdisk，百度网盘，自建网盘参考 seafile，owncloud 和 nextcloud
brew install --cask baidunetdisk # https://pan.baidu.com/download
# bitwarden，管理密码
brew install --cask bitwarden # https://bitwarden.com/
# cheatsheet，长按 Command 键显示当前应用的快捷键
brew install --cask cheatsheet # https://www.cheatsheetapp.com/CheatSheet/
# clashx，v2ray 客户端
# v2ray 服务商 holytech https://store.holytech.tech/aff.php?aff=2849
# v2ray 服务商 520ssr https://www.520ssr.co/auth/register?code=oiwx
# v2ray 服务商 iplc.vip https://portal.uuks.club/clientarea.php
# https://github.com/freefq/free
brew install --cask clashx # https://github.com/yichengchen/clashX
brew install --cask clashx-pro
# cocoapods
brew install cocoapods
# drawio，作图工具
brew install --cask drawio # https://www.draw.io/
# fliqlo，屏保时钟
brew install --cask fliqlo # https://fliqlo.com/
# git，代码版本管理
brew install git # https://git-scm.com/
brew install git-lfs # https://git-lfs.github.com/
git config --global core.autocrlf false
git config --global init.defaultBranch main
git config --global user.name "YOUR_NAME_HERE"
git config --global user.email "YOUR_EMAIL_HERE"
# go
brew install go
# gradle
brew install gradle
# iina，音视频播放器
brew install --cask iina # https://iina.io/
# itsycal，日历工具，可以将 macOS 的时间调成 HH:mm:ss 形式，将 itsycal 调成 YYYY-MM-DD 形式
brew install --cask itsycal # https://www.mowglii.com/itsycal/
# keka，压缩工具
brew install --cask keka # https://www.keka.io/
# lightproxy，代理调试工具
brew install --cask lightproxy
# lx-music，洛雪音乐助手
brew install --cask lx-music # https://github.com/lyswhut/lx-music-desktop/
# microsoft-edge，浏览器
brew install --cask microsoft-edge # https://www.microsoft.com/edge
# mini-program-studio，阿里系小程序开发者工具
brew install --cask mini-program-studio # https://opendocs.alipay.com/mini/ide
# mongodb，流行的文档型数据库
brew tap mongodb/brew # https://github.com/mongodb/homebrew-brew
brew install mongodb-community
brew install --cask mongodb-compass # mongodb official gui
brew services start mongodb/brew/mongodb-community # start when launched
# motrix，下载工具
brew install --cask motrix # https://motrix.app/
# mounty，重新挂载受写保护的 NTFS 卷
brew install --cask mounty # https://mounty.app/
# mysql，流行的关系型数据库
brew install mysql
brew services start mysql # start when launched
# mysqlworkbench，mysql gui
brew install --cask mysqlworkbench # https://www.mysql.com/products/workbench/
# obs，录屏工具
brew install --cask obs # https://obsproject.com/
# openemu
brew install --cask openemu
# openineditor-lite，在编辑器快速打开当前目录
brew install --cask openineditor-lite # https://github.com/Ji4n1ng/OpenInTerminal
# openinterminal-lite，在终端快速打开当前目录
brew install --cask openinterminal-lite # https://github.com/Ji4n1ng/OpenInTerminal
# openjdk，开发 Android 用
brew install openjdk # https://openjdk.java.net/
# postman，接口工具
brew install --cask postman # https://www.postman.com/
# prince，将 HTML 转换成 PDF
brew install --cask prince # https://www.princexml.com/
# qq
brew install --cask qq # https://im.qq.com/macqq/
# rectangle，快速移动、调整窗口大小
brew install --cask rectangle # https://rectangleapp.com/
# responsively，帮助响应式开发
brew install --cask responsively # https://responsively.app/
# snipaste，屏幕截图
brew install --cask snipaste # https://www.snipaste.com/
# sourcetree，git gui
brew install --cask sourcetree # https://www.sourcetreeapp.com/
# subversion，代码版本管理
brew install svn # https://subversion.apache.org/
# tencent-lemon，系统清理和状态工具
brew install --cask tencent-lemon # https://lemon.qq.com/
# thunder，下载工具
brew install --cask thunder # https://www.xunlei.com/
# utools，效率工具，包括翻译、剪切板、网页快搜的功能的插件支持
# 开源插件见 https://yuanliao.info/d/2168--
brew install --cask utools # https://u.tools/index.html
# watchman
brew install watchman
# wechat
brew install --cask wechat # https://mac.weixin.qq.com/
# wechatwebdevtools，微信小程序开发者工具
brew install --cask wechatwebdevtools # https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html
# you-get，下载网络媒体资源
brew install you-get # https://you-get.org/
# youtube-dl，下载网络媒体资源
brew install youtube-dl
```

- 安装 `node` 相关。

```shell
# nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash # https://github.com/nvm-sh/nvm
export NVM_NODEJS_ORG_MIRROR=https://nodejs.org/dist # use default origin
# export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node # use taobao origin
# install node
nvm install 10
nvm install 12
nvm install 14
nvm install 16
# set default
nvm alias default 16
# use lts (2021.11.09)
nvm use 16
# install global deps
npm i -g --registry=https://registry.npmmirror.com @nestjs/cli # https://docs.nestjs.com/
npm i -g --registry=https://registry.npmmirror.com @tarojs/cli # https://docs.taro.zone/
npm i -g --registry=https://registry.npmmirror.com @types/node
npm i -g --registry=https://registry.npmmirror.com @umijs/create-umi-app # https://umijs.org/
npm i -g --registry=https://registry.npmmirror.com @vue/cli@next # https://next.cli.vuejs.org/
npm i -g --registry=https://registry.npmmirror.com cnpm # https://github.com/cnpm/cnpm
npm i -g --registry=https://registry.npmmirror.com create-alita # https://alitajs.com/
npm i -g --registry=https://registry.npmmirror.com create-next-app # https://nextjs.org/
npm i -g --registry=https://registry.npmmirror.com create-nuxt-app # https://nuxtjs.org/
npm i -g --registry=https://registry.npmmirror.com create-vite # https://vitejs.dev/
npm i -g --registry=https://registry.npmmirror.com eslint # https://eslint.org/
npm i -g --registry=https://registry.npmmirror.com expo-cli # https://expo.dev/
npm i -g --registry=https://registry.npmmirror.com nodemon # https://nodemon.io/
npm i -g --registry=https://registry.npmmirror.com npm-check-updates # https://github.com/raineorshine/npm-check-updates
npm i -g --registry=https://registry.npmmirror.com nrm # https://github.com/Pana/nrm
npm i -g --registry=https://registry.npmmirror.com pnpm # https://pnpm.io/
npm i -g --registry=https://registry.npmmirror.com prettier # https://prettier.io/
npm i -g --registry=https://registry.npmmirror.com serve # https://github.com/vercel/serve
npm i -g --registry=https://registry.npmmirror.com sort-package-json # https://github.com/keithamus/sort-package-json
npm i -g --registry=https://registry.npmmirror.com stylelint # https://stylelint.io/
npm i -g --registry=https://registry.npmmirror.com ts-node # https://typestrong.org/ts-node/
npm i -g --registry=https://registry.npmmirror.com typescript # https://www.typescriptlang.org/
npm i -g --registry=https://registry.npmmirror.com yarn # https://classic.yarnpkg.com/
```

- 补充一些东西在 `~/.zshrc` 末尾。

```shell
# nvm
export NVM_DIR="$HOME/.nvm"
# export NVM_NODEJS_ORG_MIRROR=hhttps://npmmirror.com/mirrors/node # use taobao mirror origin
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# android
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools

# openjdk
export PATH=/usr/local/opt/openjdk/bin:$PATH

# homebrew
export PATH=/usr/local/sbin:$PATH

# v2ray
export https_proxy=http://127.0.0.1:7890
export http_proxy=http://127.0.0.1:7890
export all_proxy=socks5://127.0.0.1:7890

# qspace
# alias qs='open -a QSpace'
alias qs='open -a QSpace\ Pro'

```

- 一些建议的在线网页。
  - [DeepL](https://www.deepl.com/translator) - 翻译
  - [阿里云盘](https://www.aliyundrive.com/)
  - [爱思助手](https://www.i4.cn/) - ios 助手
  - [城通网盘](https://www.ctfile.com/)
  - [滴答清单](https://dida365.com/) - 高效完成任务和规划时间
  - [稿定设计图片编辑器](https://www.uupoop.com/)
  - [片库](https://www.pianku.li/)
  - [在线工具](https://tool.lu/)
  - [程序员工具](https://tool.p2hp.com/)
- 一些可以考虑的应用。
  - [360 极速浏览器](https://browser.360.cn/ee/mac/index.html) - 支持 flash
  - [360zip](https://yasuo.360.cn/)
  - Adobe After Effects - 专业视频处理
  - Adobe Photoshop - 专业图片处理
  - Affinity Photo - 专业图片处理
  - [AIXcoder](https://aixcoder.com/) - 代码自动补全工具
  - [AltStore](https://altstore.io/) - 直接安装 ipa
  - [Apifox](https://www.apifox.cn/) - 类 Postman 工具
  - [ApiPost](https://www.apipost.cn/) - 类 Postman 工具
  - Axure RP - 原型图
  - [BitComet](https://www.bitcomet.com/cn)
  - [Bob](https://github.com/ripperhe/Bob) - 翻译工具
  - [cFosSpeed](https://www.cfos.de/zh-cn/cfosspeed/cfosspeed.htm) - 网络加速工具
  - Charles - 抓包
  - [Commander One](https://mac.eltima.com/file-manager.html)
  - [Davinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve/) - 专业视频处理
  - [DBeaver](https://dbeaver.io/) - 数据库工具
  - Fiddler - 抓包
  - [Figma](https://www.figma.com/) - 设计工具
  - [FileZilla](https://filezilla-project.org/) - ftp 连接
  - [Firefox](https://www.mozilla.org/en-US/firefox/browsers/) - 浏览器
  - [GeoGebra](https://www.geogebra.org/) - 数学工具
  - [Google Chrome](https://www.google.cn/chrome/index.html) - 浏览器
  - [HBuilderX](https://www.dcloud.io/hbuilderx.html) - uni-app 和 uni-cloud 开发工具
  - [keka](https://www.keka.io/) - 压缩工具
  - [Kite](https://www.kite.com/) - 代码自动补全工具
  - [Macwk Updater](https://macwk.com/soft/macwk-updater) - 检查更新
  - [MacZip](https://ezip.awehunt.com/) - 压缩工具
  - [Neat Download Manager](https://www.neatdownloadmanager.com/)
  - [QSpace](https://qspace.awehunt.com/zh-cn/index.html) - 多视图文件管理器，需付费
  - [RustDesk](https://rustdesk.com/zh/) - 远程桌面
  - Sketch - 设计稿
  - [Table Plus](https://tableplus.com/) - 数据库工具
  - [TabNine](https://www.tabnine.com/) - 代码自动补全工具
  - [TeamViewer](https://www.teamviewer.cn/cn/products/teamviewer/) - 远程桌面
  - [WPS](https://platform.wps.cn/) - brew 安装的是国际版，支持 doc/docx/xls/xlsx/ppt/pptx/pdf 等多种格式和思维导图，完全满足程序员日常需求
  - [XCode](https://developer.apple.com/xcode/) - 苹果应用开发
  - [zy-player](http://zyplayer.fun/) - 播放网络媒体
  - [彩虹工具箱](https://rainbowbyte.com/app/rainbowtoolbox.html) - 小工具箱
  - [钉钉](https://www.dingtalk.com/)
  - [飞书](https://www.feishu.cn/)
  - [剪映专业版](https://lv.ulikecam.com/) - 视频处理
  - [看图](https://kantu.qq.com/)
  - [企业微信](https://work.weixin.qq.com/)
  - [腾讯会议](https://meeting.tencent.com/)
  - [腾讯文档](https://docs.qq.com/)
  - [网易 Mumu](http://mumu.163.com/) - 安卓模拟器
  - [向日葵](https://sunlogin.oray.com/) - 远程桌面
  - [洋芋田图像工具箱](https://imagetoolkit.potatofield.cn/) - 图像处理
  - [语雀](https://www.yuque.com/) - 知识库工具

## Windows 补充说明

Windows 和 macOS 生态不同，有几个重要的地方需要注意。

- 终端和 `shell`：Windows 上建议使用 [Windows Terminal](https://www.microsoft.com/zh-cn/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab) 作为终端，`Git Bash` 作为 `shell`，[定制参考 1](https://sspai.com/post/62167)，[定制参考 2](https://sspai.com/post/63814)。
- 包管理器：macOS 上使用 Homebrew 作为包管理器，而 Windows 上推荐使用 [Chocolaty](https://chocolatey.org/) 作为包管理器。
- `nvm`：Windows 上需要使用 [nvm-windows](https://github.com/coreybutler/nvm-windows#readme) 管理 node 版本，而且命令上有一些区别。
- 其它：上面的应用在 Windows 上可能有更好的选择，比如 iina 可以换成 [PotPlayer](http://potplayer.daum.net/?lang=zh_CN)，网易 Mumu 可以换成 [雷电模拟器](https://www.ldmnq.com/)，Tencent Lemon 可以换成 [腾讯电脑管家](https://guanjia.qq.com/)，[万彩办公大师](http://www.wofficebox.com/) 可以处理大量的文档等。

## vscode

### 插件

配置可以通过 Github 账号同步，你也可以使用 [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)。

- [any-rule](https://marketplace.visualstudio.com/items?itemName=russell.any-rule) - 常用正则集合
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) - 自动闭合标签
- [Auto NPX](https://marketplace.visualstudio.com/items?itemName=antfu.auto-npx) - vscode 终端自动解析本地 node 命令
- [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2) - 匹配括号颜色
- [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) - 运行代码，跑 ts 需要全局安装 ts-node
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - 检查拼写，减少写代码时潜在的错误
- [CodeMod](https://marketplace.visualstudio.com/items?itemName=iceworks-team.iceworks-codemod) - 协助重构大规模代码库
- [Component Helper](https://marketplace.visualstudio.com/items?itemName=iceworks-team.iceworks-material-helper) - 在 JSX 中更快更好地添加组件、编写组件属性、查找组件文档
- [CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek) - 查找 html 文件中的 css id 和 class，并将其作为 css 的定义，可以跳转
- [docs-yaml](https://marketplace.visualstudio.com/items?itemName=docsmsft.docs-yaml)
- [Doctor](https://marketplace.visualstudio.com/items?itemName=iceworks-team.iceworks-doctor) - 安全和质量审核工具
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - 支持 .env 文件
- [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) - 在 js/ts 中支持 es7 语法下的 react，redux，graphql 和 rn
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 支持 eslint
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) - 增强 git 功能
- [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory) - 增强 git 功能
- [Github Theme](https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - 增强 git 功能
- [Go](https://marketplace.visualstudio.com/items?itemName=golang.Go) - 支持 go
- [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind) - 为 tailwindcss 类名排序
- [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag) - 高亮选中的标签及其匹配标签
- [i18n Ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) - 国际化支持
- [Image preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview) - 预览图片
- [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) - 缩进用彩虹色分级显示
- [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets) - es6+ 语法的 js 代码段
- [JavaScript and TypeScript Nightly](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next) - 支持 typescript@next
- [Less IntelliSense](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-less) - 支持 less
- [Live Share Extension Pack](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack) - 实时协作
- [Lorem ipsum](https://marketplace.visualstudio.com/items?itemName=Tyriar.lorem-ipsum) - 生成并插入乱数假文
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) - 增强 Markdown 功能，包括键盘快捷键，目录等
- [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) - 增强 Markdown 预览
- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) - 校验 Markdown 语法
- [Midway Serverless 研发助手](https://marketplace.visualstudio.com/items?itemName=alibaba-nodejs.midway-vscode-plugin) - midway 支持
- [NestJS Files](https://marketplace.visualstudio.com/items?itemName=AbhijoyBasak.nestjs-files) - 快速创建 nestjs 文件
- [Office Viewer](https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-office) - 支持在 vscode 中直接查看大量格式
- [Partial Diff](https://marketplace.visualstudio.com/items?itemName=ryu1kn.partial-diff) - 比较文本
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 支持 prettier
- [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance) - pylance 支持
- [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) - python 支持
- [Quokka.js](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode) - 快速测试 js 和 ts
- [React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native) - 针对 React Native 的调试和集成命令
- [React Refactor](https://marketplace.visualstudio.com/items?itemName=iceworks-team.iceworks-refactor) - 帮助重构代码
- [React Style Helper](https://marketplace.visualstudio.com/items?itemName=iceworks-team.iceworks-style-helper) - 在 JSX 中更快速地编写内联样式，并辅助开发 CSS、LESS、SASS 等样式文件
- [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented) - sass 工具，支持突出显示，自动完成和格式化
- [SCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss) - 支持 scss 智能提示
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - 支持 stylelint
- [stylus](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus) - 支持 stylus
- [SVG](https://marketplace.visualstudio.com/items?itemName=jock.svg) - SVG 编码，压缩，美化，预览多合一
- [Time Master](https://marketplace.visualstudio.com/items?itemName=iceworks-team.iceworks-time-master) - 通过自动跟踪编码活动从而度量编码效率
- [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) - 高亮提示特定文本
- [Trailing Spaces](https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces) - 处理尾部多余空格
- [Umi Pro](https://marketplace.visualstudio.com/items?itemName=DiamondYuan.umi-pro) - umi 支持
- [uni-app-schemas](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-helper) - 校验 uni-app pages.json 和 manifest.json 格式
- [uni-app-snippets](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-app-snippets) - uni-app 基本能力的代码片段，包括组件和 API
- [uni-cloud-snippets](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-cloud-snippets) - uni-cloud 基本能力的代码片段，包括组件和 API
- [uni-ui-snippets](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-ui-snippets) - uni-ui 组件代码片段
- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - vue 2 + vue 3 支持
- [Vscode Nestjs Snippets](https://marketplace.visualstudio.com/items?itemName=ashinzekene.nestjs) - nestjs 代码片段
- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons) - 图标主题，也可以考虑 [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)，[Material Theme Icons](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme-icons)
- [Vue Peek](https://marketplace.visualstudio.com/items?itemName=dariofuzinato.vue-peek) - 允许对 vue 单文件组件 peek 和 goto definition
- [WindiCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - 增强 windicss 和 tailwindcss 体验
- [YAML](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml) - 支持 yaml

### settings.json

```json
{
  // 插件 Auto Close Tag 使用，指定插件在什么语言时激活
  "auto-close-tag.activationOnLanguage": [
    "html",
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "markdown",
    "vue"
  ],
  // 插件 Code Spell Checker 使用，指定字典，使得编辑文件时减少额外的拼写错误负担
  "cSpell.userWords": [],
  // 插件 Code Spell Checker 使用，指定要检查的文件
  "cSpell.enabledLanguageIds": [
    "css",
    "git-commit",
    "graphql",
    "html",
    "javascript",
    "javascriptreact",
    "json",
    "jsonc",
    "json5",
    "less",
    "markdown",
    "plaintext",
    "scss",
    "text",
    "typescript",
    "typescriptreact",
    "vue",
    "yaml",
    "yml"
  ],
  // vscode 自带功能，指定是否校验 css，这里设置为否，配合插件 stylelint 使用
  "css.validate": false,
  // vscode 自带功能，控制编辑区默认使用的格式化工具，这里设置为 prettier，需要安装插件 prettier
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // vscode 自带功能，控制输入时是否自动弹出建议
  "editor.quickSuggestions": {
    "strings": true
  },
  // vscode 自带功能，控制是否渲染垂直标尺
  "editor.rulers": [{ "column": 100 }],
  // vscode 自带功能，显示建议列表时如何预选建议，这里设置为预选第一条
  "editor.suggestSelection": "first",
  // vscode 自带功能，控制编辑区 1 个 tab 等于多少个空格，这里设置为 2 个
  "editor.tabSize": 2,
  // vscode 自带功能，控制编辑区行太长时是否自动换行，这里设置为是
  "editor.wordWrap": "on",
  // vscode 自带功能，emmet 辅助编写代码
  "emmet.includeLanguages": {
    "json": "jsonc",
    "vue-html": "html"
  },
  // 插件 ESLint 使用，指定需要 ESLint 校验的语言
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact", "vue"],
  // 插件 ESLint 使用，指定是否一直显示状态，这是设置为是
  "eslint.alwaysShowStatus": true,
  // vscode 自带功能，设置文件换行，这里设置为 \n 即 LF
  "files.eol": "\n",
  // vscode 自带功能，指定特定后缀的文件的解析器，这里添加四种小程序，wepy，uni-app 的支持，另外把 json、json5 文件视为 jsonc 文件
  "files.associations": {
    "*.wxml": "html",
    "*.wxs": "javascript",
    "*.wxss": "css",
    "*.axml": "html",
    "*.sjs": "javascript",
    "*.acss": "css",
    "*.swan": "html",
    "*.ttml": "html",
    "*.ttss": "css",
    "*.jxml": "html",
    "*.jxss": "css",
    "*.wpy": "vue",
    "*.json": "jsonc",
    "*.json5": "jsonc",
    "*.nvue": "vue",
    "*.ux": "vue"
  },
  // vscode 自带功能，指定是否允许使用修饰器，这里设置为是
  "js/ts.implicitProjectConfig.experimentalDecorators": true,
  // vscode 自带功能，指定 js 文件移动时是否自动更新引入，这里设置为是
  "javascript.updateImportsOnFileMove.enabled": "always",
  // vscode 自带功能，指定是否校验 less，这里设置为否
  "less.validate": false,
  // vscode 自带功能，指定是否校验 scss，这里设置为否
  "scss.validate": false,
  // 插件 stylelint 使用，指定需要提示的文件
  "stylelint.snippet": ["css", "less", "scss", "vue"],
  // 插件 stylelint 使用，指定需要校验的文件
  "stylelint.validate": ["css", "less", "scss", "vue"],
  // 插件 Todo Tree 使用，指定是否开启高亮，这里设置为是
  "todo-tree.highlights.enabled": true,
  // 插件 Todo Tree 使用，指定特定高亮格式
  "todo-tree.highlights.customHighlight": {
    "FIX": {
      "background": "#d32029",
      "foreground": "#fff",
      "icon": "bug",
      "iconColour": "#d32029"
    },
    "PERF": {
      "background": "#2b4acb",
      "foreground": "#fff",
      "icon": "flame",
      "iconColour": "#2b4acb"
    },
    "TODO": {
      "background": "#d89614",
      "foreground": "#fff",
      "icon": "alert",
      "iconColour": "#d89614"
    }
  },
  // 插件 Todo Tree 使用，指定通用高亮格式
  "todo-tree.highlights.defaultHighlight": {
    "gutterIcon": true
  },
  // 插件 Todo Tree 使用，指定匹配的文本
  "todo-tree.general.tags": ["FIX", "PERF", "TODO", "[ ]", "[x]"],
  // 插件 Todo Tree 使用，指定匹配的正则表达式
  "todo-tree.regex.regex": "(//|#|<!--|;|/\\*|^|^\\s*(-|\\d+.))\\s*($TAGS)",
  // vscode 自带功能，指定 ts 文件移动时是否自动更新引入，这里设置为是
  "typescript.updateImportsOnFileMove.enabled": "always",
  // 插件 Office Viewer 使用，指定 markdown 预览模式，这里指定为 vditor
  "vscode-office.markdownType": "vditor",
  // vscode 自带功能，指定颜色主题
  "workbench.colorTheme": "GitHub Dark Default",
  // vscode 自带功能，指定 md 文件的预览模式，这里指定为默认，抹除 Office Viewer 的影响
  "workbench.editorAssociations": {
    "*.md": "default"
  },
  // vscode 自带功能，指定图标主题，这里设置为 Material Icon Theme，需要安装对应的插件
  "workbench.iconTheme": "vscode-icons",
  // vscode 自带功能，控制编辑区在保存文件时的行为
  "[html]": {
    "editor.formatOnSave": true
  },
  "[javascript]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[javascriptreact]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[typescript]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[typescriptreact]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[css]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": true
    }
  },
  "[less]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": true
    }
  },
  "[scss]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": true
    }
  },
  "[vue]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.fixAll.stylelint": true
    }
  },
  "[json]": {
    "editor.formatOnSave": true
  },
  "[jsonc]": {
    "editor.formatOnSave": true
  },
  "[markdown]": {
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.fixAll.markdownlint": true
    }
  },
  "[yaml]": {
    "editor.formatOnSave": true
  }
}
```

## hbuilderx

构建使用 `uni-app` 开发的 app，用于调试运行、下载发布，其他情况使用 vscode。

点击左上角 HBuilderX => 偏好设置 => 源码视图，可以自定义配置。下面是我自己的自定义配置。`node` 和 `npm` 路径不正确会导致一直编译中。

```json
{
  "editor.colorScheme": "Atom One Dark",
  "editor.insertSpaces": true,
  "editor.tabSize": 2,
  "editor.wordWrap": true,
  "eslint-js.validateOnDocumentChanged": true,
  "eslint-vue.validateOnDocumentChanged": true,
  "node.path": "/Users/wurui/.nvm/versions/node/v16.13.0/bin/node",
  "npm.path": "/Users/wurui/.nvm/versions/node/v16.13.0/bin/npm"
}
```

看起来数字天堂团队并没有完善的项目开发流程，导致某些时候 vue-cli 创建的项目依赖版本和 HBuilderX 的依赖版本不一致。

- 回退版本
- 查看 HBuilderX -> plugins -> uniapp-cli 的依赖版本

另外，他们也尝试做自己的生态，比如 `nvue` 和 `uni_modules`，这些都有着不少的坑。如果不是为了跨端，没有必要使用 `uni-app`。如果是为了跨端，也可以尝试优秀的 React 系框架，如 `taro`，`remax`，`rax`，`expo`。

## 参考

- [Awesome-Windows/Awesome](https://github.com/Awesome-Windows/Awesome/blob/master/README-cn.md)
- [jaywcjlove/awesome-mac](https://wangchujiang.com/awesome-mac/index.zh.html)
- [sorrycc/awesome-tools](https://github.com/sorrycc/awesome-tools)
- [VSCode Documents](https://code.visualstudio.com/docs)
- [生产力工具学习路径指南](https://tool.kaopubear.top/)
- [绝妙的个人生产力](https://github.com/eastlakeside/awesome-productivity-cn)
