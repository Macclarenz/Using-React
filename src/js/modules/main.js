import data from './data.json.js'

const username = document.querySelector('#myUsername')
const password = document.querySelector('#myPassword')
const form = document.querySelector('#myForm')

const emailValidator = (username, password) => {
    const textUsername = username?.value
    const textPassword = password?.value

    if (!textUsername) username.placeholder = 'Empty input please type the username'
    if (!textPassword) return password.placeholder = 'Empty input please type the password'

    for(const val of data) {
        if (val.username === textUsername) {
            if (val.password === textPassword) return createMessageDOM(true)
            else return console.log('wrong password')
        } else return console.log('username does not exist')
    }
}

form.addEventListener('submit', e => {
    e.preventDefault()
    emailValidator(username, password)
})

username.addEventListener('input', e => {
    return e.target.placeholder = 'Username'
})

password.addEventListener('input', e => {
    return e.target.placeholder = 'Password'
})

export {
    emailValidator
}

