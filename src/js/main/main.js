(function() {
	var logo = new Logo();
	logo.loading();
	window.onbeforeunload = function(){ window.scrollTo(0,0); }

// loading
	window.addEventListener('DOMContentLoaded', function(){
		var menu = document.querySelector('.menu'),
			body = document.getElementsByTagName('body')[0],
			img = document.querySelector('.loader_img'),
			link = document.querySelector('.intro_link'),
			start = new TimelineMax();

		start
			.set(body, {overflowY: 'auto'}, 2)
			.set(menu, {zIndex: 5, opacity: 1}, 2)
			.set(link, {zIndex: 5}, 2)
			.addCallback(logo.intro, 2)
			.addCallback(animIntro, 2)
			.addCallback(onResize, 2);
	});
//

// section specific animations
	var projects = [].slice.call(document.querySelectorAll('.proj_el')),
		introText = [].slice.call(document.querySelectorAll('.intro_title, .intro_subtitle, .intro_link')),
		skills = [].slice.call(document.querySelectorAll('.skills_title, .skills_about')),
		icons = [].slice.call(document.querySelectorAll('.skills_icon')),
		links = [].slice.call(document.querySelectorAll('.contact_title, .icons_el, .contact_input, .contact_submit'))
		contactIcons = [].slice.call(document.querySelectorAll('.icons_icon'));

	shuffle(icons);

	function animIntro(){
		TweenMax.staggerFrom(introText, 1, {y: 300, opacity: 0, ease: Expo.easeOut}, 0.1);
	}

	function startAnim(){
		var controller = new ScrollMagic.Controller();
		var skillSlide = new TimelineMax()
			.staggerFrom(skills, 1, {y: 100, opacity: 0, ease: Circ.easeOut, clearProps: 'transform'}, 0.05)
			.staggerFrom(icons, 1, {scale: 0, ease: Back.easeOut}, 0.1, 0.05);
		var contactSlide = new TimelineMax()
			.staggerFrom(links, 1, {y: 100, opacity: 0, ease: Circ.easeOut}, 0.1)
			.staggerFrom(contactIcons, 1, {scale: 0, ease: Back.easeOut}, 0.1, 0.1);

		var sec0 = new ScrollMagic.Scene({
			triggerElement: '#projects',
			triggerHook: 0.8
		})
			.on('enter', function(){ logo.scale.play(); logo.disableHover(); })
			.on('leave', function(){ logo.scale.reverse(); logo.enableHover(); })
			.addTo(controller);

		projects.forEach(function(el, i){
			var rProject = new ScrollMagic.Scene({
				triggerElement: el,
				triggerHook: 0.9
			})
				.setTween(TweenLite.from(el, 1, {y: 100, opacity: 0}))
				.addTo(controller);
		});

		var sec2 = new ScrollMagic.Scene({
			triggerElement: '#skills',
			triggerHook: 0.7
		})
			.addTo(controller)
			.setTween(skillSlide);

		var sec3 = new ScrollMagic.Scene({
			triggerElement: '#contact',
			triggerHook: 0.7
		})
			.addTo(controller)
			.setTween(contactSlide);
	}


//

	window.addEventListener('resize', onResize);

	var anim = false;

	function onResize(ev){
		device();
		if (mobile) {
			logo.disableHover();
			if (anim) {
				anim = false;
			}
		} else {
			logo.enableHover();
			if (!anim) {
				startAnim();
				anim = true;
			}
		}
	}

}());
