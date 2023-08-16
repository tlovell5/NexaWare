document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let email = e.target[0].value;
    let message = e.target[1].value;

    // The following is just a dummy example. In a real-world scenario, you'd send the data to a server-side script that will handle the email sending.
    fetch('https://yourserver.com/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Message sent!');
        } else {
            alert('Error sending message.');
        }
    })
    .catch(error => alert('Error sending message. Please try again later.'));
});
