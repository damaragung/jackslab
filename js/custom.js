//header function , hide when scroll down, show when scroll up
var lastScrollTop = 0;
$(window).scroll(function(event){
   var currentScrollTop = $(this).scrollTop();
   if (currentScrollTop > lastScrollTop){
       // downscroll code
       $('.navbar').fadeOut(); 
   } else {
      // upscroll code
      $('.navbar').fadeIn(); 
   }
   lastScrollTop = currentScrollTop;
});

// smooth scrolling when waypoint link clicked
$('.smoothie').click(function (e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 800, 'swing', function () {
        window.location.hash = target;
    });
});

//angular app for repeat portfolio content
(function() {
	var app = angular.module('myApp', []);
	app.controller('PortoController', function(){
   	 this.items = works;
  	});
	var works = [
		{
			title: 'work title 1',
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			link: "www.google.com",
			images: "img/Knogg_Tile_Image.png"
		},
		{
			title: 'work title 2',
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			link: "www.google.com",
			images: "img/Knogg_Tile_Image.png"
		},
		{
			title: 'work title 3',
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			link: "www.google.com",
			images: "img/Knogg_Tile_Image.png"
		},
		{
			title: 'work title 4',
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			link: "www.google.com",
			images: "img/Knogg_Tile_Image.png"
		}
	]
})();