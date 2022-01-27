import {scoreLocalStorage} from './localStorage.js';


//Counter show how many good answers in a card you have
let counter = 0;
let scoreSpan = document.querySelectorAll('.scoreSpan');
let iconSpan = document.querySelectorAll('.iconSpan');

//Get all slide buttons with parrent DIV element
const nextSlide = document.querySelectorAll('.carousel-control-next');
const prevSlide = document.querySelectorAll('.carousel-control-prev');
//Put all slide buttons into an array
let slidesArray = [];
slidesArray = [...prevSlide, ...nextSlide]

//Function set counter to 0 after clicking at slidebutton
//&& hide all scoreSpan (star icons)

const slidesLoop = (slidesArray, counter) => {
for (let slide of slidesArray){
   slide.addEventListener('click', function(){
      
      for (let score of scoreSpan) {
       counter = 0;
         score.innerText = counter + "/3";
        
      }
      
      //1. Loop iconSpan>icons (SVG)
      //2. loop icons>icon
      for( let icons of iconSpan){
         for(let icon of icons.children){
            icon.classList.add('hidden')
         }
      }
      /*
      for( let score3 of iconSpan.children){
        score3.classList.add('hidden')
         
         score3.children[0].classList.add('hidden')
         score3.children[1].classList.add('hidden')
         score3.children[2].classList.add('hidden')
      }*/
      })
   }
}


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
         
            // When is answer true change input to READONLY and
            //  add counter +1
            e.target.readOnly = true;
            counter+=1;

            
         //LOOP through iconSpan 
         // for every correct answer show one star
         // by removing class HIDDEN

         const getStars = () => {
            for (let i2=0; i2 < iconSpan.length; i2++) {
               if(counter == 1){
                  iconSpan[i2].firstElementChild.classList.remove('hidden');
               } else if( counter == 2 ){
                  iconSpan[i2].children[1].classList.remove('hidden');
               } else if (counter == 3 ){
                  iconSpan[i2].lastElementChild.classList.remove('hidden');
               }else{}       
             }
           } 
             getStars()
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
         
         //For every scoreSpan refresh innerText (SCORE)
         const counterAddOne = () => {
            for (let i=0; i < scoreSpan.length; i++) {
               scoreSpan[i].innerText = counter + "/3";
            }
         } 
         counterAddOne() 

   }))
};


//
//
//Run functions
slidesLoop(slidesArray,counter)
checkAnswers()
scoreLocalStorage()



  
//Show phrasal Verbs

const phrasalVerbAnswer = () => {
   const buttonPhrasal = document.querySelectorAll('.showAnswerPhrasal');
   

   buttonPhrasal.forEach((item) => {
      item.addEventListener('click', (e) => {
         item.nextElementSibling.classList.toggle('hidden')
      })
   })
}

phrasalVerbAnswer()



