
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
    savings: true,
    chooseExpenses: function () {


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
    },
    detectDayBudget: function () {

        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert("Daily Budget = " + appData.moneyPerDay);


    },
    detectLevel: function () {


        if (appData.moneyPerDay < 100) {
            console.log("Minimal money needs")
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Medium level of life");
        } else if (appData.moneyPerDay > 2000) { console.log("High level of life") }
        else { console.log("SomethingWrong") }


    },

    checkSavings: function () {

        if (appData.savings == true) {

            let save = +prompt("What is your deposit funds?"),
                percent = +prompt("What percent?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("monthly income from your deposit: " + appData.monthIncome);
        }

    },

    chooseOptExpenses: function () {


        for (let oeq = 0; oeq < 3; oeq++) {
            let oeqQuest = prompt("Not Mandatory Spends");
            appData.optionalExpenses[oeq] = oeqQuest;

        }


    },


    chooseIncome: function () {


        let items = prompt('What will give you additional income? (write using coma)', '')
        if (typeof (items) != 'string' || items == "" || typeof (items) == null) {

            console.log("ERROR");
        } else {





            appData.income = items.split(', ');
            appData.income.push(prompt('What else can give you some cash?'));
            apData.income.sort();


        }

        appData.income.forEach (function (itemmassive, i) {
            alert("additional incomes: " + (i + 1) + " - " + itemmassive);
    });


// ЧЕРЕЗ ЦИКЛ FOR


chooseExpenses();


detectDayBudget();




detectLevel();




chooseOptExpenses();





checkSavings();





/*
let ans = prompt("", "")
arr = [];

arr = ans.split(',');
console.log(arr);
*/

/*

let arr = ["huihu", "wei", "chan",],
    i = arr.join(', ');

console.log(i)

*/


// Метод массива SORT с доп. колбэк функцией,
//которая позволяет раскидывать числовые эллементы
// массива от меньшего к большему,
/*

let arr = ["1", "15", "4",],
    i = arr.sort(compareNum);

function compareNum(a, b) {

    return a-b

}


console.log(i)
*/