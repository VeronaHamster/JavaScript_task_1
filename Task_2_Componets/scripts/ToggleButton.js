var toggleButton = (function (){
   var components = [];

   var getComponents = function(){
        return components;
   };

   function ToggleButton(){
   	this.handleClick = this.handleClick.bind(this);
   };

   ToggleButton.prototype._element;

   ToggleButton.prototype.isElement = function(){
        return this._element ? true : false;
   }

   ToggleButton.prototype.handleClick = function(){
    	this.toggle();
   };

   ToggleButton.prototype.toggle = function(){
       this.isDown = !this.isDown;
   	this._element.classList.toggle(this.Css.DOWN);
   };

   ToggleButton.prototype.attach = function (elem){
       if(!elem){
   		throw new Error('!!!!!');
   	}
   	this._element = elem;
   	this._element.addEventListener('click', this.handleClick);
   };

   ToggleButton.prototype.detach = function() {
           this._element.removeEventListener('click', this.handleClick);
           this._element = null;
   };

   ToggleButton.prototype.Css ={
   	DOWN: 'down'
   };

   var attachComponents = function(selector){
       var els = document.querySelectorAll(selector);
       var i, component;
    	var length = els.length;
    	for(i = 0; i < length; i++) {
    		component = new ToggleButton();
    		component.attach(els[i]);
    		components[i]=component;
    	}
    };

   return {
       attachComponents : attachComponents,
       getComponents : getComponents
    }
})();


