// ������ � ������ ����������� IF

/*if (2 * 4 == 7) {
    console.log("�����!")
} else { console.log("�� �����!") }
*/


// ������ � ������ ����������� IF, ELSE IF, ELSE

/*

let num = 50;

if (num < 49) {

    console.log("�����")


} else if (num > 100) {

    console.log ("�����")

} else { console.log("������ ������ ����� ��� �� �����") }



*/


//��� ����� ���������� ��������� �������� - �������� ��������� ������� IF ELSE. ��������� ������ ��� ��� ���������
// ������ - ������� - �� ����� �������
// ������ - ��� ������ ���� ��� - ����� ����� ������� � ����� ����������
// ������ - ��� ������ ���� ��� - ����� ���������

/*
let num = 50;

(num == 50) ? console.log("�����!") : console.log("�������!")

*/



//������ SWITCH - �������� �������������� � ������� ����� �������� ������� �������
// ����� - �������� � ������ ����� ����� - ����� ������������ ������ ���� ������ =

/*
let num = 50;

switch (num) {
    case num < 49:
        console.log("������� �����!!!");
        break;
    case num > 100:
        console.log("����� �����");
        break;
    case num > 80:
        console.log("�� �� ������ ��� �����");
        break;
    case num = 50:
        console.log("���� �� �������� �����");
        break;
    default:
        console.log("�� ��������� �Ѩ �Ө��!");
        break;

} 

*/



// ������ ����������� ���� WHILE

// let num = 40;

//while (num < 55) /* ������� ����������� ��������� �����*/ { 

    /* ��� ������ ���� ���� �� ������ ������� ����������� */ 

  //  console.log(num)
   // num++;

//} 


// ������ ���� ����� DO

//let num = 50;

//do /* ������ ����� ����� ����� */ {
 //   console.log(num);
   // num++
//}
/* �� ��� ��� ���� �� ��������� �� ����� ����� */
//while (num < 55); 


// ������ ���� ����� �������� FOR (��������� ����������� � ����� �����������) {����� ����������� ����������} - �Ѩ ��� ������� ����� 

/*
for (let i = 1; i < 8; i++) {
    console.log(i);
}
*/

/*
//�� �� �����, �� � �������, ��� ������ �������� ����� IF �� ���������� �������� ����� IF

// C �������� �� ��������



for (let i = 1; i < 8; i++) {
    if (i == 6) {

        console.log("���� ��� �����")

    }
    console.log(i);
}



// C ������� �� ��������

for (let i = 1; i < 8; i++) {
    if (i == 6) {

        break

    }
    console.log(i);
}

// �� �� ����� �� � ���������� CONTINUE, ������� �������� ������� ����� ��������!


for (let i = 1; i < 8; i++) {
    if (i == 6) {

        continue

    }
    console.log(i);
}

*/

/*

function first() {

    setTimeout(function (){
            console.log(1);
        }, 500 );
}


function second() {

    console.log(2);

}

first();
second();



function learnJS(lang, callback) {

    console.log("I Learn " + lang);
    callback();

}


function done() {
    console.log("I complete third lesson")

}


learnJS("Javascript", done);

*/