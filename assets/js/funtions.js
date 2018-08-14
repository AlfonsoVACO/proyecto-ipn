$(document).ready(function(){
	"use strict";
	var hamb = $('.hamburger');
	var header = $('.header');
	var hambActive = false;
	var menuActive = false;
	var ctrl = new ScrollMagic.Controller();

	setHeader();

	$(window).on('resize', function(){ setHeader(); });

	$(document).on('scroll', function(){ setHeader(); });

	getSlide();
	initSvg();
	getToggle();

	/**************************/
	/*		Predefinido  	  */
	/**************************/

	function setHeader(){
		if(window.innerWidth < 992){
			if($(window).scrollTop() > 100){
				header.addClass('scrolled');
			}else{
				header.removeClass('scrolled');
			}
		}else{
			if($(window).scrollTop() > 100){
				header.addClass('scrolled');
			}else{
				header.removeClass('scrolled');
			}
		}
		if(window.innerWidth > 991 && menuActive){
			closeMenu();
		}
	}

	function getSlide(){
		if( $('.hero_slider').length ){
			var owl = $('.hero_slider');

			owl.owlCarousel({
				items: 1,
				loop: true,
				smartSpeed: 800,
				autoplay: true,
				nav: false,
				dots: false
			});

			const setAnimation = function ( _elem, _InOut ){
				var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
				_elem.each ( function () {
					var $elem = $(this);
					var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );
					$elem.addClass($animationType).one(animationEndEvent, function (){
						$elem.removeClass($animationType);
					});
				});
			}

			owl.on('change.owl.carousel', function(event){
				var $currentItem = $('.owl-item', owl).eq(event.item.index);
				var $elemsToanim = $currentItem.find("[data-animation-out]");
				setAnimation ($elemsToanim, 'out');
			});

			owl.on('changed.owl.carousel', function(event){
				var $currentItem = $('.owl-item', owl).eq(event.item.index);
				var $elemsToanim = $currentItem.find("[data-animation-in]");
				setAnimation ($elemsToanim, 'in');
			})

			if($('.hero_slider_left').length){
				var owlPrev = $('.hero_slider_left');
				owlPrev.on('click', function(){
					owl.trigger('prev.owl.carousel');
				});
			}

			if($('.hero_slider_right').length){
				var owlNext = $('.hero_slider_right');
				owlNext.on('click', function(){
					owl.trigger('next.owl.carousel');
				});
			}
		}
	}

	function initSvg(){
		jQuery('img.svg').each(function() {
			var $img = jQuery(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');

			jQuery.get(imgURL, function(data){
				var $svg = jQuery(data).find('svg');

				if(typeof imgID !== 'undefined') {
					$svg = $svg.attr('id', imgID);
				}

				if(typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass+' replaced-svg');
				}

				$svg = $svg.removeAttr('xmlns:a');

				$img.replaceWith($svg);
			}, 'xml');
		});
	}

	function getToggle(){
		if($('.toggle').length) {
			var toggle = $('.toggle');

			toggle.on('click', function(event){
				event.stopPropagation();

				if(!menuActive){
					openMenu();
					$(document).one('click', function cls(e){
						if($(e.target).hasClass('minim')){
							$(document).one('click', cls);
						}else{
							closeMenu();
						}
					});
				}else{
					$('.menu-container').removeClass('active');
					menuActive = false;
				}
			});
		}
	}

	function openMenu(){
		var fs = $('.menu-container');
		fs.addClass('active');
		hambActive = true;
		menuActive = true;
	}

	function closeMenu(){
		var fs = $('.menu-container');
		fs.removeClass('active');
		hambActive = false;
		menuActive = false;
	}

	/// tarjeta de credito

	$('#cardnumber').payment('formatCardNumber');
	$('#cardexpiration').payment('formatCardExpiry');
	$('#cardcvc').payment('formatCardCVC');
	$('#cardnumber').keyup(function(event) {
		$('#label-cardnumber').empty().append($(this).val());
	});

	$('#cardexpiration').keyup(function(event) {
		var data = $(this).val() + '<span>' + $('#cardcvc').val() + '</span>';
		$('#label-cardexpiration').empty().append(data);
	});

	$('#cardcvc').keyup(function(event) {
		var data = $('#cardexpiration').val() + '<span>' + $(this).val() + '</span>';
		$('#label-cardexpiration').empty().append(data);
	});

	$('.button-cta').on('click', function () {
		var proceed = true;
		$(".field input").each(function(){
			$(this).parent().find('path').each(function(){
				$(this).attr('fill', '#dddfe6');
			});

			if(!$.trim($(this).val())){
				$(this).parent().find('path').each(function(){
					$(this).attr('fill', '#f1404b');
					proceed = false;
				});

				if(!proceed){
					$(this).parent().find('svg').animate({opacity: '0.1'}, "slow");
					$(this).parent().find('svg').animate({opacity: '1'}, "slow");
					$(this).parent().find('svg').animate({opacity: '0.1'}, "slow");
					$(this).parent().find('svg').animate({opacity: '1'}, "slow");
				}
			}
		});

		if(proceed){
			$('.field').find('path').each(function(){
				$(this).attr('fill', '#3ac569');
			});
			$('.payment').fadeToggle('slow', function() {
				$('.paid').fadeToggle('slow', 'linear');
			});
		}
	});

	let intervalId = 0;
	const $scrollButton = document.querySelector('.scroll');
	function scrollStep() {
		if (window.pageYOffset === 0) {
			clearInterval(intervalId);
		}
		window.scroll(0, window.pageYOffset - 50);
	}
	function scrollToTop() {
		intervalId = setInterval(scrollStep, 16.66);
	}
	$scrollButton.addEventListener('click', scrollToTop);
});
