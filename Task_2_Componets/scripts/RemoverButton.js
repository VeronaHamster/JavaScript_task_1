var removerButton = (function() {
    var components = [];

    function RemoverButton(){
    	this.handleClick = this.handleClick.bind(this);
    };

    RemoverButton.prototype._element;

    RemoverButton.prototype.handleClick = function(){
        this.button();
    };

    RemoverButton.prototype.button = function(){
       var i;
       	var length = components.length;
       	for(i = 0; i < length; i++) {
       	    if(components[i] != null && !components[i].isDown) {
       	    	components[i].detach();
       	    	components[i] = null;
       	    }
       	}
    };

    RemoverButton.prototype.attach = function (elem){
    	if(!elem){
    		throw new Error('!!!!!');
    	}
    	this._element = elem;
    	this._element.addEventListener('click', this.handleClick);
    };


   var removeButton = function(selector,comp) {
        components = comp;
        var el = document.querySelectorAll(selector);
        if(!el) {
            throw new Error('!!!!');
        }
        for (var i = 0, len = el.length; i<len; i++) {
             var component = new RemoverButton();
             component.attach(el[i]);
        }
    };

    return {
        removeButton : removeButton
    }

})();