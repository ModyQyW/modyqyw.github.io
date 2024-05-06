import{_ as p,M as o,p as c,q as r,R as s,t as n,N as a,V as t,a1 as l}from"./framework-7db056f4.js";const d="/assets/dns-2c60a256.png",u="/assets/github-pages-7955594a.png",v="/assets/ssl-tls-ed4321c0.png",y="/assets/server-3c57f3cf.png",D="/assets/create-cert-82537f06.png",m="/assets/create-cert-1-a112d15f.png",b="/assets/create-cert-2-ebb125df.png",h="/assets/dns-1-349e9ad8.png",g={},C=s("h1",{id:"单服务器配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#单服务器配置","aria-hidden":"true"},"#"),n(" 单服务器配置")],-1),_=s("p",null,"记录我自己的单服务器配置。",-1),F=s("h2",{id:"github-pages-自定义域名和-https",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#github-pages-自定义域名和-https","aria-hidden":"true"},"#"),n(" Github Pages 自定义域名和 HTTPS")],-1),x={href:"https://www.aliyun.com/product/list?source=5176.11533457&userCode=2ln7eli6",target:"_blank",rel:"noopener noreferrer"},w=s("code",null,"modyqyw.top",-1),f={href:"https://www.cloudflare.com/zh-cn/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"},E=s("code",null,"185.199.108.153",-1),B=s("code",null,"ping modyqyw.github.io",-1),q=s("code",null,"modyqyw/modyqyw.github.io",-1),A={href:"https://github.com/ModyQyW/modyqyw.github.io/blob/main/CNAME",target:"_blank",rel:"noopener noreferrer"},S=s("code",null,"CNAME",-1),R=s("code",null,"modyqyw.top",-1),L=l('<p><img src="'+d+'" alt="dns"></p><p>另外，还需要配置 Github Pages。</p><p><img src="'+u+'" alt="github-pages"></p><p>HTTPS 可以在 Cloudflare 里直接启用。</p><p><img src="'+v+'" alt="ssl-tls"></p><h2 id="自己的服务器使用子域名和-https" tabindex="-1"><a class="header-anchor" href="#自己的服务器使用子域名和-https" aria-hidden="true">#</a> 自己的服务器使用子域名和 HTTPS</h2>',6),z={href:"https://cloud.tencent.com/act/cps/redirect?redirect=30206&cps_key=64b3890e1990670c5c6a30b97a4243e4",target:"_blank",rel:"noopener noreferrer"},N=s("p",null,[s("s",null,"内地服务器建站需备案，不买内地服务器应该不用备案，推荐买中国香港、新加坡等非内地服务器。被这个卡了我两天，💩。最后退钱，去阿里云买新加坡服务器了。")],-1),T={href:"https://ubuntu.com/",target:"_blank",rel:"noopener noreferrer"},H={href:"https://www.centos.org/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://www.debian.org/index.zh-cn.html",target:"_blank",rel:"noopener noreferrer"},O=s("p",null,[s("img",{src:y,alt:"server"})],-1),I=s("p",null,"首先重置一下密码，不要修改默认账号。",-1),M={href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent",target:"_blank",rel:"noopener noreferrer"},U=s("code",null,"-t rsa",-1),$=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">ssh-keygen -t rsa -b 4096 -C </span><span style="color:#A5D6FF;">&quot;your_email@example.com&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#8B949E;"># 生成 RSA 密钥，注意替换邮箱，一直回车即可，默认生成在 ~/.ssh 下</span></span>
<span class="line"><span style="color:#C9D1D9;">cat </span><span style="color:#FF7B72;">~</span><span style="color:#C9D1D9;">/.ssh/id_rsa.pub </span><span style="color:#8B949E;"># 显示自己的 RSA 公钥</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在页面上一键登录，修改 ssh，避免 ssh 频繁断开。这里使用了 <code>vim</code>，<code>nano</code> 也是一个不错的选择，可以自行了解。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">sudo vim /etc/ssh/sshd_config</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改以下三行并保存。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">AuthorizedKeysFile      .ssh/authorized_keys .ssh/authorized_keys2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">ClientAliveInterval 120</span></span>
<span class="line"><span style="color:#C9D1D9;">ClientAliveCountMax 720</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后使用终端登录，把自己的 RSA 公钥添加到 <code>~/.ssh/authorized_keys</code> 和 <code>~/.ssh/authorized_keys2</code>，之后就可以免密登录了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">ssh root@[公网IP] </span><span style="color:#8B949E;"># root 是默认账号，添加完公钥之后就可以一句命令免密登录了</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>升级一下依赖。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">sudo apt update</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置 <code>ntp</code>，用于同步时间。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">sudo apt install ntp</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置 <code>curl</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">sudo apt install curl</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置 <code>git</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">sudo apt install git</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15),W=s("code",null,"zsh",-1),G=s("code",null,"oh-my-zsh",-1),V=s("code",null,"nvm",-1),J=s("code",null,"zsh",-1),K=s("code",null,"oh-my-zsh",-1),Q={href:"https://www.nginx.com/",target:"_blank",rel:"noopener noreferrer"},X=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">sudo apt install nginx </span><span style="color:#8B949E;"># 安装 nginx</span></span>
<span class="line"><span style="color:#C9D1D9;">sudo ufw app list </span><span style="color:#8B949E;"># 查看防火墙可选配置</span></span>
<span class="line"><span style="color:#C9D1D9;">sudo ufw allow </span><span style="color:#A5D6FF;">&#39;Nginx Full&#39;</span><span style="color:#C9D1D9;"> </span><span style="color:#8B949E;"># 放行 nginx</span></span>
<span class="line"><span style="color:#C9D1D9;">sudo ufw allow </span><span style="color:#A5D6FF;">&#39;OpenSSH&#39;</span><span style="color:#C9D1D9;"> </span><span style="color:#8B949E;"># 放行 openssh</span></span>
<span class="line"><span style="color:#C9D1D9;">sudo ufs </span><span style="color:#79C0FF;">enable</span><span style="color:#C9D1D9;"> </span><span style="color:#8B949E;"># 启动防火墙</span></span>
<span class="line"><span style="color:#C9D1D9;">sudo ufw status </span><span style="color:#8B949E;"># 确认防火墙状态</span></span>
<span class="line"><span style="color:#C9D1D9;">sudo systemctl status nginx </span><span style="color:#8B949E;"># 检查 nginx 状态</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;"># 正确的防火墙状态示例</span></span>
<span class="line"><span style="color:#C9D1D9;">Status: active</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">To                         Action      From</span></span>
<span class="line"><span style="color:#C9D1D9;">--                         ------      ----</span></span>
<span class="line"><span style="color:#C9D1D9;">Nginx Full                 ALLOW       Anywhere</span></span>
<span class="line"><span style="color:#C9D1D9;">OpenSSH                    ALLOW       Anywhere</span></span>
<span class="line"><span style="color:#C9D1D9;">Nginx Full (v6)            ALLOW       Anywhere (v6)</span></span>
<span class="line"><span style="color:#C9D1D9;">OpenSSH (v6)               ALLOW       Anywhere (v6)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;"># 正确的 nginx 状态示例</span></span>
<span class="line"><span style="color:#C9D1D9;">● nginx.service - A high performance web server and a reverse proxy server</span></span>
<span class="line"><span style="color:#C9D1D9;">     Loaded: loaded (/lib/systemd/system/nginx.service</span><span style="color:#FF7B72;">;</span><span style="color:#C9D1D9;"> enabled</span><span style="color:#FF7B72;">;</span><span style="color:#C9D1D9;"> vendor preset: enabled)</span></span>
<span class="line"><span style="color:#C9D1D9;">     Active: active (running)</span></span>
<span class="line"><span style="color:#C9D1D9;">       Docs: man:nginx(8)</span></span>
<span class="line"><span style="color:#C9D1D9;">   Main PID: 83574 (nginx)</span></span>
<span class="line"><span style="color:#C9D1D9;">      Tasks: 2 (limit: 2270)</span></span>
<span class="line"><span style="color:#C9D1D9;">     Memory: 6.0M</span></span>
<span class="line"><span style="color:#C9D1D9;">     CGroup: /system.slice/nginx.service</span></span>
<span class="line"><span style="color:#C9D1D9;">             ├─83574 nginx: master process /usr/sbin/nginx -g daemon on</span><span style="color:#FF7B72;">;</span><span style="color:#C9D1D9;"> master_process on</span><span style="color:#FF7B72;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">             └─83575 nginx: worker process</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在可以通过 <code>http://[公网ip]</code> 访问服务器了，正常会显示 <code>nginx</code> 的默认页面。</p><p>一些相关的命令另外列写在下面。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">sudo systemctl stop nginx </span><span style="color:#8B949E;"># 停止 nginx 服务</span></span>
<span class="line"><span style="color:#C9D1D9;">sudo systemctl start nginx </span><span style="color:#8B949E;"># 启动 nginx 服务</span></span>
<span class="line"><span style="color:#C9D1D9;">sudo systemctl restart nginx </span><span style="color:#8B949E;"># 重启 nginx 服务</span></span>
<span class="line"><span style="color:#C9D1D9;">sudo systemctl reload nginx </span><span style="color:#8B949E;"># nginx 重新读取配置</span></span>
<span class="line"><span style="color:#C9D1D9;">sudo systemctl disable nginx </span><span style="color:#8B949E;"># 禁止 nginx 随系统启动</span></span>
<span class="line"><span style="color:#C9D1D9;">sudo systemctl </span><span style="color:#79C0FF;">enable</span><span style="color:#C9D1D9;"> nginx </span><span style="color:#8B949E;"># 允许 nginx 随系统启动</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认地，<code>nginx</code> 会使用 <code>/var/www/html</code> 作为网站目录，但是对于一个服务器托管多个网站的情况，这相当不方便。所以，我使用 <code>/var/www/[网站域名]/html</code> 来托管我不同的网站，域名就使用 <code>modyqyw.top</code> 的二级域名，全部交给 Cloudflare 解析。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">sudo mkdir -p /var/www/test.modyqyw.top/html </span><span style="color:#8B949E;"># 测试网站用，bt.modyqyw.top</span></span>
<span class="line"><span style="color:#C9D1D9;">sudo mkdir -p /var/www/bt.modyqyw.top/html </span><span style="color:#8B949E;"># 宝塔面板用，bt.modyqyw.top</span></span>
<span class="line"><span style="color:#C9D1D9;">sudo chown -R $USER:$USER /var/www/test.modyqyw.top/html </span><span style="color:#8B949E;"># 修改权限</span></span>
<span class="line"><span style="color:#C9D1D9;">sudo chown -R $USER:$USER /var/www/bt.modyqyw.top/html</span></span>
<span class="line"><span style="color:#8B949E;"># sudo chown -R 755 /var/www/test.modyqyw.top/html</span></span>
<span class="line"><span style="color:#8B949E;"># sudo chown -R 755 /var/www/bt.modyqyw.top/html</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在两个目录下都创建一个 <code>.html</code> 文件，用于之后检查效果。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">sudo vim /var/www/test.modyqyw.top/html/index.html</span></span>
<span class="line"><span style="color:#C9D1D9;">sudo vim /var/www/bt.modyqyw.top/html/index.html</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">&lt;!</span><span style="color:#7EE787;">DOCTYPE</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">html</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">html</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">lang</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;en&quot;</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;</span><span style="color:#7EE787;">head</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">meta</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">charset</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;utf-8&quot;</span><span style="color:#C9D1D9;"> /&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">meta</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">name</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;renderer&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">content</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;webkit&quot;</span><span style="color:#C9D1D9;"> /&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">meta</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">name</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;force-rendering&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">content</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;webkit&quot;</span><span style="color:#C9D1D9;"> /&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">meta</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">http-equiv</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;X-UA-Compatible&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">content</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;IE=Edge,chrome=1&quot;</span><span style="color:#C9D1D9;"> /&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">meta</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#79C0FF;">name</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;viewport&quot;</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#79C0FF;">content</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0&quot;</span></span>
<span class="line"><span style="color:#C9D1D9;">    /&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">link</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">rel</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;icon&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">href</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;/favicon.ico&quot;</span><span style="color:#C9D1D9;"> /&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">title</span><span style="color:#C9D1D9;">&gt;[网站域名]&lt;/</span><span style="color:#7EE787;">title</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;/</span><span style="color:#7EE787;">head</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;</span><span style="color:#7EE787;">body</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">noscript</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">      &lt;</span><span style="color:#7EE787;">strong</span><span style="color:#C9D1D9;">&gt;请允许 JavaScript 执行。&lt;/</span><span style="color:#7EE787;">strong</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;/</span><span style="color:#7EE787;">noscript</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">div</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">id</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;app&quot;</span><span style="color:#C9D1D9;">&gt;&lt;/</span><span style="color:#7EE787;">div</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;/</span><span style="color:#7EE787;">body</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">html</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了避免可能的哈希桶内存问题，需要修改一下 <code>nginx</code> 配置。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">sudo vim /etc/nginx/nginx.conf</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">...</span></span>
<span class="line"><span style="color:#C9D1D9;">http {</span></span>
<span class="line"><span style="color:#C9D1D9;">    ...</span></span>
<span class="line"><span style="color:#C9D1D9;">    server_names_hash_bucket_size 64</span><span style="color:#FF7B72;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">    ...</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"><span style="color:#C9D1D9;">...</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查一下 <code>nginx</code> 配置。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">sudo nginx -t</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;"># 没有问题的提示示例</span></span>
<span class="line"><span style="color:#C9D1D9;">nginx: the configuration file /etc/nginx/nginx.conf syntax is ok</span></span>
<span class="line"><span style="color:#C9D1D9;">nginx: configuration file /etc/nginx/nginx.conf </span><span style="color:#79C0FF;">test</span><span style="color:#C9D1D9;"> is successful</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>没有问题的话就可以着手添加 HTTPS 服务了。由于要交给 Cloudflare 做解析，所以我们需要 Cloudflare 认可的证书。</p>`,18),Y=s("code",null,"/etc/ssl/certs/cloudflare.crt",-1),j={href:"https://developers.cloudflare.com/ssl/origin-configuration/origin-ca#4-required-for-some-add-cloudflare-origin-ca-root-certificates",target:"_blank",rel:"noopener noreferrer"},Z=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">sudo vim /etc/ssl/certs/cloudflare.crt</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后到 Cloudflare 上申请服务器端证书，找到相应的页面点击 <code>创建证书</code> 然后创建即可。</p><p><img src="`+D+'" alt="create-cert"></p><p><img src="'+m+'" alt="create-cert-1"></p><p><img src="'+b+`" alt="create-cert-2"></p><p>在服务器上创建相应的证书文件，保存 Cloudflare 返回的数据。注意，不能存在空行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">sudo vim /etc/ssl/certs/cert.pem </span><span style="color:#8B949E;"># 保存证书部分的数据</span></span>
<span class="line"><span style="color:#C9D1D9;">sudo vim /etc/ssl/private/key.pem </span><span style="color:#8B949E;"># 保存私钥部分的数据</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>添加相应的域名配置。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">sudo rm /etc/nginx/sites-enabled/default </span><span style="color:#8B949E;"># 已经有域名配置了，移除默认的 html 文件</span></span>
<span class="line"><span style="color:#C9D1D9;">sudo vim /etc/nginx/sites-available/test.modyqyw.top</span></span>
<span class="line"><span style="color:#C9D1D9;">sudo vim /etc/nginx/sites-available/bt.modyqyw.top</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">server {</span></span>
<span class="line"><span style="color:#C9D1D9;">    listen 80</span><span style="color:#FF7B72;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">    listen [::]:80</span><span style="color:#FF7B72;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">    access_log  /var/log/nginx/[网站域名].access.log</span><span style="color:#FF7B72;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">    error_log  /var/log/nginx/[网站域名].error.log debug</span><span style="color:#FF7B72;">;</span><span style="color:#C9D1D9;"> </span><span style="color:#8B949E;"># debug 用于测试，后续测试没有错误后可以移除 debug</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">    server_name [网站域名]</span><span style="color:#FF7B72;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> 302 https://$server_name$request_uri</span><span style="color:#FF7B72;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">server {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;"># SSL configuration</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">    listen 443 ssl http2</span><span style="color:#FF7B72;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">    listen [::]:443 ssl http2</span><span style="color:#FF7B72;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">    ssl_certificate         /etc/ssl/certs/cert.pem</span><span style="color:#FF7B72;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">    ssl_certificate_key     /etc/ssl/private/key.pem</span><span style="color:#FF7B72;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">    ssl_client_certificate /etc/ssl/certs/cloudflare.crt</span><span style="color:#FF7B72;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">    ssl_verify_client on</span><span style="color:#FF7B72;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">    access_log  /var/log/nginx/[网站域名].access.log</span><span style="color:#FF7B72;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">    error_log  /var/log/nginx/[网站域名].error.log debug</span><span style="color:#FF7B72;">;</span><span style="color:#C9D1D9;"> </span><span style="color:#8B949E;"># debug 用于测试，后续测试没有错误后可以移除</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">    server_name [网站域名]</span><span style="color:#FF7B72;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">    root /var/www/[网站域名]/html</span><span style="color:#FF7B72;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">    index index.html index.htm index.nginx-debian.html</span><span style="color:#FF7B72;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">    location / {</span></span>
<span class="line"><span style="color:#C9D1D9;">            try_files $uri $uri/ =404</span><span style="color:#FF7B72;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把域名配置链接到 <code>nginx</code> 读取的位置。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">sudo ln -s /etc/nginx/sites-available/test.modyqyw.top /etc/nginx/sites-enabled/</span></span>
<span class="line"><span style="color:#C9D1D9;">sudo ln -s /etc/nginx/sites-available/bt.modyqyw.top /etc/nginx/sites-enabled/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>再次检查 <code>nginx</code> 配置，没问题的话重启 <code>nginx</code> 服务。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">sudo nginx -t</span></span>
<span class="line"><span style="color:#C9D1D9;">sudo systemctl restart nginx</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>最后添加 Cloudflare 解析，等待一小段时间后访问 <code>https://[网站域名]</code> 测试即可。</p><p><img src="`+h+'" alt="dns-1"></p><p>如果有错误，可以检查对应的 <code>error.log</code>。如果没有错误，记得要去掉 <code>debug</code>，否则日志文件会非常大。</p><h2 id="宝塔面板" tabindex="-1"><a class="header-anchor" href="#宝塔面板" aria-hidden="true">#</a> 宝塔面板</h2><h2 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h2><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',20),ss={href:"https://www.digitalocean.com/community/tutorials/initial-server-setup-with-debian-10",target:"_blank",rel:"noopener noreferrer"},ns={href:"https://www.digitalocean.com/community/tutorials/initial-server-setup-with-debian-10",target:"_blank",rel:"noopener noreferrer"},as={href:"https://www.digitalocean.com/community/tutorials/how-to-host-a-website-using-cloudflare-and-nginx-on-ubuntu-20-04",target:"_blank",rel:"noopener noreferrer"},es={href:"https://developers.cloudflare.com/",target:"_blank",rel:"noopener noreferrer"};function ls(os,is){const e=o("ExternalLinkIcon"),i=o("RouterLink");return c(),r("div",null,[C,_,F,s("p",null,[n("我在 "),s("a",x,[n("阿里云"),a(e)]),n(" 买了域名 "),w,n("，然后交给了 "),s("a",f,[n("Cloudflare"),a(e)]),n(" 做解析。")]),s("p",null,[n("为了让 Cloudflare 接管 "),s("a",k,[n("Github Pages"),a(e)]),n("，我还修改了 DNS。其中，"),E,n(" 是 "),B,n(" 得到的结果；在 "),q,n(" 部署的目录下保存一个 "),s("a",A,[S,n(" 文件"),a(e)]),n("，内容直接填写 "),R,n("。")]),L,s("p",null,[n("双十一在 "),s("a",z,[n("腾讯云"),a(e)]),n(" 买了轻量应用服务器，尝试自己配一下环境，为以后的全栈目标做准备。")]),N,s("p",null,[n("我使用了 "),s("a",T,[n("Ubuntu"),a(e)]),n("，可能会有人更倾向于使用 "),s("a",H,[n("CentOS"),a(e)]),n(" 或者 "),s("a",P,[n("Debian"),a(e)]),n("，没有高低之分。建议优先挑选公司内较多使用的，其次挑选个人喜欢的。")]),O,I,s("p",null,[n("生成自己的 RSA 密钥，可以参考 "),s("a",M,[n("Generating a new SSH key and adding it to the ssh-agent"),a(e)]),n("，注意命令应该使用 "),U,n("。")]),$,s("p",null,[n("配置 "),W,n("、"),G,n(" 和 "),V,n("。基本和 "),a(i,{to:"/summarize/environment/#macos-intel"},{default:t(()=>[n("环境配置")]),_:1}),n(" 里的描述一致，可能需要手动安装 "),J,n(" 并切换，看 "),K,n(" 里的教程即可。")]),s("p",null,[n("接着安装 "),s("a",Q,[n("nginx"),a(e)]),n("，用于提供网站访问。")]),X,s("p",null,[n("首先在 "),Y,n(),s("a",j,[n("保存 Cloudflare 根证书"),a(e)]),n("。注意，不能存在空行。")]),Z,s("ul",null,[s("li",null,[s("a",ss,[n("Initial Server Setup with Debian 10"),a(e)])]),s("li",null,[s("a",ns,[n("How to Install Nginx on Debian 10"),a(e)])]),s("li",null,[s("a",as,[n("How To Host a Website Using Cloudflare and Nginx on Ubuntu 20.04"),a(e)])]),s("li",null,[s("a",es,[n("cloudflare developers"),a(e)])])])])}const cs=p(g,[["render",ls],["__file","index.html.vue"]]);export{cs as default};