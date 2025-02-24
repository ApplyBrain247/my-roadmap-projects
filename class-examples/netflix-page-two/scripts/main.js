import Category from "./models/category.js";
import Movie from "./models/movie.js";

const orangeBlack = new Movie('Orange Black', 'images/orange-black.jpg'); 
const santaClarita = new Movie('Santa Clarita Diet', 'images/santa.jpg');
const manOnTheInside = new Movie('Man On The Inside', 'images/man-inside.jpg');
const graceFrankie = new Movie('Grace Frankie', 'images/grace-frankie.jpg');
const sexEducation = new Movie('Sex Education', 'images/sex-education.jpg');
const godsFavoriteIdiot = new Movie('Gods Favorite Idiot', 'images/gods-favorite-idiot.jpg');

const vanpireDiaries = new Movie('Vanpire Diaries', 'images/the-vampire-diaries.jpg');
const travellers = new Movie('Travelers', 'images/travelers.jpg');
const crashLanding = new Movie('Crash Landing', 'images/crash-landing.jpg');
const wednesday = new Movie('Wednesday', 'images/wednesday.jpg');
const moneyHeist = new Movie('Money Heist', 'images/money-heist.jpg');
const lupin = new Movie('Lupin', 'images/lupin.jpg');

const theOutlaws = new Movie('The Outlaws', 'images/the-outlaws.jpg');
const familySwitch = new Movie('Family Switch', 'images/family-switch.jpg');
const youPeople = new Movie('You People', 'images/you-people.jpg');
const meTime = new Movie('Me Time', 'images/me-time.jpg');
const comingToAmerica = new Movie('Coming To America', 'images/coming-to-America.jpg');
const redNotice = new Movie('Red Notice', 'images/red-notice.jpg');

const tvComedies = new Category('Tv Comedies', [orangeBlack, santaClarita, manOnTheInside, graceFrankie, sexEducation, godsFavoriteIdiot]);
const criticallyAcclaimed = new Category('Critically Acclaimed Tv Shows', [vanpireDiaries, travellers, crashLanding, wednesday, moneyHeist, lupin]);
const comedyMovies = new Category('Comedy Movies', [theOutlaws, familySwitch, youPeople, meTime, comingToAmerica, redNotice]);

const categories = [tvComedies, criticallyAcclaimed, comedyMovies];

const categoriesContainer = document.querySelector('.categories');

categories.forEach(category => {
    const categorySection = document.createElement('section');
    let categoryHtml = `
        <h2>${category.name}</h2>
        <div class='movies'>
           <div class='images'>
    `;
    
    for (let movie of category.movies) {
        categoryHtml += `
           <img src="${movie.imagePath}" alt="${movie.name} image path">           
        `;
    }
    
    categoryHtml += '</div></div>';
    
    categorySection.innerHTML = categoryHtml;
    categoriesContainer.appendChild(categorySection);
});