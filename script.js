// Menu responsivo
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Troca de tema claro/escuro
const temaBtn = document.getElementById('tema-btn');
temaBtn.addEventListener('click', () => {
    document.body.classList.toggle('escuro');
    document.body.classList.toggle('claro');
    temaBtn.textContent = document.body.classList.contains('escuro') ? '☀︎' : '⏾';
});

// Validação e simulação de envio do formulário
const formContato = document.getElementById('formContato');

formContato.addEventListener('submit', function(event) {
    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    let msg = document.getElementById('msg');
    console.log(`
            Informações capturadas corretamente:
            Nome: ${nome},
            Email: ${email},
            Mensagem: ${msg}
        `)
    alert('Mensagem enviada com sucesso!');
    
});
