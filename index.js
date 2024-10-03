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

// Show the 'About' section by default
showContent('about');

function emailSend(){
	var userName = document.getElementById('name').value;
	var message = document.getElementById('message').value;
	var email = document.getElementById('email').value;

	var messageBody = "Name " + userName + "<br/> message " + message + "<br/> Email " + email;

	Email.send({
    Host : "smtp.gmail.com",
    Username : "soorajydv9@gmail.com",
    Password : "egaz cusi kijs card",
    To : 'soorajydv9@gmail.com',
    From : email,
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => alert(message)
);
}
