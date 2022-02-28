

/*
 * Copyright (c) 2022 CoddyThemes
 * Author: CoddyThemes
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	
	topor_tm_menu();
	topor_tm_home_rightbox();
	topor_tm_news_image();
	topor_tm_jarallax();
	topor_tm_data_images();
	topor_tm_waypoints();
	topor_tm_imgtosvg();
	topor_tm_contact_form();
	
	jQuery(window).load('body',function(){
		topor_tm_load();
	});
	
});
	
// -----------------------------------------------------
// ---------------    READY LOAD    --------------------
// -----------------------------------------------------

function topor_tm_load(){
	
	"use strict";
	
	jQuery('.topor_tm_home_wrap .leftbox .texts_wrap').addClass('load');
	jQuery('.topor_tm_main_titles_wrap .inner_wrap .page_title h3').addClass('load');
	jQuery('.topor_tm_main_titles_wrap .inner_wrap .breadcrumbs p').addClass('load');
	jQuery('.topor_tm_universal_box_wrap .content.about .shape').addClass('load');
	jQuery('.topor_tm_portfolio_wrap ul li .inner .overlay').addClass('load');
	jQuery('.topor_tm_portfolio_wrap ul li .image_title a').addClass('load');
	
}

// -----------------------------------------------------
// -----------------    NENU    ------------------------
// -----------------------------------------------------	
	
function topor_tm_menu(){
	
	"use strict";
	
	var t1			= new TimelineMax({paused:true});
	
	t1.to(".topor_tm_topbar_wrap .trigger .first", 0.5,{
		y:6,
		rotation:45,
		ease:Expo.easeinOut
	});
	t1.to(".topor_tm_topbar_wrap .trigger .second", 0.5,{
		y:- 6,
		rotation:-45,
		ease:Expo.easeinOut,
		delay:-0.5
	});	
	t1.to(".topor_tm_menu_wrap",0.5,{
		top:"0%",
		ease:Expo.easeinOut,
		delay:-0.5
	});
	t1.to(".topor_tm_topbar_wrap",0,{
		backgroundColor:"transparent",
		delay:-0.5
	});
	t1.staggerFrom(".topor_tm_menu_wrap .inner_wrap ul li", 0.4, {y:-25, opacity:0, ease:Expo.easeinOut},0.1);
	t1.reverse();
	
	jQuery('.topor_tm_topbar_wrap .trigger').on('click',function(){
		t1.reversed(!t1.reversed());
		return false;
	});
	
	jQuery('.topor_tm_menu_wrap .inner_wrap ul li a').on('click',function(){
		t1.reversed(!t1.reversed());
		var element 	= jQuery(this);
		var url			= element.attr('href');
		var time		= t1.totalTime() * 1000;
		setTimeout(function(){
			window.location = url; 
		},time);
		return false;
	});
}

// -----------------------------------------------------
// ---------------    HOME RIGHTBOX    -----------------
// -----------------------------------------------------

function topor_tm_home_rightbox(){
	
	"use strict";
	
	TweenMax.to('.topor_tm_home_wrap .rightbox .inner',1.5,{
			opacity:1,
			scale:1,
		});
}

// -----------------------------------------------------
// ---------------    NEWS IMAGE    --------------------
// -----------------------------------------------------

function topor_tm_news_image(){
	
	"use strict";
	
	TweenMax.to('.topor_tm_news_single_wrap .hero_image_wrap .image',1.5,{
			opacity:1,
			scale:1,
		});
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function topor_tm_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed
		});
	});
}

// -----------------------------------------------------
// -----------------    PROGRESS BAR    ----------------
// -----------------------------------------------------

function tdProgress(container){

	"use strict";

	container.find('.topor_tm_progress').each(function(i) {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.topor_tm_bar_wrap');
		var pBar 			= progress.find('.topor_tm_bar');
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');},(i*500));
	});
}
jQuery('.topor_tm_progress_wrap').each(function() {
	"use strict";
	var pWrap 			= jQuery(this);
	pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
});

// -----------------------------------------------------
// -------------------    COUNTER    -------------------
// -----------------------------------------------------

jQuery('.topor_tm_counter').each(function() {

	"use strict";

	var el		= jQuery(this);
	el.waypoint({
		handler: function(){

			if(!el.hasClass('stop')){
				el.addClass('stop').countTo({
					refreshInterval: 50,
					formatter: function (value, options) {
						return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
					},	
				});
			}
		},offset:'80%'	
	});
});

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function topor_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -----------------------------------------------------
// ---------------   WAYPOINTS    ----------------------
// -----------------------------------------------------

function topor_tm_waypoints(){
	
	"use strict";
//	
	var div		= jQuery('.topor_tm_waypoint_effect');
	
	div.each(function(){
		
		var element	= jQuery(this);
		
		element.waypoint({
			handler:function(){
				element.addClass('load');
			},
			offset:"80%"
		});
		
	});
	
}

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function topor_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.html').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function emailTest(input){
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input);
}

function topor_tm_contact_form(){
	
	"use strict";
// 	alert("j1");
// 	$("#send_message").attr("disabled", true);
	$("input").keypress(function(){

	    	var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var phone 	= jQuery(".contact_form #phone").val();
		
		if(name===''||email===''||phone===''||message==='')
// 			$("#send_message").attr("disabled", true);
		else if (emailTest(email))
// 			$("#send_message").attr("disabled", true);
		else
// 			$("#send_message").attr("disabled", false);
	});
	
	$(".topor_tm_button").click(function(){
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var phone 	= jQuery(".contact_form #phone").val();
		
		if(name===''||email===''||phone===''||message==='')
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		else if (emailTest(email))
			jQuery('div.email_notice').slideDown(500).delay(2000).slideUp(500);
	});
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var phone 	= jQuery(".contact_form #phone").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
// 		alert("j2");
		//checking for blank fields	
		if(name===''||email===''||phone===''||message===''){
// 			$("#send_message").attr("disabled", true);
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
// 			alert("j3");
		}
		else if (emailTest(email)){
// 			$("#send_message").attr("disabled", true);
			jQuery('div.email_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
// 			$("#send_message").attr("disabled", false);
// 			alert("j4");
			
			
			
// 			$.ajax({
// 			    type : "POST",  //type of method
// 			    url  : "../mail.php",  //your page
// //  			    data : { name : name, email : email, message : message, phone : phone },// passing the values
//  			    data:$('#contact_form').serialize(),
// 			    success: function(res){  
// 						 alert("ajaxs");
// 		            },
// 			    error: function(XMLHttpRequest, textStatus, errorThrown) { 
//                                 alert("Status: " + textStatus); alert("Error: " + errorThrown); 
//                             }       
// 			});
			
			
			
			
			
// 		const form = document.getElementById('contact-form');
// 		form.addEventListener('submit', formSend);

// 		async function formSend(event) {
// 			event.preventDefault();

// 			let error = formValidate(form);
// 			let formData = new FormData(form);

// 			if (error === 0) {
// 				/*LOADER*/
// 				form.classList.add('_sending');
// 				/*LOADER*/
// 				let response = await fetch('mail.php', {
// 					method: 'POST',
// 					body: formData
// 				});
// 				if (response.ok) {
// 					let result = await response.json();
// 					alert(result.message);
// 				// 	formPreview.innerHTML = '';
// 					form.reset();
// 					/*LOADER*/
// 					form.classList.remove('_sending');
// 					/*LOADER*/
// 				} else {
// 					alert('Error!');
// 					/*LOADER*/
// 					form.classList.remove('_sending');
// 					/*LOADER*/
// 				}
// 			} else {
// 				alert('Fill all the fields');
// 			}
			
			
			
			
			
