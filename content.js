(function(){
  var scriptURL = 'https://diggersdelights.herokuapp.com/extension.js';
  var scriptURL = 'http://localhost:3000/extension.js';
  var xhr = new XMLHttpRequest();
  xhr.open("GET", scriptURL, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      // WARNING! Might be evaluating an evil script!
      // var resp = eval("(" + xhr.responseText + ")");
      // Or this if it's work
      var script = document.createElement('script');
      script.src = xhr.responseText;
      document.body.append(script);
    }
  }
  xhr.send();
})();

// (() => {
//   alert("content")
//   const URL = '//diggersdelights.herokuapp.com'
//   const fetchInit = {
//     mode: 'cors',
//     credentials: 'include'
//   }

//   const wrapper = document.createElement('div')
//   wrapper.id = 'diggers-delights-on-page'
//   document.body.append(wrapper)



//   init()
//   async function init(){ 
//     if(await isLoggedIn()){
//       setupUI()
//     }
//     else{
//       setupSignIn()
//     }
//   }

//   async function isLoggedIn(){
//     return true
//     try{
//       const { status } = await fetch(`${URL}/api/me.json`, fetchInit)
//       return status >= 200 && status < 300
//     }catch(err){
//       console.error(err)
//     }
//     return false
//   }

//   function setupSignIn(){
//     const btn = document.createElement('div')
//     btn.innerText = 'Sign In'
//     btn.classList.add('dialog-trigger')
//     wrapper.append(btn)
//     btn.onclick = () => {
//       const src = `${URL}/login?modal=true&version=0.1&url=${encodeURIComponent(getCanonicalURL())}`;
//       openModal(src)
//     }
//   }
//   function setupUI(){
//     addLikeTrigger()
//     addDialogTrigger()
//     async function addLikeTrigger(){
//       const btn = document.createElement('div')
//       btn.innerText = '♥'
//       wrapper.append(btn)
//       btn.classList.add('like')
//       const getCurrentStatus = async () => {
//         const res = await fetch(`${URL}/api/links/like/status?url=${encodeURIComponent(getCanonicalURL())}`)
//         if(res.status >= 200 && res.status < 300){
//           const { liked } = await res.json()
//           if (liked){
//             btn.classList.add('liked')
//           }
//         }
//       }
//       getCurrentStatus()
//       btn.onclick = async () => {
//         fetch
//         const res = await fetch(`${URL}/api/links/like/toggle`, {
//           method: 'POST',
//           headers: { 
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             url: getCanonicalURL(),
//           })
//         })
//         if (res.status >= 200 && res.status < 300) {
//           const { liked } = await res.json()
//           btn.classList.toggle('liked', liked)
//         }
//       }
//     }
//     function addDialogTrigger(){
//       const span = document.createElement('span')
//       span.classList.add('dialog-trigger')
//       span.innerText = "Dig This!"
//       wrapper.append(span)
//       if(/soundcloud|mixcloud|nts/.test(window.location)){
//         wrapper.classList.add('higher')
//       }
//       span.onclick = () => {
//         const src = `${URL}/tracks/new?modal=true&version=0.1&url=${encodeURIComponent(getCanonicalURL())}`;
//         openModal(src)
//       }
//     }
//   }


//   function getCanonicalURL(){
//     const canon = document.querySelector('link[rel="canonical"]')
//     if (canon){
//       canon.attributes.href
//     }
//     return window.location.href 
//   }

//   function openModal(src){
//     window.open(src, 'shareWindow', 'height=700, width=850, top=' + Math.max(window.outerHeight / 2 - 325, 0) + ', left=' + Math.max(window.outerWidth / 2 - 425, 0) + ', toolbar=0, location=0, menubar=no, directories=0, scrollbars=0');
//   }
//   console.log('Thank you for using diggersdelights!')
// })()


// chrome.tabs.executeScript(tab.id, {
//   code: 'var script=document.createElement(\'script\');' +
//     'script.onload=function() { alert("loaded") };' +
//     'script.src=\'' + scriptURL + '\';' +
//     'document.body.appendChild(script);'
// }, function (returnedValue) {
//   // do something in the extension context after the code was executed
// });

// var script=document.createElement('script')
// script.onload=function() { alert("loaded") };
// script.src= scriptURL ;
// document.body.appendChild(script);