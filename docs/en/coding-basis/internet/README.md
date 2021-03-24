# Internet Basis

主要是计算机网络原理课程的内容。

## 概览

### HTTP 的发展过程

- HTTP 即 HyperText Transfer Protocol，超文本传输协议
- HTTP 始于 Tim Berners-Lee 论文，确立了三项关键技术
  - URI - Uniform Resource Identifier，统一资源标识符，互联网资源的唯一标识
  - HTML - HyperText Markup Language，超文本标记语言，描述超文本文档，目前有 HTML4 和 HTML5 规范，广义上的 HTML 通常是指 HTML、JavaScript、CSS 等前端技术的组合，能够实现比传统静态页面更丰富的动态页面
  - HTTP - 超文本传输协议，传输超文本
- HTTP/0.9 是简单的文本协议，传输数据仅限于文本，只能使用 GET 方法，响应请求后连接立即被关闭
- HTTP/1.0 不是正式标准，不具有实际约束力，但确立了大部分现在使用的技术，增加了 HEAD、POST 等新方法，增加了响应状态码，引入了协议版本号概念，引入了 header，传输数据不限于文本
- HTTP/1.1 是目前互联网上使用最广泛的协议，功能也非常完善，小幅度修正了 HTTP/1.0，是正式标准，增加了 PUT、DELETE 等新方法，增加了缓存管理和控制，允许持久连接，允许响应数据分块 chunked（利于传输大文件），强制要求 Host 头（使互联网主机托管成为可能）
- HTTP/2 基于 Google 的 SPDY 协议，注重性能改善，但还未普及，二进制协议，可发起多个请求（废弃 HTTP/1.1 内的管道），压缩头部，允许服务器主动向客户端推送数据，增强安全性（要求加密通信）
- HTTP/3 基于 Google 的 QUIC 协议，是将来的发展方向

### HTTP 概念

- HTTP 是一个协议 - 用在计算机世界中，确立了计算机之间通信的规范（包括通信方式、错误处理方式等）
- HTTP 是一个关于传输的协议 - 专门用于两点间传输数据的规范
- HTTP 是一个关于超文本传输的协议 - 传输内容包括文字、图片、音视频等超文本数据

HTTP 是一个在计算机世界中专门用于两点间传输文字、图片、音频、视频等超文本数据的规范。HTTP 不能用于广播、寻址和路由。

基于 HTTP 协议的万维网 World Wide Web 是互联网 Internet 的一个子集（平时说的上网就是指上万维网），HTTP 不是孤立的协议，HTTP 通常跑在 TCP/IP 之上，依靠 IP 协议实现寻址和路由、TCP 协议实现可靠数据传输、DNS 协议实现域名查找、SSL/TLS 协议实现安全通信。可以说，HTTP 是构建互联网的主要协议之一。

### TCP/IP

