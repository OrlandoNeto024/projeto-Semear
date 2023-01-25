const btn = document.getElementById('btn');
btn.addEventListener('click', function(e){
    e.preventDefault();
    
    var firstName = document.getElementById('first-name');
    var lastName = document.getElementById('last-name');
    var select = document.getElementById('options');
    var email = document.getElementById('email');
    var cpf = document.getElementById('cpf');
    var password = document.getElementById('password');
    var passwordConfirm = document.getElementById('password-confirm');

    console.log(`Primeiro nome: ${firstName.value}; Último nome: ${lastName.value}; Quero ser: ${select.value}; Email: ${email.value}; CPF: ${cpf.value}; Senha: ${password.value}; Confirmar Senha: ${passwordConfirm.value}`)

    firstName.value = ''
    lastName.value = ''
    select.value = ''
    email.value = ''
    cpf.value = ''
    password.value = ''
    passwordConfirm.value = ''

})