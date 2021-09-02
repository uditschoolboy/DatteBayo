const randomNumber = Math.floor(Math.random() * 4) + 1;
var imgURL = chrome.extension.getURL(`images/${randomNumber}.jpg`);
document.body.style.backgroundImage = `url(${imgURL})`;