// JavaScript Document
$(document).ready(function(){
	
	 $("#carousel").carousel();
	var mycont = $("#mycont"); //contents
	var from_hd = $('.from_hd');
	
	var mym = $("#mym"); // my menu icon
	var clz = $('#clz'); // my close icon
	var mynav1 = $(".mynav1"); //d navigation for tabs n mobiles
	var wi = screen.width;
	//var wi8 = 0.8 * wi;
	var wi8 = 300;
	
	mynav1.animate({
			left:-wi8
			})
	
	mym.click(function(){
		from_hd.addClass('abs_posi');
		mym.addClass('comot');
		from_hd.animate({
			left:wi8,opacity:'0.4'
			})
		mynav1.animate({
			left:'0'
			})
		
		});
		
	clz.click(function(){
		from_hd.removeClass('abs_posi');
		mym.removeClass('comot');
		from_hd.animate({
			left:'0',opacity:'1'
			})
		mynav1.animate({
			left:-wi8
			})
		
		});
		
	var fb = $('.fbimg')
	var tw = $('.twimg')
	
	fb.hover(function(){
  		$(this).attr("src","images/facebook2.png");
		},
		function(){
			$(this).attr("src","images/facebook1.png");
			}
		); 
	
	tw.hover(function(){
		$(this).attr("src","images/youtube1.png");
		},
		function(){
			$(this).attr("src","images/youtube2.png");
			}
		); 	
		

	//$('label').addClass('active');
	/*baib = 'index.php';
	$('a[href^=baib]').click(function() {
		alert('ehee?...');
		});*/
	//$("[href = 'index.php']").find("li").addClass('nav_indicate');
	var ba = new Array(['index.php'],['about.php'],['linkschool.php'],['contact.php'],['admission.php'],['gallery.php'],['staff_login.php'],['news.php']);
	var bam = new Array($("[href = 'index.php']").find("li"),$("[href = 'about.php']").find("li"),$("[href = 'linkschool.php']").find("li"),$("[href = 'contact.php']").find("li"),$("[href = 'admission.php']").find("li"),$("[href = 'gallery.php']").find("li"),$("[href = 'staff_login.php']").find("li"),$("[href = 'news.php']").find("li"));
	
	for(var i = 0; i < ba.length; i++)
	{
		var url = window.location.href;
		if(url.includes(ba[i]))
		{
			
		bam[i].addClass('nav_indicate');	
			
		}
	}

	
	 var y = screen.height;
	 yy = y/2;
	 var ah = $('#carousel').height();
	 var x2 = $('#p2').height() + ah;
	 var x3 = $('#p3').height() + x2;
	 var x4 = $('#p4').height() + x3;
	 /* var x2 = 500;
	 var x3 = 800;
	 var x4 = 1200;*/
	 var s2 = x2-yy;
	 var s3 = x3-yy;
	 var s4 = x4-yy;
	 
	 var detct = $(document).scrollTop();
	if(detct > ah-yy)
	{
		setTimeout(function(){ $('#p1').css({'transform':'translateX(0px)','-webkit-transform':'translateX(0px)','-ms-transform':'translateX(0px)','-o-transform':'translateX(0px)'}); },500);
		setTimeout(function(){ $('#p2').css({'transform':'translateX(0px)','-webkit-transform':'translateX(0px)','-ms-transform':'translateX(0px)','-o-transform':'translateX(0px)'});},1000);
		setTimeout(function(){$('#p3').css({'transform':'translateX(0px)','-webkit-transform':'translateX(0px)','-ms-transform':'translateX(0px)','-o-transform':'translateX(0px)'});},1500);
		setTimeout(function(){$('#p4').css({'transform':'translateX(0px)','-webkit-transform':'translateX(0px)','-ms-transform':'translateX(0px)','-o-transform':'translateX(0px)'});},2000);
	}
	 
	 
	$(window).scroll(function() {
		$('#p1').delay(800).css({'transform':'translateX(0px)','-webkit-transform':'translateX(0px)','-ms-transform':'translateX(0px)','-o-transform':'translateX(0px)'});
		
	if ($(window).scrollTop() > s2) {
		//alert('s')
		
        $('#p2').delay(800).css({'transform':'translateX(0px)','-webkit-transform':'translateX(0px)','-ms-transform':'translateX(0px)','-o-transform':'translateX(0px)'});
    }
	if ($(window).scrollTop() > s3) {
		//alert('s')
		
        $('#p3').delay(800).css({'transform':'translateX(0px)','-webkit-transform':'translateX(0px)','-ms-transform':'translateX(0px)','-o-transform':'translateX(0px)'});
    }
	if ($(window).scrollTop() > s4) {
		//alert('s')
		
        $('#p4').delay(800).css({'transform':'translateX(0px)','-webkit-transform':'translateX(0px)','-ms-transform':'translateX(0px)','-o-transform':'translateX(0px)'});
    }

});



	var rdmore = $(".newz > span");
	
	clicks=0;
	rdmore.click(function(){
		
		if(clicks==0)
		{
			
			$(this).parent().find('div').css({'height':'400px','overflow-y':'scroll'});
			$(this).text('Read less');
			
				clicks=1;
				return;
		}
		else
		{
			
			$(this).parent().find('div').css({'height':'50px','overflow-y':'hidden'});
			$(this).text('Read more');
			
			

				clicks=0;
				return;
		}
		});
	
	
	
	});
	
	

	
	
	
	