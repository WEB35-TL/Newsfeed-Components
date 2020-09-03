// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out',
]

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

function menuMaker(arr) {
  // menu container div
  const menu = document.createElement('div')
  menu.classList.add('menu')

  // unordered list
  const ul = document.createElement('ul')

  // iterate over array
  arr.forEach(x => {
    // new list item for each item in array
    const li = document.createElement('li')

    // fill in list content
    li.textContent = x

    // add list items to unordered list
    ul.append(li)
  })

  // select menu-button element
  const btn = document.querySelector('.menu-button')

  // menu functionality
  btn.addEventListener('click', () => {
    // toggle menu opening
    menu.classList.toggle('menu--open')
    gsap.to(menu, {
      duration: 1,
      y: 40,
      scale: 1,
      ease: 'bounce',
      opacity: 0.8,
    })
  })

  menu.append(ul)

  return menu
}

const h = document.querySelector('.header')

h.append(menuMaker(menuItems))
