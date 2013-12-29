function fetchGfy(info, tab) {	
	var text = info.selectionText;
	var url = 'http://gfycat.com/fetch/' + text;
	chrome.tabs.create({
		'url':url,
	});
}

chrome.contextMenus.create({"title": "Fetch Gfycat of Link Address", "contexts":["selection"], "onclick": fetchGfy});