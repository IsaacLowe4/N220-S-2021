let someDiv = document.getElementById("squares");
someDiv.addEventListener("click", onMouseClick);


function onMouseClick(event){
    let response = event.target.getAttribute("data-response");
    event.target.style.backgroundColor = response;
}