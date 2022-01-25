import {prvniPokus} from './localStorage.js';

'use strict';


//For all INPUTS, mark the correct answer by a green INPUT border and the wrong one by red border

let check = document.querySelectorAll('.input_Text')
check.forEach(element => element.addEventListener('input',(e)=>{
   var data = element.getAttribute('data-verb').toString();
   var value = e.target.value;
   if (e.target.value == ""){
    element.style.border = "1px solid blue";
    element.style.color = "black";
   }
   else if (data.startsWith(value)){
     // element.style.border = "5px solid green";
     element.style.color = "green";
   }
  
   else{
      element.style.border = "5px solid red";
      element.style.color = "red";
   }

 
})); 


prvniPokus()

//Show phrasal Verbs

const buttonPhrasal = document.querySelectorAll('.showAnswerPhrasal');
const asnwerPhrasal = document.querySelectorAll('.answerPhrasal');

buttonPhrasal.forEach((item) => {
   item.addEventListener('click', (e) => {
      item.nextElementSibling.classList.toggle('hidden')
   })
})





    
