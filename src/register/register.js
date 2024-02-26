const url = process.env.BASE_URL;

function toggleMembershipFields() {
    const memberType = document.getElementById('memberType').value;
    const generationFields = document.getElementById('generation');

    if (memberType !== 'student') {
        generationFields.style.display = 'block';
    }
}

document.getElementById('registrationForm')?.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from submitting the traditional way
Z
    // Collect form data based on membership type
    const memberType = document.getElementById('memberType').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const generation = memberType === 'student' ? document.getElementById('generation').value : undefined;
    const password = document.getElementById('password').value;

    // Simulate an API call for registration
    try {
        const response = await fetch(`${url}/api/v1/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ membershipType: memberType, name, email, number: generation, password })
        });
        if (response.ok) {
            alert('Registration successful.');
            window.location.href = 'login.html'; // Redirect to login page
        } else {
            alert('Registration failed. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during registration. Please try again.');
    }
});