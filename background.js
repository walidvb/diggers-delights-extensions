chrome.browserAction.onClicked.addListener(showIFrame);
function showIFrame() {
  chrome.tabs.executeScript(null, { file: "iframe.js" });
}

chrome.contextMenus.create({
  title: 'Dig this!',
  onclick: showIFrame,
})