// JavaScript Document
$(document).ready(function(){
	
	
	
	$("#send").click(function(){
		var firstName=$('#firstName').val();
		var lastName=$('#lastName').val();
		var email=$('#email').val();
		var message=$('#message').val();

		if(firstName && lastName && email && message){
		//alert('firstName='+ encodeURIComponent(firstName) + '&lastName='+ encodeURIComponent(lastName) + '&email='+ encodeURIComponent(email) + '&message='+ encodeURIComponent(message))
		$('#firstName,#lastName,#email,#message').val("");
		call2=$.ajax({
			url:'process.php',
			type:"POST",
			data:'firstName='+ encodeURIComponent(firstName) + '&lastName='+ encodeURIComponent(lastName) + '&email='+ encodeURIComponent(email) + '&message='+ encodeURIComponent(message)
			});
		
		call2.done(function (data) { 
			var $toastContent = data;
			//alert($toastContent);
			var d1 = $('#dialog1');
			 d1.find('p').html($toastContent);
			  
			 var dialog = d1.data('dialog');
            dialog.open();
			
		});
		
		call2.fail(function (jqXHR, textStatus,error) { 
			var $toastContent = error;
			
		
		});
		}else{
			alert('please fill all the fields');	
		}
	});

	
	$("#login").click(function(){
		
		var registration_no=$('#reg_no').val();
		var pin=$('#pin').val();
		var serial=$('#serial').val();
		
		
		if(registration_no && pin && serial){
			//alert('registration_no='+ encodeURIComponent(registration_no) + '&pin='+ encodeURIComponent(pin) + '&serial='+ encodeURIComponent(serial))
		call2=$.ajax({
			url:'http://www.linkskool.com/portal/process_candidate_login.php',
			type:"GET",
			data:'registration_no='+ encodeURIComponent(registration_no) + '&pin='+ encodeURIComponent(pin) + '&serial='+ encodeURIComponent(serial)
			});
		
		call2.done(function (result) { 
		//var $checkrez = msg;
		alert(result)
			
		});
		
		call2.fail(function (jqXHR, textStatus,error) { 
			//var $checkrez = msg;
			//alert($checkrez);
		
			var d1 = $('#dialog1');
			 d1.find('p').html(textStatus);
			 
			 var dialog = d1.data('dialog');
            dialog.open();
			
			//alert($toastContent);
			//Materialize.toast($toastContent, 5000,'rounded red');	 
			
			/* d1.find('p').html($toastContent);
			 d1.removeClass('success');
			 d1.addClass('alert');
			 var dialog = d1.data('dialog');
            dialog.open();*/
		
		});
		}
		else 
		{alert('please fill all the fields');}
	});

	
	  
});