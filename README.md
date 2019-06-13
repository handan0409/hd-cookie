# cookie的简单操作

## 使用过程

npm install --save hd-cookie 或 yarn add hd-cookie
import cookie from "hd-cookie"

## 使用方法介绍

### 1、对cookie的存入操作
方法：setCookie(name, value, options)
参数1：name => cookie的key值
参数2：value => cookie的value值
参数3: options{time,path,domain} => 
      time: cookie的过期时间，不传默认是30天。如果传过来的值是number类型，则以天计算。如果time的时间是Date格式的话，传多少就设置多少
      path cookie的路径值
      {String} domain cookie的域名
```
import cookie from "hd-cookie"
setCookie(“张三”, “123”, 31)
```

### 2、对cookie的获取操作
方法：GetCookie(name)
参数1：name => cookie的key值

### 3、对cookie的获取出来的值做进一步筛选
比如，一条cookie信息是这样的"UID=5969153234234&UN=张三&TT=asdf8sd8fs9dfjsdfkjs9"，从中筛选出UID的值
方法：GetCookie(cookie_name, name)
参数1：cookie_name => cookie的key值
参数2: 二级key值


### 3、对cookie的删除操作
方法：delCookie(name)
参数1：name => cookie的key值

