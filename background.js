chrome.browserAction.onClicked.addListener(showIFrame);
function showIFrame() {
  chrome.tabs.executeScript(null, { 
    file: "dig.js", 
  });
}

chrome.contextMenus.create({
  title: 'Dig this!',
  onclick: function() {
    chrome.tabs.executeScript(null, {
      file: "dig.js",
    });
  },
})
chrome.contextMenus.create({
  title: 'Listen in one go',
  onclick: function() {
    chrome.tabs.executeScript(null, {
      file: "curated.js",
    });
  },
})
chrome.contextMenus.create({
  title: 'Like',
  onclick: function() {
    var someVar = { text: 'test', foo: 1, bar: false };
    chrome.tabs.executeScript({
      code: '(' + function (params) {
        document.body.insertAdjacentHTML('beforeend',
        '<div style="all:unset; position:fixed; left:0; top:0; right:0; bottom:0;' +
        'background-color:rgba(0,255,0,0.3)">' + params.text + '</div>'
        );
        return { success: true, html: document.body.innerHTML };
      } + ')(' + JSON.stringify(someVar) + ');'
    }, function (results) {
      console.log(results[0]);
    });
  },
})


// var someVar = { text: 'test', foo: 1, bar: false };
// chrome.tabs.executeScript({
//   code: '(' + function (params) {
//     document.body.insertAdjacentHTML('beforeend',
//       '<div style="all:unset; position:fixed; left:0; top:0; right:0; bottom:0;' +
//       'background-color:rgba(0,255,0,0.3)">' + params.text + '</div>'
//     );
//     return { success: true, html: document.body.innerHTML };
//   } + ')(' + JSON.stringify(someVar) + ');'
// });


console.log('asdasfas')
