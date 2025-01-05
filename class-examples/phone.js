class Phone {
  constructor(brand, model, serialNumber, rating) {
    this.brand = brand
    this.model = model
    this.serialNumber = serialNumber
    this.maxRating = 5
    
  }

  brandTouppercase() {
    return this.brand.toUpperCase()
  }

  increaseRating() {
    if (this.rating == this.maxRating) {
      return
    }

    this.rating++
  }

  setRating(rating) {
    if (rating >= this.maxRating) {
      return this.maxRating
    }

    return rating
  }
}

const iPhone15 = new Phone('apple', 'iphone 15', '12345', 9)
const iPhone16 = new Phone('apple', 'iphone 16', '453671', 4)
const samsungS23 = new Phone('samsung', 'galaxy s23', '950403', 4)
const pixel = new Phone('google', 'pixel 7', '7488392', 4)

samsungS23.increaseRating()
samsungS23.increaseRating()
samsungS23.increaseRating()

console.log(iPhone16)
// console.log(samsungS23.rating)
// console.log(pixel.rating)
