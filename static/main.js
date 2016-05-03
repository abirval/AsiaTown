window.addEventListener('load', function () {
	//Функция параласка. topi- начальное положение эелемента по высоте
  function paralax(elem, speed, topi) {
    var scroll_amount = (window.scrollY) * speed,
        scroll_amount= scroll_amount + topi;
    elem.style.top = scroll_amount + "px";
  }

	//Функция вращения элемента при скроле. Спид регулируетугол
	function rotateEl(elem, speed){
            	var scrolled = window.scrollY * speed;
            	elem.style.transform = 'rotate('+ scrolled +'deg)';
	}

	var rotate1 = document.querySelector('.rotate-1'),
	    rotate2 = document.querySelector('.rotate-2'),
	    rotate3 = document.querySelector('.rotate-3');


	window.addEventListener ('scroll', function () {
	                paralax(rotate1, 0.1, 20);
	                rotateEl(rotate1, 0.25);
	            }, false);

	window.addEventListener ('scroll', function () {
	                paralax(rotate2, 0.3, 150);
	                rotateEl(rotate2, 0.3);
	            }, false);

	window.addEventListener ('scroll', function () {
	                paralax(rotate3, 0.1, 750);
	                rotateEl(rotate3, 0.2);
	            }, false);

	$('.menu-item').on('click', function () {
		var item = $(this),
			contentItem = $('.tabs_item'),
			itemPosition = item.index();

		item.addClass('active-menu-item')
			.siblings()
			.removeClass('active-menu-item');

		contentItem.eq(itemPosition)
			.addClass('active')
			.siblings()
			.removeClass('active');
	});
});
