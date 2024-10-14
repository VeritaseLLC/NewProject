const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');

function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
 }
 burger.addEventListener('click', function() {
   
    toggleNav();
    
    
});




document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const mobile = document.getElementById('mobile').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validate fields
            if (name === '' || email === '' || mobile === '' || message === '') {
                alert('Please fill in all fields.');
                return;
            }

            // Mobile number validation (10 digits)
            const mobilePattern = /^[0-9]{10}$/;
            if (!mobilePattern.test(mobile)) {
                alert('Please enter a valid 10-digit mobile number.');
                return;
            }

            // Email validation (basic check)
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // If all validations pass
            alert('Submitted successfully!');
        });
    } else {
        console.error('Form element not found.');
    }
});