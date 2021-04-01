let dvResponse = document.getElementById("dvResponse");

let txtCoat = document.getElementById("txtCoat");

let txtTemperature = document.getElementById("txtTemperature");


function doThing() {

    var temp = Number(txtTemperature.value);

    var coatText = txtCoat.value.toUpperCase();

    if(isNaN(temp)){
       return;
    }

    if(temp < 20 && coatText == "YES") {

        dvResponse.innerHTML = "Wear your coat!";

    }
   }
