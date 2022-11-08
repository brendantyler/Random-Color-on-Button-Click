<img alt="Random Color Page Example" src="assets/images/random_color_on_button_click_example.png">

### Change Color with Button Click

In this tutorial will you how make a ```Button``` element cause a random background color color change using ```JavaScript``` functions. 

### Main Functions

The program will have the button call on two functions to complete the task. 
The first function will be ```function pickColor```. This will use integrated Javascript functions ```Math.floor()``` and ```Math.random()``` together to round and randomly generate a hexadecimal number and converting them to a string for the use of the next function. The number ```16777215``` is the amount of number combinations when working with ```RGB(255,255,255)``` format.

```JavaScript
function pickColor(){
  /*create random hexadecimal number string*/
  setColor = Math.floor(Math.random()*16777215).toString(16);
 
 /*call next function*/
  changeColor(); 

  /*console.logs to verify clicks and value for user*/
  console.log('clicked');
  console.log(setColor);
}
```

The second function ```function changeColor```, will take the previous string from ```function pickColor```. Adding the ```#``` to the ```hex value``` and use them to update values in the specified divs and edit background color of the ```colorWindow``` div specified in the HTML.

```JavaScript
function changeColor() {  
  colorWindow.style.backgroundColor= '#' + setColor;
  colorCodeText.innerText = "#" + setColor;
} 
```

Click <a href='https://brendantyler.github.io/Random-Color-on-Button-Click/' >Here</a> to see it in action. 


