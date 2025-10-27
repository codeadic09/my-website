// // ============================
// // LOCOMOTIVE SCROLL + STABLE SPLINE
// // ============================

// let scroll;

// window.addEventListener('load', () => {
//     setTimeout(() => {
//         initLocomotiveScroll();
//         enableStableSplineInteraction();
//     }, 3000);
// });

// function initLocomotiveScroll() {
//     scroll = new LocomotiveScroll({
//         el: document.querySelector('[data-scroll-container]'),
//         smooth: true,
//         smoothMobile: false,
//         multiplier: 1.0,
//         lerp: 0.08,
//         // Disable transform on scroll container to keep Spline stable
//         tablet: {
//             smooth: true
//         },
//         smartphone: {
//             smooth: false
//         }
//     });

//     gsap.registerPlugin(ScrollTrigger);
//     scroll.on('scroll', ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy('[data-scroll-container]', {
//         scrollTop(value) {
//             return arguments.length 
//                 ? scroll.scrollTo(value, 0, 0)
//                 : scroll.scroll.instance.scroll.y;
//         },
//         getBoundingClientRect() {
//             return {
//                 top: 0,
//                 left: 0,
//                 width: window.innerWidth,
//                 height: window.innerHeight
//             };
//         },
//         pinType: document.querySelector('[data-scroll-container]').style.transform 
//             ? 'transform' 
//             : 'fixed'
//     });

//     ScrollTrigger.addEventListener('refresh', () => scroll.update());
//     ScrollTrigger.refresh();
//     window.locomotiveScroll = scroll;
    
//     console.log('Locomotive Scroll initialized with stable Spline');
// }

// function enableStableSplineInteraction() {
//     const splineBackground = document.querySelector('.spline-background');
    
//     if (!splineBackground) {
//         console.log('No Spline background found');
//         return;
//     }

//     // Create overlay for scroll detection
//     const overlay = document.createElement('div');
//     overlay.className = 'spline-scroll-overlay';
//     overlay.style.cssText = `
//         position: fixed;
//         top: 0;
//         left: 0;
//         width: 100vw;
//         height: 100vh;
//         z-index: 1;
//         pointer-events: none;
//         background: transparent;
//     `;
    
//     splineBackground.appendChild(overlay);
    
//     const iframe = splineBackground.querySelector('iframe');
//     let scrollTimeout;
//     let isScrolling = false;
    
//     // Detect wheel events
//     window.addEventListener('wheel', (e) => {
//         isScrolling = true;
//         overlay.style.pointerEvents = 'auto';
//         if (iframe) iframe.style.pointerEvents = 'none';
        
//         clearTimeout(scrollTimeout);
        
//         scrollTimeout = setTimeout(() => {
//             isScrolling = false;
//             overlay.style.pointerEvents = 'none';
//             if (iframe) iframe.style.pointerEvents = 'auto';
//         }, 150);
//     }, { passive: true });
    
//     // Allow mousemove for cursor tracking
//     splineBackground.addEventListener('mousemove', () => {
//         if (!isScrolling && iframe) {
//             iframe.style.pointerEvents = 'auto';
//         }
//     });
    
//     console.log('Stable Spline interaction enabled');
// }

// window.addEventListener('resize', () => {
//     if (scroll) {
//         scroll.update();
//         ScrollTrigger.refresh();
//     }
// });


