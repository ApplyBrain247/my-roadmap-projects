const textarea = document.getElementById('textArea');
const counter = document.getElementById('counter');
const maxLength = 250;

textarea.addEventListener('input', function() {
    const currentLength = textarea.value.length;

    counter.textContent = `${currentLength}/${maxLength}`;

    if (currentLength >= maxLength) {
        textarea.classList.add('limit-reached');
        counter.classList.add('limit-reached');
    }
    else {
        textarea.classList.remove('limit-reached');
        counter.classList.remove('limit-reached');
    }
});