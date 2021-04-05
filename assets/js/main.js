// Definition of global function to apply JavaScript code...
$(function () {

	// Definition of all profile photos in the 'profile_photos_array' array...
	var profile_photos_array = [

		"images/photos/photo_de_profit_1.jpg",
		"images/photos/photo_de_profit_2.jpg",
		"images/photos/photo_de_profit_3.jpg",
		"images/photos/photo_de_profit_4.jpg"
	];

	// Definition of all thanks photos in the 'thanks_photos_array' array...
	var thanks_photos_array = [

		{url: "images/photos/remerciement_1.jpg", person: "Sylvie MUFTIKIAN"},
		{url: "images/photos/remerciement_2.jpg", person: "Karine JANET"},
		{url: "images/photos/remerciement_3.jpg", person: "Sonia BOUDERBALA"}
	];

	// Definition of the 'current_profile_photo_index' variable which indicates the current index of 'profile_photos_array' array...
	var current_profile_photo_index = 0;

	// Definition of the 'current_thanks_photo_index' variable which indicates the current index of 'thanks_photos_array' array...
	var current_thanks_photo_index = 0;

	// Definition of the profile photos' timer...
	setInterval(function(){

		//
	  	$('#profile_images_slider').fadeOut(1500, function(){

	  		// Set the current profile photo's path as the 'src' value...
	  		$('#profile_images_slider').attr('src', profile_photos_array[current_profile_photo_index]);
	  	});

	  	//
	  	$('#thank_you_images_slider').fadeOut(1500, function(){

	  		// Set the current thanks photo's url as the 'src' value...
	  		$('#thank_you_images_slider').attr('src', thanks_photos_array[current_thanks_photo_index].url);

	  		// Set the current thanks photo's person as the 'title' value...
	  		$('#thank_you_images_slider').attr('title', thanks_photos_array[current_thanks_photo_index].person);
	  	});

	  	//
	  	$('#profile_images_slider').fadeIn(1500);

	  	//
	  	$('#thank_you_images_slider').fadeIn(1500);

		// 
		current_profile_photo_index = current_profile_photo_index + 1;

		// 
		current_thanks_photo_index = current_thanks_photo_index + 1;

		// 
		if(current_profile_photo_index === 4) {

			// 
			current_profile_photo_index = 0;
		}

		// 
		if(current_thanks_photo_index === 3) {

			// 
			current_thanks_photo_index = 0;
		}

	}, 5000);
	
	// For 'tabs' jQuery UI effect... 
	var my_online_portfolio_board_tabs = $('#my_online_portfolio_board').tabs({
		
		event: "mouseover"
	});

	// Definition of sortable effect of 'tabs'...
	my_online_portfolio_board_tabs.find( ".ui-tabs-nav" ).sortable({

      axis: "x",
      stop: function() {

        my_online_portfolio_board_tabs.tabs( "refresh" );
      }
    });
	
	// Define the tooltip's effects...
	$('[data-toggle="tooltip"]').tooltip({

			show: {

        		effect: "slideDown",
        		delay: 250
      		},

      		hide: {

        		effect: "slideUp",
        		delay: 250
      		}
  	});

	// Defining the 'dialog_to_display_my_resume' dialog pop-up...
	$("#dialog_to_display_my_resume").dialog({

		autoOpen: false,
		show: {
        	effect: "scale",
        	duration: 1000
      	},
      	hide: {
        	effect: "drop",
        	duration: 1000
      	},
		resizable: false,
		height: 880,
		width: 800,
		modal: true
	});

	// Defining the 'dialog_to_open_my_card' dialog pop-up...
	$("#dialog_to_open_my_card").dialog({

		autoOpen: false,
		show: {
        	effect: "scale",
        	duration: 1000
      	},
      	hide: {
        	effect: "drop",
        	duration: 1000
      	},
		resizable: false,
		height: "auto",
		width: 400,
		modal: true
	});

	// Define the function when the visitor click on the 'my_card' button...
	$("#my_card").on( "click", function() {

		// Opening the 'dialog_to_open_my_card' dialog pop-up...
		$("#dialog_to_open_my_card").dialog("open");
	});

	// Define the function when the visitor click on the 'my_resume' button...
	$("#my_resume").on( "click", function() {

		// Opening the 'dialog_to_display_my_resume' dialog pop-up...
		$("#dialog_to_display_my_resume").dialog("open");
	});

})