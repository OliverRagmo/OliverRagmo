// JavaScript functionality for Oliver Rågmo Portfolio

// Mobile menu state
let isMobileMenuOpen = false;

// Debug function to log menu state
function logMenuState(context) {
    console.log(`[${context}] Mobile menu state:`, {
        isOpen: isMobileMenuOpen,
        windowWidth: window.innerWidth,
        isMobile: window.innerWidth < 768
    });
}

// Mobile menu toggle function
function toggleMobileMenu() {
    // Only allow toggle on mobile screens
    if (window.innerWidth >= 768) {
        console.log('Toggle blocked: Desktop view');
        return;
    }
    
    const mobileNav = document.querySelector('.mobile-nav');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    // Safety checks
    if (!mobileNav || !menuIcon || !closeIcon) {
        console.warn('Mobile menu elements not found');
        return;
    }
    
    // Toggle state
    isMobileMenuOpen = !isMobileMenuOpen;
    
    console.log('Toggling mobile menu to:', isMobileMenuOpen);
    
    if (isMobileMenuOpen) {
        // Show menu
        mobileNav.style.display = 'flex';
        mobileNav.classList.remove('mobile-nav-hidden');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        // Hide menu
        mobileNav.style.display = 'none';
        mobileNav.classList.add('mobile-nav-hidden');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
    
    logMenuState('after toggle');
}

// Force mobile menu to closed state
function forceMobileMenuClosed() {
    const mobileNav = document.querySelector('.mobile-nav');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    isMobileMenuOpen = false;
    
    if (mobileNav) {
        mobileNav.style.display = 'none';
        mobileNav.classList.add('mobile-nav-hidden');
    }
    if (menuIcon) {
        menuIcon.style.display = 'block';
    }
    if (closeIcon) {
        closeIcon.style.display = 'none';
    }
    
    console.log('Forced mobile menu closed');
}

// Initialize mobile menu to correct state
function initializeMobileMenu() {
    console.log('Initializing mobile menu');
    
    const mobileNav = document.querySelector('.mobile-nav');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    
    // Always start closed
    isMobileMenuOpen = false;
    
    if (window.innerWidth >= 768) {
        // Desktop: hide all mobile elements
        if (mobileNav) mobileNav.style.display = 'none';
        if (mobileMenuButton) mobileMenuButton.style.display = 'none';
    } else {
        // Mobile: show button, hide menu
        if (mobileMenuButton) mobileMenuButton.style.display = 'flex';
        if (mobileNav) {
            mobileNav.style.display = 'none';
            mobileNav.classList.add('mobile-nav-hidden');
        }
    }
    
    if (menuIcon) menuIcon.style.display = 'block';
    if (closeIcon) closeIcon.style.display = 'none';
    
    logMenuState('initialize');
}

// Handle window resize
function handleWindowResize() {
    console.log('Window resized to:', window.innerWidth);
    
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    
    if (window.innerWidth >= 768) {
        // Desktop: hide all mobile elements and close menu
        forceMobileMenuClosed();
        if (mobileMenuButton) mobileMenuButton.style.display = 'none';
        if (mobileNav) mobileNav.style.display = 'none';
    } else {
        // Mobile: show button, ensure menu is closed unless explicitly opened
        if (mobileMenuButton) mobileMenuButton.style.display = 'flex';
        if (!isMobileMenuOpen) {
            forceMobileMenuClosed();
        }
    }
    
    logMenuState('resize');
}

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start' 
        });
        
        // Close mobile menu if open
        if (isMobileMenuOpen && window.innerWidth < 768) {
            console.log('Closing menu after navigation');
            toggleMobileMenu();
        }
    }
}

// Contact form handling
function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        project: formData.get('project'),
        message: formData.get('message')
    };
    
    // Show success message
    showFormSuccessMessage(data);
    event.target.reset();
}

