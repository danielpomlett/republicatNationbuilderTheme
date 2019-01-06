//Space Room theme scripts
jQuery(document).ready(function(){	
	if (jQuery(window).width() < 960) {
		jQuery('.helpIcon').click (function(){
			jQuery(this).next('.popUp').addClass('showHelp');
		});
		jQuery('.close').click(function(){
			jQuery(this).parent().parent().removeClass('showHelp');
		});
	}else{
		jQuery('.popUp').each().removeClass('showHelp');
	}

	if(jQuery('#underSixteen').hasClass("user-success")) {
	  jQuery('.underSixteenField').addClass('show');
	}
	 jQuery('#underSixteen').on( "click", function() {
	 	alert('!!!!!');
	 	if(jQuery('#underSixteen').is(":checked")) {
		  jQuery('.underSixteenField').addClass('show');
		}else{
			jQuery('.underSixteenField').removeClass('show');
		}

	 });
});

