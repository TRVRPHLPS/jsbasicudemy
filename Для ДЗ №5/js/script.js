let menuItem = document.querySelectorAll(".menu-item"),
    menu = document.querySelector(".menu"),
    title = document.querySelector("#title"),
    adv = document.querySelector('.adv'),
    column = document.getElementsByClassName('column'),
    answer = prompt("����� ���� ��������� � ������� Apple?");
    
menu.insertBefore(menuItem[2], menuItem[1]);
document.body.style.backgroundImage = "url('img/apple_true.jpg')";
title.innerHTML = "�� ������ ������ ��������� ������� Apple";
//adv.style.display = 'none';
column[1].removeChild(adv);


document.getElementById('prompt').textContent = answer;

console.log(answer);