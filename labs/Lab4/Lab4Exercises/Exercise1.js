let rectColors = ["#f01000","#32a852","#fcba03"]

function setup(){
    createCanvas(400,400);
    
    for(var i = 0; i < rectColors.length; i++){
        fill( rectColors[i]);
        square(100 * i, 150, 100);
    }
}