const phrasalAnswer = () =>{
    let iconSpan = document.querySelectorAll('.iconSpan');

    //Get all slide buttons
    const nextBtn = document.querySelectorAll('.carousel-control-next');
    const prevBtn = document.querySelectorAll('.carousel-control-prev');
    //Put all slide buttons into an array
    let btnArray = [];
    btnArray = [...prevBtn, ...nextBtn];



btnArray.map(btn=>{
    btn.addEventListener('click', function(){
        
     for( let icons of iconSpan){
         for(let icon of icons.children){
             icon.classList.add('hidden')
         }
         }
      })
      
    })
}

phrasalAnswer();



let[iconSpan, nextBtn, prevBtn] = document.querySelectorAll(['.iconSpan','.carousel-control-next', '.carousel-control-prev'])

console.log(iconSpan);
console.log(nextBtn);

