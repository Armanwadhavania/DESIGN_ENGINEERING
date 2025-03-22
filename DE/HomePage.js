// Function to scroll smoothly to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
}

// Form validation for the 'Request Blood' form
document.getElementById("requestForm").addEventListener("submit", function(event) {
    const patientName = document.getElementById("patient-name").value;
    const bloodGroup = document.getElementById("required-blood-group").value;
    const urgency = document.getElementById("urgency").value;
    const hospital = document.getElementById("hospital").value;
    const contactNumber = document.getElementById("contact-number").value;

    if (!patientName || !bloodGroup || !urgency || !hospital || !contactNumber) {
        event.preventDefault(); // Prevent form submission
        alert("Please fill out all fields in the form.");
    }
});

// Form validation for the 'Search Blood' form
document.getElementById("searchForm").addEventListener("submit", function(event) {
    const bloodGroup = document.getElementById("search-blood-group").value;
    const location = document.getElementById("search-location").value;

    if (!bloodGroup || !location) {
        event.preventDefault(); // Prevent form submission
        alert("Please select a blood group and enter a location.");
    }
});