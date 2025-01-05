/**
 * Populate Date of Birth inputs
 * 
 * day: 1 - 31
 * month: Jan - Dec
 * year: current year - (current year - 100 years)
 */

// day
const dayElement = document.getElementById('day')
for (let i = 1; i <= 31; i++) {
  const optionElement = document.createElement('option')
  optionElement.value = i
  optionElement.textContent = i

  dayElement.appendChild(optionElement)
}

// month
const monthElement = document.getElementById('month')
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]
for (let month of months) {
  const optionElement = document.createElement('option')
  optionElement.value = month
  optionElement.textContent = month

  monthElement.appendChild(optionElement)
}

// year
const yearElement = document.getElementById('year')
const currentYear = (new Date).getFullYear()
for (year = currentYear; year >= currentYear - 100; year--) {
  const optionElement = document.createElement('option')
  optionElement.value = year
  optionElement.textContent = year

  yearElement.appendChild(optionElement)
}
