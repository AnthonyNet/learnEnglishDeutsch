import {scoreLocalStorage} from './localStorage.js';
import {checkAnswers, phrasalVerbAnswer} from './verbs.js';


checkAnswers()
scoreLocalStorage()
phrasalVerbAnswer()

// Povol Pop up funckci

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

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