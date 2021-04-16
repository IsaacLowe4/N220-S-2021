//document variables
let adFound = document.getElementById("badFound");
let numBadFound = document.getElementById("numBadFound");
let userString = document.getElementById("userString");




//function that finds, itemizes, and counds bad words then displays results
function badWordFinder(){
    //variables and array setup
    let amountBad = 0;
    let userInput = userString.value;
    let userArray = userInput.split(" ");
    console.log(userArray);

    //Checks each item in array for bad words
    for(i=0; i < userArray.length; i++){
        if(userArray[i].toUpperCase() == "CLEAR" ){
            amountBad =+ 1;
        }
        if(userArray[i].toUpperCase() == "WATER" ){
            amountBad += 1;
        }
        if(userArray[i].toUpperCase() == "TIRES" ){
            amountBad +=1;
        }
    }
    console.log(amountBad)
    if(amountBad > 0){
        badFound.innerHTML = "We have found bad words within your input, please try again with new words."
    } else{
        badFound.innerHTML = "There were no bad words within your input, Good job!"
    }
    numBadFound.innerHTML = "We found " + amountBad + " bad word(s) in your input."
}