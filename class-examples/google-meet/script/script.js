import Participant from "./participant.js"

const participants = [
  new Participant ('Izuchukwu Enweh'),
  new Participant ('Tochukwu Enweh', 'red', false),
  new Participant ('Faith Enweh', '#5c6bc0'),
  new Participant ('Chukwunonso Enweh', '#9c27b0'),
  new Participant ('Ifeanyi Enweh', 'green', false),
  new Participant ('Ujunwa Enweh', '#795548'),
  new Participant ('Onyeka Enweh'),
  new Participant ('Nneka Enweh', 'orange'),
  new Participant ('Ebere Enweh', '#2196f3', false),
  new Participant ('Alice Enweh', '#2196f8', false),
  new Participant ('Chisom Ugwunwani', '#219611'),
  new Participant ('Ogochukwu Ugwunwani', '#616511'),
]

const gridContainer = document.querySelector('.grid-container')
let html = ''
participants.forEach(participant => {
  html += `
    <div class="participaant">
      <div class="circle" style="background-color: ${participant.bgColor}">${participant.getInitials()}</div>
      <div class="name">${participant.fullName}</div>
      <div class="muted"><i class="fa-solid fa-microphone${participant.isMuted ? '-slash' : ''}"></i></div>
    </div>
  `
})
gridContainer.innerHTML = html
