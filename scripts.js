const ACTIONS = {
  FILTER: 'filter',
  CLEAR: 'clear'
}

const doFilter = () => {
  document.querySelectorAll('.m-boxListGenreIco__txt').forEach(item => {
    if (item.innerText !== '単行本') {
      item.parentNode.parentNode.style.display = 'none'
    }
  })
}

const doClear = () => {
  document.querySelectorAll('.m-boxListGenreIco__txt').forEach(item => {
    item.parentNode.parentNode.style.display = 'block'
  })
}

chrome.runtime.onMessage.addListener(msg => {
  console.log('onmessage', msg)
  switch (msg.action) {
    case ACTIONS.FILTER: {
      doFilter()
      break
    }
    case ACTIONS.CLEAR: {
      doClear()
      break
    }
    default:
    // 何もしない
  }
})
