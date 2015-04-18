# 升级浏览器


## 兼容浏览器

IE 6+, Chrome, Firefox ...  

## 调用方法
`outdatedbrowser` 不传参数默认使用已定义好的

```js
window.onload = function  (argument) {
    window.outdatedbrowser()
};
```




## 不使用默认数据

```js
window.onload = function  (argument) {
    window.outdatedbrowser({
        "chrome":{
            "url":"http://www.google.com/chrome",
            // "available":["windows","mac","linux"],
            "title":"GOOGLE CHROMSSSSSE"
        },
        "firefox":{
            "url":"http://www.mozilla.org/firefox/new/",
            "available":["windows","mac","linux"],
            "title":"Mozilla Firefox"
        }
    })
};
```
