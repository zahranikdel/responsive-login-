const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')

signUp.addventlistener('click', () => {
    loginIn.classlist.remove('block')
    loginUp.classlist.remove('none')
    loginIn.classlist.add('none')
    loginUp.classlist.add('block')
})
signIn.addventlistener('click', () => {
    loginIn.classlist.remove('none')
    loginUp.classlist.remove('block')
    loginIn.classlist.add('block')
    loginUp.classlist.add('none')
})