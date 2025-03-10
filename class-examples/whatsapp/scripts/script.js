import User from "./user.js";

const users = [
    new User ('images/nnem.jpg', 'Nnem'),
    new User ('images/ace.jpg', 'Emma Nd Co'),
    new User ('images/ij.jpg', 'My baby'),
    new User ('images/christabel.jpg', 'Christabel Glo'),
    new User ('images/ogo.jpg', 'Ogochukwu'),
    new User ('images/queen.jpg', 'Queen'),
]

const imagesContainer = document.querySelector('.images')
let html = ''
users.forEach(user => {
    html += `
        <div class="image-1">
            <img src="${user.imagePath}" alt="${user.name}" width="50px">
            <p>${user.name}</p>
        </div>     

    `
})
imagesContainer.innerHTML = html;
