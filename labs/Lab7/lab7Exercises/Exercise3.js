let uName = document.getElementById("uName");

let Pass = document.getElementById("Pass");

let dvResponse = document.getElementById("response");

function submit(){
    if( (uName.value == "Username") && (Pass.value == "Password")){

        dvResponse.innerHTML = "Success!";

    } else{

        dvResponse.innerHTML = "Wrong information.";

    }
}
