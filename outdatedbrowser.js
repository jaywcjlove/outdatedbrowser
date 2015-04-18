(function(window,document) {

	window.outdatedbrowser=function(json){
		this.container = document.createElement('div'),
		this.container.className = 'outdatedbrowser'
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
			"opera":{
				"url":"http://www.opera.com/download",
				"available":["windows","mac","linux"],
				"title":"OPERA"
			}
		}

		this.html = ''
		this.html += '<span class="split"></span>'
		for (var a in this.browser) {
			this.html += temp('<a class="browser $class$" href="$url$"> <h2><i class="icon"></i>$title$</h2> <span class="btn">下载</span> <h4>在以下操作系统可用 </h4> <p>$available$</p> </a>',{
				class:a,
				title:this.browser[a].title,
				available: '<span>' +this.browser[a].available.join('</span> <span>') + '</span>',
				url:this.browser[a].url
			})
		};
		container.innerHTML = this.html 
		document.body.appendChild(container)
	}
	function isVal (ty) {
		// body...
	}
	function temp(str,obj){
        return str.replace(/\$\w+\$/gi, function(matchs) {
            var returns = obj[matchs.replace(/\$/g, "")];
            return typeof returns === "undefined" ? "" : returns;
        });
    }
})(window,document)