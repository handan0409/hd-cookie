
import Cookie, {
  // setCookie ,
  // getCookie,
  // getCookieName,
  // delCookie,
} from "../index.js";

let newCookie = new Cookie() ;

var setCookie = newCookie.setCookie ;
var getCookie = newCookie.getCookie ;
var getCookieName = newCookie.getCookieName;
var delCookie = newCookie.delCookie ;


setCookie("login", "UID=596915259361234&UN=zhaopinqw01&TT=26bd8b06210ea3c301f3975sdf3fe")
setCookie("name", "张三") ;
setCookie("name2", "lisi", { time: 3 })
setCookie("name3", "wangwu", { time: 3 , path: "/app.html" }) ;
setCookie("name4", 'sdf', { time: 3, path: "/app.html", domain: "localhost" })

setCookie("name5", "abc", [1,2,3])

console.log(getCookie("name")) ;
console.log(getCookie("name2")) ;
console.log(getCookie("name3")) ;
console.log(getCookie("name4")) ;

console.log(getCookieName("login", "UID"))
console.log(getCookieName("login", "UN"))

delCookie("name2") ;

console.log(getCookie("name2")) ;
