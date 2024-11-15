
const daltonicoBtn = document.getElementById('daltonico-btn');
const aumentarLetraBtn = document.getElementById('aumentar-letra-btn');
const disminuirLetraBtn = document.getElementById('disminuir-letra-btn');
let fontSize = 62.5; 


function toggleActive(button) {
    button.classList.toggle('active');
}


daltonicoBtn.addEventListener('click', () => {
    document.body.classList.toggle('daltonismo');
    toggleActive(daltonicoBtn);
});


aumentarLetraBtn.addEventListener('click', () => {
    fontSize += 10;
    document.documentElement.style.fontSize = `${fontSize}%`;
    toggleActive(aumentarLetraBtn);
    disminuirLetraBtn.classList.remove('active'); // Desactiva el otro botón
});

disminuirLetraBtn.addEventListener('click', () => {
    if (fontSize > 50) {
        fontSize -= 10;
        document.documentElement.style.fontSize = `${fontSize}%`;
    }
    toggleActive(disminuirLetraBtn);
    aumentarLetraBtn.classList.remove('active'); 
});
