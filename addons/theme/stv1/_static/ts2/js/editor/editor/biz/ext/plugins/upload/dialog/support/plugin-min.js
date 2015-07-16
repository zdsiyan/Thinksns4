KISSY.Editor.add("multi-upload/dialog/support",function(){function y(a){this.editor=a;this.progressBars={};m.Utils.lazyRun(this,"_prepareShow","_realShow")}function z(a,c){var b=a.parentNode,d=c.nextSibling;b.insertBefore(c,a.nextSibling);b.insertBefore(a,d)}var l=KISSY,m=l.Editor,u=l.UA;m.namespace("MultiUpload");var n=l.DOM,w=l.JSON,j=l.Node,G=m.Dialog,A=window[m.STORE],H=m.Utils.debugUrl("uploader/uploader.longzang.swf");n.addStyleSheet(".ke-upload-btn-wrap {position:relative;padding:15px 20px 15px 10px;zoom:1;}.ke-upload-list {width:100%;}.ke-upload-list th {border-top:1px solid #c1c8d1;background-color: #E7E9ED;background: -webkit-gradient(linear, left top, left bottom, from(#E7E9ED), to(#F1F4F7));background: -moz-linear-gradient(top, #E7E9ED, #F1F4F7);}.ke-upload-list td,.ke-upload-list th {padding:0em;height:26px;line-height:26px;text-align:center;border-bottom:1px solid #c1c8d1;}.ke-upload-complete .ke-upload-filename {text-decoration:underline;cursor:pointer;}",
"ke-MultiUpload");l.augment(y,{addRes:m.Utils.addRes,destroy:m.Utils.destroyRes,_prepareShow:function(){var a=this,c=a.editor,b=c.cfg.pluginConfig["multi-upload"];a.addRes(function(){var k=a.progressBars,h;for(h in k)k.hasOwnProperty(h)&&k[h].destroy()});a.dialog=new G({headerContent:"\u6279\u91cf\u4e0a\u4f20",mask:false,constrain:false,autoRender:true,focus4e:false,width:"600px"});var d=a.dialog;a.addRes(d);var f=d.get("body"),e=(new j("<div class='ke-upload-btn-wrap'><span style='margin:0 15px 0 0px;color:#969696;display:inline-block;vertical-align:middle;width:450px;'></span></div>")).appendTo(f),
i=(new j("<div style='display:none'>")).appendTo(f),o=(new j("<a class='ke-button'>\u6d4f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\u89c8</a>")).appendTo(e),q=(new j("<div><table class='ke-upload-list'><thead><tr><th style='width:30px;'>\u5e8f\u53f7</th><th>\u56fe\u7247</th><th>\u5927\u5c0f</th><th style='width:30%'>\u4e0a\u4f20\u8fdb\u5ea6</th><th>\u56fe\u7247\u64cd\u4f5c</th></tr></thead><tbody></tbody></table></div>")).appendTo(i),r=q.one("tbody"),p=(new j("<p style='margin:15px 15px 30px 6px;'><a class='ke-bangpaiupload-delall' style='margin-right:20px;cursor:pointer;margin-left:40px;'>\u6e05\u7a7a\u5217\u8868</a><a class='ke-button ke-bangpaiupload-ok'>\u786e\u5b9a\u4e0a\u4f20</a><a class='ke-button ke-bangpaiupload-insertall' style='margin-left:20px;'>\u5168\u90e8\u63d2\u5165</a></p>")).appendTo(i),
v=p.one(".ke-bangpaiupload-ok");f=p.one(".ke-bangpaiupload-insertall");var B=p.one(".ke-bangpaiupload-delall");l.guid("ke-multi-upload");p=(new j("<span>")).prependTo(p);a._sizeLimit=b.sizeLimit||1E3;a._numberLimit=b.numberLimit||15;var C="\u5141\u8bb8\u7528\u6237\u540c\u65f6\u4e0a\u4f20"+a._numberLimit+"\u5f20\u56fe\u7247\uff0c\u5355\u5f20\u56fe\u7247\u5bb9\u91cf\u4e0d\u8d85\u8fc7"+a._sizeLimit/1E3+"M";u.fpvGEQ("10.0.0")||(C="\u60a8\u7684flash\u63d2\u4ef6\u7248\u672c\u8fc7\u4f4e\uff0c\u8be5\u529f\u80fd\u4e0d\u53ef\u7528\uff0c\u8bf7<a href='http://get.adobe.com/cn/flashplayer/' target='_blank'>\u70b9\u6b64\u5347\u7ea7</a>");o.addClass("ke-triplebutton-disabled");a.tipSpan=e.one("span");a.tipSpan.html(C);
if(u.fpvGEQ("10.0.0")){b.extraHtml&&q.append(b.extraHtml);a._list=r;a._listTable=r.parent("table");a._listWrap=i;a._ds=b.serverUrl;a._dsp=b.serverParams||{};a._fileInput=b.fileInput||"Filedata";a.statusText=p;a.btn=o;a.up=v;q=o.offset();v=o.width()*2;p=o.height()*1.5;e=(new j("<div style='"+("position:absolute;width:"+v+"px;height:"+p+"px;z-index:"+m.baseZIndex(9999)+";")+"'>")).appendTo(e);e.offset(q);a.flashPos=e;e=new m.FlashBridge({movie:H,ajbridge:true,methods:["getReady","removeFile","lock",
"unlock","setAllowMultipleFiles","setFileFilters","uploadAll"],holder:e,attrs:{width:v,height:p},params:{wmode:"transparent"},flashVars:{allowedDomain:location.hostname,btn:true,hand:true}});a.uploader=e;e.on("mouseOver",function(){o.addClass("ke-button-hover")});e.on("mouseOut",function(){o.removeClass("ke-button-hover")});a.addRes(e);f.on("click",function(k){for(var h=r.all("tr"),g=0;g<h.length;g++){var s=new j(h[g]),x=s.attr("url");if(x){c.insertElement(new j("<p>&nbsp;<img src='"+x+"'/>&nbsp;</p>",
null,c.document));a._removeTrFile(s)}}if(x){i.hide();d.hide()}k.halt()});a.addRes(f);B.on("click",function(k){for(var h=r.all("tr"),g=0;g<h.length;g++){var s=new j(h[g]);a._removeTrFile(s)}i.hide();k.halt()});a.addRes(B);r.on("click",function(k){var h=new j(k.target),g;k.halt();if(h.hasClass("ke-upload-insert")){g=h.parent("tr");var s=g.attr("url");c.insertElement(new j("<img src='"+s+"'/>",null,c.document))}if(h.hasClass("ke-upload-delete")||h.hasClass("ke-upload-insert")){g=h.parent("tr");a._removeTrFile(g)}if(h.hasClass("ke-upload-moveup")){g=
h.parent("tr");g.css("backgroundColor","#eef4f9");g.animate({backgroundColor:"#FBFBFB"},1,null,function(){g.css("backgroundColor","")});if(h=g.prev()){z(g[0],h[0]);a._syncStatus()}}else if(h.hasClass("ke-upload-movedown")){g=h.parent("tr");g.css("backgroundColor","#eef4f9");g.animate({backgroundColor:"#FBFBFB"},1,null,function(){g.css("backgroundColor","")});if(h=g.next()){z(g[0],h[0]);a._syncStatus()}}k.halt()});a.addRes(r);e.on("fileSelect",a._onSelect,a);e.on("uploadStart",a._onUploadStart,a);
e.on("uploadProgress",a._onProgress,a);e.on("uploadCompleteData",a._onUploadCompleteData,a);e.on("contentReady",a._ready,a);e.on("uploadError",a._uploadError,a);a._restore();f=b.previewWidth;var D=b.previewSuffix;if(f){var t=new l.Overlay({mask:false,autoRender:true,width:f,render:i});a.addRes(t);var E=t.get("contentEl");E.css("border","none");var F=0;i.on("mouseover",function(k){if(k=(new j(k.target)).parent(".ke-upload-filename")){var h=k._4e_ascendant("tr");if(h.hasClass("ke-upload-complete")){var g=
h.attr("url");h=h.attr("fid");if(g){if(h!=F){F=h;if(D)g=g.replace(/(\.\w+$)/,D);E.html("<img style='display:block;' src='"+g+"' />")}g=n.offset(k);g.left+=k.offsetWidth;t.set("xy",[g.left,g.top]);t.show()}}}else t.hide()});a.addRes(i)}!u.webkit&&u.ieEngine!=9&&d.set("handlers",[d.get("el")])}},_removeTrFile:function(a){var c=this.progressBars,b=a.attr("fid"),d=this.uploader;if(b)try{d.removeFile(b)}catch(f){}if(c[b]){c[b].destroy();delete c[b]}a._4e_remove();this.denable();this._syncStatus()},_realShow:function(){this.dialog.center();
this.dialog.show()},show:function(){this._prepareShow()},_uploadError:function(a){var c=this.progressBars,b=this.uploader,d=a.id||a.file&&a.file.id;if(d){var f=this._getFileTr(d),e=c[d],i=a.status;b.removeFile(d);if(!a._custom){l.log(i);i="\u670d\u52a1\u5668\u51fa\u9519\u6216\u683c\u5f0f\u4e0d\u6b63\u786e"}if(f){e&&e.destroy();delete c[d];f.one(".ke-upload-progress").html("<div style='color:red;'>"+i+"</div>")}}else l.log(a)},_getFileTr:function(a){for(var c=this._list.all("tr"),b=0;b<c.length;b++){var d=new j(c[b]);if(d.attr("fid")==a)return d}},_onUploadStart:function(a){this._getFileTr(a.id||
a.file&&a.file.id)[0].className="ke-upload-uploading"},_onComplete:function(){},_onUploadCompleteData:function(a){var c=l.trim(a.data).replace(/\r|\n/g,"");a=a.file.id;if(c){try{c=w.parse(c)}catch(b){l.log("multi-upload _onUploadCompleteData error :");l.log(b);throw b;}if(c.error)this._uploadError({id:a,_custom:1,status:c.error});else{if(a=this._getFileTr(a)){a.one(".ke-upload-insert").show();this._tagComplete(a,c.imgUrl)}this._syncStatus()}}},_onProgress:function(a){var c=Math.floor(a.bytesLoaded*
100/a.bytesTotal);(a=this.progressBars[a.file.id])&&a.set("progress",c)},ddisable:function(){this.uploader.lock();this.btn.addClass("ke-triplebutton-disabled");this.flashPos.offset({left:-9999,top:-9999})},denable:function(){this.uploader.unlock();this.btn.removeClass("ke-triplebutton-disabled");this.flashPos.offset(this.btn.offset())},_syncStatus:function(){var a=this._list,c=1,b=a.all("tr");if(b.length==0)this._listWrap.hide();else{a.all(".ke-upload-seq").each(function(f){f.html(c++)});for(var d=
a=0;d<b.length;d++)(new j(b[d])).attr("url")||a++;this.statusText.html("\u961f\u5217\u4e2d\u5269\u4f59"+a+"\u5f20\u56fe\u7247\uff0c\u70b9\u51fb\u786e\u5b9a\u4e0a\u4f20\uff0c\u5f00\u59cb\u4e0a\u4f20\u3002 ")}this._save()},_restore:function(){var a=A.getItem("Multi-Upload-Save"),c=this._list[0];if(a){a=w.parse(decodeURIComponent(a));for(var b=0;b<a.length;b++){var d=a[b];d.complete=1;d.fid="restore_"+b;this._tagComplete(this._createFileTr(c,d),d.url)}if(d){this._listWrap.show();this._syncStatus()}}},_tagComplete:function(a,c){a.attr("url",c);a[0].className="ke-upload-complete"},_save:function(){for(var a=
this._list.all("tr"),c=[],b=0;b<a.length;b++){var d=new j(a[b]),f=d.attr("url");if(f){var e=d.one(".ke-upload-filesize").html();d=d.one(".ke-upload-filename").text();c.push({name:d,size:e,url:f})}}A.setItem("Multi-Upload-Save",encodeURIComponent(w.stringify(c)))},_getFilesSize:function(a){var c=0,b;for(b in a)a.hasOwnProperty(b)&&c++;return c},_createFileTr:function(a,c){var b=this.progressBars,d=c.fid,f=a.insertRow(-1);n.attr(f,"fid",d);var e=f.insertCell(-1);n.attr(e,"class","ke-upload-seq");e=
f.insertCell(-1);if(c.name.length>18)c.name=c.name.substring(0,18)+"...";n.html(e,"<div style='width:160px;overflow:hidden;'><div style='width:9999px;text-align:left;'>"+c.name+"</div></div>");n.attr(e,"class","ke-upload-filename");e=f.insertCell(-1);n.html(e,c.size);n.attr(e,"class","ke-upload-filesize");e=f.insertCell(-1);n.attr(e,"class","ke-upload-progress");e=f.insertCell(-1);n.html(e,"<a class='ke-upload-moveup' href='#'>[\u4e0a\u79fb]</a> &nbsp; <a class='ke-upload-movedown' href='#'>[\u4e0b\u79fb]</a> &nbsp; <a href='#' class='ke-upload-insert' style='"+
(c.complete?"":"display:none;")+"' >[\u63d2\u5165]</a> &nbsp; <a href='#' class='ke-upload-delete'>[\u5220\u9664]</a> &nbsp;");f=new j(f);f.one(".ke-upload-progress");if(parseInt(c.size)>this._sizeLimit){this._uploadError({id:d,_custom:1,status:"\u56fe\u7247\u592a\u5927\uff0c\u8bf7\u538b\u7f29\u81f3 n M\u4ee5\u4e0b".replace(/n/,this._sizeLimit/1E3)});this.uploader.removeFile(d)}else{b[d]=new m.ProgressBar({container:f.one(".ke-upload-progress"),width:"100px",height:"15px"});c.complete&&b[d].set("progress",100)}return f},_onSelect:function(a){var c=this.uploader,b=this._list,
d=0;a=a.fileList;var f=this._numberLimit;if(a){f=b.children("tr");for(b=0;b<f.length;b++){var e=n.attr(f[b],"fid");e&&a[e]&&delete a[e]}f=this._numberLimit-f.length;e=this._getFilesSize(a);e>f&&alert("\u7cfb\u7edf\u5c06\u53ea\u4fdd\u7559 n \u5f20".replace(/n/,this._numberLimit));e>=f&&this.ddisable();this._listWrap.show();e=this._list[0];for(b in a)if(a.hasOwnProperty(b)){d++;var i=a[b],o=Math.floor(i.size/1E3),q=i.id;d>f?c.removeFile(q):this._createFileTr(e,{size:o+"k",fid:q,name:i.name})}this._syncStatus()}},_ready:function(){var a=
this,c=a.uploader,b=a.up,d=a.btn,f=a.flashPos,e=m.Utils.normParams;if("ready"!=c.getReady()){a.tipSpan.html("\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u8be5\u529f\u80fd\uff0c\u8bf7\u5347\u7ea7\u5f53\u524d\u6d4f\u89c8\u5668\uff0c\u5e76\u540c\u65f6 <a href='http://get.adobe.com/cn/flashplayer/' target='_blank'>\u70b9\u6b64\u5347\u7ea7</a> flash \u63d2\u4ef6");f.offset({left:-9999,top:-9999})}else{d.removeClass("ke-triplebutton-disabled");f.offset(d.offset());c.setAllowMultipleFiles(true);c.setFileFilters([{ext:"*.jpeg;*.jpg;*.png;*.gif",desc:"\u56fe\u7247\u6587\u4ef6( png,jpg,jpeg,gif )"}]);b.detach();b.on("click",function(i){i.halt();c.uploadAll(a._ds,"POST",
e(a._dsp),a._fileInput);i.halt()});a.addRes(b)}}});m.MultiUpload.Dialog=y},{attach:false});
