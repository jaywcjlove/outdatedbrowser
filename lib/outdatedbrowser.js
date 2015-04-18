;(function(window){
	var browser = {
		"chrome":{
			"url":"http://www.google.com/chrome",
			"available":["windows","mac","linux"],
			"title":"GOOGLE CHROME"
		},
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
	},
	imgURL='browsers-bg.png',
	style = 'body,html,.outdatedbrowser h2,.outdatedbrowser h4,.outdatedbrowser p,.outdatedbrowser i.icon{margin:0;padding:0}body,html{height:100%;}.outdatedbrowser{position:absolute;top:0;left:0;height:100%;width:100%;z-index:999;overflow:auto;text-align:center;background:#fff;}.outdatedbrowser a{border:1px solid #fff}.outdatedbrowser .browser{text-decoration:blink;padding:30px 0 30px 0;display:inline-block;width:230px;overflow:hidden;vertical-align:middle;background:#e6e6e6;margin:0 5px 0 5px}.outdatedbrowser .btn{padding:7px 19px;border-radius:5px;background:#007a09;color:#fff}.outdatedbrowser h2,.outdatedbrowser h4,.outdatedbrowser p{display:block;color:#333;font-size:18px}.outdatedbrowser span{display:inline-block;margin:20px 0}.outdatedbrowser p span{font-size:12px;padding:0 5px 0 5px}.outdatedbrowser h1{position:absolute;display:block;width:100%;padding-top:20px;left:0;top:0;color:#046d00}.outdatedbrowser .split{display:inline-block;height:100%;vertical-align:middle}.outdatedbrowser i.icon{display:block;position:relative;width:89px;height:89px;margin:0 auto 35px;background:transparent url("'+imgURL+'") no-repeat}.outdatedbrowser a:hover .btn{text-decoration:underline}.outdatedbrowser .chrome i.icon{background-position:-6px -6px}.outdatedbrowser .firefox i.icon{background-position:-105px -6px}.outdatedbrowser .internetExplorer i.icon{background-position:-206px -6px}.outdatedbrowser .safari i.icon{background-position:-306px -6px}.outdatedbrowser .opera i.icon{background-position:-406px -6px}.outdatedbrowser .chrome:hover i.icon{background-position:-6px -108px}.outdatedbrowser .firefox:hover i.icon{background-position:-105px -108px}.outdatedbrowser .internetExplorer:hover i.icon{background-position:-206px -108px}.outdatedbrowser .safari:hover i.icon{background-position:-306px -108px}.outdatedbrowser .opera:hover i.icon{background-position:-406px -108px}'

	window.outdatedbrowser=function(json){
		this.container = document.createElement('div'),
		this.container.className = 'outdatedbrowser'
		browserUpdate(json)
		container.innerHTML = '<h1>请更新浏览器</h1><span class="split"></span>' + createHTML(json)
		document.body.appendChild(container)
		// addCSS(style);
	}
	function browserUpdate (json) {
		if(!json) return;
		var a,b,c,newBorwser={}
		for(var a in json){
			if(browser[a]){
				b = json[a]
				for(c in b){	
					browser[a][c] = b[c]
				}
				newBorwser[a] = browser[a]
			}
		}
		browser = newBorwser
	}
	function createHTML (json) {
		var html = '' 
		for (var a in browser) {
			html += '<a class="browser '+a+'" href="'+browser[a].url+'"> <h2><i class="icon"></i>'+browser[a].title+'</h2> <span class="btn">下载</span> <h4>在以下操作系统可用 </h4> <p>'+'<span>' + browser[a].available.join('</span> <span>') + '</span>'+'</p> </a>'
		};
		return html
	}
	function addCSS(cssText){
	    var style = document.createElement('style'),  //创建一个style元素
	        head = document.head || document.getElementsByTagName('head')[0]; //获取head元素
	    style.type = 'text/css'; //这里必须显示设置style元素的type属性为text/css，否则在ie中不起作用
	    if(style.styleSheet){ //IE
	        var func = function(){
	            try{ //防止IE中stylesheet数量超过限制而发生错误
	                style.styleSheet.cssText = cssText;
	            }catch(e){

	            }
	        }
	        //如果当前styleSheet还不能用，则放到异步中则行
	        if(style.styleSheet.disabled){
	            setTimeout(func,10);
	        }else{
	            func();
	        }
	    }else{ //w3c
	        //w3c浏览器中只要创建文本节点插入到style元素中就行了
	        var textNode = document.createTextNode(cssText);
	        style.appendChild(textNode);
	    }
	    head.appendChild(style); //把创建的style元素插入到head中    
	}

})(window);