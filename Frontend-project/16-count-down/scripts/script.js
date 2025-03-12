//Get Dom Elements

const selected = document.querySelector('.selected');
const optionContainer = document.querySelector('.option-container');
const optionLists = document.querySelectorAll('.option');
const arrow = document.querySelector('#arrow');

selected.onfocus = ()=> {
    selected.style.backgroundColor = 'var(--dark)'
    optionContainer.classList.toggle('active')
    if (arrow.classList.contains('fa-arrow-down')){
        arrow.classList.remove('fa-arrow-down')
        arrow.classList.add('fa-arrow-up')
    }
}

selected.onblur = ()=> {
    selected.style.backgroundColor = 'initial'
    optionContainer.classList.toggle('active')
    if (arrow.classList.contains('fa-arrow-up')){
        arrow.classList.remove('fa-arrow-up')
        arrow.classList.add('fa-arrow-down')
    }
}

//Select Element from dropdown list and display selected Elements

optionLists.forEach(
    (item) =>
    (item.onclick = () =>{
        selected.placeholder = item.innerText;
        document.querySelector('h1').innerHTML = item.innerHTML
    })
   
)