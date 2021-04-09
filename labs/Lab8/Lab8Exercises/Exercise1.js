// var's for height and width in document
let sHeight = 200;
let sWidth = 200;

//style changes for square
let dvStyle = document.getElementById("square");;
dvStyle.style.height = sHeight + "px";
dvStyle.style.width = sWidth + "px";
dvStyle.style.backgroundColor = "#00FF00";
 
//function for changing square size
function sizeChange(){
  //
  sHeight = sHeight * 1.1;
  sWidth = sWidth * 1.1;

  dvStyle.style.height = sHeight + "px";
  dvStyle.style.width = sWidth + "px";
}