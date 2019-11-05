

/**
 * @param {Object} config 用户自定义默认值
 */
class Cookie {
  constructor(config){
    this.defaultOpts = Object.assign(this.getDefaultConfig(), config) ;
    this.setCookie = this.setCookie.bind(this) ;
    this.getCookie = this.getCookie.bind(this) ;
    this.getCookieName = this.getCookieName.bind(this) ;
    this.delCookie = this.delCookie.bind(this) ;

    if(!this)return;    // 如果不是使用new 关键字执行的构造函数，直接return ，阻止代码执行。
    if(!Cookie.instance){
      Cookie.instance = this ;
    }
    return Cookie.instance ; // 在构造函数体上挂在一个实例，然后一直返回这个实例就行了。
  }

  getDefaultConfig(){
    return {
      time: 30,
      path: '/',
      domain: "",
    }
  }

  /**
   * 
   * @param {string} name cookie的key值
   * @param {string} value cookie的value值
   * @param {Object} options 其他配置，
   * @param {number|Date} time cookie的时间，不传默认是会话结束。如果传过来的值是number类型，则以天计算。如果time的时间是Date格式的话，传多少就设置多少
   * @param {String} path cookie的路径值
   * @param {String} domain cookie的域名, 默认当前域名
   */
  setCookie(name, value, options){
    options = Object.assign(this.defaultOpts, options) ;
  
    let cookieString = name + "=" + escape(value); // escape字符串加密(仅对中文加密)
  
    if(!(Object.prototype.toString.call(options) === "[object Object]")){
      // document.cookie = cookieString;
      options = {}
    }
    const { time, path, domain="", } = options;
  
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

  getCookie(name){
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
  getCookieName(cookie_name, name){
    let cookie_val = this.getCookie(cookie_name);
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
  delCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = this.getCookie(name);
    if (cval != null)
      document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString();
  }
}













/*********************************************兼容之前版本*********************************************************** */
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
  console.log("您使用的是旧的setCookie方法")
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
  console.log("您使用的是旧的getCookie方法")
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
  console.log("您使用的是旧的getCookieName方法")
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
  console.log("您使用的是旧的delCookie方法")
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString();
}

Cookie.setCookie = setCookie ;
Cookie.getCookie = getCookie ;
Cookie.getCookieName = getCookieName ;
Cookie.delCookie = delCookie ;

module.exports = Cookie ;