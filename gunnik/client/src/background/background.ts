import browser from 'webextension-polyfill';

function handleUpdated(tabId: any, changeInfo: any, tabInfo: any) {
  console.log(`Updated tab: ${tabId}`);
  console.log('Changed attributes: ', changeInfo);
  console.log('New tab Info: ', tabInfo);
}

browser.runtime.onMessage.addListener(async (msg, sender) => {
  console.log("BG page received message", msg, "from", sender);
  console.log("Stored data", await browser.storage.local.get());
});

browser.tabs.onUpdated.addListener(handleUpdated);
