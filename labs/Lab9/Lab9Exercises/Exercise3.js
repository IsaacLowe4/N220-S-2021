let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];
let dvCreate= document.getElementById("dvCreate");

for(i = 0; i < 3; i++){
    let newEl = document.createElement("div");
    newEl.style.height = objects[i].height +"px";
    newEl.style.width = objects[i].width + "px";
    newEl.style.backgroundColor = objects[i].color;
    dvCreate.appendChild(newEl);
}
