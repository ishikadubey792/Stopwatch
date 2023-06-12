// code is wriitern by Ishika 

let btn1 = document.getElementById("start");
let btn2 = document.getElementById("pause");
let btn3 = document.getElementById("reset");
let timer_text = document.getElementById("timer_text");

//add event listener to all buttons
btn1.addEventListener("click" , Start);
btn2.addEventListener("click" , Stop);
btn3.addEventListener("click" , Reset);

let check = false;
let check_for_start = false;
// define start function 
var miliSec = 0;
var sec = 0;
var min = 0;
var hours = 0;
let event_value;
let ms, s , m , h;

function Start(){
    if(check_for_start===true){
        return;
    }

    check = true;
    check_for_start = true;

    event_value = setInterval(function(){
        miliSec += 5;
        if(miliSec === 1000) {
            miliSec = 0;
            sec++;
        }
        if(sec===60){
            sec = 0;
            min++;
        }
        if(min===60){
            min = 0;
            hours++;
        }
        if(hours===24){
            Reset();
        }
        //-> change to string <-

       //for milliseconds
       if(miliSec<10){
           ms = "00" + miliSec;
       } else if(miliSec<100){ 
           ms = "0" + miliSec;
       } else {
           ms = miliSec;
       }

       // for seconds
       if(sec < 10) {
        s = "0" + sec;
       } else {
        s = seconds;
       }

       // for minutes
       if(min<10){
        m = "0" + min;
       } else{
        m = min;
       }

       // for hours
       if(hours<10){
          h = "0" + hours;
       } else {
          h = hours;
       }

       timer_text.innerHTML = h + " : " + m + " : " + s + " : " + ms;
    },5)
}

// define stop function 
function Stop(){
    if(check==false){
        return;
    } 
    clearInterval(event_value);
    start.innerText = "Resume";
    check_for_start = false;
 }

// define reset function 
function Reset(){
    check = false;
    check_for_start = false;
    miliSec = 0;
    sec = 0;
    min = 0;
    hours = 0;
    timer_text.innerHTML = "00 : 00 : 00 : 000"; 
    clearInterval(event_value);
    start.innerText = "Start";
}

