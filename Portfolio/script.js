document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');

    form.addEventListener('submit', function(event) {
        let valid = true;

        if (nameInput.value.trim() === '') {
            alert('Please enter your name.');
            valid = false;
        }

        if (emailInput.value.trim() === '') {
            alert('Please enter your email.');
            valid = false;
        } else if (!validateEmail(emailInput.value.trim())) {
            alert('Please enter a valid email address.');
            valid = false;
        }

        if (messageInput.value.trim() === '') {
            alert('Please enter your message.');
            valid = false;
        }

        if (!valid) {
            event.preventDefault(); // Prevent form submission
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            projects.forEach(project => {
                if (category === 'all' || project.classList.contains(category)) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
});
