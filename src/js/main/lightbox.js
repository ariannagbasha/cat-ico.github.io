(function() {
	var projects = [].slice.call(document.querySelectorAll('.proj_el')),
		lightbox = document.querySelector('.lightbox'),
		close = document.querySelector('.lightbox_close'),
		left = document.querySelector('.lightbox_left'),
		right = document.querySelector('.lightbox_right'),
		main = document.querySelector('.main'),
		current = 0;

	projects.forEach(function (el) {
		el.addEventListener('click', function (ev) {
			main.classList.add('lb');
			ev.preventDefault();
			var proj = el.getAttribute('href');
			new TimelineMax()
				.fromTo(lightbox, .5, {display: 'block', opacity: 0, scale: 0}, {scale: 1, opacity: 1})
				.set(document.querySelector(proj), {display: 'block', x: 0, opacity: 1});
			current = parseInt(proj.slice(-1), 10);
			arrows();
		});
	});

	left.addEventListener('click', function(){
		var prev = document.querySelector('#proj'+current),
			next = document.querySelector('#proj'+(current-1));
		new TimelineMax()
			.to(prev, 0.5, {x: 500, opacity: 0, display: 'none'})
			.fromTo(next, 0.5, {x: -500, opacity: 0}, {x: 0, opacity: 1, display: 'block'});
		current--;
		arrows();
	});

	right.addEventListener('click', function(){
		var prev = document.querySelector('#proj'+current),
			next = document.querySelector('#proj'+(current+1));
		new TimelineMax()
			.to(prev, 0.5, {x: -500, opacity: 0, display: 'none'})
			.fromTo(next, 0.5, {x: 500, opacity: 0}, {x: 0, opacity: 1, display: 'block'});
		current++;
		arrows();
	});

	close.addEventListener('click', function(){
		main.classList.remove('lb');
		new TimelineMax()
			.fromTo(lightbox, .5, {scale: 1, opacity: 1}, {scale: 0, opacity: 0, display: 'none'})
			.set(document.querySelector('#proj'+current), {display: 'none'});
	});

	function arrows(){
		left.style.display = "block";
		right.style.display = "block";
		if (current === 1) left.style.display = "none"; 
		if (current === 6) right.style.display = "none"; 
	}

}());