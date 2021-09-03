
//Pro všechny inputy označ zeleně správnou odpověď a červeně špatnou

let all = document.querySelectorAll('#slovo_ID')
all.forEach(element => element.addEventListener('input',(e)=>{
    if(e.target.value === element.getAttribute('data-verb')){
    element.style.border = "5px solid green"
    //slovo.classList.add('tvoj-class')
    }else{element.style.border = "5px solid red"};
    }));

   
    

    (function($) {

    // Show lekci a ukaž další
               $('.dropdown-menu li').on('click',function(){
                var eq = $(this).index();
                
                $('.hideJQ').addClass('hide');
                $('.hideJQ').eq(eq).removeClass('hide');
             });
            
             $('#showAllIrregular').on('click', function(){
                 $('.hideJQ').removeClass('hide');
             })
          
   

})(jQuery);