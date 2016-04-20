window.addEventListener('load', function () {
		function paralax(elem, speed, topi) {
			var scrolled = (window.scrollY) * speed,

		    scrolled= scrolled + topi;
			elem.style.top = scrolled + "px";
		}
		function rotateEl(elem, speed){
                	var scrolled = window.scrollY * speed;
                	elem.style.transform = 'rotate('+ scrolled +'deg)';
      		}

			var rotate1 = document.querySelector('.rotate-1');
			    //  rotate2 = document.querySelector('.rotate-2'),
			    //  rotate3 = document.querySelector('.rotate-3');


window.addEventListener ('scroll', function () {
                paralax(rotate1, 0.3, 20);
                rotateEl(rotate1, 0.4);
            }, false);
//
// window.addEventListener ('scroll', function () {
//                 paralax(rotate2, 0.6, 150);
//                 rotateEl(rotate2, 0.4);
//             }, false);
//
// window.addEventListener ('scroll', function () {
//                 paralax(rotate3, 0.2, 750);
//                 rotateEl(rotate3, 0.45);
//             }, false);

});
