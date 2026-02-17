// ==================== STATE MANAGEMENT ====================
let cart = [];

// ==================== DOM ELEMENTS ====================
const header = document.getElementById('header');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const cartBtn = document.getElementById('cart-btn');
const mobileCartBtn = document.getElementById('mobile-cart-btn');
const cartOverlay = document.getElementById('cart-overlay');
const cartSidebar = document.getElementById('cart-sidebar');
const cartClose = document.getElementById('cart-close');
const cartBadge = document.getElementById('cart-badge');
const mobileCartBadge = document.getElementById('mobile-cart-badge');
const cartItems = document.getElementById('cart-items');
const cartFooter = document.getElementById('cart-footer');
const cartTotalPrice = document.getElementById('cart-total-price');
const toast = document.getElementById('toast');

// ==================== SMOOTH SCROLLING ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = 80;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        }
    });
});

// ==================== HEADER SCROLL EFFECT ====================
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 0) {
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ==================== ACTIVE NAV LINK ====================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
});

// ==================== MOBILE MENU ====================
function toggleMobileMenu() {
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
}

// Close mobile menu on nav link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
});

// ==================== CART FUNCTIONALITY ====================
function openCart() {
    cartOverlay.classList.add('active');
    cartSidebar.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartOverlay.classList.remove('active');
    cartSidebar.classList.remove('active');
    document.body.style.overflow = '';
}

// Cart button click handlers
if (cartBtn) cartBtn.addEventListener('click', openCart);
if (mobileCartBtn) mobileCartBtn.addEventListener('click', openCart);
if (cartClose) cartClose.addEventListener('click', closeCart);
if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

