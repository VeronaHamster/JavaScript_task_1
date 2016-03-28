var tags = [];

Array.prototype.forEach.call(document.querySelectorAll('.input-textarea'), function(el) {
	var input = el.querySelector('input');
	
	conditionallyHideClearIcon();
	input.addEventListener('input', conditionallyHideClearIcon);
  
	el.addEventListener('click', function(e) {
		input.focus();
		
	});

	input.onkeypress = input.onkeydown = input.onkeyup = function() {
		this.size = ( this.value.length > 1) ? this.value.length : 1;
	};
	
	input.onfocus = function() {
		if(!this.value) {
			this.size = 1;
		}
	}
	
	input.onblur = function() {
		this.removeAttribute("size");
	}
  
	el.querySelector('[data-clear-input]').addEventListener('click', function(e) {
		input.value = '';
		var temp = document.getElementById("container");
		temp.remove();
		tags = [];
		conditionallyHideClearIcon();
	});

	function conditionallyHideClearIcon(e) {
		var target = (e && e.target) || input;
		target.nextElementSibling.style.display = target.value ? 'block' : 'none';
	}
});

	//tags = document.querySelectorAll("tag");
	document.getElementById('input-area').onkeypress = function(e){
		if (!e) e = window.event;
		var keyCode = e.keyCode || e.which;
		if (keyCode == '13' && this.value){
		  // Enter pressed
			addElement(this.previousElementSibling, this, this.value);
			this.value='';
			this.size = 1;
			return false;
    }
}
	//добавить крестик в спан
	function addElement(parent, child, value) {
		var span = document.createElement("span");
		span.setAttribute('class',"tag");
		var node = document.createTextNode(value);
		span.appendChild(node);

	   tags.push(parent.appendChild(span));
	}



