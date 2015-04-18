(function(window,document) {
	window.outdatedbrowser=function(){
		this.container = document.createElement('div'),
		this.browser = {
				"firefox":{
					"url":"http://www.mozilla.org/firefox/new/",
					"available":["windows","mac","linux"],
					"title":"Mozilla Firefox"
				},
				"internetExplorer":{
					"url":"http://windows.microsoft.com/en-us/internet-explorer/download-ie",
					"available":["windows"],
					"title":"INTERNET EXPLORER"
				},
				"chrome":{
					"url":"http://www.google.com/chrome",
					"available":["windows","mac","linux"],
					"title":"GOOGLE CHROME"
				},
				"safari":{
					"url":"http://support.apple.com/downloads/#safari",
					"available":["mac"],
					"title":"APPLE SAFARI"
				},
				"safari":{
					"url":"http://www.opera.com/download",
					"available":["windows","mac","linux"],
					"title":"OPERA"
				}
			}

		container.innerHTML = "content"
		document.body.appendChild(container)
	}
})(window,document)