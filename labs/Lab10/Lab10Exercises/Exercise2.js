let red = 0;
let green = 0;
let blue = 0;


function blueCalc(event){

 let response = event.target.getAttribute("data-response");
 let newBlue = parseInt(response);
 blue = blue + newBlue
 console.log(blue);
 onChange();
}

function redCalc(event){

   let response = event.target.getAttribute("data-response");
   let newRed = parseInt(response);
   red = red + newRed
   console.log(red);
   onChange();
  }

  function greenCalc(event){

   let response = event.target.getAttribute("data-response");
   let newGreen = parseInt(response);
   green = green + newGreen
   console.log(green);
   onChange();
  }
    
function onChange(){
 document.getElementById("currentColor").innerHTML= "RGB("+red+","+green+","+blue+")";
 document.getElementById("colorRect").style.backgroundColor = "rgb("+red+","+green+","+blue+")"
}
