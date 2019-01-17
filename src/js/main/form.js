(function(){

	var fields = [].slice.call(document.querySelectorAll('.contact_field'));

	console.log(window.location.hash);
	if (window.location.hash == '#contact_form') {
		document.querySelector('.contact_submit').disabled = true;
		document.querySelector(".contact_form").classList.add('done');
	}


	fields.forEach(function(inputEl){
		if(inputEl.value.trim() !== '') inputEl.parentNode.classList.add('filled');
		inputEl.addEventListener('focus', onInputFocus);
		inputEl.addEventListener('blur', onInputBlur);
	});

	function onInputFocus(ev) {
		inputFocus = true;
		ev.target.parentNode.classList.add('filled');
	}

	function onInputBlur(ev) {
		inputFocus = false;
		if(ev.target.value.trim() === '') {
			ev.target.parentNode.classList.remove('filled');
		}
	}

	document.getElementById("contact_form").addEventListener("submit", function(ev){
		ev.preventDefault();
		if (validate()){
			this.submit()
		}
	});

	document.getElementById("hire").addEventListener("click", function(){
		document.getElementsByName("name")[0].focus();
	});

	function validate(){
		for (var i=0; i<fields.length; i++){
			input = fields[i].value.trim();
			msg = document.querySelector('.contact_error[data-name="'+fields[i].name+'"]');
			if (input === '' || (i===1 && !email(input))){
				msg.classList.add('show');
				break;
			} else{
				msg.classList.remove('show');
				if (i===fields.length-1) return true;
			}
		}
	}

	function email(address){
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(address);
	}

	function serialize(inputs){
		var data = '';
		for(var i=0; i<inputs.length; i++){
			data += inputs[i].name+'='+inputs[i].value+'&';
		}
		return data;
	}
}());
