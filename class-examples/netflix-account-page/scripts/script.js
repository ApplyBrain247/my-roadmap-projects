import Profile from './profile.js'

// create an array of the profiles
const profiles = [
  new Profile('ACE', 'images/netflix-img.png', true),
  new Profile('Apply', 'https://avatars.githubusercontent.com/u/170747869?v=4', true),
  new Profile('Faith', 'images/barbie.jpg', ),
  new Profile('FAM', 'images/netflix-profile-pictures.webp'),
  new Profile('Barbie', 'images/barbie.jpg', true),
  new Profile('Kids', 'images/kids-logo.png', true)
]

// loop through the profiles and create the html for each one
// append the html to the parent element
let profileHtml = ''
for (let profile of profiles) {
  profileHtml += `  
    <div class="img-container">
      <img src="${profile.imagePath}" alt="#" width="100px" height="100px">
      <p>${profile.name}</p>
      ${profile.isLocked ? '<i class="fa-solid fa-lock"></i>' : ''}

    </div>
  `
}

document.querySelector('.main-container').insertAdjacentHTML('afterbegin', profileHtml)
