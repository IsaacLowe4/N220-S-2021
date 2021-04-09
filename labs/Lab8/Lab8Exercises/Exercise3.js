let dvStyle = document.getElementById("square");
//style elements
dvStyle.style.width = "100px";
dvStyle.style.height = "100px";
dvStyle.style.backgroundColor = "#CBFFFA"
//creates new div

function blackBG(){
    dvStyle.style.backgroundColor = "black"
    console.log("yes");
}

function blueBG(){
    dvStyle.style.backgroundColor = "#CBFFFA"
    console.log("no");
}