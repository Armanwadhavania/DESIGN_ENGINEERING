// Form validation and redirection
function handleSignup() {
    // Get the form data (you can add more validation if needed)
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const age = document.getElementById("age").value;
    const bloodGroup = document.getElementById("bloodgroup").value;
    const password = document.getElementById("password").value;

    // Example of a simple age validation (only allowing people 18 or older to sign up)
    if (age < 18) {
        alert("You must be at least 18 years old to donate blood.");
        return false; // Prevent form submission if validation fails
    }

    // You can add additional checks or store the data, e.g., in localStorage or send to a server.

    // Simulating successful signup

    // Redirect to the Home Page after successful signup
    window.location.href = "HomePage.html"; // Redirect to home page

    return false; // Prevent actual form submission
}
