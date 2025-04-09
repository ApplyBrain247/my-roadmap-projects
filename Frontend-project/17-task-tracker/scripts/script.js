const inputBox = document.getElementById('input');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert('You must write something!');
    } else {
        let li = document.createElement('li'); 
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); 
        inputBox.value = ''; 
        let span = document.createElement('span')
        span.innerHTML = '<i class="fa-solid fa-trash"></i>'
        li.appendChild(span)
    }
}

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
    }
    else if (e.target.closest('span')) {
        e.target.closest('li').remove();
    }
}, false)