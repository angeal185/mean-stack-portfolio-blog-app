
$(document).ready(function($) {
"use strict"
$(".testi-slide").owlCarousel({
    items : 1,
	autoplay:true,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	singleItem	: true,
    navigation : true,
	navText: ["<i class='ion-ios-arrow-thin-left'></i>","<i class='ion-ios-arrow-thin-right'></i>"],
	pagination : true
});
$(".who-slide").owlCarousel({
    items : 1,
	autoplay:true,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	singleItem	: true,
    navigation : true,
	navText: ["<i class='ion-ios-arrow-thin-left'></i>","<i class='ion-ios-arrow-thin-right'></i>"],
	pagination : true
});
});
