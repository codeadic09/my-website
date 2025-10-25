// ============================
// PRELOADER & PROGRESS BAR
// ============================

document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');
    
    let progress = 0;
    const duration = 4000; // 2 seconds
    const interval = 20; // Update every 20ms
    const increment = 100 / (duration / interval);
    
    // Animate progress bar
    const progressInterval = setInterval(() => {
        progress += increment;
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
            completeLoading();
        }
        
        gsap.to(progressBar, {
            width: `${progress}%`,
            duration: 0.1,
            ease: "power2.out"
        });
        
        progressText.textContent = `${Math.floor(progress)}%`;
    }, interval);
    
    // Complete loading animation
    function completeLoading() {
        gsap.timeline()
            .to(progressBar, {
                opacity: 0,
                duration: 0.5,
                delay: 0.3
            })
            .to(progressText, {
                opacity: 0,
                duration: 0.5
            }, "-=0.5")
            .to('.preloader-logo', {
                scale: 1.2,
                opacity: 0,
                duration: 0.8,
                ease: "power2.in"
            }, "-=0.3")
            .to(preloader, {
                opacity: 0,
                scale: 0.9,
                duration: 1,
                ease: "power2.inOut",
                onComplete: () => {
                    preloader.style.display = 'none';
                    document.body.style.overflow = 'visible';
                }
            }, "-=0.5");
    }
    
    // Animate orbs in preloader
    gsap.to('.orb-1', {
        y: -30,
        x: 20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });
    
    gsap.to('.orb-2', {
        y: 40,
        x: -30,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });
});
