// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Show the 'About' section by default
    showContent('about');

    // EmailJS initialization
    (function() {
        emailjs.init("NIgtDQx7hO5uHNZ6c"); // Replace with your EmailJS User ID
    })();

    // Form submission logic
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            emailjs.sendForm('service_udsqf7s', 'template_92uae7j', this)
            .then(function() {
                alert('Message sent successfully!');
            }, function(error) {
                alert('Failed to send message: ' + JSON.stringify(error));
            });
        });
    }
});

function showContent(sectionId) {
    // Hide all content sections
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}
