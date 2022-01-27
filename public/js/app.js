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

