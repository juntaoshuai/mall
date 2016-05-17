$(function(){
/*	var navfix=(function(){
	  var $mainfl=$("#main .w-fly-l"),
	  	  top=0;
	  if($mainfl.length){
	   top=$mainfl.offset().top;
	 $(window).scroll(function(){
	    var winWidth=$(window).width();
	    if($(this).scrollTop()>top){
	    	$mainfl.addClass("navfix");
	    	 if(winWidth>=1220){
	    	$mainfl.css({'marginLeft':'-600px','left':'50%'});
	    }else if(winWidth>=968){
	    	$mainfl.css({'marginLeft':'-474px','left':'50%'});
	    	
	    }else if(winWidth>696){
	    	$mainfl.css({'left':0 ,'marginLeft':0});
	    	
	    }else if(winWidth<=696){
	    	$mainfl.css({'left':0,'marginLeft':0});
	    	
	    }
	    }else{
	    	$mainfl.removeClass("navfix");
	    	$mainfl.css('marginLeft','-100%');
	        	
	    }
		
		
	}).triggerHandler("scroll resize");	
	  	
	  }

	
	
	
	})();
	*/
	
	
	
	
 $(".index-prolist .prolist-item").hover(function(){
 	$(this).find(".wrap").addClass("active");
 	
 },function(){
 	$(this).find(".wrap").removeClass("active");
 	
 });
	
 var indexInit=(function(){
    
    $(".index-prolist:last").css("border-bottom","none");
	$(".index-prolist").find(".title:last").css("border-right","none");
    $(".index-prolist").find(".prolist-item:last").css("margin-right",0);	 	
    
 })();
	
	

	
	
});
