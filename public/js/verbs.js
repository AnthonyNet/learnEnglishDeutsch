import {scoreLocalStorage} from './localStorage.js';

const checkAnswers = () => {


//For all INPUTS, mark the correct answer by a green INPUT border and the wrong one by red border

let check = document.querySelectorAll('.input_Text')
check.forEach(element => element.addEventListener('input',(e)=>{
   
   var data = element.getAttribute('data-verb').toString();
   var value = e.target.value;
   
   
         if (value == ""){
         element.style.border = "1px solid blue";
         element.style.color = "black";
         }

         else if (data === value){
            element.style.border = "4mm ridge rgba(0,181,47,0.9)";
         }
         //Check letter if is written in correct order
         //
         else if (data.startsWith(value)){
         element.style.color = "green";
         }
         
         else{
            element.style.border = "5px solid red";
            element.style.color = "red";  
         }
   }))
};


//
//
//Run functions

checkAnswers();
scoreLocalStorage();



  
//Show phrasal Verbs

const phrasalVerbAnswer = () => {
   const buttonPhrasal = document.querySelectorAll('.showAnswerPhrasal');
   

   buttonPhrasal.forEach((item) => {
      item.addEventListener('click', (e) => {
         item.nextElementSibling.classList.toggle('hidden')
      })
   })
}

phrasalVerbAnswer();


(function($) {

       
   $('.hideJQ').not(':first').addClass('hide');
   // Ukaž zvolenou lekci a schovej ostatní
              $('.dropdown-menu li').on('click',function(){
               var eq = $(this).index();
               
               $('.hideJQ').addClass('hide');
               $('.hideJQ').eq(eq).removeClass('hide');
            });
           
            $('#showAllIrregular').on('click', function(){
                $('.hideJQ').removeClass('hide');
            })

})(jQuery);
