let startingX =20;
var blue = "#0000FF";
var green = "#00FF00";
var purple = "#800080";
var x = 16;
function setup(){
  createCanvas(900,400);
}

function draw(){
       background(200);

  for(var i = 1 ; i < 26; i++){

   if( (i % 3 == 0) && (i % 5 == 0) ){
    fill(41, 44, 135);
    rect((32* (i-1)), 282,32, 32);
   }else if (i % 3 == 0){
    fill(purple);
    circle((x+ 32 * (i-1)), 300,32);
   }else if(i % 5 == 0){
    fill(8, 117, 17);
    rect((32 * (i-1)), 282, 32,32);
   }else{
    fill(0);
    circle((x + 32* (i-1)), 300,32);
   }
}
}