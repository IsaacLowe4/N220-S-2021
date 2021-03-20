
function setup() { 
    createCanvas(600, 800);
    cx = mouseX;//global X, unsure if it would work without but didnt have time to risk for beauty
    currentY = mouseY; //global variable for mouse Y due to p5 mouseY not working outsite p5 functions for some reason
}
function draw() {
  cx = width - mouseX;// inverse of mouseX
  fill(cx) // Changes color brighter if closer to lower X value
  background(50);
  //Creates downward animation for if mouse is pressed, then returns otherwise
  if(mouseIsPressed){
    currentY += 5
  }else{
    currentY = mouseY // returns after release
  }
  for(let i = 0; i < 10; i++){
    circle(mouseX, currentY + i * 20,cx / 2); //creates 10 circles on Y postion, division is to make radius slightly smaller cause it got too big.
  }
  //attempt at barrier, will crash window be careful
  /*while(currentY + 190 > 800){
   currentY = currentY
  //}/*else if(mouseY > currentY){
    currentY= mouseY
  }*/
}