// ==================== UPDATE CART UI ====================
function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Update badges
    if (cartBadge) cartBadge.textContent = totalItems;
    if (mobileCartBadge) mobileCartBadge.textContent = totalItems;
    
    // Show/hide mobile cart button
    if (mobileCartBtn) {
        mobileCartBtn.style.display = totalItems > 0 ? 'flex' : 'none';
    }
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
                <p>Votre panier est vide</p>
            </div>
        `;
        cartFooter.style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <div class="cart-item-details">
                    <h3 class="cart-item-name">${item.name}</h3>
                    <p class="cart-item-price">${item.price} DH</p>
                    <div class="cart-item-controls">
                        <div class="cart-item-quantity">
                            <button class="cart-qty-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="5" y1="12" x2="19" y2="12"/>
                                </svg>
                            </button>
                            <span>${item.quantity}</span>
                            <button class="cart-qty-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="12" y1="5" x2="12" y2="19"/>
                                    <line x1="5" y1="12" x2="19" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="3 6 5 6 21 6"/>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                                <line x1="10" y1="11" x2="10" y2="17"/>
                                <line x1="14" y1="11" x2="14" y2="17"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        cartFooter.style.display = 'block';
        cartTotalPrice.textContent = `${totalPrice} DH`;
    }
    
    // Save to localStorage
    localStorage.setItem('maisonAromeCart', JSON.stringify(cart));
}

// ==================== ADD TO CART ====================
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += product.quantity;
    } else {
        cart.push(product);
    }
    
    updateCartUI();
    showToast(`${product.name} ajouté au panier !`);
}

// ==================== UPDATE QUANTITY ====================
function updateQuantity(id, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(id);
        return;
    }
    
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity = newQuantity;
        updateCartUI();
    }
}

// ==================== REMOVE FROM CART ====================
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
    showToast('Produit retiré du panier');
}

// ==================== TOAST NOTIFICATION ====================
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ==================== QUANTITY SELECTOR ====================
document.addEventListener('click', (e) => {
    if (e.target.closest('.qty-minus')) {
        const input = e.target.closest('.quantity-selector').querySelector('.qty-input');
        const currentValue = parseInt(input.value);
        if (currentValue > 1) {
            input.value = currentValue - 1;
        }
    }
    
    if (e.target.closest('.qty-plus')) {
        const input = e.target.closest('.quantity-selector').querySelector('.qty-input');
        const currentValue = parseInt(input.value);
        const maxValue = parseInt(input.max) || 999;
        if (currentValue < maxValue) {
            input.value = currentValue + 1;
        }
    }
});

// ==================== ADD TO CART BUTTONS ====================
document.addEventListener('click', (e) => {
    const addToCartBtn = e.target.closest('.add-to-cart');
    if (!addToCartBtn) return;
    
    const productCard = addToCartBtn.closest('.product-card');
    const quantityInput = productCard.querySelector('.qty-input');
    
    const product = {
        id: addToCartBtn.dataset.id,
        name: addToCartBtn.dataset.name,
        price: parseInt(addToCartBtn.dataset.price),
        image: addToCartBtn.dataset.image,
        quantity: quantityInput ? parseInt(quantityInput.value) : 1
    };
    
    addToCart(product);
    
    // Reset quantity input
    if (quantityInput) {
        quantityInput.value = 1;
    }
});

// ==================== COUNTDOWN TIMER ====================
function startCountdown() {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    if (!daysEl) return;
    
    let timeLeft = {
        days: 7,
        hours: 12,
        minutes: 45,
        seconds: 30
    };
    
    setInterval(() => {
        if (timeLeft.seconds > 0) {
            timeLeft.seconds--;
        } else if (timeLeft.minutes > 0) {
            timeLeft.minutes--;
            timeLeft.seconds = 59;
        } else if (timeLeft.hours > 0) {
            timeLeft.hours--;
            timeLeft.minutes = 59;
            timeLeft.seconds = 59;
        } else if (timeLeft.days > 0) {
            timeLeft.days--;
            timeLeft.hours = 23;
            timeLeft.minutes = 59;
            timeLeft.seconds = 59;
        }
        
        daysEl.textContent = String(timeLeft.days).padStart(2, '0');
        hoursEl.textContent = String(timeLeft.hours).padStart(2, '0');
        minutesEl.textContent = String(timeLeft.minutes).padStart(2, '0');
        secondsEl.textContent = String(timeLeft.seconds).padStart(2, '0');
    }, 1000);
}

// ==================== AROMA FILTERS ====================
const filterButtons = document.querySelectorAll('.filter-btn');
const aromaCards = document.querySelectorAll('.aroma-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter cards
        aromaCards.forEach(card => {
            const category = card.dataset.category;
            
            if (filter === 'all' || category === filter) {
                card.classList.remove('hidden');
                card.style.display = 'block';
            } else {
                card.classList.add('hidden');
                card.style.display = 'none';
            }
        });
    });
});

// ==================== CONTACT FORM ====================
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Hide form and show success message
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
        
        // Reset after 3 seconds
        setTimeout(() => {
            contactForm.style.display = 'block';
            formSuccess.style.display = 'none';
            contactForm.reset();
        }, 3000);
    });
}

// ==================== HERO IMAGE ANIMATION ====================
function animateHeroImage() {
    const heroImg = document.querySelector('.hero-img');
    if (!heroImg) return;
    
    let scale = 1;
    let direction = 1;
    
    setInterval(() => {
        scale += direction * 0.0001;
        
        if (scale >= 1.1) {
            direction = -1;
        } else if (scale <= 1) {
            direction = 1;
        }
        
        heroImg.style.transform = `scale(${scale})`;
    }, 50);
}

// ==================== SCROLL INDICATOR ====================
function handleScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (!scrollIndicator) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    });
}

// ==================== LAZY LOADING IMAGES ====================
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// ==================== PRODUCT CARD HOVER EFFECT ====================
function initProductCardEffects() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// ==================== INITIALIZE CART FROM LOCALSTORAGE ====================
function initCart() {
    const savedCart = localStorage.getItem('maisonAromeCart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
            updateCartUI();
        } catch (e) {
            console.error('Error loading cart:', e);
            cart = [];
        }
    }
}

// ==================== KEYBOARD ACCESSIBILITY ====================
document.addEventListener('keydown', (e) => {
    // Close cart on ESC key
    if (e.key === 'Escape') {
        if (cartSidebar.classList.contains('active')) {
            closeCart();
        }
        if (navMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    }
});

// ==================== PREVENT SCROLL ON CART OPEN ====================
function preventScrollOnCartOpen() {
    const cartItemsContainer = document.querySelector('.cart-items');
    if (!cartItemsContainer) return;
    
    cartItemsContainer.addEventListener('wheel', (e) => {
        const atTop = cartItemsContainer.scrollTop === 0;
        const atBottom = cartItemsContainer.scrollHeight - cartItemsContainer.clientHeight === cartItemsContainer.scrollTop;
        
        if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
            e.preventDefault();
        }
    }, { passive: false });
}

// ==================== SMOOTH FADE IN ON SCROLL ====================
function fadeInOnScroll() {
    const elements = document.querySelectorAll('[data-aos]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(el => observer.observe(el));
}

// ==================== FORMAT PRICE ====================
function formatPrice(price) {
    return new Intl.NumberFormat('fr-MA', {
        style: 'currency',
        currency: 'MAD',
        minimumFractionDigits: 0
    }).format(price);
}

// ==================== DEBOUNCE FUNCTION ====================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==================== WINDOW RESIZE HANDLER ====================
const handleResize = debounce(() => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        toggleMobileMenu();
    }
}, 250);

window.addEventListener('resize', handleResize);

// ==================== PERFORMANCE OPTIMIZATION ====================
// Preload critical images
function preloadCriticalImages() {
    const criticalImages = [
        'https://images.unsplash.com/photo-1770301410072-f6ef6dad65b2?w=1920',
        'https://i.postimg.cc/j560xGW9/image.png',
        'https://i.postimg.cc/zvYM4p0B/im-1.jpg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// ==================== ANALYTICS (Placeholder) ====================
function trackEvent(category, action, label) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', { category, action, label });
    
    // Example: Google Analytics
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', action, {
    //         'event_category': category,
    //         'event_label': label
    //     });
    // }
}

// Track add to cart
document.addEventListener('click', (e) => {
    if (e.target.closest('.add-to-cart')) {
        const btn = e.target.closest('.add-to-cart');
        trackEvent('Ecommerce', 'Add to Cart', btn.dataset.name);
    }
});

// ==================== INITIALIZE APP ====================
function initApp() {
    // Initialize cart from localStorage
    initCart();
    
    // Start countdown timer
    startCountdown();
    
    // Initialize lazy loading
    lazyLoadImages();
    
    // Initialize product card effects
    initProductCardEffects();
    
    // Handle scroll indicator
    handleScrollIndicator();
    
    // Prevent scroll issues
    preventScrollOnCartOpen();
    
    // Preload critical images
    preloadCriticalImages();
    
    console.log('🌸 MAISON AROME - Site initialized successfully');
}

// ==================== RUN ON DOM CONTENT LOADED ====================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// ==================== SERVICE WORKER (Optional for PWA) ====================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.log('Service Worker registration failed'));
    });
}

// ==================== EXPOSE FUNCTIONS TO GLOBAL SCOPE ====================
// (Required for inline onclick handlers)
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.addToCart = addToCart;
