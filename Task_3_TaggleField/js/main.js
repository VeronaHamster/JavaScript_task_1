
var tags = [];
tags = document.querySelectorAll("tag");
document.getElementById('toggle-input').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
      // Enter pressed
      addElement(this.parentElement, this, this.value);
      this.value='';
     // alert("fghfhfhfhfhfg");
      return false;
    }
}


Array.prototype.forEach.call(document.querySelectorAll('.input-textarea'), function(el) {
  var input = el.querySelector('input');

  conditionallyHideClearIcon();
  input.addEventListener('input', conditionallyHideClearIcon);
  el.querySelector('[data-clear-input]').addEventListener('click', function(e) {
    input.value = '';
    conditionallyHideClearIcon();
  });

  function conditionallyHideClearIcon(e) {
    var target = (e && e.target) || input;
    target.nextElementSibling.style.display = target.value ? 'block' : 'none';
  }
});


function addElement(parent, child, value) {
    var span = document.createElement("span");
    span.setAttribute('class',"tag");
    var node = document.createTextNode(value);
    span.appendChild(node);

    parent.insertBefore(span,child);
}


/*function detectEnterPressed(e) {
    var characterCode
    if(e && e.which){ // NN4 specific code
        e = e
        characterCode = e.which
    }
    else {
        e = event
        characterCode = e.keyCode // IE specific code
    }
    if (characterCode == 13){
        return true;
    } // Enter key is 13
    else return false;
}*/