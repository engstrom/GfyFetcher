function fetchGfy(info) {
  var url = 'http://gfycat.com/fetch/' + (getUrl(info));
    chrome.tabs.create({
      'url':url
  });
}

function getUrl(info) {
  return info['srcUrl'] || info['linkUrl'];
}

chrome.contextMenus.create({"title": "Fetch Gfycat of Image",
  "contexts":["image", "link"],
  "onclick": fetchGfy});
