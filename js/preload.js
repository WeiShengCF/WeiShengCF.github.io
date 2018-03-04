/*
 * 方法：$.preload(imgs);
 * 作用：预加载数组img内的所有图片地址
 * 作者：zyf
 * 参数：
 * order	=>	有序或是无序
 */

(function($){
	$.extend({
		"preload":function(imgs,options){
			var opts=$.extend({},defaults,options);
			//无序预加载图片
			if(opts.order=="unordered"){
				unordered(imgs);
			}
		}
	});
	
	var defaults={
		"order": "unordered"
	};
	
	function unordered(imgs){
		if(imgs==="string") imgs=[imgs];
			$("body").prepend("<div class='preload-loading'><div class='preload-progress'><h2 style='text-align:center;'>加载中......</h2><img class='preload-img' src='http://www.z4a.net/images/2018/03/04/frog.png' /><div class='preload-bar'><div class='preload-finish'></div></div><h3 style='position:relative;' class='preload-number'>0%</h3></div></div>");
			$(".preload-loading").css({
				"position":"fixed",
				"width":"100%",
				"height":"100%",
				"top":"0",
				"left":"0",
				"background-color":"#FFF",
				"z-index":"10"
			});
			$(".preload-progress").css({
				"position":"absolute",
				"width":"70%",
				"height":"300px",
				"top":"0",
				"left":"0",
				"right":"0",
				"bottom":"0",
				"margin":"auto"
			});
			$(".preload-bar").css({
				"width":"100%",
				"height":"30px",
				"background-color":"#698CCE",
				"border-radius":"6px",
				"-webkit-border-radius":"6px",
				"-moz-border-radius":"6px"
			});
			$(".preload-finish").css({
				"width":"0",
				"position":"relative",
				"background-color":"#FFAC64",
				"height":"100%",
				"border-radius":"6px",
				"-webkit-border-radius":"6px",
				"-moz-border-radius":"6px"
			});
			$(".preload-img").css({
				"position":"relative",
				"display":"inline-block",
				"left":"0",
				"animation":"loading 2s infinite"
			});
			$("body").css("overflow","hidden");
			
			var count=0,
				index=0,
				len=imgs.length;
				
			//无序预加载中
			$.each(imgs,function(i,src){
				var imgObj=new Image();
				$(imgObj).on("load error",function(){
					$(".preload-finish").animate({
						"width":Math.round((count+1)/len*100)+"%"
					},200);
					$(".preload-number").html(Math.round((count+1)/len*100)+"%");
					if(count>=len-1){
						$(".preload-loading").remove();
						$("body").css("overflow","auto");
					}
					count++;
				});
				imgObj.src=src;
			});
	}
})(window.jQuery);
