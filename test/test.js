
import Cookie, {
  // setCookie ,
  // getCookie,
  // getCookieName,
  // delCookie,
} from "../index.js";

let newCookie = new Cookie({
  time: 20,
  path: '/'
}) ;

var setCookie = newCookie.setCookie ;
var getCookie = newCookie.getCookie ;
var getCookieName = newCookie.getCookieName;
var delCookie = newCookie.delCookie ;


setCookie("login", "UID=596915259361234&UN=zhaopinqw01&TT=26bd8b06210ea3c301f3975sdf3fe")


setCookie("name", "张三") ;
console.log(getCookie("name")) ;


setCookie("name2", "lisi", { time: 3 })
console.log(getCookie("name2")) ;


setCookie("name3", "wangwu", { time: 3 , path: "/app.html" }) ;
console.log(getCookie("name3")) ;


setCookie("name4", 'sdf', { time: 3, path: "/app.html", domain: "localhost" })
console.log(getCookie("name4")) ;


setCookie("name5", "abc", [1,2,3])
console.log(getCookie("name5")) ;

// setCookie("name6", {name: "zhaoliu"}, [1,2,3])
// console.log(getCookie("name6")) ;



console.log(getCookieName("login", "UID"))
console.log(getCookieName("login", "UN"))

delCookie("name2") ;

console.log(getCookie("name2")) ;

    // 错误捕获错误示例
    try {
      setTimeout(() => {
        throw new Error("抛出一个错误")
      }, 1000);
    } catch (error) {
      console.log(error)
    }

    // 正确捕获错误方式
    try {
      setTimeout(() => {
        try {
          throw new Error("抛出一个错误")
        } catch (error) {
          console.log("捕获到错误")
        }
      }, 1000);
    } catch (error) {
      console.log(error)
    }
