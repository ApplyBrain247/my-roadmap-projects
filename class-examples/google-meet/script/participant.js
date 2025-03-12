class Participant  {
  constructor(fullName, bgColor = null, isMuted = true) {
    this.fullName = fullName
    this.bgColor = bgColor
    this.isMuted = isMuted
  }

  getInitials() {
    return Array.from(this.fullName)[0].toUpperCase()
  }
}

export default Participant
