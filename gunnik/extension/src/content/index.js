var browser = require("webextension-polyfill");

console.log('content script')

// browser.storage.local.set({
chrome.storage.local.set({
  [window.location.hostname]: document.title,
}).then(() => {
  chrome.runtime.sendMessage(`Saved document title for ${window.location.hostname}`);
  // browser.runtime.sendMessage(`Saved document title for ${window.location.hostname}`);
});