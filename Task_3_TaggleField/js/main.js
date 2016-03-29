var tags = [];
var inputTextarea = document.querySelectorAll('.input-textarea');

for(var i=0; i< inputTextarea.length; i++){
   createElements(inputTextarea[i]);
};


Array.prototype.forEach.call(inputTextarea, function(el) {
	var input = el.querySelector('input');
	
	conditionallyHideClearIcon();
	input.addEventListener('input', conditionallyHideClearIcon);
  
	el.addEventListener('click', function(e) {
		input.focus();
	});

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

    function createElements (parent) {
        var spanContainer = document.createElement('span');
        spanContainer.setAttribute('id', 'container');
        parent.appendChild(spanContainer);

        var inputEl = document.createElement('input');
        inputEl.setAttribute('id', 'input-area');
        inputEl.setAttribute('class', 'toggle-input');
        inputEl.setAttribute('type', 'text');
        inputEl.setAttribute('placeholder', 'Enter text');
        inputEl.setAttribute('maxlength', '15');
        parent.appendChild(inputEl);

        inputEl.addEventListener('keypress', function(e) {
            if (!e) e = window.event;
            var keyCode = e.keyCode || e.which;
            if (keyCode == '13' && this.value){
                 // Enter pressed
                 addElement(this.previousElementSibling, this, this.value);
                 this.value='';
                 this.size = 1;
                 return false;
            }
        });

        inputEl.addEventListener('keypress',resizeInput);
        inputEl.addEventListener('keyup',resizeInput);
        inputEl.addEventListener('keydown',resizeInput);

        inputEl.addEventListener('focus',function() {
            if(!this.value) {
                this.size = 1;
            }
        });

        inputEl.addEventListener('blur',function() {
        	this.removeAttribute("size");
        });

        var spanClearAll = document.createElement('span');
        spanClearAll.setAttribute('data-clear-input','');
        // var textNode = document.createTextNode("x");
         // spanClearAll.appendChild(textNode);
        spanClearAll.innerHTML = "&times;";
        parent.appendChild(spanClearAll);
    };

    function resizeInput() {
        this.size = ( this.value.length > 1) ? this.value.length : 1;
    };

	function addElement(parent, child, value) {
		var spanChild = document.createElement("span");
		var node = document.createTextNode(value);
		spanChild.appendChild(node);

		var spanX = document.createElement("span");
		spanX.setAttribute('class',"remove");
		//var nodeX = document.createTextNode('x');
        //spanX.appendChild(nodeX);
        spanX.innerHTML = "&times;";

        var span = document.createElement("span");
        span.setAttribute('class',"tag");
		span.appendChild(spanChild);
		span.appendChild(spanX);

	    tags.push(parent.appendChild(span));

	    spanX.addEventListener('click', removeCurrent);
	};


    function removeCurrent() {
        this.parentNode.remove();
    };
