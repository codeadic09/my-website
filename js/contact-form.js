// ============================
// FORMSPREE CONTACT FORM
// With AJAX Submission
// ============================

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const submitButton = form.querySelector('.submit-button');
  const buttonText = submitButton.querySelector('.button-text');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Clear previous status
    formStatus.style.display = 'none';
    formStatus.className = 'form-status';
    
    // Get form data
    const formData = new FormData(form);
    
    // Disable button
    submitButton.disabled = true;
    buttonText.textContent = 'Sending...';
    
    try {
      // Send to Formspree
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        // Success
        showStatus('✅ Message sent successfully! I\'ll get back to you soon.', 'success');
        form.reset();
      } else {
        // Error
        const data = await response.json();
        if (data.errors) {
          showStatus('❌ ' + data.errors.map(error => error.message).join(', '), 'error');
        } else {
          showStatus('❌ Oops! There was a problem submitting your form.', 'error');
        }
      }
    } catch (error) {
      showStatus('❌ Network error. Please check your connection and try again.', 'error');
    } finally {
      // Re-enable button
      submitButton.disabled = false;
      buttonText.textContent = 'Send Message';
    }
  });
  
  // Show status message
  function showStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = `form-status ${type}`;
    formStatus.style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
      formStatus.style.display = 'none';
    }, 5000);
  }
});
