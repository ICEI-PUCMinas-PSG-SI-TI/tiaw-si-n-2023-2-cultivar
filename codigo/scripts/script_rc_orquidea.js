const form = document.querySelector('form');
const inputs = form.elements;
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let ingredientesMarcos = [];
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type === 'checkbox' && inputs[i].checked) {
            ingredientesMarcos.push(inputs[i].name);
        }
    }
    if (ingredientesMarcos.length === 0) {
        mensagem.textContent = 'Por favor, marque ao menos um ingrediente!';
        return;
    }
    mensagem.textContent = `Você marcou os ingredientes ${ingredientesMarcos.join(', ')}`;
});