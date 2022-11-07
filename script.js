const colorWindow =document.getElementById('colorChangeWindow');
const colorCodeText = document.getElementById('colorCode');
const colorButton = document.getElementById('colorButton');

let setColor = "";

function changeColor() {  
  colorWindow.style.backgroundColor= '#' + setColor;
  colorCodeText.innerText = "#" + setColor;
} 

function pickColor(){
  console.log('clicked');
  setColor =  Math.floor(Math.random()*16777215).toString(16);
  changeColor();
}

colorButton.addEventListener('click', pickColor)

  


