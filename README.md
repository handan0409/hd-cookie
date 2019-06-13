# cookie的简单操作

## 使用方法介绍

### 1、对cookie的存入操作
####  方法：setCookie(name, value, time)
####  参数1：name => cookie的key值
####  参数2：value => cookie的value值
####  参数3：time => cookie的过期时间，不传默认是30天。如果传过来的值是number类型，则以天计算。如果time的时间是Date格式的话，传多少就设置多少

### 2、对cookie的获取操作
####  方法：GetCookie(name)
####  参数1：name => cookie的key值

### 3、对cookie的删除操作
####  方法：delCookie(name)
####  参数1：name => cookie的key值

## 使用过程

#### npm install --save hd-cookie 或 yarn add hd-cookie
#### import cookie from "hd-cookie"
#### cookie.getCookie("zhangsan", "12345", 1)