
function openIframe() {
  var src = 'http://www.diggersdelights.net/tracks/new?modal=true&version=0.1&url=' + encodeURIComponent(window.location);
  window.open(src, 'shareWindow', 'height=700, width=850, top=' + Math.max(window.outerHeight / 2 - 325, 0) + ', left=' + Math.max(window.outerWidth / 2 - 425, 0) + ', toolbar=0, location=0, menubar=no, directories=0, scrollbars=0');
}


var imgURL = chrome.runtime.getURL("images/logo_16.png");
var img = document.createElement('img')
img.src = imgURL
console.log(imgURL)
var button = document.createElement('div')
button.append(img)
var span = document.createElement('span')
span.innerText = "Dig This!"
button.append(span)
if(/soundcloud|mixcloud|nts/.test(window.location)){
  button.classList.add('higher')
}
button.onclick = openIframe

button.id = 'diggers-delights-on-page'
document.body.append(button)

console.log('Thank you for using diggersdelights!')