// main.js - Archivo principal que inicializa todos los módulos

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todos los módulos
    Navigation.init();
    ScrollEffects.init();
    CustomCursor.init();
    SmoothScroll.init();
    ContactForm.init();
    AnimationEffects.init();
});

// navigation.js - Manejo de la navegación y menú móvil
const Navigation = {
    init: function() {
        this.navbar = document.querySelector('.navbar');
        this.hamburger = document.querySelector('.hamburger');
        this.navLinks = document.querySelector('.nav-links');
        this.navLinksItems = document.querySelectorAll('.nav-links a');
        
        this.setupEventListeners();
        this.handleScroll();
    },
    
    setupEventListeners: function() {
        // Toggle del menú para móviles
        this.hamburger.addEventListener('click', () => {
            this.hamburger.classList.toggle('active');
            this.navLinks.classList.toggle('active');
        });
        
        // Cerrar menú al hacer clic en un enlace
        this.navLinksItems.forEach(item => {
            item.addEventListener('click', () => {
                this.hamburger.classList.remove('active');
                this.navLinks.classList.remove('active');
            });
        });
        
        // Cambiar estilo de la barra de navegación al desplazarse
        window.addEventListener('scroll', () => this.handleScroll());
    },
    
    handleScroll: function() {
        if (window.scrollY > 50) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    }
};

// scroll-effects.js - Efectos basados en el scroll
const ScrollEffects = {
    init: function() {
        this.sections = document.querySelectorAll('.reveal');
        
        this.setupEventListeners();
        this.animateOnScroll(); // Inicializar la animación al cargar la página
    },
    
    setupEventListeners: function() {
        window.addEventListener('scroll', () => this.animateOnScroll());
    },
    
    animateOnScroll: function() {
        const triggerBottom = window.innerHeight * 0.8;
        
        this.sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < triggerBottom) {
                section.classList.add('active');
            }
        });
    }
};

// custom-cursor.js - Implementación del cursor personalizado
const CustomCursor = {
    init: function() {
        this.cursor = document.querySelector('.cursor');
        this.cursorDot = document.querySelector('.cursor-dot');
        this.body = document.querySelector('body');
        
        if (window.innerWidth > 768) {
            this.setupCursor();
        }
    },
    
    setupCursor: function() {
        // Solo activar en pantallas no táctiles
        this.cursor.style.display = 'block';
        this.cursorDot.style.display = 'block';
        
        document.addEventListener('mousemove', (e) => {
            this.cursor.style.top = e.clientY + 'px';
            this.cursor.style.left = e.clientX + 'px';
            
            this.cursorDot.style.top = e.clientY + 'px';
            this.cursorDot.style.left = e.clientX + 'px';
        });
        
        // Cambiar tamaño del cursor al pasar sobre enlaces
        document.querySelectorAll('a, button').forEach(item => {
            item.addEventListener('mouseenter', () => {
                this.cursor.style.width = '40px';
                this.cursor.style.height = '40px';
                this.cursor.style.borderColor = 'var(--secondary-color)';
            });
            
            item.addEventListener('mouseleave', () => {
                this.cursor.style.width = '20px';
                this.cursor.style.height = '20px';
                this.cursor.style.borderColor = 'var(--primary-color)';
            });
        });
        
        // Ocultar el cursor por defecto
        this.body.style.cursor = 'none';
    }
};

// smooth-scroll.js - Desplazamiento suave para enlaces internos
const SmoothScroll = {
    init: function() {
        this.setupEventListeners();
    },
    
    setupEventListeners: function() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = anchor.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Ajuste para la barra de navegación
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
};

// contact-form.js - Validación y envío del formulario de contacto
const ContactForm = {
    init: function() {
        this.contactForm = document.querySelector('.contact-form');
        
        if (this.contactForm) {
            this.setupEventListeners();
        }
    },
    
    setupEventListeners: function() {
        this.contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            let isValid = true;
            
            // Validación básica
            if (!name.value.trim()) {
                this.markInvalid(name, 'Por favor ingresa tu nombre');
                isValid = false;
            } else {
                this.markValid(name);
            }
            
            if (!email.value.trim()) {
                this.markInvalid(email, 'Por favor ingresa tu email');
                isValid = false;
            } else if (!this.isValidEmail(email.value)) {
                this.markInvalid(email, 'Por favor ingresa un email válido');
                isValid = false;
            } else {
                this.markValid(email);
            }
            
            if (!message.value.trim()) {
                this.markInvalid(message, 'Por favor ingresa tu mensaje');
                isValid = false;
            } else {
                this.markValid(message);
            }
            
            if (isValid) {
                this.submitForm();
            }
        });
    },
    
    markInvalid: function(field, message) {
        field.classList.add('invalid');
        
        // Crear o actualizar mensaje de error
        let errorMessage = field.parentElement.querySelector('.error-message');
        if (!errorMessage) {
            errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            field.parentElement.appendChild(errorMessage);
        }
        errorMessage.textContent = message;
    },
    
    markValid: function(field) {
        field.classList.remove('invalid');
        const errorMessage = field.parentElement.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    },
    
    isValidEmail: function(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },
    
    submitForm: function() {
        // Aquí irían las acciones para enviar el formulario
        // Por ahora, simularemos una respuesta exitosa
        const submitBtn = this.contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            this.contactForm.innerHTML = '<div class="success-message"><i class="fas fa-check-circle"></i><p>¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.</p></div>';
        }, 1500);
    }
};

// animation-effects.js - Efectos de animación adicionales
const AnimationEffects = {
    init: function() {
        this.addTypingEffect();
    },
    
    addTypingEffect: function() {
        const heroTitle = document.querySelector('.hero h1');
        const heroSubtitle = document.querySelector('.hero h3');
        const heroText = document.querySelector('.hero p');
        
        if (heroTitle && heroSubtitle && heroText) {
            // Resetear el contenido para la animación
            const titleText = heroTitle.innerHTML;
            const subtitleText = heroSubtitle.textContent;
            const paragraphText = heroText.textContent;
            
            heroTitle.innerHTML = '';
            heroSubtitle.textContent = '';
            heroText.textContent = '';
            
            // Animar el título (respetando el span)
            let titleParts = titleText.split('<span');
            heroTitle.innerHTML = titleParts[0];
            
            setTimeout(() => {
                heroTitle.innerHTML += '<span' + titleParts[1];
                
                // Animar el subtítulo
                setTimeout(() => {
                    let index = 0;
                    const typeSubtitle = setInterval(() => {
                        if (index < subtitleText.length) {
                            heroSubtitle.textContent += subtitleText.charAt(index);
                            index++;
                        } else {
                            clearInterval(typeSubtitle);
                            
                            // Animar el párrafo
                            setTimeout(() => {
                                let paragraphIndex = 0;
                                const typeParagraph = setInterval(() => {
                                    if (paragraphIndex < paragraphText.length) {
                                        heroText.textContent += paragraphText.charAt(paragraphIndex);
                                        paragraphIndex++;
                                    } else {
                                        clearInterval(typeParagraph);
                                    }
                                }, 20);
                            }, 300);
                        }
                    }, 50);
                }, 300);
            }, 500);
        }
    }
};