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



/* -----------------
SCOREBOARD in LocalStorage
------------------- */
 const scoreLocalStorage = () => {

    let total = 0;
    let card = 0;
    
      let data = [
         {
            name: 'scoreBoard',
            totalScore: total,
            cardScore: card 
         }
      ]
     
    //Set totalScore&todayScore in LocalStorage for first visit to 0
    let zeroTotalScore = (data) => {
        
        if (localStorage.getItem('scoreBoard') == null ) {
        localStorage.setItem('scoreBoard', JSON.stringify(data) )
        }
    }
    
    zeroTotalScore(data);
    
    /* -----------------
    function addTotalScorePoint
    ------------------- */
    
    let addTotalScorePoint = () => {
    
        let spanWithTotalScore =  document.getElementsByClassName('totalScore');
    
        let giveMeTotalScore = (items) => {
        for (let item of items) {
            let data = localStorage.getItem('scoreBoard');
            let dataJSON = JSON.parse(data);
            item.innerText = dataJSON[0].totalScore 
        }
        }
    
        giveMeTotalScore(spanWithTotalScore);

        /* -----------------
    function addCardPoint
    ------------------- */
    let scoreSpan = document.querySelectorAll('.scoreSpan');
    let iconSpan = document.querySelectorAll('.iconSpan');

   

    let giveMeCardScore = (items) => {
        for (let item of items) {
           
            let data = localStorage.getItem('scoreBoard');
            let dataJSON = JSON.parse(data);
            item.innerText = "Správně: " + dataJSON[0].cardScore; 
           
            
        }
        }
    
        giveMeCardScore(scoreSpan);

        
        /* -----------------
        Set TotalScore +1
        ------------------- */
        
      
              
    
        const totalScore = function() {
            let allX = document.querySelectorAll('.input_Text')
            allX.forEach(element => element.addEventListener('input',(e)=>{
            if(e.target.value === element.getAttribute('data-verb')){
    
                
                let data = localStorage.getItem('scoreBoard');
                let dataJSON = JSON.parse(data);
                dataJSON[0].totalScore+=1;
                dataJSON[0].cardScore+=1;

                for (let i2=0; i2 < iconSpan.length; i2++) {
                    if(dataJSON[0].cardScore == 1){
                       iconSpan[i2].firstElementChild.classList.remove('hidden');
                    } else if( dataJSON[0].cardScore == 2 ){
                       iconSpan[i2].children[1].classList.remove('hidden');
                    } else if (dataJSON[0].cardScore == 3 ){
                       iconSpan[i2].children[2].classList.remove('hidden');
                    }   
                       else if (dataJSON[0].cardScore == 4 ){
                        iconSpan[i2].lastElementChild.classList.remove('hidden');
                    }else{}       
                  }
                
                localStorage.setItem('scoreBoard', JSON.stringify(dataJSON));
    
                giveMeTotalScore(spanWithTotalScore); 
                giveMeCardScore(scoreSpan); 
                
            }
            else{null}
                }));
            }; 
            totalScore()
    }
      
        addTotalScorePoint()



//Counter show how many good answers in a card you have

let scoreSpan = document.querySelectorAll('.scoreSpan');
let iconSpan = document.querySelectorAll('.iconSpan');

//Get all slide buttons with parrent DIV element
const nextBtn = document.querySelectorAll('.carousel-control-next');
const prevBtn = document.querySelectorAll('.carousel-control-prev');
//Put all slide buttons into an array
let btnArray = [];
btnArray = [...prevBtn, ...nextBtn];

let cards = document.querySelectorAll('.cardIrr');
console.log('locaStorage.js LINE 160');
console.log('.focus() screws the animation of slides');
console.log('its not so smooth then');   
    
//Loop the btnArray 
//AddEventListener after click focus on first INPUT
//then set cardScore in LocalStorage to 0
//then hide STAR ICONS

    for( let btn of btnArray){
        btn.addEventListener('click', function(){
           // let cards = document.querySelectorAll('.cardIrr');

//.focus() screws the animation of slides
//its not so smooth then  
///AND ITS NOT WORK FOR LEFT ARROW :((((f
  
        for(let card of cards){
        card.querySelectorAll('input')[0].focus()
        }

            for( let score of scoreSpan){

                let data = localStorage.getItem('scoreBoard');
                let dataJSON = JSON.parse(data);
                score.innerText = dataJSON[0].cardScore = 0;
                score.innerText = "Správně: 0";
                
                localStorage.setItem('scoreBoard', JSON.stringify(dataJSON));
            }

            //Hide STAR Icons
            for( let icons of iconSpan){
                for(let icon of icons.children){
                   icon.classList.add('hidden')
                }
             }
        })
    }   
    
 }  

 export { scoreLocalStorage };

