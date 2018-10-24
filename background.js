chrome.browserAction.onClicked.addListener(sendfunc);
function sendfunc(tab) {
  chrome.tabs.executeScript(null, { file: "iframe.js" });
}