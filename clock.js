setInterval(setClock, 1000);

let hourHand = document.querySelector('[data-hour-hand]');
let minuteHand = document.querySelector('[data-minute-hand]');
let secondHand = document.querySelector('[data-second-hand]');

function setClock() {
 let currentDate = new Date();
  let secondsRatio = currentDate.getSeconds() / 60;
  let minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  let hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock() ;
// clock1
setInterval(setClock1, 1000);
let hourHand1 = document.querySelector('[data-hour-hand1]');
let minuteHand1 = document.querySelector('[data-minute-hand1]');
let secondHand1 = document.querySelector('[data-second-hand1]');
function setClock1() {
    let currentDate1 = new Date();
     let secondsRatio1 = (currentDate1.getSeconds()+16) / 60;
     let minutesRatio1 = (secondsRatio1 + currentDate1.getMinutes()+90) / 60;
     let hoursRatio1 = ((minutesRatio1 + currentDate1.getHours()+12) / 12);
     setRotation1(secondHand1, secondsRatio1);
     setRotation1(minuteHand1, minutesRatio1);
     setRotation1(hourHand1, hoursRatio1);
   }
   
   function setRotation1(element, rotationRatio) {
     element.style.setProperty('--rotation', rotationRatio * 360);
   }
   
   setClock1() ;
   //clock2
   setInterval(setClock2, 1000);
let hourHand2 = document.querySelector('[data-hour-hand2]');
let minuteHand2 = document.querySelector('[data-minute-hand2]');
let secondHand2 = document.querySelector('[data-second-hand2]');
function setClock2() {
    let currentDate2 = new Date();
     let secondsRatio2 = (currentDate2.getSeconds()+40) / 60;
     let minutesRatio2 = (secondsRatio2 + currentDate2.getMinutes()+28) / 60;
     let hoursRatio2 = ((minutesRatio2 + currentDate2.getHours()+3) / 12);
     setRotation1(secondHand2, secondsRatio2);
     setRotation1(minuteHand2, minutesRatio2);
     setRotation1(hourHand2, hoursRatio2);
   }
   
   function setRotation2(element, rotationRatio) {
     element.style.setProperty('--rotation', rotationRatio * 360);
   }
   
   setClock2() ;




