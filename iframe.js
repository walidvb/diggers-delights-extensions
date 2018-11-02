
function openIframe() {
  var div = document.createElement('div');
  var overflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  window.DDCloseIframe = function () {
    div.remove();
    document.body.style.overflow = overflow;
    isFrameOpen = false
  };
  div.style.cssText = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,.5); display: flex; align-items: center; justify-content:center;flex-direction: column;z-index:10000; font-size: 16px;';
  var iframe = document.createElement('iframe');
  var iframeContainer = document.createElement('div');
  iframeContainer.style.position = 'relative';
  var close = document.createElement('div');
  close.innerText = '╳';
  close.style.cssText = 'color: white;position: absolute;cursor: pointer;right: 15px;top: 15px;';
  iframeContainer.append(close);
  close.addEventListener('click', DDCloseIframe);
  iframe.frameBorder = 'none';
  iframe.style.cssText = 'width: 900px; max-width: 90vw; height: 80vh; z-index: 10000';
  iframe.src = '//www.diggersdelights.net/tracks/new?modal=true&version=0.1&url=' + encodeURIComponent(window.location);
  iframeContainer.append(iframe);
  div.append(iframeContainer);
  document.body.append(div);
}
openIframe();