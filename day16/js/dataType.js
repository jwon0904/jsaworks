// number
window.onload = function(){

let num1 = 10;
let num2 = 10.2;
let num3 = 1e+2;

console.log(num1 + ", "+ num2 + ", "+num3);

//string
let str1 = "문자";
let str2 = "문자는 '문자'";
let str3 = '문자는 "문자"';
let str4 = 'you\'re too smart...';
console.log(str1 + ","+str2+","+str3+","+str4);

//boolean
let com1 = (5>4);
let com2 = (5<4);

console.log(com1 + ", "+ com2);

//underfined
let storage; //변수 선언 후 값을 입력하지 않음
// storage = "a";
console.log(storage);

//null
let gnb = document.getElementById('gnb');

console.log(gnb);

// typeof
let type1 = 10 ;
let type2 = '문자' ;
let type3 = true ;
console.log(typeof (type1) + ", "+typeof type2 + ", "+typeof type3);



}





