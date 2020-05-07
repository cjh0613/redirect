function GetQueryString(name) {
		          var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		          var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
		          var context = ""; 
		 
		      if (r != null) 
		      context = r[2]; 
		     reg = null; 
		     r = null; 
		     return context == null || context == "" || context == "undefined" ? "" : context; 
		  }
		  var s=GetQueryString("s")||0;
		  var title=GetQueryString("title")||0;
	$(document).ready(function () {
	if(s){$('#wiki1').text('维基百科镜像1');$('#wiki2').text('维基百科镜像2');$('#wiki3').text('维基百科镜像3');$('#wiki4').text('维基百科镜像4');
	$("#wiki1").attr("href","https://mwiki.upupming.now.sh/wiki/"+s);
	$("#wiki2").attr("href","https://zh.jinzhao.wiki/wiki/"+s);
	$("#wiki3").attr("href","https://mw.upupming.site/wiki/"+s);
	$("#wiki4").attr("href","http://www.bosimedia.com/wiki/"+s);
	$("#wikimo").attr("href","https://zh.m.wikipedia.org/wiki/"+s);
	$("#wikio").attr("href","https://zh.wikipedia.org/wiki/"+s);
	}
	 })

