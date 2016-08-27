(function(){
	var menuBtn = [].slice.call(document.querySelectorAll(".menu_btn")),
		burger = document.querySelector(".menu_opener"),
		menu = document.querySelector(".menu"),
		burgerIcon = burger.children[0],
		isSafari = /constructor/i.test(window.HTMLElement),
		menuOpen=false,
		spacing=75;

	function open(){
		menu.classList.toggle('open');
		TweenLite.to(burger,0.1,{
			scaleX:1.2,
			scaleY:0.8,
			ease:Quad.easeOut,
			onComplete:function(){
				TweenLite.to(burger,0.8,{
					scale:0.8,
					ease:Elastic.easeOut,
					easeParams:[1.1,0.8]
				});
				TweenLite.to(burgerIcon,0.8,{
					scale:1.4,
					ease:Elastic.easeOut,
					easeParams:[1.1,0.8]
				});
			}
		});
		menuBtn.forEach(function(el, i){
			TweenLite.to(el,0.8*(i+1),{
				x:(i+1)*spacing,
				scaleY:0.8,
				scaleX:1.1,
				ease:Elastic.easeOut,
				easeParams:[1.01,0.5]
			});
			TweenLite.to(el,0.8,{
				delay:(0.2*(i+1))-0.1,
				scale:0.8,
				ease:Elastic.easeOut,
				easeParams:[1.1,0.8]
			});
				
			TweenLite.fromTo(el.children[0],0.2,{
				scale:0
			},{
				delay:(0.2*(i+1))-0.1,
				scale:1,
				ease:Quad.easeInOut
			});
		});
	}
	function close(){
		TweenLite.to([burger,burger.children[0]],0.1,{
			delay:0.1,
			scale:1,
			ease:Elastic.easeOut,
			easeParams:[1.1,0.3],
			onComplete:function(){
				menu.classList.toggle('open');
			}
		});
		menuBtn.forEach(function(el, i){
			var dist=Math.abs(i+1);
			TweenLite.to(el,0.8+((-dist)*0.1),{
				x:0,
				scale:0.95,
				ease:Quad.easeInOut
			});
				
			TweenLite.to(el.children[0],0.2,{
				scale:0,
				ease:Quad.easeIn
			});
		});
	}

	function toggle(){
		menuOpen=!menuOpen;
		menuOpen ? open() : close();
	}
	burger.addEventListener('mousedown',function(){
		toggle();
	});

	if (mobile){
		menuBtn.forEach(function(el, i){
			el.addEventListener('click',function(){
				toggle();
			});
		});
	}
	
	
}());