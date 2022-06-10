let time = 0;
let sw = true;
$(document).ready(function(){
    stopWatch();
});
function init(){
    document.getElementById("time").innerHTML = "00:00:00";
}

//stopWatch 함수
function stopWatch(){
    let hour = 0, min = 0, sec = 0;
    let timer;

    //재생 - play
    $("#starbtn").click(function(){
        if(sw){
            $(".fa").css("color","#f60")
            this.stlye.color = "#555";
            sw = false;

            if(time == 0){
                init();
    }
    };










}