class Profile {
  constructor(name, imagePath, isLocked = false) {
    this.name = name.trim()
    this.imagePath = imagePath
    this.isLocked = isLocked
  }
}

export default Profile

