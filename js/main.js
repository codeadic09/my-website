// ============================
// MAIN JAVASCRIPT
// ============================

document.addEventListener('DOMContentLoaded', () => {

    // ============================
    // HAMBURGER MENU
    // ============================
    
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close mobile menu when clicking a link
        const mobileLinks = document.querySelectorAll('.mobile-nav-links a, .mobile-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ============================
    // SMOOTH SCROLL NAVIGATION (Locomotive Compatible)
    // ============================
    
    // Wait for Locomotive to initialize
    // setTimeout(() => {
    //     const allNavLinks = document.querySelectorAll('.cta-button, .nav-links a, .mobile-link, .footer-links a');
        
    //     allNavLinks.forEach(link => {
    //         link.addEventListener('click', function(e) {
    //             e.preventDefault();
                
    //             const targetId = this.getAttribute('href');
    //             if (!targetId || targetId === '#') return;
                
    //             const targetSection = document.querySelector(targetId);
                
    //             // Use Locomotive Scroll (same as footer)
    //             if (targetSection && window.locomotiveScroll) {
    //                 window.locomotiveScroll.scrollTo(targetSection, {
    //                     duration: 1500,
    //                     easing: [0.25, 0.00, 0.35, 1.00]
    //                 });
                    
    //                 // Update active state
    //                 allNavLinks.forEach(navLink => navLink.classList.remove('active'));
    //                 this.classList.add('active');
    //             }
    //         });
    //     });
    // }, 3500); // Wait for Locomotive to be ready

    // ============================
    // ACTIVE NAV ON SCROLL
    // ============================
    
    // window.addEventListener('scroll', () => {
    //     const sections = document.querySelectorAll('section[id]');
    //     const scrollY = window.pageYOffset;
        
    //     sections.forEach(section => {
    //         const sectionHeight = section.offsetHeight;
    //         const sectionTop = section.offsetTop - 100;
    //         const sectionId = section.getAttribute('id');
            
    //         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
    //             document.querySelectorAll('.nav-links a').forEach(link => {
    //                 link.classList.remove('active');
    //                 if (link.getAttribute('href') === `#${sectionId}`) {
    //                     link.classList.add('active');
    //                 }
    //             });
    //         }
    //     });
    // });

    // ============================
    // FORM SUBMISSION
    // ============================
    
    const contactForm = document.querySelector('.contact-form');
    
    // if (contactForm) {
    //     contactForm.addEventListener('submit', (e) => {
    //         e.preventDefault();
            
    //         const name = contactForm.querySelector('input[type="text"]').value;
    //         const email = contactForm.querySelector('input[type="email"]').value;
    //         const message = contactForm.querySelector('textarea').value;
            
    //         if (name && email && message) {
    //             console.log('Form submitted:', { name, email, message });
                
    //             // Add your form submission logic here
    //             alert('Message sent successfully! (This is a demo)');
                
    //             // Reset form
    //             contactForm.reset();
    //         }
    //     });
    // }

        // PROJECT LINK HANDLERS
        // ============================
    
        // Get all project buttons
        const projectButtons = document.querySelectorAll('.project-cta');
    
        projectButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
    
                const url = this.getAttribute('data-url');
    
                if (url && url !== '' && url !== '#') {
                    // Open in new tab
                    window.open(url, '_blank', 'noopener,noreferrer');
                } else {
                    // If no URL, show coming soon message
                    console.log('Project coming soon!');
                }
            });
        });
    
    });
