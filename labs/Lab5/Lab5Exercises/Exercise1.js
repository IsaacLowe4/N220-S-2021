let value = 0;
let colors=["#eb4034","#fcba03","#4287f5","#32a852"]
function setup(){
    createCanvas(400,300);
    
}
function draw(){
    fill(colors[value]);
    circle(200,150,55)
}

function mouseClicked() {
    value = Math.floor(Math.random() * 4);
    console.log(value);
  }