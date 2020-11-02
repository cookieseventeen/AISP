export function preventIEError() {
  // 預防IE出錯
  if (window.console === undefined) { let em = function () { }; window.console = { log: em, debug: em, info: em, warn: em }; }
  if (console.log === undefined || console.log === 'undefined') { let em = function () { }; console.log = em; }
  if (console.debug === undefined || console.debug === 'undefined') { let em = function () { }; console.debug = em; }
  if (console.info === undefined || console.info === 'undefined') { let em = function () { }; console.info = em; }
  if (console.warn === undefined || console.warn === 'undefined') { let em = function () { }; console.warn = em; }
  // end : 預防IE出錯
}


export function includeHTML(cb) {
  let z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) { elmnt.innerHTML = this.responseText; }
          if (this.status === 404) { elmnt.innerHTML = "Page not found."; }
          elmnt.removeAttribute("include-html");
          includeHTML(cb);
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
  if (cb) cb();
}



export function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
}



//===========   GardenUtils function: end===========//



//=========== tool function ===============//
export function getWindowSize() {
  var body = $('body');
  var shadow_existence = $('.shadow-null').length;
  if (!shadow_existence) {
    var shadow_null = $('<div class="shadow-null"></div>').css({
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': '-9999999999999999999999999999999',
      'pointer-events': 'none'
    }).clone();
    body.prepend(shadow_null);
  }
  let size = [$('.shadow-null').width(), $('.shadow-null').height()];
  return size;
}
export function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
export function throttle(func, threshhold) {
  var last, timer;
  if (threshhold) threshhold = 250;
  return function () {
    var context = this
    var args = arguments
    var now = +new Date()
    if (last && now < last + threshhold) {
      clearTimeout(timer)
      timer = setTimeout(function () {
        last = now
        func.apply(context, args)
      }, threshhold)
    } else {
      last = now
      func.apply(context, args)
    }
  }
}

export function hasProp(target, prop) {
  return Object.prototype.hasOwnProperty.call(target, prop);
}

//=========== tool function:end ===============//









