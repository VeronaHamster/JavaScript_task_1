var tags = [];
var inputTextarea = document.querySelectorAll('.input-textarea');
Array.prototype.forEach.call(inputTextarea , function(el) {
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
        removeAllElements(this);
		conditionallyHideClearIcon();
	});

	function conditionallyHideClearIcon(e) {
		var target = (e && e.target) || input;
		target.nextElementSibling.style.display = target.value ? 'block' : 'none';
	}

	function removeAllElements(target) {
        input.value = '';

        //var temp =  target.parentNode.getElementById("container");
        var temp =  target.parentNode.firstElementChild;

        while (temp.hasChildNodes()) {
            temp.removeChild(temp.lastChild);
        }
        //tags = [];
	};
});


    var len = inputTextarea.length;
    for(var i=0;i<len;i++ ) {
        inputTextarea[i].firstElementChild.nextElementSibling.onkeypress = function(e){
            if (!e) e = window.event;
            var keyCode = e.keyCode || e.which;
            if (keyCode == '13' && this.value){
                // Enter pressed
                addElement(this.previousElementSibling, this, this.value);
                this.value='';
                this.size = 1;
                return false;
            }
        };
    };


	//добавить крестик в спан
	function addElement(parent, child, value) {
		var span = document.createElement("span");
		span.setAttribute('class',"tag");
		var spanChild = document.createElement("span");
		var spanX = document.createElement("span");
		spanX.setAttribute('class',"remove");
        spanX.setAttribute('onClick',"removeCurrent(this)");

		var nodeX = document.createTextNode('x');


		var node = document.createTextNode(value);
		spanChild.appendChild(node);
		spanX.appendChild(nodeX);
		span.appendChild(spanChild);
		span.appendChild(spanX);

	    tags.push(parent.appendChild(span));

      //  spanX.onClick = removeCurrent(spanX);

	  // span.lastChild.addEventListener('click', removeCurrent(this));
	 // parent.lastChild.lastChild.addEventListener('click', removeCurrent(parent.lastChild));
	};


    function removeCurrent(el) {
        el.parentNode.remove();
    };
