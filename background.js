let color = '#d6d6d6';

chrome.runtime.onInstalled.addListener(() => {
  // chrome.storage.sync.set({ color });
  console.log(' %cinstalled', `color: ${color}`);
});


