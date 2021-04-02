let shirley = document.querySelector("#shirley");
let salesTip= 2
let saleTotal= 2
function tipDisplay(){
    let subTotal = shirley.value;
    salesTip = subTotal * .20;

    saleTotal = Number(subTotal) + salesTip;
    
    console.log("Tip: $" + salesTip +" Total: $" + saleTotal);


}
