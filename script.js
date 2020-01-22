// Select DOM elements
const bodyBg = document.querySelector('body');
const showHex = document.querySelector('#showHex');
const button = document.querySelector('button');

const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

// Add event listener to button
button.addEventListener('click', changeBg);

// Create function that changes background color
function changeBg (){
	let hexCol = '#';
	
	for(let i = 0; i < 6; i++){
		let random = Math.floor(Math.random()*hexValues.length);
		hexCol += hexValues[random];
	}
	bodyBg.style.backgroundColor = hexCol;
	showHex.innerHTML = hexCol;
}