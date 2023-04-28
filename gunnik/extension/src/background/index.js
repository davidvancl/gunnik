var browser = require("webextension-polyfill");

console.log('background script')

// browser.runtime.onMessage.addListener(async (msg, sender) => {
  // chrome.runtime.onMessage.addListener(async (msg, sender) => {
  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log("BG page received message", msg, "from", sender);
  // console.log("Stored data", await browser.storage.local.get());
});

// browser.browserAction.onClicked.addListener(() => {
  chrome.browserAction.onClicked.addListener(() => {
  browser.tabs.executeScript({file: "content.js"});
});