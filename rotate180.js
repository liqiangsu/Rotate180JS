function rotateIt (){
	if (typeof jQuery === "undefined") {
	var script = document.createElement('script');
	script.src = 'http://jqueryjs.googlecode.com/files/jquery-1.2.6.min.js';
// script.type = 'text/javascript';
	document.getElementsByTagName('head')[0].appendChild(script);
	}
	var script = document.createElement('script');
	script.src = 'http://raw.github.com/sudevil1989/Rotate180JS/master/jQueryRotate.2.2.js';
// script.type = 'text/javascript';
	document.getElementsByTagName('head')[0].appendChild(script);

	
	var $ = jQuery;
	var images = $('img');	
	if(typeof(images.getRotateAngle()[0]) === 'undefined'){
		images.rotate(180);		
	}else{
		images.rotate(0);
	}
}