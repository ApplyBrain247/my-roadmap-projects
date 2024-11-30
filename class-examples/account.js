class Facebook {
  constructor(fullName, email, password, phoneNumber) {
    this.fullName = fullName
    this.email = email
    this.password = password
    this.phoneNumber = phoneNumber
  }
}

let account1 = new Facebook('Izu Nna', 'enwehizuchukwusam@gmail.com', '123456', '08012345678')
let account2 = new Facebook('Emma nuel', 'emma@gmail.com', '121212', '09087654622')
let account3 = new Facebook('Bet 9ja', 'bet9ja@gmail.com', '567832', '08097462232')

let accounts = [
  account1,
  account2,
  account3
]
// let enwehFamily = ['onyeka', 'too', 'izuu', 'ijay', 'uju']

for (let account of accounts) {
  console.log(account.fullName)
}
