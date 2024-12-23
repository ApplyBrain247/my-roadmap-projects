const cards = document.querySelectorAll('.card');
const showAnswerButton = document.querySelector('.showAnswer');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const progressBar = document.querySelector('.progress');
const progressText = document.querySelector('.total-counts');
const totalQuestions = cards.length;

let currentQuestionIndex = 0;
let isAnswerShown = false;

updateProgressBar();

showAnswerButton.addEventListener('click', toggleAnswer);
nextButton.addEventListener('click', showNextQuestion);
prevButton.addEventListener('click', showPreviousQuestion);

function toggleAnswer() {
  const question = cards[currentQuestionIndex].querySelector('.question');
  const answer = cards[currentQuestionIndex].querySelector('.answer');
  if (isAnswerShown) {
    answer.style.display = 'none';
    question.style.display = 'block';
    showAnswerButton.textContent = 'Show Answer';
    isAnswerShown = false;
  } else {
    answer.style.display = 'block';
    question.style.display = 'none';
    showAnswerButton.textContent = 'Hide Answer';
    isAnswerShown = true;
  }
}

function showNextQuestion() {
    if (currentQuestionIndex < totalQuestions - 1) {
        cards[currentQuestionIndex].classList.remove('active');
        currentQuestionIndex++;
        cards[currentQuestionIndex].classList.add('active');
        isAnswerShown = false;
        updateProgressBar();
    }
}

function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        cards[currentQuestionIndex].classList.remove('active');
        currentQuestionIndex--;
        cards[currentQuestionIndex].classList.add('active');
        isAnswerShown = false;
        updateProgressBar();
    }
}

function updateProgressBar() {
    const progressWidth = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    progressBar.style.width = `${progressWidth}%`;
    progressText.textContent = `${currentQuestionIndex + 1} of ${totalQuestions}`;
}