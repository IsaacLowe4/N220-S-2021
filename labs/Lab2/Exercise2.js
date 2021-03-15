function setup() { 
    createCanvas(400, 400);

}
function draw() {
  background(244, 248, 252);
  circle(mouseX, mouseY, 100);
  var red = "#ff0000";
  var blue= "#0099ff";
  
  if(mouseX > 200){
    fill(red);
  } 
  if (mouseX < 200) {
    fill(blue);
  };
  circle(mouseX, mouseY, 100)
}
  