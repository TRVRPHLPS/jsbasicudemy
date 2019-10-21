let money, time;

function start() {

    money = +prompt("Your monthly budget?","");
    time = prompt("Enter Date YYYY-MM-DD","");


    while(isNaN(money) || money == "" || money == null) {

        money = +prompt("Your monthly budget?", '');

    }


}


start();




let appData = {

    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};


// ◊≈–≈« ÷» À FOR

function chooseExpenses() {


    for (let i = 0; i < 2; i++) {

        let a = prompt("Mandatory spends", ""),
            b = prompt("How much it cost?", "");

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null

            && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }

    }



}


chooseExpenses();



appData.moneyPerDay = (appData.budget / 30).toFixed(1);


alert("Daily Budget = " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Minimal money needs")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Medium level of life");
} else if (appData.moneyPerDay > 2000) { console.log("High level of life") }
else { console.log("SomethingWrong") }





function checkSavings() {

    if (appData.savings == true) {

        let save = +prompt("What is your deposit funds?"),
            percent = +prompt("What percent?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("monthly income from your deposit: " + appData.monthIncome);
    }

}


checkSavings();