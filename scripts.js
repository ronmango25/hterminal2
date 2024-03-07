// Add event listener to the "Inject Code" button
document.getElementById('inject-btn').addEventListener('click', function() {
    // Get the code from the code box
    var terminalCode = document.querySelector('.code-box').innerText;

    // Execute the code in a try-catch block to handle potential errors
    try {
        eval(terminalCode); // Execute the code in the terminal
    } catch (error) {
        console.error('Error executing terminal code:', error); // Log any errors to the console
        alert('An error occurred while executing the code. Please check the syntax and try again.'); // Display an error message to the user
    }
});

// Add event listener to the "Submit" button for website code injection
document.getElementById('submit-btn').addEventListener('click', function() {
    // Get the code from the website code textarea
    var websiteCode = document.getElementById('website-code').value;

    // Inject the website code into the webpage
    document.getElementById('website-content').innerHTML = websiteCode; // Inject the code into a specific element

    alert('Website content updated successfully.'); // Display a success message to the user
});
