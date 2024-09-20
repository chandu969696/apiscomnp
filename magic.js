document.getElementById('navbar-toggle').addEventListener('click', function() {
    var menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('active');
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    
    const formMessages = document.getElementById('form-messages');
    formMessages.innerHTML = `Thank you, ${name}! Your message has been sent.`;

    
    document.getElementById('contact-form').reset();
});