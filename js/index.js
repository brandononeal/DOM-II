// Your code goes here
const h1 = document.querySelector('h1')
const text = document.querySelector('p')
const links = document.querySelector('a')
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


text.addEventListener('select', function(event){
    
})
