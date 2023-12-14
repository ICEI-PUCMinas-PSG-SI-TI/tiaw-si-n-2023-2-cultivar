const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (name === '' || email === '' || password === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    if (password !== confirmPassword) {
        alert('As senhas não coincidem!');
        return;
    }

    // Salvar dados em um arquivo JSON
    const data = {
        nome: name,
        email: email,
        senha: password,
    };

    localStorage.setItem('data', JSON.stringify(data));

    alert('Dados salvos com sucesso!');
});

let cadastrarBtn = document.getElementById('perfil');
let modalCadEl = document.getElementById('modal');
let click = 1;

cadastrarBtn.addEventListener('click', modal_cadastro);
modalCadEl.addEventListener('click', function(evt){
  evt.stopPropagation();
});

function modal_cadastro(evt){
  if(click == 1){
    modalCadEl.style = 'display:flex';
    click = 0;
  }
  else{
    modalCadEl.style = 'display:none';
    click = 1;
  }
}