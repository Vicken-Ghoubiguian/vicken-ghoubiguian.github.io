// Definition of global function to apply JavaScript code...
$(function () {

	// Definition of all profile photos in the 'profile_photos_array' array...
	var profile_photos_array = [

		"images/photos/photo_de_profit_1.jpg",
		"images/photos/photo_de_profit_2.jpg",
		"images/photos/photo_de_profit_3.jpg",
		"images/photos/photo_de_profit_4.jpg"
	];

	// Definition of the 'current_profile_photo_index' variable which indicates the current index of 'profile_photos_array' array...
	var current_profile_photo_index = 0;

	//
	setInterval(function(){
		
		//	
	  	$('#flip').attr('src', profile_photos_array[current_profile_photo_index]);

	  		//
		  	current_profile_photo_index = current_profile_photo_index + 1;

		  	//
		  	if(current_profile_photo_index === 4) {

		  		current_profile_photo_index = 0;
		  	}

	},1000);
	
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

	// Defining the 'dialog_to_contact_me' dialog pop-up...
	$("#dialog_to_contact_me").dialog({

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

	// Define the function when the visitor click on the 'my_contact_details' button...
	$("#my_contact_details").on( "click", function() {

		// Opening the 'dialog_to_contact_me' dialog pop-up...
		$("#dialog_to_contact_me").dialog("open");
	});

	// Define the function when the visitor click on the 'my_resume' button...
	$("#my_resume").on( "click", function() {

		// Opening the 'dialog_to_display_my_resume' dialog pop-up...
		$("#dialog_to_display_my_resume").dialog("open");
	});

})