function openIframe() {
  var src = 'http://www.diggersdelights.net/tracks/new?modal=true&version=0.1&url=' + encodeURIComponent(window.location);
  window.open(src, 'shareWindow', 'height=700, width=850, top=' + Math.max(window.outerHeight / 2 - 325, 0) + ', left=' + Math.max(window.outerWidth / 2 - 425, 0) + ', toolbar=0, location=0, menubar=no, directories=0, scrollbars=0');
}
openIframe()