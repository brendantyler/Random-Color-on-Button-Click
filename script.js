const colorWindow =document.getElementById('colorChangeWindow');
const colorCodeText = document.getElementById('colorCode');
const colorButton = document.getElementById('colorButton');

let setColor = "";

function changeColor() {  
  colorWindow.style.backgroundColor= '#' + setColor;
  colorCodeText.innerText = "#" + setColor;
} 

function pickColor(){
  setColor =  Math.floor(Math.random()*16777215).toString(16);
 
  changeColor(); 

  /*console.logs to verify clicks and value for user*/
  console.log('clicked');
  console.log(setColor);
}

colorButton.addEventListener('click', pickColor)

  


