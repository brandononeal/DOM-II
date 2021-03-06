// Your code goes here
const links = document.querySelectorAll('a')
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const text = document.querySelector('p')
const busImg = document.querySelector('.intro img')

// from gsap - causes nav items to bounce on refresh
import { gsap } from "gsap";
gsap.from('a', {opacity: 0, duration: 1, y: -50, ease: 'elastic(1, .3)'})

// h1 is bold on mouse over and regular on mouse leave
h1.addEventListener('mouseover', function(event){
     h1.style.fontWeight = 'bold'
})
h1.addEventListener('mouseleave', function(event){
    h1.style.fontWeight = 'normal'
})

// inverts busImg color when clicked, reverts on double click
busImg.addEventListener('click', function(event){
    busImg.style.filter = 'invert(1)'
})
busImg.addEventListener('dblclick', function(event){
    busImg.style.filter = 'invert(0)'
})


// h2.addEventListener('select', function(event){
//     h2.textContent.style.fontWeight = 'bold'
// })


// stops nav items from refreshing page
links.forEach(function(link){
    link.addEventListener('click', function(event){
        event.preventDefault()
    })
})
