document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const responseMessage = document.getElementById('response-message');
    responseMessage.innerHTML = "Thank you for your submission! Our experts will review your crop issue and get back to you shortly.";

    // Here you can add an AJAX request to send the data to your backend for processing.
});

