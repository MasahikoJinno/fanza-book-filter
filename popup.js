document.querySelector('#js-filter').addEventListener('click', e => {
  console.log('click filter!!!!')
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: 'filter'
    })
  })
})
document.querySelector('#js-clear').addEventListener('click', e => {
  console.log('click filter!!!!')
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: 'clear'
    })
  })
})
