var toggleButton = toggleButton || {};
var removerButton = removerButton || {};


toggleButton.attachComponents('.toggle-button');
removerButton.removeButton('.remove-button', toggleButton.getComponents());

