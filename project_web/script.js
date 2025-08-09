
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    console.log('Form submitted:', {name, email, subject, message});
    
    document.getElementById('successMessage').style.display = 'block';
    
    this.reset();
    
    setTimeout(function() {
        document.getElementById('successMessage').style.display = 'none';
    }, 3000);
});