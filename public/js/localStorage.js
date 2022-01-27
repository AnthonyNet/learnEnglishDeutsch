/* -----------------
SCOREBOARD in LocalStorage
------------------- */
export const scoreLocalStorage = function prvniPokus(){


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
    let scoreSpan2 = document.querySelectorAll('.scoreSpan2');

    let giveMeCardScore = (items) => {
        for (let item of items) {
            let data = localStorage.getItem('scoreBoard');
            let dataJSON = JSON.parse(data);
            item.innerText = dataJSON[0].cardScore + "/3"
        }
        }
    
        giveMeCardScore(scoreSpan2);

        
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

                for (let i2=0; i2 < iconSpan2.length; i2++) {
                    if(dataJSON[0].cardScore == 1){
                       iconSpan2[i2].firstElementChild.classList.remove('hidden');
                    } else if( dataJSON[0].cardScore == 2 ){
                       iconSpan2[i2].children[1].classList.remove('hidden');
                    } else if (dataJSON[0].cardScore == 3 ){
                       iconSpan2[i2].lastElementChild.classList.remove('hidden');
                    }else{}       
                  }
                
                localStorage.setItem('scoreBoard', JSON.stringify(dataJSON));
    
                giveMeTotalScore(spanWithTotalScore); 
                giveMeCardScore(scoreSpan2); 
                
            }
            else{null}
                }));
            }; 
            totalScore()
    }; 
      
        addTotalScorePoint(); 



//Counter show how many good answers in a card you have

let scoreSpan2 = document.querySelectorAll('.scoreSpan2');
let iconSpan2 = document.querySelectorAll('.iconSpan2');

//Get all slide buttons with parrent DIV element
const nextSlide = document.querySelectorAll('.carousel-control-next');
const prevSlide = document.querySelectorAll('.carousel-control-prev');
//Put all slide buttons into an array
let slidesArray2 = [];
slidesArray2 = [...prevSlide, ...nextSlide]
    
    for( let slide2 of slidesArray2){
        slide2.addEventListener('click', function(){
            for( let score2 of scoreSpan2){

                let data = localStorage.getItem('scoreBoard');
                let dataJSON = JSON.parse(data);
                score2.innerHTML = dataJSON[0].cardScore = 0
                
                
                localStorage.setItem('scoreBoard', JSON.stringify(dataJSON));
            }
            for( let icons of iconSpan2){
                for(let icon of icons.children){
                   icon.classList.add('hidden')
                }
             }
        })
    }    




















    
    }  


