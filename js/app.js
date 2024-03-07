let currencyType = prompt("What currency do you want to enter?")

let eachHowManyRials = Number(prompt("How many rials is each " + currencyType + " ?"))

let howMuchcurrency = Number(prompt("How much of this currency do you have?"))

alert("each " + currencyType + " = " + howMuchcurrency * eachHowManyRials + " rials")