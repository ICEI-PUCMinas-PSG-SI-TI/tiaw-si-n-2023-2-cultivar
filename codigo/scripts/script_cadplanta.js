const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(formulario);

    // Lê a imagem como uma URL de dados
    const fileField = document.querySelector('input[type="file"]');
    const reader = new FileReader();
    reader.onloadend = function() {
        // Cria um objeto de planta com os dados do formulário e a imagem
        const data = Object.fromEntries(formData.entries());
        data.foto = reader.result;

        // Recupera as plantas do localStorage
        let plantas = JSON.parse(localStorage.getItem('plantas')) || [];

        // Adiciona a nova planta ao array
        plantas.push(data);

        // Armazena o array atualizado no localStorage
        localStorage.setItem('plantas', JSON.stringify(plantas));

        alert('Planta cadastrada com sucesso!');

        formulario.reset();

        window.location.href = 'index.html';
    }
    reader.readAsDataURL(fileField.files[0]);
});