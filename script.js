
let money = prompt("Your monthly budget?"),
    time = prompt("Enter Date YYYY-MM-DD");

var appData = {

    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};


// ◊≈–≈« ÷» À FOR


for (let i = 0; i < 2; i++) {

    let a = prompt("Mandatory spends", "");
        b = prompt("How much it cost?", "");

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null

        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else { 
    console.log ("bad result");
    i--;
    }

};




// ◊≈–≈« ÷» À WHILE 

/*

let i = 0;
while (i < 2) {

    let a = prompt("Mandatory spends", "");
    b = prompt("How much it cost?", "");

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null

        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log("bad result");
        i--;
    }


    i++;
}


*/


// ÷» À ◊≈–≈« DO WHILE

/*

let i = 0;

do {

    let a = prompt("Mandatory spends", "");
    b = prompt("How much it cost?", "");

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null

        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log("bad result");
        i--;
    }


    i++;
}

while (i < 2);

*/



appData.moneyPerDay = appData.budget / 30;


alert("Daily Budget = " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Minimal money needs")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Medium level of life");
} else if (appData.moneyPerDay > 2000) { console.log("High level of life") }
else { console.log("SomethingWrong") }