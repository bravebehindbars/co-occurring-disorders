  // fetch('./navbar.html')
  //   .then(response => response.text())
  //   .then(data => {
  //     document.getElementById('navbar-container').innerHTML = data;
  //   });

  // Scroll to bottom functionality
  // Ensure DOM is fully loaded before running the script
  document.addEventListener("DOMContentLoaded", function() {
    // Ensure the button exists and can be clicked
    const scrollButton = document.getElementById('scroll-to-bottom');
    
    if (scrollButton) {
      scrollButton.addEventListener('click', function() {
        // Scroll to the bottom of the page smoothly
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      });
    } else {
      console.log('Button not found');
    }
  });
  document.querySelector('.toggle-btn').addEventListener('click', function() {
    var textArea = document.querySelector('.text-area');
    
    if (textArea.style.display === 'none' || textArea.style.display === '') {
      textArea.style.display = 'block';
      this.textContent = 'Show Less'; // Change button text
    } else {
      textArea.style.display = 'none';
      this.textContent = 'Show More'; // Change button text back
    }
  });