export function getDateStr(timestamp) {
  
  let date = new Date(timestamp)
  
  let year = date.getFullYear()
  
  let month = date.getMonth()
  
  let day = date.getDate()
  
  let hour = date.getHours()
  
  let minute = date.getMinutes()
  
  return year + '-' + month + '-' + day + '  ' + hour + ':' + minute
}

export function getQueryString(name) {
  
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  
  var r = window.location.search.substr(1).match(reg);
  
  if (r != null) {
    
    return decodeURI(r[2]);
  }
  
  return null;
}
