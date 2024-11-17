const firstTab = document.getElementById('first-tab')

// how to correctly link JS to HTML document
// move the script element to the bottom of the document just before the lcosing body tag
// use the DOMContentLoaded event
// use the defer attribute

const secondTab = document.getElementById('second-tab')

// events
// click, mouseover, focus, blur, change, keydown, keyup

// anonymous function: function wey no get name
// callback function: a function that is being passed as an argument to a function
// secondTab.onclick = function() {
//   secondTab.classList.add('active')
//   firstTab.classList.remove('active')
// }

const tabs = document.getElementsByClassName('tab')
for (const index in tabs) {
  const tab = tabs[index]
  tab.onclick = function() {
    // remove the active class from the current active tab
    let activeTab = document.querySelector('.tabs .active')
    if (activeTab) {
      activeTab.classList.remove('active')
    }

    // assign active class to the clicked tab
    this.classList.add('active')

    // hide the currently active content
    let activeContent = document.querySelector('.tabs-content .active')
    if (activeContent) {
      activeContent.classList.remove('active')
    }

    // display the content related to the selected tab using the index
    const contents = document.querySelectorAll('.tabs-content .content')
    contents[index].classList.add('active')
  }
}
