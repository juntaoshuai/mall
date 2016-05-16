$(function(){
	var navfix=(function(){
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
	
	
	/*
* @media (min-width: 1220px)
.wrapper {
  width: 1200px;
}
@media (min-width: 968px)
.wrapper {
  width: 948px;
}

@media (max-width: 967px)
.wrapper {
  width: 90%;
  min-width: 696px;
}
  * 
 */
	
	
	
	
	
});
