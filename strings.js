document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const fullName = firstName + ' ' + lastName;

    if (fullName.length > 20) {
        alert('Full name should not exceed 20 characters. Please shorten your name.');
        return;
    }

    const zipCode = document.getElementById('zipCode').value;

    if (zipCode.length !== 5) {
        alert('Zip code must be exactly 5 digits.');
        return;
    }

    // If all validations pass, show the secret message from the website
    alert('Coding is fun, frustrating but fun');
});
