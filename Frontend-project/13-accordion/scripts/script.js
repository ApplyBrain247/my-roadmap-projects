const questions = document.querySelectorAll('.accordion-qtn');
const answers = document.querySelectorAll('.accordion-ans');

for (const index in questions) {
  questions[index].onclick = function() {
    // hide all answers
    for (const answer of answers) {
      answer.style.display = 'none'
    }

    // show answer of clicked question
    answers[index].style.display = 'block'
  }
}