// 			Email.send({
// 				    Host : "smtp.gmail.com",
// 				    Username : "info@toporbarber.us",
// 				    Password : "fdf6059e-314e-403b-b334-b29471b18b9e",
// 				    To : 'info@toporbarber.us',
// 				    From : "noreply@toporbarber.us",
// 				    Subject : "Website Form",
// 				    Body : "Name: " + document.getElementById("name").value
// 						+ "<br> Email: " + document.getElementById("email").value
// 						+ "<br> Phone: " + document.getElementById("phone").value
// 						+ "<br> Email: " + document.getElementById("email").value
// 			    }).then(
// 				    message => alert("Message Sent Succesfully")
// 			    );
			
			
// 			alert("j5");
// 			// Returns successful data submission message when the entered information is stored in database.
// 			jQuery.post("modal/contact.html",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_phone: phone}, function(data) {
				
// // 				alert("j5");
// 				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
// 				if(jQuery(".contact_form .returnmessage span.contact_error").length){
// 					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);	
// // 					alert("j6");
// 				}else{
// 					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
// 					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
// // 					alert("j7");
// 				}
				
// // 				alert("j8");
// 				if(data===""){
// 					jQuery("#contact_form")[0].reset();//To reset form fields on success
// // 					alert("j9");
// 				}
				
// 			});
// // 			alert("j10");
		}
// 		alert("j11");
		return false; 
	});
}
