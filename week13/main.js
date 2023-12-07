// ------------------ eventPropagation --------------
//1. select target HTML object
// const submitButton = document.querySelector('button')
// console.log(submitButton)

// 2 register handler function on a target HtML object
// Something = (e) => const do{
//     // console.log('submit button is clicked')
//     // console.log(e)
//     console.log(e.target.id)
//     // console.log(e.type)
//     // console.log(e.target)
//     console.log(e.currentTarget)
//     console.log(e.eventPhase)
// }
// submitButton.addEventListener('click', doSomething)

// ------------------------------------------------
// inner-div
// // 1. select target HTML object
// const innerDiv = document.getElementById('inner-div')
// // console.log(innerDiv)
// // 2 register handler function on a target HtML object
// innerDiv.addEventListener('click', (event) => {
//     console.log(event.target.id)
//     console.log(event.currentTarget)
//     console.log(event.eventPhase)
// })

// // --------------------------------------------
// // outer-div
// // 1. select target HTML object
// const outerDiv = document.getElementById('outer-div')
// // console.log(outerDiv)
// // 2 register handler function on a target HtML object
// outerDiv.addEventListener('click', (event) => {
//     console.log(event.target.id)
//     console.log(event.currentTarget)
//     console.log(event.eventPhase)
// })

// add multiple handler function in the same event type and HTML object
// // 1. select target HTML object
// const submitButton = document.querySelector('button')
// // 2 register handler function on a target HtML object
// const doSomething = (e) => {
//     console.log(`Good bye , ${e.target.id}`)
// }

// submitButton.addEventListener('click', (e) => {
//     console.log(`hello , ${e.target.id}`)
// })

// submitButton.addEventListener('click', doSomething)

// submitButton.removeEventListener('click', doSomething)

// // --------------------------------------------
// // remove event listener
// const submitButton = document.querySelector('button')
// // console.log(submitButton)

// -----------------------------------------------------------------
// preventDefault
// submitButton.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log('cancle submit to server')
// })

// // -------------------------------------------------------------------
// const submitButton = document.querySelector('button')
// // console.log(submitButton)
// submitButton.addEventListener('click', (e) => {
//     e.preventDefault()
//     const allInputElements = document.querySelectorAll('input')
//     console.log(allInputElements)
//     const isComplete = Array.from(allInputElements).every(
//         (input) => input.value.length > 0
//     )
//     const pElement = document.getElementsByTagName('p')[0]
//     if (isComplete) {
//         pElement.textContent = 'Your input are complete'
//     } else {
//         pElement.innerHTML =
//             '<span style="color:red"> Missing some value, plese enter</span>'
//     }
// })

// -----------------------------------------------------------------
// window document event
// document.addEventListener('DOMContentLoaded', () => {
//     console.log('Your DOM tree built')
// })

// window.addEventListener('load', () => {
//     console.log('Your Appication Loaded')
// })

// window.addEventListener('beforeunload', () => {
//     localStorage.setItem('myCat', 'Tom')
// })

// window.addEventListener('mousemove', (e) => {
//     console.log(`x:${e.screenX}, y:${e.screenY}`);
// })

// --------------------------------------------------------------------
// focus-blur
// const userElement = document.getElementById('input-user')
// const pswElement = document.getElementById('input-psw')

// userElement.addEventListener('focus', () => {
//     console.log('Your focus is on username')
// })

// userElement.addEventListener('blur', () => {
//     console.log('Your username input textbox is blured')
// })

const userElement = document.getElementById('input-user')
const pswElement = document.getElementById('input-psw')

// keyup
// userElement.addEventListener('keyup', (e) => {
//     console.log(`${e.key}, ${e.code}`)
// })

// using keypress and keydown only to detect number characters 0-9

// keypress
// userElement.addEventListener('keypress', (e) => {
//     console.log(`${e.key}, ${e.code}`)
//     if (e.key >= 0 && e.key <= 9) {
//         e.preventDefault()
//     }
// })

// keydown
userElement.addEventListener('keydown', (e) => {
    console.log(`${e.key}, ${e.code}`)
    if (e.key >= 0 && e.key <= 9) {
        e.preventDefault()
    }
})

// when user release enter key, text value on username will show at <p> element
userElement.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        const pElement = document.querySelector('p')
        pElement.textContent = e.target.value
    }
})
