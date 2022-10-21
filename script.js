const loginBtn = document.getElementById('loginBtn')
const userCreate = prompt('Crie seu usuário:').value
const passwordCreate = prompt('Crie sua senha:').value
  

function validate(){

    const user = userCreate
    const password = passwordCreate

    if(user == '' && password == ''){
        document.getElementById('validateMsg').innerText = 'Entre com seus dados de login.' 
        return;
    }

    if(user == userCreate && password == passwordCreate){
        document.getElementById('validateMsg').innerText = 'Login válido.'
    } else{
        document.getElementById('validateMsg').innerText = 'Seu usuário e/ou sua senha estão incorretos.'
    }
}

loginBtn.addEventListener('click', validate);