function showFormSuccessMessage(data) {
    // Create success message overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
        background: var(--card);
        color: var(--foreground);
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
        text-align: center;
        max-width: 400px;
        margin: 1rem;
        transform: scale(0.9);
        transition: transform 0.3s ease;
    `;
    
    successDiv.innerHTML = `
        <div style="width: 3rem; height: 3rem; background: var(--red-accent); border-radius: 50%; margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20,6 9,17 4,12"></polyline>
            </svg>
        </div>
        <h3 style="margin: 0 0 0.5rem 0; font-size: 1.5rem; font-weight: 600;">Thank you, ${data.name}!</h3>
        <p style="margin: 0; color: var(--muted-foreground); line-height: 1.5;">Your message has been received. I'll get back to you soon!</p>
        <button onclick="this.closest('.success-overlay').remove()" style="margin-top: 1.5rem; background: var(--red-accent); color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 0.5rem; cursor: pointer; font-weight: 500;">Close</button>
    `;
    
    overlay.appendChild(successDiv);
    overlay.className = 'success-overlay';
    document.body.appendChild(overlay);
    
    // Animate in
    setTimeout(() => {
        overlay.style.opacity = '1';
        successDiv.style.transform = 'scale(1)';
    }, 10);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(overlay)) {
            overlay.style.opacity = '0';
            successDiv.style.transform = 'scale(0.9)';
            setTimeout(() => {
                if (document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                }
            }, 300);
        }
    }, 5000);
}

// Header background on scroll
function updateHeaderOnScroll() {
    const header = document.querySelector('.header');
    const scrollY = window.scrollY;
    
    if (scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    }
}

// Intersection Observer for scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Elements to animate
    const animatedElements = document.querySelectorAll([
        '.project-card',
        '.skill-item',
        '.contact-item',
        '.about-paragraph'
    ].join(', '));
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Button ripple effect
function addRippleEffect(event) {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    `;
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => {
        if (button.contains(ripple)) {
            button.removeChild(ripple);
        }
    }, 600);
}

// Initialize ripple effects
function initializeRippleEffects() {
    const buttons = document.querySelectorAll('.btn, .nav-button, .mobile-nav-button, .logo-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', addRippleEffect);
    });
    
    // Add ripple animation CSS
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Parallax effect for background doodles
function initializeParallaxEffects() {
    const doodleElements = document.querySelectorAll([
        '.hero-background svg',
        '.about-background svg',
        '.work-background svg',
        '.contact-background svg'
    ].join(', '));
    
    function updateParallax() {
        const scrollY = window.scrollY;
        
        doodleElements.forEach((element, index) => {
            const speed = 0.1 + (index % 3) * 0.05;
            const yPos = scrollY * speed;
            element.style.transform = `translateY(${yPos}px)`;
        });
    }
    
    // Throttled scroll event
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateParallax();
                updateHeaderOnScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
}

// Section reveal animations
function initializeSectionAnimations() {
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        sectionObserver.observe(section);
    });
    
    // Add CSS for visible sections
    const sectionStyle = document.createElement('style');
    sectionStyle.textContent = `
        .section-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(sectionStyle);
}

// Add mobile menu CSS to ensure proper behavior
function addMobileMenuCSS() {
    const style = document.createElement('style');
    style.textContent = `
        .mobile-nav-hidden {
            display: none !important;
        }
        
        @media (min-width: 768px) {
            .mobile-nav {
                display: none !important;
            }
            .mobile-menu-button {
                display: none !important;
            }
        }
        
        @media (max-width: 767px) {
            .mobile-menu-button {
                display: flex !important;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing portfolio...');
    
    // Add mobile menu CSS first
    addMobileMenuCSS();
    
    // Initialize mobile menu
    initializeMobileMenu();
    
    // Initialize all other features
    initializeScrollAnimations();
    initializeRippleEffects();
    initializeParallaxEffects();
    initializeSectionAnimations();
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    console.log('🎨 Oliver Rågmo Portfolio loaded successfully!');
});

// Handle window resize with debouncing
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleWindowResize, 150);
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Press 'Escape' to close mobile menu
    if (e.key === 'Escape' && isMobileMenuOpen) {
        console.log('Escape pressed, closing menu');
        toggleMobileMenu();
    }
    
    // Press numbers 1-4 to navigate to sections
    const sectionMap = {
        '1': 'hero',
        '2': 'about', 
        '3': 'work',
        '4': 'contact'
    };
    
    if (sectionMap[e.key]) {
        scrollToSection(sectionMap[e.key]);
    }
});

// Page loading animation
function initializePageLoad() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
}

// Initialize page loading
initializePageLoad();

// Export functions for global use
window.portfolioFunctions = {
    scrollToSection,
    toggleMobileMenu,
    handleFormSubmit,
    logMenuState,
    forceMobileMenuClosed
};