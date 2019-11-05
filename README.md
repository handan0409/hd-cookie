# cookie的简单操作
```
1、不依赖其他库
2、只针对业务中经常使用的场景，代码简单，代码量少
3、规避中文cookie导致的服务器不兼容问题
```
## 使用过程

npm install --save hd-cookie 或 yarn add hd-cookie 
```
import Cookie from "hd-cookie"
```

## 使用方法介绍

提供了4种常用的方法：存储cookie ，获取cookie，获取二级cookie ，删除cookie 4中操作. <br />
new Cookie(options)&nbsp;&nbsp;   options配置实例默认值，选填参数} <br />
time:20&nbsp;&nbsp;配置cookie的默认过期时间是20天。可传入Date()格式时间（非时间戳）例如：new Date("2020-01-01")。选填参数，不填过期时间默认30天。 <br />
path: "/api/"&nbsp;&nbsp;配置cookie的默认路径是"/api/"路径. 选填参数，不填默认是"/"根路径。<br />
domain: "hd.com"&nbsp;&nbsp;配置cookie的默认domain是"hd.com"，选填参数，不填默认是当前域。
```
let newCookie = new Cookie({
      time: 20,   
      path: "/",
      domain: "hd.com" 
})
```

### 1、对cookie的存入操作
方法：setCookie(name, value, options) <br />
参数1：name => cookie的key值 <br />
参数2：value => cookie的value值 <br />
参数3: options{time,path,domain} => <br />
      time: cookie的过期时间，不传取默认值。如果传过来的值是number类型，则以天计算。如果time的时间是Date格式的话，传多少就设置多少 <br />
      path: cookie的路径值，不传取默认值 <br />
      domain: cookie的域名 <br />
```
newCookie.setCookie('name', '张三') 
newCookie.setCookie("name2", "lisi", { time: 3 }) 
newCookie.setCookie("name3", "wangwu", { time: 3 , path: "/api/" }) ;
newCookie.setCookie("name4", 'sdf', { time: 3, path: "/app.html", domain: "localhost" })
```

### 2、对cookie的获取操作
方法：getCookie(name)
参数1：name => cookie的key值
```
newCookie.getCookie("name") ;
```

### 3、对cookie的获取出来的值做进一步筛选
比如，一条cookie信息login是这样的"UID=59691532342341&UN=张三&TT=asdf8sd8fs9dfjsdfkjs9"，从中筛选出UID的值
方法：getCookieName(cookie_name, name)
参数1：cookie_name => cookie的key值
参数2: 二级key值
```
getCookieName("login", "UID") 
getCookieName("login", "UN")
```


### 3、对cookie的删除操作
方法：delCookie(name)
参数1：name => cookie的key值
```
delCookie("name2")
```

## 更新描述
更新了使用过程，使用更加灵活，更加安全。建议更新到最新版使用。<br />
对于旧版的使用方式也做了兼容，对于旧项目，无需修改代码，也可以放心大胆的更新。兼容方式方式如下
```
import Cookie, {
  setCookie ,
  getCookie,
  getCookieName,
  delCookie,
} from "hd-cookie";
```
解构出来的方法，都和旧版本相同，<br />
相较于新版不同的点：
1、旧版默认time是session，一个会话时间，
2、旧版默认的path是当前的路径

