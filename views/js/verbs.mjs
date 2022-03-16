

  const checkAnswers = () => {


   //For all INPUTS, mark the correct answer by a green INPUT border and the wrong one by a red border
   
   let check = document.querySelectorAll('.input_Text')
   check.forEach(element => element.addEventListener('input',(e)=>{
      
      var data = element.getAttribute('data-verb').toString();
      var value = e.target.value;
      
      
            if (value == ""){
            element.style.border = "1px solid blue";
            element.style.color = "black";
            }
   
            else if (data === value){
               e.target.readOnly = true;
               element.style.border = "3px ridge rgba(0,181,47,0.9)";
               element.parentElement.style.background = "green";
               element.style.color = "green";
              
            }
            //Check letter if is written in correct order
            //
            else if (data.startsWith(value)){
            element.style.color = "green";
            }
            
            else{
               element.style.border = "3px solid red";
               element.style.color = "red";  
            }
      }))
   }
   
   //Show/hide toggle Phrasal Verbs answer´s button
   
    const phrasalVerbAnswer = function() {
      let buttonPhrasal = document.querySelectorAll('.showAnswerPhrasal');
            
      buttonPhrasal.forEach((item) => {
         item.addEventListener('click', function(){
            item.nextElementSibling.classList.toggle('hidden');
            
         })
      })
   }
   

   
   checkAnswers();
   phrasalVerbAnswer();