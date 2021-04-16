//doccument variables
let sumDisplay = document.getElementById("sum")
let avgDisplay = document.getElementById("average");
let numInput = document.getElementById("userNums");


//function that averages, splits, and arrays
function numString(){
    //variables
    let sum = 0;
    let numbers = numInput.value;
    
    //splits numInput into an array and creates numArray 
    let numArray = numbers.split(",");
    console.log(numArray);
    
    //runs through each iteration of numArray and adds them together for sum
    for(i=0; i < numArray.length; i++){
        sum = sum + parseInt(numArray[i])
    }

    //averages user input numbers
    let avg = sum / numArray.length;

    //user displays
    avgDisplay.innerHTML = "The average of these numbers is " + avg;
    sumDisplay.innerHTML = "The sum of these numbers is " + sum;
}