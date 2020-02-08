// const URL = 'http://www.diggersdelights.net'
const URL = 'http://localhost:3000'


const wrapper = document.createElement('div')
wrapper.id = 'diggers-delights-on-page'
document.body.append(wrapper)

addLikeTrigger()
async function addLikeTrigger(){
  const btn = document.createElement('div')
  btn.innerText = '♥'
  wrapper.append(btn)
  btn.classList.add('like')
  const getCurrentStatus = async () => {
    const res = await fetch(`${URL}/api/links/like/status?url=${encodeURIComponent(window.location)}`)
    if(res.status >= 200 && res.status < 300){
      const { status } = await res.json()
      if(status){
        btn.classList.add('liked')
      }
    }
  }
  getCurrentStatus()
}


addDialogTrigger()
function addDialogTrigger(){
  const span = document.createElement('span')
  span.classList.add('dialog-trigger')
  span.innerText = "Dig This!"
  wrapper.append(span)
  if(/soundcloud|mixcloud|nts/.test(window.location)){
    wrapper.classList.add('higher')
  }
  span.onclick = () => {
    const src = `${URL}/tracks/new?modal=true&version=0.1&url=${encodeURIComponent(window.location)}`;
    window.open(src, 'shareWindow', 'height=700, width=850, top=' + Math.max(window.outerHeight / 2 - 325, 0) + ', left=' + Math.max(window.outerWidth / 2 - 425, 0) + ', toolbar=0, location=0, menubar=no, directories=0, scrollbars=0');
  }
}

console.log('Thank you for using diggersdelights!')