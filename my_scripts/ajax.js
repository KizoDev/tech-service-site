// JavaScript Document
//$(document).ready(function(){
	
	var abt = $("#about")
	var hia = $('#hia');
	var url = window.location.href;
		
		/*abt.click(function(){
			alert('abt')
			hia.fadeOut('slow', function(){
		hia.load("about.php #mycont",function(){
			hia.fadeIn('slow');
			});
		});
		
				$('#primary').fadeOut('slow', function(){
			$('#primary').load(link+' #content', function(){
				$('#primary').fadeIn('slow');
			});
		});
		$("p").on("click", function(){
    alert("The paragraph was clicked.");
});


		});*/
	
		//$("#area").load("something.html #area > *"); //to prevent nesting same divs
		//$("a[rel='tab'] > li").removeClass('nav_indicate');
		
		$(function(){
			$("a[rel='tab']").on("click",function(e){
			e.preventDefault();
			
			//e.stopPropagation();
			
			$("a > li").removeClass('nav_indicate');
			$("a[rel='tab'] > li").removeClass('nav_indicate');
			//$("a[rel='tab'] > li").addClass('nav_indicate');
			$("a[rel='tab'] > li").off("click");
			
			
			 /*$('#loadingDv').fadeOut(1000);*/
			$('#mym').removeClass('comot');
			$(".mynav1").animate({
			left:'-80%'
			})
			$('.from_hd').animate({
			left:'0',opacity:'1'
			})
			/*
			if uncomment the above line, html5 nonsupported browers won't change the url but will display the ajax content;
			if commented, html5 nonsupported browers will reload the page to the specified link.
			*/
			//e.stopImmediatePropagation()
			
			//get the link location that was clicked
			pageurl = $(this).attr('href');
			
			$(this).find('li').addClass('nav_indicate');
			
			//$("[href=ta]").addClass('nav_indicate');
			
			//alert(te)
			//te.addClass('nav_indicate');
			
			
			
			//url.includes(pageurl);
			
			
			//to get the ajax content and display in div with id 'hia'
			$.ajax({url:pageurl+'?rel=tab',success: function(data){
				
				/*
				$(".response").fadeOut( 100 , function() {
				$(this).html( data);
				}).fadeIn( 1000 );
				*/
				$("#mycont").fadeOut( 2000 , function() {
				$('#mycont').html($(data).find('#mycont').html());
				}).fadeIn( 2000);
				
				//console.log($("#mycont").scrollTop());
				//window.scrollTo(0,0);
				$("html, body").animate({ scrollTop: 0 }, "slow");
				
			/*$('#mycont').html($(data).find('#mycont').html());*/
			
			
			}}); 
			
			//to change the browser URL to the given link location
			if(pageurl!=window.location){
			window.history.pushState({path:pageurl},'',pageurl);
			}
			
			//stop refreshing to the page given in
			return false;
			
			});
			//the below code is to override back button to get the ajax content without page reload
				$(window).bind('popstate', function() {
				$.ajax({url:location.pathname+'?rel=tab',success: function(data){
				$('#mycont').html($(data).find('#mycont').html());
				}});
				});
			});
	
	
	
	
	
	
	//});