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
        selected.value = item.innerText;
        document.querySelector('h1').innerHTML = item.innerHTML
    })  
)

document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.querySelector(".selected"); 
    inputField.addEventListener("click", function () {
        optionContainer.classList.toggle("show");
        arrow.classList.toggle("rotate");
    });
    
    // Filter items based on input
    inputField.addEventListener("input", function () {
        let filter = inputField.value.toLowerCase();
        optionLists.forEach(option => {
            if (option.textContent.toLowerCase().includes(filter)) {
                option.style.display = "block";
            } else {
                option.style.display = "none";
            }
        });
    });

    // Select an option and close dropdown
    optionLists.forEach(option => {
        option.addEventListener("click", function () {
            inputField.value = this.textContent;
            optionContainer.classList.remove("show");
            arrow.classList.remove("rotate");
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".select-box")) {
            optionContainer.classList.remove("show");
            arrow.classList.remove("rotate");
        }
    });
});