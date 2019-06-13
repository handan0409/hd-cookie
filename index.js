

/**
 * 
 * @param {string} name cookie的key值
 * @param {string} value cookie的value值
 * @param {string,number,Date} time cookie的时间，不传默认是30天。如果传过来的值是number类型，则以天计算。如果time的时间是Date格式的话，传多少就设置多少
 */
const setCookie = (name, value, time=30) => {
  if(typeof time === 'number'){
    var Days = time;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  }else{
    var exp = time;
  }
  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toUTCString();
  // escape字符串加密
}

const getCookie = (name) => {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");  // name是开头^或者name前面是空，中间除了“;”有任意位，以“;”结尾或者结束$
  if (arr = document.cookie.match(reg)){  // mathch根据正则匹配出来的，是一个数组，第0个是匹配的数据本身，第二个是除name外的匹配的内容
    return unescape(arr[2]); // unescape字符串解密
  }
  else{
    return null;
  } 
}

// 删除cookie，把时间清除到当前时间的前一天
const delCookie = (name) => {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString();
}

export default {
  setCookie,
  getCookie,
  delCookie
}