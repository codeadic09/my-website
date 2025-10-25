// ============================
// GSAP ANIMATIONS
// ============================



gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Wait for preloader
    setTimeout(() => {
        initAnimations();
    }, 3500);
});

function initAnimations() {
    
    // ============================
    // HERO SECTION ANIMATIONS
    // ============================
    
    // Hero title animation
    gsap.to('.hero-title', {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3
    });
    
    // Hero subtitle
    gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out'
    });
    
    // CTA button
    gsap.from('.cta-button', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        delay: 0.9,
        ease: 'power3.out'
    });
    
    // Spline container fade in from right
    gsap.to('.spline-container', {
        opacity: 1,
        x: 0,
        duration: 1.5,
        delay: 0.5,
        ease: 'power3.out'
    });
    
    // Floating orbs animation
    gsap.to('.hero-orb-1', {
        y: -20,
        x: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });
    
    gsap.to('.hero-orb-2', {
        y: 15,
        x: -15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });
    
    gsap.to('.hero-orb-3', {
        y: -25,
        x: 20,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });
    
    // CTA button hover animation
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mouseenter', () => {
        gsap.to(ctaButton, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    ctaButton.addEventListener('mouseleave', () => {
        gsap.to(ctaButton, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
 
// ============================
    
            
    
    // Submit button animation
    const submitButton = document.querySelector('.submit-button');
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        
        gsap.to(submitButton, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut',
            onComplete: () => {
                // Add your form submission logic here
                alert('Message sent! (Demo)');
            }
        });
    });
    
    // Social icons hover
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            gsap.to(icon, {
                y: -10,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        icon.addEventListener('mouseleave', () => {
            gsap.to(icon, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    // ============================
    // FOOTER ANIMATIONS
    // ============================
    
    gsap.to('.footer-content', {
        scrollTrigger: {
            trigger: '.footer',
            scroller: '[data-scroll-container]',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power3.out'
    });
    
    // Footer particles animation
    gsap.to('.particle', {
        scrollTrigger: {
            trigger: '.footer',
            scroller: '[data-scroll-container]',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: -20,
        stagger: 0.2,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });
}

// Vertical Scrolling Role Text Animation
function initRoleScrollAnimation() {
    const roleTexts = document.querySelectorAll('.role-text');
    const totalRoles = roleTexts.length;
    let currentIndex = 0;
    
    // Set initial positions - stack them vertically
    roleTexts.forEach((text, index) => {
        gsap.set(text, { y: index * 100 + '%' });
    });
    
    function scrollRoles() {
        currentIndex = (currentIndex + 1) % totalRoles;
        
        // Scroll all items up
        roleTexts.forEach((text) => {
            gsap.to(text, {
                y: '-=100%',
                duration: 0.8,
                ease: 'power2.inOut',
                onComplete: function() {
                    // Reset position if scrolled too far up
                    const currentY = gsap.getProperty(text, 'y');
                    if (currentY <= -100) {
                        gsap.set(text, { y: (totalRoles - 1) * 100 + '%' });
                    }
                }
            });
        });
        
        // Continue loop - 1. → 2. → 3. → 1.
        gsap.delayedCall(1.5, scrollRoles);
    }
    
    // Start animation after initial load
    gsap.delayedCall(2, scrollRoles);
}

// Initialize after page load
window.addEventListener('load', () => {
    initRoleScrollAnimation();
});

// // ============================
// // ABOUT SECTION - SMOOTH GSAP ANIMATIONS
// // ============================

// function initAboutAnimations() {
    
//     // ============================
//     // 1. SECTION TITLE - Fade In & Scale
//     // ============================
//     gsap.fromTo('.about-section .section-title',
//         {
//             opacity: 0,
//             y: 60,
//             scale: 0.9
//         },
//         {
//             scrollTrigger: {
//                 trigger: '.about-section',
//                 scroller: '[data-scroll-container]',
//                 start: 'top 80%',
//                 end: 'top 50%',
//                 scrub: 1.5,
//                 markers: false
//             },
//             opacity: 1,
//             y: 0,
//             scale: 1,
//             ease: 'power2.out'
//         }
//     );

//     // ============================
//     // 2. ABOUT GRID - 3D Depth Entrance
//     // ============================
//     gsap.fromTo('.about-grid',
//         {
//             z: -300,
//             opacity: 0,
//             scale: 0.85
//         },
//         {
//             scrollTrigger: {
//                 trigger: '.about-section',
//                 scroller: '[data-scroll-container]',
//                 start: 'top 75%',
//                 end: 'top 30%',
//                 scrub: 2,
//                 markers: false
//             },
//             z: 0,
//             opacity: 1,
//             scale: 1,
//             ease: 'power2.out'
//         }
//     );

   

//     // Profile image hover effect
//     const profileImg = document.querySelector('.profile-image-container');
//     if (profileImg) {
//         profileImg.addEventListener('mouseenter', () => {
//             gsap.to(profileImg, {
//                 scale: 1.05,
//                 rotateY: 5,
//                 duration: 0.4,
//                 ease: 'power2.out'
//             });
//         });
        
//         profileImg.addEventListener('mouseleave', () => {
//             gsap.to(profileImg, {
//                 scale: 1,
//                 rotateY: 0,
//                 duration: 0.4,
//                 ease: 'power2.out'
//             });
//         });
//     }

//     // ============================
//     // 4. ABOUT TEXT - Smooth Fade & Slide
//     // ============================
//     gsap.fromTo('.about-text',
//         {
//             x: 80,
//             opacity: 0
//         },
//         {
//             scrollTrigger: {
//                 trigger: '.about-grid',
//                 scroller: '[data-scroll-container]',
//                 start: 'top 70%',
//                 end: 'top 40%',
//                 scrub: 2
//             },
//             x: 0,
//             opacity: 1,
//             ease: 'power2.out'
//         }
//     );

//     // About text (fastest)
// gsap.to('.about-text', {
//     scrollTrigger: {
//         trigger: '.about-section',
//         scroller: '[data-scroll-container]',
//         start: 'top bottom',
//         end: 'bottom top',
//         scrub: 1  // Fast
//     },
//     y: -100,  // Most movement
//     ease: 'none'
// });
    
    
    
//     // ============================
//     // 8. ABOUT SPLINE - Fade In Smoothly
//     // ============================
//     gsap.fromTo('.about-spline-background',
//         {
//             opacity: 0,
//             scale: 1.15,
//             filter: 'blur(10px)'
//         },
//         {
//             scrollTrigger: {
//                 trigger: '.about-section',
//                 scroller: '[data-scroll-container]',
//                 start: 'top 90%',
//                 end: 'top 50%',
//                 scrub: 2
//             },
//             opacity: 0.5,
//             scale: 1,
//             filter: 'blur(3px)',
//             ease: 'power2.out'
//         }
//     );

//     // ============================
//     // 9. PARALLAX EFFECT - Different Speeds
//     // ============================
    
//     // Background layer (slow)
//     gsap.to('.about-spline-background', {
//         scrollTrigger: {
//             trigger: '.about-section',
//             scroller: '[data-scroll-container]',
//             start: 'top bottom',
//             end: 'bottom top',
//             scrub: 4
//         },
//         y: 150,
//         ease: 'none'
//     });

//     // Profile (medium)
//     gsap.to('.profile-image-container', {
//         scrollTrigger: {
//             trigger: '.about-section',
//             scroller: '[data-scroll-container]',
//             start: 'top bottom',
//             end: 'bottom top',
//             scrub: 1
//         },
//         y: -100,
//         ease: 'none'
//     });

//     // Skills (fast)
//     gsap.to('.skills-grid', {
//         scrollTrigger: {
//             trigger: '.about-section',
//             scroller: '[data-scroll-container]',
//             start: 'top bottom',
//             end: 'bottom top',
//             scrub: 1
//         },
//         y: -100,
//         ease: 'none'
//     });

//     // ============================
//     // 10. CONTINUOUS FLOATING ANIMATION
//     // ============================
//     gsap.to('.skill-item', {
//         y: (i) => (i % 2 === 0 ? -8 : 8),
//         duration: 2,
//         repeat: -1,
//         yoyo: true,
//         ease: 'sine.inOut',
//         stagger: {
//             each: 0.15,
//             from: 'random'
//         }
//     });

//     // ============================
//     // 11. SECTION BORDER GLOW ANIMATION
//     // ============================
//     gsap.to('.about-grid', {
//         scrollTrigger: {
//             trigger: '.about-grid',
//             scroller: '[data-scroll-container]',
//             start: 'top 60%',
//             end: 'top 40%',
//             scrub: 1
//         },
        
//         ease: 'power2.out'
//     });

//     console.log('✅ About section animations initialized');
// }

// // ============================
// // INITIALIZE ON LOAD
// // ============================
// window.addEventListener('load', () => {
//     setTimeout(() => {
//         initAboutAnimations();
        
//         // Refresh after initialization
//         if (window.locomotiveScroll) {
//             window.locomotiveScroll.update();
//         }
//         ScrollTrigger.refresh();
//     }, 6000);
// });









// ============================
// ABOUT SECTION - COMPLETE ANIMATIONS
// ============================

function initAboutAnimations() {
    
    // ============================
    // 1. SECTION TITLE - Fade In & Scale
    // ============================
    gsap.fromTo('.about-section .section-title',
        {
            opacity: 0,
            y: 60,
            scale: 0.9
        },
        {
            scrollTrigger: {
                trigger: '.about-section',
                scroller: '[data-scroll-container]',
                start: 'top 80%',
                end: 'top 50%',
                scrub: 1.5,
                markers: false
            },
            opacity: 1,
            y: 0,
            scale: 1,
            ease: 'power2.out'
        }
    );

    const aboutText = document.querySelector('.about-text');
    
    if (aboutText && typeof SplitType !== 'undefined') {
        const text = new SplitType(aboutText, { 
            types: 'lines, words',
            lineClass: 'line'
        });
        
        gsap.from(text.lines, {
            scrollTrigger: {
                trigger: '.about-text',
                scroller: '[data-scroll-container]',
                start: 'top 75%',
                end: 'top 40%',
                scrub: 2
            },
            y: 100,
            opacity: 0,
            stagger: 0.08,
            ease: 'power2.out'
        });
        
        gsap.set(aboutText, { opacity: 1 });
    }

    // ============================
    // 3. ABOUT GRID/SECTION FADE IN
    // ============================
    gsap.fromTo('.about-grid',
        {
            opacity: 0,
            y: 40
        },
        {
            scrollTrigger: {
                trigger: '.about-section',
                scroller: '[data-scroll-container]',
                start: 'top 75%',
                end: 'top 35%',
                scrub: 2,
                markers: false
            },
            opacity: 1,
            y: 0,
            ease: 'power2.out'
        }
    );

    // ============================
    // 4. SPLINE BACKGROUND - Fade In Smoothly
    // ============================
    gsap.fromTo('.about-spline-background',
        {
            opacity: 0,
            scale: 1.15,
            filter: 'blur(10px)'
        },
        {
            scrollTrigger: {
                trigger: '.about-section',
                scroller: '[data-scroll-container]',
                start: 'top 90%',
                end: 'top 50%',
                scrub: 2
            },
            opacity: 0.5,
            scale: 1,
            filter: 'blur(3px)',
            ease: 'power2.out'
        }
    );

    // ============================
    // 5. PARALLAX - Different Speed Layers
    // ============================
    
    // Spline Background (Slowest - moves down)
    gsap.to('.about-spline-background', {
        scrollTrigger: {
            trigger: '.about-section',
            scroller: '[data-scroll-container]',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 5  // Slowest
        },
        y: 200,  // Moves down as you scroll
        ease: 'none'
    });

    // Section Title (Slow - moves up slightly)
    gsap.to('.about-section .section-title', {
        scrollTrigger: {
            trigger: '.about-section',
            scroller: '[data-scroll-container]',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5
        },
        y: -60,
        ease: 'none'
    });

    // About Text (Medium - moves up)
    // gsap.to('.about-text', {
    //     scrollTrigger: {
    //         trigger: '.about-section',
    //         scroller: '[data-scroll-container]',
    //         start: 'top bottom',
    //         end: 'bottom top',
    //         scrub: 1.5
    //     },
    //     y: -60,
    //     ease: 'none'
    // });

    // Skills Grid (Fastest - moves up most)
    gsap.to('.skills-grid', {
        scrollTrigger: {
            trigger: '.about-section',
            scroller: '[data-scroll-container]',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 5
        },
        y: -100,
        ease: 'none'
    });

    console.log('✅ About section animations initialized');
}




    // ============================
    // 1. PROFILE IMAGE - Slide & Rotate
    // ============================
    gsap.fromTo('.profile-image-container',
        {
            opacity: 0,
            y: 60,
            scale: 0.9
        },
        {
            scrollTrigger: {
                trigger: '.about-text',
                scroller: '[data-scroll-container]',
                start: 'top 80%',
                end: 'top 50%',
                scrub: 1.5,
                markers: false
            },
            opacity: 1,
            y: 0,
            scale: 1,
            ease: 'power2.out'
        }
    );

    // Profile image hover effect
    const profileImg = document.querySelector('.profile-image-container');
    if (profileImg) {
        profileImg.addEventListener('mouseenter', () => {
            gsap.to(profileImg, {
                scale: 1.05,
                rotateY: 5,
                duration: 0.4,
                ease: 'power2.out'
            });
        });
        
        profileImg.addEventListener('mouseleave', () => {
            gsap.to(profileImg, {
                scale: 1,
                rotateY: 0,
                duration: 0.4,
                ease: 'power2.out'
            });
        });
    }

    // ============================
    // 3. PARALLAX - Title & Profile
    // ============================
    

    // Profile Image parallax (medium up movement)
    gsap.to('.profile-image-container', {
        scrollTrigger: {
            trigger: '.about-section',
            scroller: '[data-scroll-container]',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 5
        },
        y: -100,
        ease: 'none'
    });
    
    




// ============================
// INITIALIZE ON LOAD
// ============================
window.addEventListener('load', () => {
    setTimeout(() => {
        initAboutAnimations();
        
        
        // Refresh ScrollTrigger
        if (window.locomotiveScroll) {
            window.locomotiveScroll.update();
        }
        ScrollTrigger.refresh();
    }, 3500);
});












// ============================
// PROJECTS SECTION - SIMPLE ANIMATION
// ============================

function initProjectsAnimations() {
    // Simple fade in on scroll
    gsap.from('.projects-section .container > *', {
        scrollTrigger: {
            trigger: '.projects-section',
            scroller: '[data-scroll-container]',
            start: 'top 80%',
            end: 'top 40%',
            scrub: 1
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: 'power2.out'
    });
    
    console.log('✅ Projects animations initialized');
}



// ============================
// NEON DIVIDER - SCROLL COLOR CHANGE
// ============================

gsap.to('.neon-divider', {
    scrollTrigger: {
        trigger: '.neon-divider',
        scroller: '[data-scroll-container]',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        onUpdate: (self) => {
            const progress = self.progress;
            const hue = 220 + (progress * 100); // Blue to Pink
            document.querySelector('.neon-divider').style.filter = 
                `hue-rotate(${hue}deg)`;
        }
    }
});

// Fade in animation
gsap.fromTo('.neon-divider',
    {
        opacity: 0,
        scaleX: 0
    },
    {
        scrollTrigger: {
            trigger: '.neon-divider',
            scroller: '[data-scroll-container]',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1
        },
        opacity: 1,
        scaleX: 1,
        ease: 'power2.out'
    }
);




// ============================
// CONTACT SECTION - SIMPLE ANIMATION
// ============================

function initContactAnimations() {
    // Simple fade in on scroll
    gsap.from('.contact-section .container > *', {
        scrollTrigger: {
            trigger: '.contact-section',
            scroller: '[data-scroll-container]',
            start: 'top 80%',
            end: 'top 40%',
            scrub: 1
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: 'power2.out'
    });
    
    console.log('✅ Contact animations initialized');
}

// ============================
// INITIALIZE ALL SECTION ANIMATIONS
// ============================

window.addEventListener('load', () => {
    setTimeout(() => {
        // initAboutAnimations();
        initProjectsAnimations();
        initContactAnimations();
        
        // Refresh ScrollTrigger
        if (window.locomotiveScroll) {
            window.locomotiveScroll.update();
        }
        ScrollTrigger.refresh();
    }, 3500);
});



