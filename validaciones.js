

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;

    document.querySelectorAll('.error').forEach(function(errorElement) {
        errorElement.textContent = '';
    });


    const firstName = document.getElementById('first-name');
    if (firstName.value.trim() === '') {
        isValid = false;
        document.getElementById('error-first-name').textContent = 'Por favor, ingresa tu nombre.';
    }

    const lastName = document.getElementById('last-name');
    if (lastName.value.trim() === '') {
        isValid = false;
        document.getElementById('error-last-name').textContent = 'Por favor, ingresa tus apellidos.';
    }

    const email = document.getElementById('email');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.value.trim() === '' || !emailRegex.test(email.value.trim())) {
        isValid = false;
        document.getElementById('error-email').textContent = 'Por favor, ingresa un correo electrónico válido.';
    }

 
    const phone = document.getElementById('phone');
    const phoneRegex = /^\d{10}$/;
    if (phone.value.trim() === '' || !phoneRegex.test(phone.value.trim())) {
        isValid = false;
        document.getElementById('error-phone').textContent = 'Por favor, ingresa un número de teléfono válido (10 dígitos).';
    }

 
    const message = document.getElementById('message');
    if (message.value.trim() === '') {
        isValid = false;
        document.getElementById('error-message').textContent = 'Por favor, ingresa tu mensaje.';
    }

    if (isValid) {
        alert('Formulario enviado con éxito(: ');
       
    }
});
