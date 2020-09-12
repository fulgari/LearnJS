function getCookie(cookieName) {
  var cookie = document.cookie;
  var i = cookie.indexOf(cookieName);
  let res;
  
  if(i!=-1) {
    let arr = cookie.split(";");
    arr.forEach((str)=>{
      let cn = str.split("=")[0];
      if(cn==cookieName) res = cn[1];
    })
  } else {
    return null;
  }
  return res;
}

function setCookie(cookieName, value, date) {
  document.cookie=cookieName+"="+value+";expires="+date.toGMTString();
}