(function(){

	var menuBtns = [].slice.call(document.querySelectorAll('.menu_btn')),
		introLink = document.querySelector('.intro_link'),
		logoLink = document.querySelector('.logo_wrapper'),
		sections = ['#intro', '#projects', '#skills', '#contact'];

	
	introLink.addEventListener('click', function(ev){ scrollLink(ev, this, 1); });
	menuBtns.forEach(function(el, i){
		el.addEventListener('click', function(ev){ scrollLink(ev, this, i); });
	});
	logoLink.addEventListener('click', function(ev){ scrollLink(ev, this, 0); });

	function scrollLink(ev, el, no){
		ev.preventDefault();
		TweenLite.to(window, 1, {
			scrollTo: {y: document.querySelector(sections[no]).offsetTop}
		});
	}

	window.addEventListener('scroll', mobileBtns);

	function mobileBtns(){
		for (var j=0; j<menuBtns.length; j++){
			menuBtns[j].classList.remove('active');
		}
		for (var i=0; i<menuBtns.length; i++){
			if (i===3) { menuBtns[i].classList.add('active'); break; }
			if (window.scrollY < document.querySelector(menuBtns[i+1].getAttribute('href')).offsetTop - height/2) {
				menuBtns[i].classList.add('active');
				break;
			}
		}
	}

}());