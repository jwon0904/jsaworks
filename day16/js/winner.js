let member = prompt("전체 응모자 수 : ");
let winner = new Array(5); //당첨자 수 5명 선정

//발표
document.write("<p>전체 응모자수 : "+ member + "명</p>");
document.write("<p>당첨자 : ");



//추첨
for(var i = 0; i< winner.length; i++){
    let pickedOne = Math.floor(Math.random()*member)+1;
    winner[i] = pickedOne;
    document.write(winner[i] + "번, ")
    for(let j = 0; j < i; j++){
        if(winner[j] == winner[i]){
            i--;
        }
    }
}




document.write("</p>");







