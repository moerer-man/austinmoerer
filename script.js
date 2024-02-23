<script>
        // Smooth scrolling when clicking on links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const sectionId = this.getAttribute('href');
                document.querySelector(sectionId).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    </script>
        // Add any JavaScript functionality or interactivity here

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // Add logic to handle form submission
    // For example, you can use AJAX to send form data to a server
    alert('Form submitted!');
});
