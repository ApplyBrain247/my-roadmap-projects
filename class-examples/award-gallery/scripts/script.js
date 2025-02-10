import Category from './category'
import Project from './project'
import Artiste from './artiste'

const kendrick = new Artiste ('Kendrick lamar')
const beyonce = new Artiste ('Beyonce Knowles')
const billie = new Artiste ('Billie Eillish')

const nonLikeUs = new Project ('Not like Us', kendrick ,'kendrick-lamar.jpeg')
const birdsOfAFeather = new Project ('Birds Of A Feather', billie, 'billie-eillish.webp')
const texas = new Project ('Texas Hold Em', beyonce, 'beyonce.webp')

const songOfTheYear = new Category ('Song Of The year', [nonLikeUs, birdsOfAFeather, texas])
const recordOfTheYear = new Category ('Song Of The Year', [nonLikeUs, birdsOfAFeather, texas])

const songOfTheYearContainer = document.getElementById('song-of-the-year')
songOfTheYear.nominations.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';
    projectDiv.innerHTML = `
        <img src="images/${project.coverArtPath}" alt="${project.name}" width="150px">
        <h3>${project.name}</h3>
        <p>by ${project.artiste.name}</p>
    `;
    songOfTheYearContainer.appendChild(projectDiv);
});

const  recordOfTheYearContainer = document.getElementById('record-of-the-year');
recordOfTheYear.nominations.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';
    projectDiv.innerHTML = `
        <img src="images/${project.coverArtPath}" alt="${project.name}" width="150px">
        <h3>${project.name
        }</h3>
        <p>by ${project.artiste.name}</p>
    `;
    recordOfTheYearContainer.appendChild(projectDiv);
});
