let results = document.getElementById("results");

function onClick(event){
   //get attribute
   let response = event.target.getAttribute("data-response");
   console.log(response);
   results.innerHTML = response;

   


}