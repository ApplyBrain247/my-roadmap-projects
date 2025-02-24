import Category from './category.js'
import Project from './project.js'
import Artiste from './artiste.js'

const kendrick = new Artiste ('Kendrick lamar')
const beyonce = new Artiste ('Beyonce Knowles')
const billie = new Artiste ('Billie Eillish')
const doechii = new Artiste('Doechii')

const nonLikeUs = new Project ('Not like Us', kendrick ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKEvkLFCXXu6M-wQzar-CphRcNkXE62Rao4Q&s')
const birdsOfAFeather = new Project ('Birds Of A Feather', billie, 'https://upload.wikimedia.org/wikipedia/en/f/fe/Billie_Eilish_-_Birds_of_a_Feather_7%22_Vinyl_cover.png')
const texas = new Project ('Texas Hold Em', beyonce, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdg_XydwQGsO-J77cxwT9ZdOTbbJt5KvZHNQ&s')
const ABNH = new Project('Alligator Bites Never Heal', doechii, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiwh1nR7Xwh2hmlVEPTifvstmQ-UcXVnYpsg&s')

const songOfTheYear = new Category ('Song Of The year', [nonLikeUs, birdsOfAFeather, texas])
const recordOfTheYear = new Category ('Record Of The Year', [nonLikeUs, birdsOfAFeather, texas])
const rapAlbumOfTheYear = new Category('Rap Album Of The Year', [ABNH, nonLikeUs])

const categories = [
    songOfTheYear,
    recordOfTheYear,
    rapAlbumOfTheYear
]

const categoriesContainer = document.querySelector('.categories')

categories.forEach(category => {
    const categorySection = document.createElement('section');
    let categoryHtml = `
        <h2>Nominees for the ${category.name}</h2>
        
        <div class="nominees">
    `;
    for (let project of category.nominations) {
        categoryHtml += `
            <div class="project">
                <img src="${project.coverArtPath}" alt="${project.name} cover art">
                <span class="title">${project.name}</span>
                <small class="artiste">${project.artiste.name}</small>
            </div>
        `
    }
    categoryHtml += '</div>'
    
    categorySection.innerHTML = categoryHtml

    categoriesContainer.appendChild(categorySection);
});
