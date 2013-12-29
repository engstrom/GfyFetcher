function fetchGfy(info, tab) {	
	var text = info.selectionText;
	
  if(info.srcUrl)
  {
    text = info.srcUrl;
  }
  else if(info.linkUrl)
  {
    text = info.linkUrl;
  }

  var url = 'http://gfycat.com/fetch/' + text;
	chrome.tabs.create({
		'url':url,
	});
}

chrome.contextMenus.create({"title": "Fetch Gfycat of Link Address", "contexts":["selection"], "onclick": fetchGfy});