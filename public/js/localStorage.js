/* -----------------
SCOREBOARD in LocalStorage
------------------- */
export function prvniPokus(){

  const iconZ = document.getElementById('icon');
  
  

let total = 0;
let today = 0;

  let data = [
     {
        name: 'scoreBoard',
        totalScore: total,
        todayScore: today
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

    let giveMeTotalScore = () => {
    for (let span of spanWithTotalScore) {
        let data = localStorage.getItem('scoreBoard');
        let dataJSON = JSON.parse(data);
        span.innerText = dataJSON[0].totalScore
        
    }
    }

    giveMeTotalScore();
    
    /* -----------------
    Set TotalScore +1
    ------------------- */
    const totalScore = function() {
        let allX = document.querySelectorAll('.input_Text')
        allX.forEach(element => element.addEventListener('input',(e)=>{
        if(e.target.value === element.getAttribute('data-verb')){

            let myValue = e.target.value;

            //element.style.border = "4mm ridge rgba(0,181,47,0.9)";
            iconZ.innerText = "✔"
            
        
            let data = localStorage.getItem('scoreBoard');
            let dataJSON = JSON.parse(data);
            dataJSON[0].totalScore+=1;
            
            
            localStorage.setItem('scoreBoard', JSON.stringify(dataJSON));

            giveMeTotalScore(); 
        }
        else{null}
            }));
        }(); 
}; 
  
    addTotalScorePoint(); 

}  