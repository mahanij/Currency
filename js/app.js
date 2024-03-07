let currencyType = prompt("What currency do you want to exchange?")

let currencyTYpeSecond = prompt("do you want to convert the " + currencyType + " to?")

let eachHowMany = Number(prompt("How many " + currencyTYpeSecond + "is each " + currencyType + " ?"))

let howMuchcurrency = Number(prompt("How much of this currency do you have?"))

function detectore(x){
    return(x * howMuchcurrency)
}

alert(detectore(eachHowMany))