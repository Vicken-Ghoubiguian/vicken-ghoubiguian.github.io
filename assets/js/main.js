// Definition of global function to apply JavaScript code...
$(function () {
	
	// For 'tabs' jQuery UI effect... 
	var my_online_portfolio_board_tabs = $('#my_online_portfolio_board').tabs({
		
		event: "mouseover"
	});

	my_online_portfolio_board_tabs.find( ".ui-tabs-nav" ).sortable({

      axis: "x",
      stop: function() {

        my_online_portfolio_board_tabs.tabs( "refresh" );
      }
    });
	
	// Define the tooltip's effects...
	$('[data-toggle="tooltip"]').tooltip();

	// Opening the dialog pop-up...
	$("#dialog").dialog();
})