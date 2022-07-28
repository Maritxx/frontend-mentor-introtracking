//The $ sign makes clear it's using jQuery.
//Syntax goes $(selector).action();
//Selector finds/selects an HTML element.

function pageHeight()  {
	var headerHeight = $("header").outerHeight();
	//Outerheight gets the height (including padding/border/margin) for the first element that matches the selector.
	//Sets a variable that gets the height from the header.

	var footerHeight = $("footer").outerHeight();
	//Sets a variable that gets the height from the footer.

	var remainHeight = headerHeight + footerHeight;
	//Sets a variable that is the sum of both the header and footer.

	$("main").css("min-height", "calc(100vh - " + remainHeight + "px)");
	//.css can be used to set a style property for the selected element. 
	//When setting the style, select the property you wish to change, followed by the value it should get.
	//Changes the min-height of 'main' to be 100vh minus the height of the footer and header.
}

$(window).on("load resize orientationchange", function () {
  pageHeight();
});	
//The 'window' selector represents an open window in the browser.
//The .on action attaches one or more event handlers to the selected element.
//The function within the .on action specifies that it needs a function to run.
//Runs the pageHeight function when the page gets loaded, resized or if the orientation (portrait or landscape) is changed. 






function expandMenu() {
	$(".menu-mobile__dropdown").toggleClass('expand');
}
//Adds the class of 'expand' when it does not currently have this. Removes the class when it does.


function navToggle() {
	$("#nav-icon").toggleClass('open');
}
//Adds the class of 'open' when it does not currently have this. Removes the class when it does.


//MIGHT NEED $(function() {
$("button#menu-button").click(function() {
	expandMenu();
	navToggle();
});
//MIGHT NEED });
//Runs the functions 'expandMenu' and 'navToggle' when the button gets clicked.
