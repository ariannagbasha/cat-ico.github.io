var width, height, mobile,
	inputFocus = false,
	currentSec = 0;

function shuffle(a){
	var j, x, i;
  for (i = a.length; i; i -= 1) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
}

function device(){
	width = window.innerWidth;
	height = window.innerHeight;
	mobile = (width < 769 || height < 601) ? true : false;
}

device();
