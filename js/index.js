//jquery stuff
$(document).ready(function () {
$('#content').hide().fadeIn(3000);

// IIFE

(function() {
	initVars();
	setText('greeting', welcome, false);
	setText('userSign', sign, false);
	setText('tiles', tiles, false);
	setText('subTotal', subTotal, true);
	setText('shipping', shipping, true);
	setText('grandTotal', grandTotal, true);
})();

// Global var define

var greeting = '[not initialized]';
var name = '[not initialized]';
var message = '[not initialized]';
var welcome;

var sign = '[not initialized]';
var tiles;
var subTotal;
var shipping;
var grandTotal;

// Init variables

function initVars() {
	
	// Greeting vars
	greeting = 'Aye yo, '
	name = 'Will'
	message = ', let\'s roll.'
	welcome = greeting + name + message;
	
	// Other vars
	sign = 'Montague House';
	tiles = sign.length;
	subTotal = tiles * 5;
	shipping = 7;
	grandTotal = subTotal + shipping;
	
}

// Update the greeting

function setText(getId, setMsg, isMoney) {
	
	if (isMoney) {
		var temp = document.getElementById(getId);
		temp.textContent = '$' + setMsg;
	} else {
		var temp = document.getElementById(getId);
		temp.textContent = setMsg;
	}
	
}

})