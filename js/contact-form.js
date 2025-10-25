// ============================
// CONTACT FORM VALIDATION & SUBMISSION
// ============================

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitButton = form.querySelector('.submit-button');
    const buttonText = submitButton.querySelector('.button-text');
    const formStatus = document.getElementById('formStatus');
    
    // Error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    
    // Validation functions
    function validateName() {
        const name = nameInput.value.trim();
        
        if (name === '') {
            showError(nameInput, nameError, '❌ Please enter your name');
            return false;
        }
        
        if (name.length < 2) {
            showError(nameInput, nameError, '❌ Name must be at least 2 characters');
            return false;
        }
        
        showSuccess(nameInput, nameError);
        return true;
    }
    
    function validateEmail() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email === '') {
            showError(emailInput, emailError, '❌ Please enter your email');
            return false;
        }
        
        if (!emailRegex.test(email)) {
            showError(emailInput, emailError, '❌ Please enter a valid email');
            return false;
        }
        
        showSuccess(emailInput, emailError);
        return true;
    }
    
    function validateMessage() {
        const message = messageInput.value.trim();
        
        if (message === '') {
            showError(messageInput, messageError, '❌ Please enter a message');
            return false;
        }
        
        if (message.length < 10) {
            showError(messageInput, messageError, '❌ Message must be at least 10 characters');
            return false;
        }
        
        showSuccess(messageInput, messageError);
        return true;
    }
    
    function showError(input, errorElement, message) {
        input.classList.add('error');
        input.classList.remove('success');
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
    
    function showSuccess(input, errorElement) {
        input.classList.remove('error');
        input.classList.add('success');
        errorElement.classList.remove('show');
    }
    
    // Real-time validation
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    messageInput.addEventListener('blur', validateMessage);
    
    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim() !== '') validateName();
    });
    
    emailInput.addEventListener('input', () => {
        if (emailInput.value.trim() !== '') validateEmail();
    });
    
    messageInput.addEventListener('input', () => {
        if (messageInput.value.trim() !== '') validateMessage();
    });
    
    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();
        
        if (!isNameValid || !isEmailValid || !isMessageValid) {
            showFormStatus('❌ Please fill in all fields correctly', 'error');
            return;
        }
        
        // Show loading state
        submitButton.classList.add('loading');
        buttonText.textContent = 'Sending';
        
        // Get form data
        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            message: messageInput.value.trim()
        };
        
        try {
            // Replace with your email
            const response = await fetch('https://formsubmit.co/ajax/codeadic09@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                showFormStatus('✅ Message sent successfully! I\'ll get back to you soon.', 'success');
                form.reset();
                
                [nameInput, emailInput, messageInput].forEach(input => {
                    input.classList.remove('success', 'error');
                });
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            console.error('Error:', error);
            showFormStatus('❌ Failed to send message. Please try again.', 'error');
        } finally {
            submitButton.classList.remove('loading');
            buttonText.textContent = 'Send Message';
        }
    });
    
    function showFormStatus(message, type) {
        formStatus.textContent = message;
        formStatus.className = `form-status show ${type}`;
        
        setTimeout(() => {
            formStatus.classList.remove('show');
        }, 5000);
    }
});
