
import { scoreLocalStorage } from '../js/localStorage.mjs';
import { checkAnswers, phrasalVerbAnswer } from '../js/verbs.mjs';

scoreLocalStorage();
checkAnswers();
phrasalVerbAnswer();

// Povol Pop up funckci

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});






