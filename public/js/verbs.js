
//Pro všechny inputy označ zeleně správnou odpověď a červeně špatnou



let check = document.querySelectorAll('.input_Text')
check.forEach(element => element.addEventListener('input',(e)=>{
   var data = element.getAttribute('data-verb').toString();
   var value = e.target.value;
   if (e.target.value == ""){
    element.style.border = "1px solid blue";
    element.style.color = "black";
   }
   else if (data.startsWith(value)){
      element.style.border = "5px solid green";
      element.style.color = "green";
   }
   else{
      element.style.border = "5px solid red";
      element.style.color = "red";
   }

   if(e.target.value === element.getAttribute('data-verb')){
      element.style.border = "15px solid green"
   }

   
}));






/*
    let allX = document.querySelectorAll('.input_Text')
    allX.forEach(element => element.addEventListener('input',(e)=>{
        if(e.target.value === element.getAttribute('data-verb')){
        element.style.border = "5px solid green"
        
        }else{element.style.border = "5px solid red"};
        }));*/
        



    (function($) {

       

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