TCP 即 Transmission Control Protocol，传输控制协议，基于 IP 提供可靠的（数据不丢失）、[字节流形式](https://www.zhihu.com/question/58982783)的通信。

IP 即 Internet Protocol，互联网协议，使用 IP 地址定位接入互联网的计算机，解决了寻址和路由问题。平时我们说的 IP，实际上是指 IP 地址，而不是协议本身。

现在使用率最高的是 IP v4，由 4 个数和 3 个`.`组成，数的取值范围是 10 进制的 0-255，一共有 2^32 个 IP 地址。新的协议是 IP v6，由 8 个数和 7 个`:`组成，数的取值范围是 10 进制的 0-65535，实际上会使用 16 进制表示，即 0-FFFF，一共有 2^128 个 IP 地址。

### 四层网络模型

由底向上分别是：

- Link Layer 链接层，MAC 所在层
  - MAC 即 Media Access Control，媒体存取控制
  - MAC 地址即媒体存取控制地址，也称为局域网地址 LAN Address，以太网地址 Ethernet Address 或物理地址 Physical Address
  - MAC 地址用于在网络中唯一标示一个网卡，也就是用于确认网络设备位置的位址
- Internet Layer 网际层/网络互连层，IP 所在层
  - 定义了 IP 地址，在链接层的基础上用 IP 地址替代 MAC 地址进行通信
  - 在寻找设备时，会把 IP 地址翻译成 MAC 地址
- Transport Layer 传输层，TCP/UDP 所在层
  - todo
- Application Layer 应用层，HTTP 所在层

### 七层网络模型

### DNS

DNS 即 Domain Name System，域名系统，有时候域名又会被称为主机名 Host or Hostname，旨在用有意义的名字替代 IP 地址方便用户访问。

从域名转换成 IP 地址的过程，叫做域名解析。域名与 IP 的对应关系要到 DNS 服务器中查询。目前，全世界有 13 组根 DNS 服务器，许多顶级 DNS 服务器、权威 DNS 服务器和本地 DNS 服务器，通过这些 DNS 服务器逐层递归地查询、解析域名。

### URL

URL 即 Uniform Resource Locators，统一资源定位符，我们平时说的网址就是 URL，URL 是 URI 的子集，但一般可以认为 URL 等同于 URI。

URL 的完全格式如下所示。

`Scheme + Host + Path + Filename + Query`

实际例子：`https://www.fake.com/cn/index.html?redirect=info&detail=1`。

对应起来，模式 Scheme 就是`htpps://`，主机名 Host 就是`www.fake.com`，路径 Path 就是`/cn/`，文件名 Filename 就是`index.html`，查询 Query 就是`?redirect=info&detail=1`。

### SSL/TLS 和 HTTPS

SSL 即 安全套接层 Secure Socket Layer，由网景（网景通信公司 Netscape Communications Corporation）发明，后来改名为 TLS Transport Layer Security 传输层安全性协议。

SSL/TLS 使用了对称加密、非对称加密、摘要算法、数字签名、数字证书等技术，负责加密通信，建立在 TCP/IP 上。

HTTPS 实际上就是 HTTP + SSL/TLS，在 HTTP 的基础上增强了安全性。

### 请求方和响应方

一般地，先发起传输动作（请求）的叫做请求方，接收请求方传输的叫做响应方（又称应答方），一般请求方不会直接连接到响应方。

请求方包括有我们平时使用的浏览器，各类 app，各类小程序等等，他们会发出请求获取需要的数据，然后展示给我们。一般我们统称请求方为客户端。

一般我们统称响应方为服务器。服务器可以有两类含义：

硬件含义就是物理机器，大多数情况下它可能是一个机器的集群，其中使用了反向代理（反代）、负载均衡等技术，但这个集群在客户端看来跟单个机器没有差别。

软件含义的服务器是提供 Web 服务的应用程序，如 nginx 等，通常会运行在硬件含义的服务器上，响应客户端 HTTP 请求，处理磁盘上的静态文件，或者把请求转发给后面的业务应用，进而返回动态的信息。

### 代理 proxy

代理往往是客户端和服务器之间的一个中间人，可以转发客户端的请求，也可以转发服务器的响应。

最常见的代理是反向代理（反代），即代表服务器响应客户端的请求。还有一些其他代理，如匿名代理，透明代理，正向代理（正代）等。

在代理这个环节，我们可以做很多操作，如负载均衡（把请求均匀分散到服务器集群各个服务器），安全防护（保护被代理的机器），内容缓存（减轻服务器压力）等。

### 爬虫 crawler

爬虫是自动访问网络资源的应用程序，大多数爬虫都源于搜索引擎，搜索引擎的爬虫会抓取网页存入庞大的数据库，这样我们才能够在搜索引擎中快速地搜索到互联网角落里的页面。

爬虫会过度消耗网络资源，占用服务器和带宽，影响网站对真实数据的分析，甚至导致敏感信息泄漏，因此又出现了“反爬虫”技术，通过各种手段来限制爬虫，比较友好的反爬虫手段就是使用 robots.txt，约定哪些资源允许爬虫抓取。

## 基础

## 进阶

## 技术

### Nginx

### OpenResty

### 网络应用防火墙 WAF

### 内容分发网络 CDN

CDN 即 Content Delivery Network，内容分发网络，应用 HTTP 协议里的缓存和代理技术，代替真实服务器响应客户端的请求，通常 cdn 会缓存真实服务器的数据，使客户端请求更快地获取响应。在前端中，常常会把稳定版本的包拆分，通过 CDN 获取，加快首屏加载速度。

CDN 本身就是一种代理，通常作为透明代理和反向代理。

### WebSocket

## 调优
