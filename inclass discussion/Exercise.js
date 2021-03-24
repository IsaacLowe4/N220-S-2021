
//application level variables

let txtGrassCount = document.getElementById("txtGrassCount");
let txtGrassCount2 = document.getElementById("txtGrassCount2");



function setup() {

   createCanvas(400,300);

}



//interaction events

function drawGrass() {



   //bg

   background(91, 252, 236, 100);



   //input cleaning

   let grassCount = Number( txtGrassCount.value );
   let grassCount2 = Number( txtGrassCount2.value );




   for(let i = 0; i < grassCount2; i++) {

    fill("#abe332");

    let heightOffset = Math.random() * 30;

    rect(i*10, 30+heightOffset,10,100-heightOffset);

 }

   for(let i = 0; i < grassCount; i++) {

      fill("#abe332");

      let heightOffset = Math.random() * 30;

      rect(i*10, 30+heightOffset,10,100-heightOffset);

   }

}
