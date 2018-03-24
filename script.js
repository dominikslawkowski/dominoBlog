
var preloaderEl = document.querySelector('.preloader');
setTimeout(function () {

preloaderEl.classList.add('preloader-hiding');

preloaderEl.addEventListener('transitionend', function(){

	this.classList.add('preloader-hidden');
	this.classList.remove('preloader-hiding');
});

}, 2000);


$(".menu-icon").click(function(){
	$("nav > ul").toggleClass("show-menu");
	$("nav").toggleClass("menu-icon-open");
	$("#bar-top").toggleClass("bar-top");
	$("#bar-middle").toggleClass("bar-middle");
	$("#bar-bottom").toggleClass("bar-bottom");
});