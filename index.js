

/**
 * 
 * @param {string} name cookie的key值
 * @param {string} value cookie的value值
 * @param {Object} opitions 其他配置，
 * @param {number|Date} time cookie的时间，不传默认是会话结束。如果传过来的值是number类型，则以天计算。如果time的时间是Date格式的话，传多少就设置多少
 * @param {String} path cookie的路径值
 * @param {String} domain cookie的域名
 */
const setCookie = (name, value, options) => {

  let cookieString = name + "=" + escape(value); // escape字符串加密(仅对中文加密)

  if(!(options instanceof Object) || Array.isArray(options)){
    document.cookie = cookieString;
    return ;
  }

  const { time, path="", domain="", } = options;

  if(typeof time === 'number'){
    var Days = time;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  }else{
    var exp = time;
  }
  cookieString += ";expires=" + exp.toUTCString();  // toUTCString()把时间格式变成字符串

  if(typeof path === 'string'){
    cookieString += ";path=" + escape(path);
  }
  if(typeof domain !== 'string'){
    cookieString += ";domain=" + escape(domain);
  }

  document.cookie = cookieString;
  
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

// 根据cookie_name获取一条cookie信息，再从这条信息中获取name对应的信息，
// 比如，一条cookie信息是这样的"UID=59691525936147&UN=zhaopincz01&TT=26bd8b06210ea3c301f39759577c08ce"
const getCookieName = (cookie_name, name) => {
  let cookie_val = getCookie(cookie_name);
  if (!cookie_val) {
    return '';
  }
  if(!name){
    return cookie_val;
  }
  let regex = new RegExp(`(^|&|#||'|"[?])` + escape(name) + `=([^&#'"]*)(&|#|'|"|$)`);
  let value ;
  if(value = cookie_val.match(regex)){
    return unescape(value[2])
  }else{
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



module.exports = {
  setCookie,
  getCookie,
  getCookieName,
  delCookie,
}