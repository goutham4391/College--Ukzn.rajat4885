/* Copy or rename to custom.js and enable in the Control Panel to use */
jQuery( document ).ready( function($){

	//Your code here.  Don't nest ready() callbacks
	if(jQuery(window).width()>959){
		var p = ((jQuery(window).width()-1140) /2)+15; 
		jQuery('.ubermenu-submenu.ubermenu-submenu-type-mega').css({'padding-left': p, 'padding-right':p});
	}
});