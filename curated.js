(function(){
  const host = 'https://diggersdelights.herokuapp.com'
  // const host = 'http://localhost:3000'

  function openIframe() {
    const sources = [...document.querySelectorAll('iframe[src]')].map(i => i.src)
    const url = window.location.href
    sendPost({
      url, sources
    }, ({ curated_list: { id }}) => {
      var src = `http://www.diggersdelights.net/curated/${id}?modal=true&version=0.1`
      window.open(src, 'shareWindow', 'height=900, width=850, top=' + Math.max(window.outerHeight / 2 - 325, 0) + ', left=' + Math.max(window.outerWidth / 2 - 425, 0) + ', toolbar=0, location=0, menubar=no, directories=0, scrollbars=0');
    })
  }
  openIframe()


  function sendPost(data, callback){
    fetch(`${host}/api/curated_lists`, { 
      body: JSON.stringify(data), 
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Request-Method': 'POST'
      }
    })
      .then((response) => {
        if(response.status > 300){
          response.json().then((r) => {
            alert(r.error)
          })
        }
        return response.json()
      })
      .then(callback)
  }
})()