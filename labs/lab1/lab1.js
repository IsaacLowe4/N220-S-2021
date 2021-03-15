function setup() {
    var yellow = "#ffdd00";
    var mint = "#CBFFFA"
    
    createCanvas(400, 400);
    background(mint);

    fill(yellow);
    circle (200,200,300);
    
    arc(200, 255, 150, 125, 0, PI, CHORD);
    rect(200,255,20,20)
    line(125, 100, 190, 200);
    line(125, 200, 190, 100);
    line(275, 100, 210, 200);
    line(275, 200, 210, 100);
}
  