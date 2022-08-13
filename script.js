const signUp = document.getElementById("sign-up");
const signIn = document.getElementById("sign-in");
const loginUp = document.getElementById("login-up");
const loginIn = document.getElementById("login-in");

signUp.addEventListener('click', () => {
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    loginIn.classList.add('none')
    loginUp.classList.add('block')
})

signIn.addEventListener('click', () => {
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    loginIn.classList.add('block')
    loginUp.classList.add('none')
})