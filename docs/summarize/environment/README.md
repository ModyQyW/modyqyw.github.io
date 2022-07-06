# 环境配置

所有配置仅供参考，且尽可能使用统一的包管理器安装。以下给出在 macOS (intel) 上的应用和配置参考，并补充说明 Windows 的思路。

安装系统可以考虑 [FirPE](https://firpe.cn/)、[WinPE](https://www.wepe.com.cn/) 和 [Ventoy](https://www.ventoy.net/)。

![just pirate it](./just-pirate-it.png)

## DNS

国内优先选择国内的 DNS 解析服务，相对较快。

- [阿里](http://alidns.com/) - `223.5.5.5`，`223.6.6.6`，`2400:3200::1`，`2400:3200:baba::1`
- [百度](https://dudns.baidu.com/) - `180.76.76.76`，`2400:da00::6666`
- [腾讯 DNSPod](https://www.dnspod.cn/Products/Public.DNS) - `119.29.29.29`，`2402:4e00::`
- [114](https://www.114dns.com/) - `114.114.114.114`，`114.114.115.115`

国外的 DNS 解析服务相对较慢，但有时有奇效，酌情使用。

- [Cloudflare DNS](https://developers.cloudflare.com/1.1.1.1/) - `1.1.1.1`，`1.0.0.1`，`2606:4700:4700::1111`，`2606:4700:4700::1001`
- [Google DNS](https://developers.google.cn/speed/public-dns/docs/using?hl=zh-CN) - `8.8.8.8`，`8.8.4.4`，`2001:4860:4860::8888`，`2001:4860:4860::8844`

## 浏览器

推荐使用 [Chrome](https://www.google.com/intl/en_us/chrome/) 或者 [Edge](https://www.microsoft.com/en-us/edge)。

[360 极速浏览器](https://browser.360.cn/ee/) 自带 flash 支持。

测试可能还需要 [Firefox](https://www.mozilla.org/en-US/firefox/)、[Safari](https://www.apple.com/safari/)。

## 浏览器插件

- [AdGuard](https://adguard.com/zh_cn/adguard-browser-extension/overview.html) - 广告屏蔽
- [BitWarden](https://bitwarden.com/) - 密码管理
- [Dark Reader](https://darkreader.org/) - 暗黑模式
- [Gitako](https://github.com/EnixCoda/Gitako) - 便捷查看 Github
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - 网页性能测试
- [React Developer Tools](https://github.com/facebook/react/tree/main/packages/react-devtools) - react 浏览器调试工具
- [Sync Sofa](https://github.com/LouisYLWang/Sync-Sofa) - 同步看剧
- [Tampermonkey](https://www.tampermonkey.net/) - 插件工具
- [Vue.js devtools](https://devtools.vuejs.org/) - vue 浏览器调试工具
- [Wappalyzer](https://www.wappalyzer.com/) - 网页依赖分析
- [Window Resizer](https://coolx10.com/window-resizer/) - 便捷调整网页视窗
- [哔哩哔哩助手](https://bilibilihelper.com/)

## macOS (intel) Homebrew 为主官网为辅管理应用

使用 [Homebrew](https://brew.sh/) 统一安装和更新大量软件非常方便。但是软件版本往往会有一些滞后，加之现在软件往往都有自动更新，不再推荐使用 Homebrew 来安装和更新软件。

- 在触控板上四指捏合，或者点击底部 `程序坞` 里面的 `启动台`，然后打开 `终端`。

- 点击左上角的 `终端` -> 偏好设置 -> 描述文件，可以选择你想要的基本效果。我这里选择了 `Pro`。

- 安装 [Homebrew](https://brew.sh/) 并链接不同的软件源。

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

- 切换默认的 `shell` 到 `zsh`（[终端和 shell 的区别](https://www.ihewro.com/archives/933/)）。切换好之后可能需要重启一下。

```shell
sudo chsh -s /bin/zsh
```

- 安装 [oh-my-zsh](https://ohmyz.sh/)。

```shell
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

- 安装 `oh-my-zsh` 的插件 [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting) 和 [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)。

```shell
sudo chown -R $USER:$USER ~/.oh-my-zsh
# sudo chown -R 755 ~/.oh-my-zsh
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
plugins=(git vscode web-search z zsh-syntax-highlighting zsh-autosuggestions)

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

- 安装 `node` 相关。

```shell
# nvm https://github.com/nvm-sh/nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
# nvs https://github.com/jasongin/nvs
# fnm https://github.com/Schniz/fnm
export NVM_NODEJS_ORG_MIRROR=https://nodejs.org/dist # use default origin
# export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node # use china mirror
# install node
nvm install --lts
# set default
nvm alias default node
# use lts
nvm use --lts
# install global deps, --legacy-peer-deps is required if using npm@7 or above
npm uninstall --location=global corepack
npm i --location=global --registry=https://registry.npmmirror.com @nestjs/cli # https://docs.nestjs.com/cli/overview
npm i --location=global --registry=https://registry.npmmirror.com @tarojs/cli # https://docs.taro.zone/
npm i --location=global --registry=https://registry.npmmirror.com @types/node
npm i --location=global --registry=https://registry.npmmirror.com cnpm # https://github.com/cnpm/cnpm
npm i --location=global --registry=https://registry.npmmirror.com eslint # https://eslint.org/
npm i --location=global --registry=https://registry.npmmirror.com nodemon # https://nodemon.io/
npm i --location=global --registry=https://registry.npmmirror.com npm-check-updates # https://github.com/raineorshine/npm-check-updates
npm i --location=global --registry=https://registry.npmmirror.com nrm # https://github.com/Pana/nrm
npm i --location=global --registry=https://registry.npmmirror.com pm2 # https://pm2.keymetrics.io/
npm i --location=global --registry=https://registry.npmmirror.com pnpm # https://pnpm.io/
npm i --location=global --registry=https://registry.npmmirror.com prettier # https://prettier.io/
npm i --location=global --registry=https://registry.npmmirror.com release-it # https://github.com/release-it/release-it
npm i --location=global --registry=https://registry.npmmirror.com serve # https://github.com/vercel/serve
npm i --location=global --registry=https://registry.npmmirror.com sort-package-json # https://github.com/keithamus/sort-package-json
npm i --location=global --registry=https://registry.npmmirror.com stylelint # https://stylelint.io/
npm i --location=global --registry=https://registry.npmmirror.com tsx # https://github.com/esbuild-kit/tsx
npm i --location=global --registry=https://registry.npmmirror.com typescript # https://www.typescriptlang.org/
npm i --location=global --registry=https://registry.npmmirror.com yarn # https://classic.yarnpkg.com/
```

建议在 `~/.npmrc` 添加以下内容。

```shell
legacy-peer-deps=true
shamefully-hoist=true
registry=https://registry.npmjs.com/

```

然后在不需要发布到 `npm` 的仓库里添加 `.npmrc`，内容如下。

```shell
legacy-peer-deps=true
shamefully-hoist=true
registry=https://registry.npmmirror.com
```

- 开始疯狂用 `homebrew` 安装和配置。

```shell
# 驱动
brew tap homebrew/cask-drivers # https://github.com/Homebrew/homebrew-cask-drivers
# 字体
brew tap homebrew/cask-fonts # https://github.com/Homebrew/homebrew-cask-fonts
brew install --cask font-ubuntu-mono # https://design.ubuntu.com/font/
# 不同版本的应用
brew tap homebrew/cask-versions # https://github.com/Homebrew/homebrew-cask-versions

# 阿里云盘，可替代百度网盘，自建网盘参考 seafile，owncloud 和 nextcloud
brew install --cask adrive
# android studio，开发 Android 用
brew install --cask android-studio # https://developer.android.com/studio/
# baidu netdisk，百度网盘，自建网盘参考 seafile，owncloud 和 nextcloud
brew install --cask baidunetdisk # https://pan.baidu.com/download
# bitwarden，管理密码
brew install --cask bitwarden # https://bitwarden.com/
# cheatsheet，长按 Command 键显示当前应用的快捷键
brew install --cask cheatsheet # https://www.cheatsheetapp.com/CheatSheet/
# clashx 客户端
# 机场测试和简介 https://www.duyaoss.com/archives/3/
# 海豚湾 https://cdn99.manage.hitun.io/auth/register?affid=217911
# holytech https://store.holytech.tech/aff.php?aff=2849
# 520ssr https://www.520ssr.co/auth/register?code=oiwx
# iplc.vip https://portal.uuks.club/clientarea.php
# https://github.com/freefq/free
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
# gradle
brew install gradle
# iina，音视频播放器
brew install --cask iina # https://iina.io/
# itsycal，日历工具，可以将 macOS 的时间调成 HH:mm:ss 形式，将 itsycal 调成 YYYY-MM-DD 形式
brew install --cask itsycal # https://www.mowglii.com/itsycal/
# lx-music，洛雪音乐助手
brew install --cask lx-music # https://github.com/lyswhut/lx-music-desktop/
# maczip，压缩解压缩工具
brew install --cask maczip
# microsoft-edge，浏览器
brew install --cask microsoft-edge # https://www.microsoft.com/edge
# mini-program-studio，阿里系小程序开发者工具
brew install --cask mini-program-studio # https://opendocs.alipay.com/mini/ide
# mongodb，文档型数据库
brew tap mongodb/brew # https://github.com/mongodb/homebrew-brew
brew install mongodb-community
brew install --cask mongodb-compass # mongodb official gui
brew services start mongodb/brew/mongodb-community # start when launched
# motrix，下载工具
brew install --cask motrix # https://motrix.app/
# mounty，重新挂载受写保护的 NTFS 卷
brew install --cask mounty # https://mounty.app/
# obs，录屏工具
brew install --cask obs # https://obsproject.com/
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
# c0re100-qbittorrent，下载工具
# tracker 服务器 https://github.com/XIU2/TrackersListCollection
# tracker 服务器 https://github.com/ngosang/trackerslist
# https://mp.weixin.qq.com/s/YHbqfnXdhju6CXA4epNkVQ
brew install --cask c0re100-qbittorrent
# 也可以安装原版 qbittorrent
# brew install --cask qbittorrent
# qq
brew install --cask qq # https://im.qq.com/macqq/
# rectangle，快速移动、调整窗口大小
brew install --cask rectangle # https://rectangleapp.com/
# snipaste，屏幕截图
brew install --cask snipaste # https://www.snipaste.com/
# subversion，代码版本管理
brew install svn # https://subversion.apache.org/
# tencent-docs，腾讯文档
brew install --cask tencent-docs # https://docs.qq.com/
# tencent-lemon，腾讯柠檬，系统清理和状态工具
brew install --cask tencent-lemon # https://lemon.qq.com/
# tencent-meeting，腾讯会议
brew install --cask tencent-meeting # https://meeting.tencent.com/
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
# wechatwork
brew install --cask wechatwork # https://work.weixin.qq.com/
# wps，支持 doc/docx/xls/xlsx/ppt/pptx/pdf 等多种格式和思维导图，完全满足程序员日常需求
brew install --cask wpsoffice-cn # https://mac.wps.cn/
# you-get，下载网络媒体资源
brew install you-get # https://you-get.org/
# youtube-dl，下载网络媒体资源
brew install youtube-dl
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

# qspace
# alias qs='open -a QSpace'
alias qs='open -a QSpace\ Pro'

```

- 一些额外推荐的东西。
  - [awesome-mac](https://github.com/jaywcjlove/awesome-mac/blob/master/README-zh.md)
  - [360 极速浏览器](https://browser.360.cn/ee/mac/index.html) - 支持 flash
  - [360zip](https://yasuo.360.cn/)
  - Adobe After Effects - 专业视频处理
  - Adobe Photoshop - 专业图片处理
  - Affinity Photo - 专业图片处理
  - [AltStore](https://altstore.io/) - 直接安装 ipa
  - [Apifox](https://www.apifox.cn/) - 类 Postman 工具
  - [ApiPost](https://www.apipost.cn/) - 类 Postman 工具
  - Axure RP - 原型图
  - [BitComet](https://www.bitcomet.com/cn)
  - [Bob](https://github.com/ripperhe/Bob) - 翻译工具
  - [cFosSpeed](https://www.cfos.de/zh-cn/cfosspeed/cfosspeed.htm) - 网络加速工具
  - Charles - 抓包
  - [Commander One](https://mac.eltima.com/file-manager.html)
  - [convertio](https://convertio.co/) - 在线格式转换
  - [Davinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve/) - 专业视频处理
  - [DBeaver](https://dbeaver.io/) - 数据库工具
  - [DeepL](https://www.deepl.com/translator) - 翻译
  - Fiddler - 抓包
  - [Figma](https://www.figma.com/) - 设计工具
  - [FileZilla](https://filezilla-project.org/) - ftp 连接
  - [Firefox](https://www.mozilla.org/en-US/firefox/browsers/) - 浏览器
  - [GeoGebra](https://www.geogebra.org/) - 数学工具
  - [Gitee](https://gitee.com/) - DevOps 平台
  - [Gitlab](https://about.gitlab.com/) - DevOps 平台
  - [Google Chrome](https://www.google.cn/chrome/index.html) - 浏览器
  - [handbrake](https://handbrake.fr/) - 格式转换
  - [HBuilderX](https://www.dcloud.io/hbuilderx.html) - uni-app 和 uni-cloud 开发工具
  - [hoppscotch](https://hoppscotch.io/) - 在线类 postman 工具
  - [keka](https://www.keka.io/) - 压缩解压缩工具
  - [krita](https://krita.org/) - 专业图片处理
  - [Light Proxy](https://lightproxy.org/) - 跨平台 Web 代理调试工具
  - [Macwk Updater](https://macwk.com/soft/macwk-updater) - 检查更新
  - [MacZip](https://ezip.awehunt.com/) - 压缩工具
  - [Neat Download Manager](https://www.neatdownloadmanager.com/) - 下载工具
  - [OpenBoard](https://openboard.ch/) - 白板工具
  - [OpenEmu](https://openemu.org/)
  - [pdf 补丁丁](https://github.com/wmjordan/PDFPatcher)
  - [QSpace](https://qspace.awehunt.com/zh-cn/index.html) - 多视图文件管理器
  - [responsively](https://responsively.app/) - 响应式开发
  - [RustDesk](https://rustdesk.com/zh/) - 远程桌面
  - Sketch - 设计稿
  - [sourcetree](sourcetree) - git gui
  - [squoosh](https://squoosh.app/) - 在线图片压缩
  - [sublime text](https://www.sublimetext.com/) - 编辑工具
  - [Table Plus](https://tableplus.com/) - 数据库工具
  - [TeamViewer](https://www.teamviewer.cn/cn/products/teamviewer/) - 远程桌面
  - [tinypng](https://tinypng.com/) - 在线图片压缩
  - [ToDesk](https://www.todesk.com/) - 远程桌面
  - [XCode](https://developer.apple.com/xcode/) - 苹果应用开发
  - [zy-player](http://zyplayer.fun/) - 播放网络媒体
  - [爱思助手](https://www.i4.cn/) - ios 助手
  - [彩虹工具箱](https://rainbowbyte.com/app/rainbowtoolbox.html) - 小工具箱
  - [城通网盘](https://www.ctfile.com/)
  - [程序员工具](https://tool.p2hp.com/)
  - [滴答清单](https://dida365.com/) - 高效完成任务和规划时间
  - [钉钉](https://www.dingtalk.com/)
  - [飞书](https://www.feishu.cn/)
  - [改图鸭](https://www.gaituya.com/) - 图片处理
  - [稿定设计图片编辑器](https://www.uupoop.com/)
  - [极狐 Gitlab](https://gitlab.cn/) - DevOps 平台
  - [即时设计](https://js.design/)
  - [剪映专业版](https://lv.ulikecam.com/) - 视频处理
  - [看图](https://kantu.qq.com/)
  - [蓝湖](https://lanhuapp.com/)
  - [片库](https://www.btnull.org)
  - [万彩信息](https://www.wancaiinfo.com/)
  - [网易 Mumu](http://mumu.163.com/) - 安卓模拟器
  - [向日葵](https://sunlogin.oray.com/) - 远程桌面
  - [洋芋田图像工具箱](https://imagetoolkit.potatofield.cn/) - 图像处理
  - [在线工具](https://tool.lu/)

[Github 仓库同步到 Gitee](https://mp.weixin.qq.com/s/E6G_plczOeCNLDMWCAQKog)

## Windows 补充说明

Windows 和 macOS 生态不同，有几个重要的地方需要注意。

- 终端和 `shell`：Windows 上建议使用 [Windows Terminal](https://www.microsoft.com/zh-cn/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab) 作为终端，`Git Bash` 作为 `shell`，[定制参考 1](https://sspai.com/post/62167)，[定制参考 2](https://sspai.com/post/63814)。
- 包管理器：macOS 上使用 Homebrew 作为包管理器，而 Windows 上推荐使用 [Chocolaty](https://chocolatey.org/) 作为包管理器。
- `nvm`：Windows 上需要使用 [nvm-windows](https://github.com/coreybutler/nvm-windows#readme) 管理 node 版本，而且命令上有一些区别。
- 其它：上面的应用在 Windows 上可能有更好的选择，比如 iina 可以换成 [PotPlayer](http://potplayer.daum.net/?lang=zh_CN)，网易 Mumu 可以换成 [雷电模拟器](https://www.ldmnq.com/)，Tencent Lemon 可以换成 [腾讯电脑管家](https://guanjia.qq.com/)，[万彩办公大师](http://www.wofficebox.com/) 可以处理大量的文档等。

## vscode

### 插件

配置可以通过 Github 账号同步，你也可以使用 [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)。

- [小霸王](https://marketplace.visualstudio.com/items?itemName=gamedilong.anes)
- [any-rule](https://marketplace.visualstudio.com/items?itemName=russell.any-rule) - 常用正则集合
- [Auto NPX](https://marketplace.visualstudio.com/items?itemName=antfu.auto-npx) - vscode 终端自动解析本地 node 命令
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - 检查拼写，减少写代码时潜在的错误
- [Codelf](https://marketplace.visualstudio.com/items?itemName=unbug.codelf) - 变量命名参考
- [Commit Message Editor](https://marketplace.visualstudio.com/items?itemName=adam-bender.commit-message-editor) - 可视化提交信息编辑
- [CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek) - 查找 html 文件中的 css id 和 class，并将其作为 css 的定义，可以跳转
- [Doctor](https://marketplace.visualstudio.com/items?itemName=iceworks-team.iceworks-doctor) - 安全和质量审核工具
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - 支持 .env 文件
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - 支持 .editorconfig 文件
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 支持 eslint
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) - 增强 git 功能
- [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory) - 增强 git 功能
- [Github Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) - AI 代码补全
- [Github Theme](https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme) - 样式主题
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - 增强 git 功能
- [i18n Ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) - 国际化支持
- [Image preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview) - 预览图片
- [Impost Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) - 显示导入的包体积
- [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) - 缩进用彩虹色分级显示
- [Live Share Extension Pack](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack) - 实时协作
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) - 增强 Markdown 功能，包括键盘快捷键，目录等
- [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) - 增强 Markdown 预览
- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) - 校验 Markdown 语法
- [Office Viewer](https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-office) - 支持在 vscode 中直接查看大量格式
- [Partial Diff](https://marketplace.visualstudio.com/items?itemName=ryu1kn.partial-diff) - 比较文本
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 支持 prettier
- [Quokka.js](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode) - 快速测试 js 和 ts
- [React Style Helper](https://marketplace.visualstudio.com/items?itemName=iceworks-team.iceworks-style-helper) - 在 JSX 中更快速地编写内联样式，并辅助开发 CSS、LESS、SASS 等样式文件
- [Regex Previewer](https://marketplace.visualstudio.com/items?itemName=chrmarti.regex) - 正则匹配预览
- [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented) - sass 工具，支持突出显示，自动完成和格式化
- [SCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss) - 支持 scss 智能提示
- [Sort JSON objects](https://marketplace.visualstudio.com/items?itemName=richie5um2.vscode-sort-json) - 为 JSON 里的对象排序
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - 支持 stylelint
- [SVG](https://marketplace.visualstudio.com/items?itemName=jock.svg) - SVG 编码，压缩，美化，预览多合一
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - 增强 tailwindcss 体验
- [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) - 高亮提示特定文本
- [Trailing Spaces](https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces) - 处理尾部多余空格
- [vscode-faker]](<https://marketplace.visualstudio.com/items?itemName=deerawan.vscode-faker>) - 生成假数据
- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - vue 2 + vue 3 支持
- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons) - 图标主题
- [Vue Peek](https://marketplace.visualstudio.com/items?itemName=dariofuzinato.vue-peek) - 允许对 vue 单文件组件 peek 和 goto definition
- [YAML](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml) - 支持 yaml

`uni-*` 可以考虑 [uni-helper](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-helper)。

### settings.json

```json
{
  // 插件 Code Spell Checker 使用，指定语言
  "cSpell.language": "en,en-US",
  // 插件 Code Spell Checker 使用，指定要检查的语言
  "cSpell.enabledLanguageIds": [
    "css",
    "html",
    "javascript",
    "javascriptreact",
    "json",
    "jsonc",
    "json5",
    "less",
    "markdown",
    "plaintext",
    "sass",
    "scss",
    "svelte",
    "text",
    "typescript",
    "typescriptreact",
    "vue",
    "yaml",
    "yml"
  ],
  // vscode 自带功能，不校验 css，需要和插件 stylelint 配合使用
  "css.validate": false,
  // vscode 自带功能，允许编辑区成对括号着色
  "editor.bracketPairColorization.enabled": true,
  // vscode 自带功能，编辑区默认使用 prettier 格式化，需要安装插件 prettier
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // vscode 自带功能，指定编辑区字体大小为 14
  "editor.fontSize": 14,
  // vscode 自带功能，指定编辑区字体族
  "editor.fontFamily": "'Ubuntu Mono', Menlo, Monaco, 'Courier New', monospace",
  // vscode 自带功能，保存时自动格式化
  "editor.formatOnSave": true,
  // vscode 自带功能，允许编辑区成对括号指引线着色
  "editor.guides.bracketPairs": true,
  // vscode 自带功能，允许显示行内建议
  "editor.inlineSuggest.enabled": true,
  // vscode 自带功能，编辑区 1 个 tab 等于 2 个空格
  "editor.tabSize": 2,
  // vscode 自带功能，编辑区行太长时自动换行
  "editor.wordWrap": "on",
  // 插件 ESLint 使用，指定需要 ESLint 校验的语言
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "svelte",
    "typescript",
    "typescriptreact",
    "vue"
  ],
  // 插件 ESLint 使用，一直显示状态
  "eslint.alwaysShowStatus": true,
  // vscode 自带功能，设置文件换行为 \n (LF)
  "files.eol": "\n",
  // vscode 自带功能，指定特定后缀的文件的解析器，这里添加微信小程序、支付宝小程序、百度小程序、头条小程序、wepy 和 uni-app 的支持，另外把 json、json5 文件视为 jsonc 文件
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
  // vscode 自带功能，git 自动 fetch
  "git.autofetch": true,
  // vscode 自带功能，允许使用修饰器
  "js/ts.implicitProjectConfig.experimentalDecorators": true,
  // vscode 自带功能，js 文件移动时自动更新引入
  "javascript.updateImportsOnFileMove.enabled": "always",
  // 插件 leetcode 使用，指定文件存放的文件夹
  "leetcode.workspaceFolder": "/Users/wurui/Documents/leetcode",
  // 插件 leetcode 使用，指定文件默认语言
  "leetcode.defaultLanguage": "typescript",
  // vscode 自带功能，不校验 less，需要和插件 stylelint 配合使用
  "less.validate": false,
  // vscode 自带功能，不校验 scss，需要和插件 stylelint 配合使用
  "scss.validate": false,
  // vscode 自带功能，搜索时忽略部分文件
  "search.exclude": {
    "**/dist/**": true,
    "**/out/**": true,
    "**/*lock*": true
  },
  // 插件 stylelint 使用，指定需要提示的语言
  "stylelint.snippet": ["css", "less", "sass", "scss", "vue", "svelte"],
  // 插件 stylelint 使用，指定需要校验的语言
  "stylelint.validate": ["css", "less", "sass", "scss", "vue", "svelte"],
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
    },
    "[ ]": {
      "icon": "circle"
    },
    "[x]": {
      "icon": "check"
    }
  },
  // 插件 Todo Tree 使用，指定通用高亮格式
  "todo-tree.highlights.defaultHighlight": {
    "gutterIcon": true
  },
  // 插件 Todo Tree 使用，指定标签组
  "todo-tree.general.tagGroups": {
    "FIX": ["FIXME", "FIXIT", "FIX", "BUG"]
  },
  // 插件 Todo Tree 使用，指定匹配的文本
  "todo-tree.general.tags": ["FIX", "FIXME", "FITIT", "BUG", "PERF", "TODO", "[ ]", "[x]"],
  // 插件 Todo Tree 使用，指定匹配的正则表达式
  "todo-tree.regex.regex": "(//|#|<!--|;|/\\*|^|^\\s*(-|\\d+.))\\s*($TAGS)",
  // vscode 自带功能，ts 文件移动时自动更新引入
  "typescript.updateImportsOnFileMove.enabled": "always",
  // vscode 自带功能，指定默认主题为 Github Dark Default
  "workbench.colorTheme": "GitHub Dark Default",
  // vscode 自带功能，指定 md 文件的预览模式为默认
  "workbench.editorAssociations": {
    "*.md": "default"
  },
  // vscode 自带功能，指定图标主题为 vscode-icons，需要安装插件 vscode-icons
  "workbench.iconTheme": "vscode-icons",
  // vscode 自带功能，控制编辑区在保存文件时的行为
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
  "[sass]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": true
    }
  },
  "[scss]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": true
    }
  },
  "[svelte]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.fixAll.stylelint": true
    }
  },
  "[vue]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.fixAll.stylelint": true
    }
  },
  "[markdown]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.markdownlint": true
    }
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
  "node.path": "/Users/wurui/.nvm/versions/node/v16.14.0/bin/node",
  "npm.path": "/Users/wurui/.nvm/versions/node/v16.14.0/bin/npm"
}
```

看起来数字天堂团队并没有完善的项目开发流程，导致某些时候 vue-cli 创建的项目依赖版本和 HBuilderX 的依赖版本不一致。

- 回退版本
- 查看 HBuilderX -> plugins -> uniapp-cli 的依赖版本

另外，他们也尝试做自己的生态，比如 `nvue` 和 `uni_modules`，这些都有着不少的坑。如果不是为了跨端，没有必要使用 `uni-app`。如果是为了跨端，也可以尝试优秀的 React 系框架，如 `taro`、`remax`、`rax`、`expo`，也可以考虑 [cordova](https://cordova.apache.org/)、[electron](https://www.electronjs.org/)、[ionic](https://ionicframework.com/)、[capacitor](https://capacitorjs.com/)、[native-script](https://nativescript.org/)、[flutter](https://flutter.dev/)。

## 参考

- [Awesome-Windows/Awesome](https://github.com/Awesome-Windows/Awesome/blob/master/README-cn.md)
- [jaywcjlove/awesome-mac](https://wangchujiang.com/awesome-mac/index.zh.html)
- [sorrycc/awesome-tools](https://github.com/sorrycc/awesome-tools)
- [VSCode Documents](https://code.visualstudio.com/docs)
- [生产力工具学习路径指南](https://tool.kaopubear.top/)
- [绝妙的个人生产力](https://github.com/eastlakeside/awesome-productivity-cn)
- [Mac Setup for Web Development [2022]](https://www.robinwieruch.de/mac-setup-web-development/)
