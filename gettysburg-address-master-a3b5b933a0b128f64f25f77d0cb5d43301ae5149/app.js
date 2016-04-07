$(document).ready(function() {
    $("body").fadeIn("slow");
});

// Code below makes the body content fade in on load
$(document).load(function() {
    $("body").fadeIn("slow");
});
// Code below controls the text size when buttons are clicked (not the cleanest code: sorry)
$(document).on("click", "#switcher-large", function(event) {
	$("#container").css("font-size", "30px");
});
$(document).on("click", "#switcher-default", function(event) {
	$("#container").css("font-size", "12px");
});
$(document).on("click", "#switcher-small", function(event) {
	$("#container").css("font-size", "10px");
});

// Code below makes h2 tags animate 
$(document).on("click", "h2", function(event) {
	$("h2").animate({'opacity' : '0.25', 'margin-left' : '20px'});
});
// Code below is moving the switcher div on keyboard press
$(document).keydown(function(event) {
  if (event.which == 37) {
  	$("#switcher").css("margin-left", "-=20px");
  }
  else if (event.which == 39) {
  	$("#switcher").css("margin-left", "+=20px");
  }
  else if (event.which == 40) {
  	$("#switcher").css("margin-top", "-=20px");
  }
  else if (event.which == 38) {
  	$("#switcher").css("margin-top", "+=20px");
  }
  else {

  }

});