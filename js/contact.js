// Contact form logic using EmailJS (https://www.emailjs.com/)
function sendContactForm(event) {
    event.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', event.target, 'YOUR_PUBLIC_KEY')
        .then(function() {
        alert('Message sent successfully!');
        event.target.reset();
        }, function(error) {
        alert('Failed to send message: ' + error.text);
        });
    }
