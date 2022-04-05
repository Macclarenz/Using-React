// import {  } from "";
import data  from './data.js';

const form = document.querySelector('#myForm')
const username = document.querySelector('#myUsername')
const password = document.querySelector('#myPassword')
const submitBtn = document.querySelector('#mySubmit')

form.addEventListener('submit', e => {
    e.preventDefault()
    checkFormError()
})

submitBtn.addEventListener('submit', e => {
    e.preventDefault()
})

const checkFormError = () => {
    const usernameText = username.value
    const passwordText = password.value

    if (!usernameText) return console.log('falsy username')
    else if (!passwordText) return console.log('falsy password')
    else if (usernameText && passwordText) return console.log(checkInputs(usernameText, passwordText))   
}

const checkInputs = (inputUsername, inputPassword) => {
    const validUsername = data.findIndex(el => el.username === inputUsername)
    if (validUsername < 0) return 'Username doesn\'t exist'

    const validPassword = data.findIndex(el => el.password === inputPassword)
    if (validPassword < 0) return 'Wrong password'

    if (validUsername === validPassword) return true
    else return 'Wrong password'
}



