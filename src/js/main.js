let startButton = document.querySelector('#start'),
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomelValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value');

let expensesItem = document.getElementsByClassName('expenses-item');


let buttons = document.getElementsByTagName('button'),
    expensesItemButton = buttons[0],
    optionalExpensesButton = buttons[1],
    countBudgetButton = buttons[2];

let optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item');


let chooseIncome = document.querySelector('#choose-income'),
    savings = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent');


let yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

///Guru Code From Previous Parts



let money, time;

function start() {
    money = +prompt("��� ������ �� �����?", "");
    time = prompt("������� ���� � ������� YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("��� ������ �� �����?", "");
    }

}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("������� ������������ ������ �������� � ���� ������", ""),
                b = prompt("�� ������� ���������?", "");

            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {

                console.log("done");

                appData.expenses[a] = b;
            } else {
                console.log("bad result");
                i--;
            }

        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("������ �� 1 ���� ���������� " + appData.moneyPerDay + "���.");
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("��� ����������� ������� ��������!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("��� ������� ������� ��������!");
        } else if (appData.moneyPerDay > 2000) {
            console.log("��� ������� ������� ��������!");
        } else {
            console.log("��������...!");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("������ ����� ����������?"),
                percent = +prompt("��� ����� �������?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("����� � ������ �������� � �����: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("������ �������������� ��������?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function () {

        let items = prompt("��� �������� �������������� �����? (����������� ����� �������)", "");

        if (typeof (items) != "string" || items == "" || typeof (items) == null) {
            console.log("�� ����� ������������ ������ ��� �� ����� �� �����");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("����� ���-�� ���?"));
            appData.income.sort();
        }

        appData.income.forEach(function (itemmassive, i) {
            alert("������� ���. ���������: " + (i + 1) + " - " + itemmassive);
        });

    }


};

for (let key in appData) {
    console.log("���� ��������� �������� � ���� ������: " + key + " - " + appData[key]);
}