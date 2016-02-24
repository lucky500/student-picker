// 'use strict';

var button;
var randomButton;
var myArray = [];
var list = document.getElementById("greatList");
var item = document.getElementById("addItems").value;
//console.log(item);

document.addEventListener('DOMContentLoaded', init);

function init(){
	 button = document.getElementById('addButton');
	

	document.querySelector('#addButton').addEventListener('click', addField);
	document.querySelector('#random_button').addEventListener('click', getRandom);
	//button.addEventListener('click', getItem)

}

function addField(){
	var item = document.getElementById("addItems").value;
	var items = item.split(',');
	for (var i=0; i < items.length; i++){
		var newField = document.createElement('li');
		newField.appendChild(document.createTextNode(items[i]));
		list.appendChild(newField);
		myArray.push(items);
	}	
}

function getRandom(){
	
	var randomize = myArray[Math.floor(Math.random() * myArray.length)];
	var newRandomItem = document.getElementById("newRandom");
	if(randomize != undefined){
		newRandomItem.innerHTML = randomize;

		return randomize;
	} else {
		return false;
	}

};


