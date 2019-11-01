let start = document.querySelector('#start'),
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




console.log(optionalExpensesItems);