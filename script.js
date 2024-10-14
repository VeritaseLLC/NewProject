// const menu = document.querySelector('.menu-links');
// const menuList = document.querySelector('ul');
// menu.addEventListener('click',()=>{
//     menu.classList.toggle('fa-xmark');
//     menuList.classList.toggle('slide');
// })

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

document.getElementById('sub-icon').addEventListener('click', function() {
    const message = document.getElementById('text-box').value.trim(); // Use trim() to remove whitespace
    const email= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (message === "") {
        alert("Please enter the Email Id.");
    } else {
        if (email.test(message)) {
            alert("PDF sent successfully to your mail ID.");
            document.getElementById('text-box').value = ''; 
        } else {
            alert('Please enter a valid email address.');
        }
    }
});


// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();

    
//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const mobile = document.getElementById('mobile').value.trim();
//     const message = document.getElementById('message').value.trim();

    
//     if (name === '' || email === '' || mobile === '' || message === '') {
//         alert('Please fill in all fields.');
//         return;
//     }

   
//     const mobilePattern = /^[0-9]{10}$/;
//     if (!mobilePattern.test(mobile)) {
//         alert('Please enter a valid 10-digit mobile number.');
//         return;
//     }

    
//     const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//     if (!emailPattern.test(email)) {
//         alert('Please enter a valid email address.');
//         return;
//     }

//        alert('Submitted successfully!');
// });


