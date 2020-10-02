// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const headerDiv = document.createElement('div')
    headerDiv.classList.add('header')

    const date = document.createElement('span')
    date.classList.add('date')
    date.textContent = 'MARCH 28, 2020'

    const title = document.createElement('h1')
    title.textContent = 'Lambda Times'

    const temp = document.createElement('span')
    temp.classList.add('temp')
    temp.textContent = '98°'

    headerDiv.appendChild(date)
    headerDiv.appendChild(title)
    headerDiv.appendChild(temp)

    return headerDiv
}

const headerContainer = document.querySelector('.header-container')

headerContainer.appendChild(Header())

// console.log(headerContainer)