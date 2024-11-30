class DreamWife {
  constructor(name, age, state, husbandName) {
    this.name = name
    this.age = age
    this.state = state
    this.husbandName = husbandName
  }

  dance() {
    return `${this.name} is dancing for ${this.husbandName}`
  }

  twerk() {
    return `${this.name} is shaking ass for ${this.husbandName}`
  }

  cook(foodName) {
    return `${this.name} is cooking ${foodName} for ${this.husbandName}`
  }

  knack(style) {
    return `${this.name} is ready to give ${this.husbandName} ${style} style`
  }
}

let dwForApply = new DreamWife('Mirabel', 33, 'edo', 'apply')
let dwForEmma = new DreamWife('MacBook', 2022, 'USA', 'emma')

let dreamWives = [dwForApply]

dreamWives.push(dwForEmma)
console.log(dreamWives.length)
dreamWives.pop()
console.log(dreamWives.length)
