
//runs loop 100 times
for(let i = 0; i < 100; i++){
    //random color for bg (I looked up code for a random color, im cool but im not that cool) https://css-tricks.com/snippets/javascript/random-hex-color/
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    //creates new div
    let dvStyle = document.createElement("div")
    //style elements
    dvStyle.style.backgroundColor = "#" + randomColor
    dvStyle.style.width = "200px"
    dvStyle.style.height = "200px"
    dvStyle.style.float = "left"
    //creates new div
    document.body.appendChild(dvStyle)
    
    //optional disco 
    location.reload()
}