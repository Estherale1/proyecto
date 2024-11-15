
const accesibilidadToggle = document.getElementById('accesibilidad-toggle');
const accesibilidadMenu = document.getElementById('accesibilidad-menu');

accesibilidadToggle.addEventListener('click', (event) => {
    event.preventDefault(); 
    accesibilidadMenu.classList.toggle('show'); 
    accesibilidadToggle.setAttribute('aria-expanded', accesibilidadMenu.classList.contains('show'));
});

window.addEventListener('click', function(event) {
    if (!event.target.matches('#accesibilidad-toggle') && !accesibilidadMenu.contains(event.target)) {
    
        if (accesibilidadMenu.classList.contains('show')) {
            accesibilidadMenu.classList.remove('show');
            accesibilidadToggle.setAttribute('aria-expanded', 'false');
        }
    }
});
