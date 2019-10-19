
var money = prompt("Your monthly budget?")
var time = prompt("Enter Date YYYY-MM-DD")

var appData = {

    Budget: money,
    timeData: time,
    expenses: {
      expOne: prompt("Your Obligatory Expenses"),
      expTwo: prompt("How much it cost?")
    },
    optionalExpenses:{

    },
    income: [],
    savings: false


}


alert(money / 30)