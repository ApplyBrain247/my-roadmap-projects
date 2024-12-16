# Flash Cards

`const cards = document.querySelectorAll('.card');`
I used `document.querySelectorAll` to select all the element with the class name `card`, and store them in the `cards` variable for manipulation. Note: querySelectorAll returns a list of all elements that match the specified CSS selector.

`const showAnswerButton = document.querySelector('.showAnswer');`
Using `document.querySelector` (returns the first element that matches the specified CSS selector.
) to select the element with the class name `showAnswer` and store it in `showAnswerButton` for manipulation.

```
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const progressBar = document.querySelector('.progress');
const progressText = document.querySelector('.total-counts');
```
Just like in previous sections, `document.querySelector` was used to select elements with class names `next`, `prev`, `progress` and `total-counts` respectively, and store them in their respective variables (`nextButton`, `prevButton`, `progressBar` and `progressText`) for manipulation.

`const totalQuestions = cards.length;`
This line of code sets the value of the `totalQuestions` variable to the number of elements in the `cards` array. Since `cards` is an array of elements with class name `card`, `cards.length` (`length` being a property of an array) is used to return the number of elements in the cards array and assign the result to `totalQuestions` variable.
For example, if the `cards` array contain 3 elements, `totalQuestions` would be set to 3:
```
const cards = [card1, card2, card3];
const totalQuestions = cards.length; # i.e totalQuestions is now 3
```

`let currentQuestionIndex = 0;`
In this line of code, I initialized a variable called `currentQuestionIndex` and sets its value to `0`.
here, `currentQuestionIndex` is used to keep track of the current question being displayed. By initializing it to 0, the flash card page starts with the first question.

`let isAnswerShown = false;`
In the line of code above, i initialized a variable `isAnswerShown` and assigned a boolean value(`false`) to it. this is to keep track of whether the answer to the current question is visible or not. setting it to `false` means that the answer is hidden by default, and it can later be toggled to `true` to reveal the answer.

`updateProgressBar();`
The `updateProgressBar();` calls the `updateProgressBar` function, which updates the progress bar to reflect the current state of the flashcard.

```
showAnswerButton.addEventListener('click', toggleAnswer);
nextButton.addEventListener('click', showNextQuestion);
prevButton.addEventListener('click', showPreviousQuestion);
```
I added EventListener to the elements above respectively. The EventListener listens for a click event. When the button is clicked, the toggleAnswer, showNextQuestion and showPreviousQuestion functions are called respectively.

```
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
```
In line 31 and 32 of the `toggleAnswer()` function above, 
`cards[currentQuestionIndex]` selects the current question card from the cards array, based on the current value of `currentQuestionIndex`.
`querySelector('.question')` and `querySelector('.answer')` select the first element with the class question and answer respectively within the current question and answer cards and assign them to question and answer variable respectively for manipulation.
The conditional statement in the `toggleAnswer()` function toggles the visibility of the answer and question elements, as well as updates the text content of the "Show Answer" button.
Here, if the `isAnswerShown` is `true`(the answer is shown already),  
`answer.style.display = 'none';` hides the answer element.
`question.style.display = 'block';` Shows the question element.
`showAnswerButton.textContent = 'Show Answer';` displays `Show Answer` on the button.
`isAnswerShown = false;` Sets `isAnswerShown` to `false`, indicating that the answer is now hidden.
else if the `isAnswerShown` is `false`(the answer is not shown)
`answer.style.display = 'block';` Shows the answer element.
`question.style.display = 'none';` Hides the question element.
`showAnswerButton.textContent = 'Hide Answer';` displays Hide Answer on the button.
`isAnswerShown = true;`: Sets `isAnswerShown` to true, indicating that the answer is now shown.

Note: `textContent` is an element property used to get/set the text content of an element, replacing any existing content.

```
function showNextQuestion() {
  if (currentQuestionIndex < totalQuestions - 1) {
    cards[currentQuestionIndex].classList.remove('active');
    currentQuestionIndex++;
    cards[currentQuestionIndex].classList.add('active');
    isAnswerShown = false;
    updateProgressBar();
  }
}
```
The above function `showNextQuestion()` is used to navigate to next question in the flash card page.
Here, the function checks if the current question index is less than the total number of questions minus 1. This ensures that there's a next question to navigate to.

`cards[currentQuestionIndex].classList.remove('active')` - removes the `active` class from the current question card

`currentQuestionIndex++;` - Increments the `currentQuestionIndex` variable to point to the next question.

`cards[currentQuestionIndex].classList.add('active')` - adds the `active` class to the next question card, effectively activating it.
`isAnswerShown = false;` sets the `isAnswerShown` variable to false, which hides the answer to the previous question.
`updateProgressBar();` calls the `updateProgressBar` function to update the progress bar and reflect the new question index.

```
function showPreviousQuestion() {
  if (currentQuestionIndex > 0) {
    cards[currentQuestionIndex].classList.remove('active');
    currentQuestionIndex--;
    cards[currentQuestionIndex].classList.add('active');
    isAnswerShown = false;
    updateProgressBar();
  }
}
```
The above function `showPreviousQuestion` is used to navigate to  the previous question in the flash card page.
Here, 
`if (currentQuestionIndex > 0)` Checks if the current question index is greater than 0. This ensures that there's a previous question to navigate to.
`cards[currentQuestionIndex].classList.remove('active');` removes the `active` class from the current question card, effectively deactivating it.
`currentQuestionIndex--;`  decrements the `currentQuestionIndex` variable to point to the previous question.
`cards[currentQuestionIndex].classList.add('active');` adds the active class to the previous question card, activating it.

`isAnswerShown = false;` sets the `isAnswerShown` variable to `false`, which hides the answer to the previous question.
`updateProgressBar();` calls the `updateProgressBar` function to update the progress bar and reflect the new question index.

```
function updateProgressBar() {
  const progressWidth = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  progressBar.style.width = `${progressWidth}%`;
  progressText.textContent = `${currentQuestionIndex + 1} of ${totalQuestions}`;
}
``` 
The above function `updateProgressBar()` updates the progress bar.

`const progressWidth = ((currentQuestionIndex + 1) / totalQuestions) * 100;` Calculates the percentage of questions gone through by dividing the current question index plus one by the total questions, and then multiplying by 100; then assign value to `progressWidth`.

`progressBar.style.width = ${progressWidth}%;` Sets the width of the progress bar element to the calculated progress width using the `${progressWidth}%` template string.

`progressText.textContent = ${currentQuestionIndex + 1} of ${totalQuestions};` Update the text content of the progress text element to display the current question index plus one, followed by the total questions, using the `${currentQuestionIndex + 1} of ${totalQuestions}` template string.
