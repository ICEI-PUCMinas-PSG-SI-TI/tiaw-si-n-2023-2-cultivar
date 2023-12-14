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
  mensagem.textContent = `Parabens você Finalizou a Receita !! `;
});
document.addEventListener('DOMContentLoaded', function() {
  // Carregue os valores dos checkboxes do localStorage
  let recipe2Ingredient1 = localStorage.getItem('recipe2ingredient') === 'true';
  let recipe2Ingredient2 = localStorage.getItem('recipe2ingredient') === 'true';

  // Defina os valores dos checkboxes
  document.getElementById('recipe2-ingredient1').checked = recipe2Ingredient1;
  document.getElementById('recipe2-ingredient2').checked = recipe2Ingredient2;
  document.getElementById('recipe2-ingredient3').checked = recipe2Ingredient2;
  document.getElementById('recipe2-ingredient4').checked = recipe2Ingredient1;
  document.getElementById('recipe2-ingredient3').checked = recipe2Ingredient1;
  document.getElementById('recipe2-ingredient4').checked = recipe2Ingredient1;
  
  // Adicione os eventos "change" aos checkboxes
  let checkboxes = document.querySelectorAll('.recipe input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      // Salve o estado do checkbox no localStorage
      localStorage.setItem(checkbox.id, checkbox.checked);
    });
  });
});