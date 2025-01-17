// no differences between selecting one or many elements
// it's the same as document.querySelector("h1"); = $("h1");
//.css("color", "white"); -> class in jQuery

$("h1").addClass("big-title margin-50");
$("h1").text("Bye");
$("button").html("<em>Don't click me</em>");

// taking the src of the image
$("a").attr("href", "https://www.facebook.com");

// event listener
$("h1").click(function () {
    $("h1").css("color", "green");
});

// selecting all the buttons
$("button").click(function () {     // or $("button").on("click", function () {
    $("h1").css("color", "purple");
});

// key pressed 
$(document).keydown(function(event) {
    $("h1").text(event.key);
});

// adding something before/after (.after()) an element
// .prepend() - inside (before) the element selected (h1) 
// .append() - inside (after) the element selected (h1) 
$("h1").before("<button>New</button>"); 

// remove all the buttons
//$("button").remove();

// hide element
$("h2").hide();

// toggle: show and hide element after clicking the buttons 
$("button").on("click", function () {
    $("h1").toggle();
});

// .fadeOut() -> sudenly disappear element
// .fadeIn() -> sudenly appear element
// .fadeToggle() -> fadeIn and fadeOut together
// .slideUp()/.slideOut()/.slideToggle() -> colapse and uncolapse elements
// .animate({opacity: 0.5}); -> numeric values only 