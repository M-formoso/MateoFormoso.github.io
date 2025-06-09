// Configuración de idiomas
const translations = {
    es: {
        // Navegación
        nav: {
            home: "Inicio",
            about: "Sobre mí",
            projects: "Proyectos",
            experience: "Experiencia",
            contact: "Contacto"
        },
        // Hero section
        hero: {
            greeting: "Hola, soy",
            role: "Desarrollador Web Full Stack",
            description: "Comprometido con crear tecnología que deje huella, resuelva problemas reales y transforme el presente en futuro.",
            viewProjects: "Ver Proyectos",
            contactMe: "Contactarme"
        },
        // About section
        about: {
            title: "Sobre Mí",
            subtitle: "Conoce más sobre mi experiencia y habilidades",
            description1: "Soy un desarrollador web full stack con experiencia en la creación de aplicaciones web modernas y responsivas. Mi pasión por la tecnología y la resolución de problemas me impulsa a crear soluciones elegantes y eficientes.",
            description2: "Con más de 3 años de experiencia en el desarrollo web, he trabajado en diversos proyectos que van desde sitios web corporativos hasta aplicaciones web complejas. Mi enfoque siempre es crear productos de alta calidad que proporcionen una excelente experiencia al usuario."
        },
        // Projects section
        projects: {
            title: "Mis Proyectos",
            subtitle: "Una muestra de mi trabajo reciente",
            project1: {
                title: "Sistema Web de Gestión Empresarial",
                description: "Sistema web integral desarrollado para optimizar la gestión operativa de una empresa de retroexcavación. Incluye módulos de control de inventario, seguimiento de proyectos, gestión de clientes y reportes financieros. La aplicación mejora la eficiencia administrativa y proporciona una interfaz intuitiva para el manejo de recursos."
            },
            project2: {
                title: "Página Web Institucional",
                description: "Proyecto desarrollado desde cero sin usar ningún framework, destacando con un diseño moderno y novedoso la información y conceptos de una gran empresa de importación de maderas. Se priorizó la experiencia de usuario y la presentación visual del contenido corporativo."
            },
            project3: {
                title: "Ecommerce para negocio de Lanas",
                description: "Desarrollo de un ecommerce para un negocio de lanas, implementando un sistema de gestión de productos, carrito de compras y pasarela de pago. El proyecto incluye una interfaz amigable y responsive, optimizada para dispositivos móviles, mejorando la experiencia de compra en línea."
            },
            demo: "Demo",
            code: "Código"
        },
        // Experience section
        experience: {
            title: "Mi Trayectoria Profesional",
            subtitle: "Desde estudiante hasta desarrollador especializado",
            timeline: {
                future: {
                    role: "Desarrollador Senior",
                    company: "Próximo desafío profesional",
                    description: "Mi objetivo es integrarme a un equipo de desarrollo donde pueda aportar mi experiencia en sistemas de gestión empresarial y continuar creciendo profesionalmente. Busco contribuir con soluciones innovadoras y aprender de profesionales experimentados."
                },
                freelance: {
                    role: "Desarrollador Freelance",
                    company: "Especialista en Sistemas de Gestión",
                    description: "Desarrollo de software web de gestión empresarial para diferentes clientes. He creado sistemas integrales que incluyen control de inventario, seguimiento de proyectos, gestión de clientes y reportes financieros. También desarrollo páginas web institucionales y ecommerce con enfoque en UX/UI moderno."
                },
                student: {
                    role: "Estudiante de Programación",
                    company: "Universidad Tecnológica Nacional (UTN)",
                    description: "Formación integral en desarrollo de software, arquitectura de sistemas y bases de datos. Durante mis estudios comencé a desarrollar proyectos reales para clientes, aplicando inmediatamente los conocimientos adquiridos en tecnologías como Angular, Python, MySQL y desarrollo web full-stack."
                },
                start: {
                    role: "Inicio en Programación",
                    company: "Decisión de Carrera",
                    description: "Comienzo de mi journey en el desarrollo de software, eligiendo especializarme en tecnologías web modernas. Primeros pasos en HTML, CSS, JavaScript y bases de datos, sentando las bases para mi futura especialización en sistemas empresariales."
                }
            }
        },
        // Contact section
        contact: {
            title: "Contacto",
            subtitle: "¿Tienes un proyecto en mente? ¡Hablemos!",
            description: "Estoy interesado en oportunidades de trabajo freelance o posiciones de tiempo completo. Sin embargo, si tienes otra solicitud o pregunta, no dudes en contactarme.",
            form: {
                name: "Nombre",
                email: "Email",
                subject: "Asunto",
                message: "Mensaje",
                send: "Enviar Mensaje",
                sending: "Enviando mensaje...",  
                success: "✅ ¡Mensaje enviado con éxito! Te responderé pronto.",
                error: "❌ Hubo un error. Por favor, intenta de nuevo o contacta directamente por email."
            }
        },
        // Footer
        footer: {
            copyright: "© 2025 Mateo Formoso. Todos los derechos reservados."
        }
    },
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            projects: "Projects",
            experience: "Experience",
            contact: "Contact"
        },
        // Hero section
        hero: {
            greeting: "Hi, I'm",
            role: "Full Stack Web Developer",
            description: "Committed to creating technology that makes a mark, solves real problems and transforms the present into the future.",
            viewProjects: "View Projects",
            contactMe: "Contact Me"
        },
        // About section
        about: {
            title: "About Me",
            subtitle: "Learn more about my experience and skills",
            description1: "I'm a full stack web developer with experience creating modern and responsive web applications. My passion for technology and problem solving drives me to create elegant and efficient solutions.",
            description2: "With over 3 years of experience in web development, I have worked on various projects ranging from corporate websites to complex web applications. My approach is always to create high-quality products that provide an excellent user experience."
        },
        // Projects section
        projects: {
            title: "My Projects",
            subtitle: "A showcase of my recent work",
            project1: {
                title: "Business Management Web System",
                description: "Comprehensive web system developed to optimize the operational management of an excavation company. It includes inventory control modules, project tracking, client management and financial reports. The application improves administrative efficiency and provides an intuitive interface for resource management."
            },
            project2: {
                title: "Institutional Website",
                description: "Project developed from scratch without using any framework, highlighting with a modern and innovative design the information and concepts of a large wood import company. User experience and visual presentation of corporate content were prioritized."
            },
            project3: {
                title: "Ecommerce for Yarn Business",
                description: "Development of an ecommerce for a yarn business, implementing a product management system, shopping cart and payment gateway. The project includes a friendly and responsive interface, optimized for mobile devices, improving the online shopping experience."
            },
            demo: "Demo",
            code: "Code"
        },
        // Experience section
        experience: {
            title: "My Professional Journey",
            subtitle: "From student to specialized developer",
            timeline: {
                future: {
                    role: "Senior Developer",
                    company: "Next professional challenge",
                    description: "My goal is to join a development team where I can contribute my experience in business management systems and continue growing professionally. I seek to contribute innovative solutions and learn from experienced professionals."
                },
                freelance: {
                    role: "Freelance Developer",
                    company: "Specialist in Management Systems",
                    description: "Development of business management web software for different clients. I have created comprehensive systems that include inventory control, project tracking, client management and financial reports. I also develop institutional websites and ecommerce with a focus on modern UX/UI."
                },
                student: {
                    role: "Programming Student",
                    company: "National Technological University (UTN)",
                    description: "Comprehensive training in software development, systems architecture and databases. During my studies I began developing real projects for clients, immediately applying the knowledge acquired in technologies such as Angular, Python, MySQL and full-stack web development."
                },
                start: {
                    role: "Starting in Programming",
                    company: "Career Decision",
                    description: "Beginning of my journey in software development, choosing to specialize in modern web technologies. First steps in HTML, CSS, JavaScript and databases, laying the foundations for my future specialization in business systems."
                }
            }
        },
        // Contact section
        contact: {
            title: "Contact",
            subtitle: "Have a project in mind? Let's talk!",
            description: "I'm interested in freelance work opportunities or full-time positions. However, if you have another request or question, don't hesitate to contact me.",
            form: {
                name: "Name",
                email: "Email",
                subject: "Subject", 
                message: "Message",
                send: "Send Message",
                sending: "Sending message...",
                success: "✅ Message sent successfully! I'll reply soon.",
                error: "❌ There was an error. Please try again or contact directly by email."
            }
        },
        // Footer
        footer: {
            copyright: "© 2025 Mateo Formoso. All rights reserved."
        }
    }
};

// Configuración inicial mejorada
let currentLang = 'es';
let isDarkMode = false;

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing controls...');
    initializeControls();
    loadPreferences();
    updateFormMessages();
});

// Inicializar controles con mejor detección
function initializeControls() {
    console.log('Initializing controls...');
    
    const themeToggle = document.getElementById('theme-toggle');
    const languageToggle = document.getElementById('language-toggle');
    
    if (themeToggle) {
        console.log('Theme toggle found, adding event listener');
        // Remover listener anterior si existe
        themeToggle.removeEventListener('click', toggleTheme);
        themeToggle.addEventListener('click', toggleTheme);
    } else {
        console.warn('Theme toggle button not found! Make sure the element has id="theme-toggle"');
    }
    
    if (languageToggle) {
        console.log('Language toggle found, adding event listener');
        languageToggle.removeEventListener('click', toggleLanguage);
        languageToggle.addEventListener('click', toggleLanguage);
    } else {  
        console.warn('Language toggle button not found! Make sure the element has id="language-toggle"');
    }
}

// Función mejorada para detectar preferencias del sistema
function getSystemPreferences() {
    // Detectar tema del sistema solo si no hay preferencia guardada
    const systemDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Detectar idioma del navegador
    const browserLang = navigator.language || navigator.userLanguage;
    const systemLang = browserLang.startsWith('es') ? 'es' : 'en';
    
    return {
        theme: systemDarkMode ? 'dark' : 'light',
        language: systemLang
    };
}

// Cargar preferencias guardadas
function loadPreferences() {
    console.log('Loading preferences...');
    
    // Inicializar configuración global si no existe
    if (!window.portfolioSettings) {
        window.portfolioSettings = {};
    }
    
    // Cargar preferencias o usar valores por defecto del sistema
    const systemPrefs = getSystemPreferences();
    const savedTheme = window.portfolioSettings.theme || 'light'; // Forzar tema claro por defecto
    const savedLang = window.portfolioSettings.language || systemPrefs.language;
    
    console.log('Loaded theme:', savedTheme, 'language:', savedLang);
    
    // Configurar tema inicial
    isDarkMode = savedTheme === 'dark';
    applyTheme();
    
    // Configurar idioma inicial
    if (savedLang !== currentLang) {
        currentLang = savedLang;
    }
    
    // IMPORTANTE: Actualizar display del idioma ANTES de traducir
    updateLanguageDisplay();
    translatePage();
    
    console.log('Preferences loaded successfully');
}

// Aplicar tema de forma más robusta
function applyTheme() {
    console.log('Applying theme. isDarkMode:', isDarkMode);
    
    // Agregar clase de transición
    document.body.classList.add('theme-transition');
    
    if (isDarkMode) {
        document.body.classList.add('dark-theme');
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
        document.documentElement.setAttribute('data-theme', 'light');
    }
    
    updateThemeIcon();
    
    // Remover clase de transición después de la animación
    setTimeout(() => {
        document.body.classList.remove('theme-transition');
    }, 500);
    
    console.log('Theme applied. Body classes:', document.body.className);
}

// Guardar preferencias mejorado
function savePreferences() {
    if (!window.portfolioSettings) {
        window.portfolioSettings = {};
    }
    
    window.portfolioSettings.theme = isDarkMode ? 'dark' : 'light';
    window.portfolioSettings.language = currentLang;
    
    console.log('Preferences saved:', window.portfolioSettings);
}

// Toggle tema mejorado
function toggleTheme(e) {
    e?.preventDefault();
    console.log('Theme toggle clicked. Current isDarkMode:', isDarkMode);
    
    isDarkMode = !isDarkMode;
    console.log('New isDarkMode:', isDarkMode);
    
    applyTheme();
    savePreferences();
    
    // Feedback visual
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.classList.add('pulse');
        setTimeout(() => {
            themeBtn.classList.remove('pulse');
        }, 2000);
    }
}

// Actualizar icono del tema mejorado
function updateThemeIcon() {
    const themeIcon = document.querySelector('#theme-toggle i');
    
    if (themeIcon) {
        // Animación de rotación
        themeIcon.style.transform = 'rotate(180deg)';
        
        setTimeout(() => {
            if (isDarkMode) {
                themeIcon.className = 'fas fa-sun';
                themeIcon.style.color = '#ffd700';
            } else {
                themeIcon.className = 'fas fa-moon';
                themeIcon.style.color = '#4a5568';
            }
            
            themeIcon.style.transform = 'rotate(0deg)';
        }, 150);
        
        console.log('Theme icon updated to:', themeIcon.className);
    } else {
        console.warn('Theme icon not found');
    }
}

// Toggle idioma
function toggleLanguage(e) {
    e?.preventDefault();
    console.log('Language toggle clicked. Current language:', currentLang);
    
    currentLang = currentLang === 'es' ? 'en' : 'es';
    console.log('New language:', currentLang);
    
    updateLanguageDisplay();
    translatePage();
    savePreferences();
    
    // Feedback visual
    const langBtn = document.getElementById('language-toggle');
    if (langBtn) {
        langBtn.classList.add('pulse');
        setTimeout(() => {
            langBtn.classList.remove('pulse');
        }, 2000);
    }
}

// Actualizar display del idioma - CORREGIDO con bandera argentina
function updateLanguageDisplay() {
    const flagIcon = document.querySelector('.flag-icon');
    const langText = document.querySelector('.lang-text');
    
    console.log('Updating language display for:', currentLang);
    console.log('Flag icon element:', flagIcon);
    console.log('Lang text element:', langText);
    
    if (flagIcon && langText) {
        if (currentLang === 'es') {
            // Cambio: Bandera de Argentina en lugar de España
            flagIcon.textContent = '🇦🇷';
            langText.textContent = 'ES';
        } else {
            flagIcon.textContent = '🇺🇸';
            langText.textContent = 'EN';
        }
        console.log('Language display updated to:', currentLang, 'Flag:', flagIcon.textContent);
    } else {
        console.warn('Flag icon or lang text elements not found');
    }
}

// Escuchar cambios en las preferencias del sistema
if (window.matchMedia) {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    darkModeQuery.addEventListener('change', function(e) {
        // Solo actualizar si no hay preferencia manual guardada
        if (!window.portfolioSettings?.theme) {
            isDarkMode = e.matches;
            applyTheme();
            console.log('System theme changed to:', isDarkMode ? 'dark' : 'light');
        }
    });
}

// Traducir página
function translatePage() {
    const t = translations[currentLang];
    
    // Traducir navegación
    translateNavigation(t.nav);
    
    // Traducir hero section
    translateHero(t.hero);
    
    // Traducir about section
    translateAbout(t.about);
    
    // Traducir projects section
    translateProjects(t.projects);
    
    // Traducir experience section
    translateExperience(t.experience);
    
    // Traducir contact section
    translateContact(t.contact);
    
    // Traducir footer
    translateFooter(t.footer);
}

// Funciones de traducción específicas
function translateNavigation(nav) {
    const navLinks = document.querySelectorAll('.nav-links a');
    const navTexts = [nav.home, nav.about, nav.projects, nav.experience, nav.contact];
    
    navLinks.forEach((link, index) => {
        if (navTexts[index]) {
            link.textContent = navTexts[index];
        }
    });
}

function translateHero(hero) {
    const greeting = document.querySelector('.hero-content h1');
    const role = document.querySelector('.hero-content h3');
    const description = document.querySelector('.hero-content p');
    const viewProjectsBtn = document.querySelector('.hero-btn:first-child');
    const contactBtn = document.querySelector('.hero-btn.outline');
    
    if (greeting) {
        greeting.innerHTML = `${hero.greeting} <span class="highlight">Mateo Formoso</span>`;
    }
    if (role) role.textContent = hero.role;
    if (description) description.textContent = hero.description;
    if (viewProjectsBtn) viewProjectsBtn.textContent = hero.viewProjects;
    if (contactBtn) contactBtn.textContent = hero.contactMe;
}

function translateAbout(about) {
    const title = document.querySelector('#about .section-title h2');
    const subtitle = document.querySelector('#about .section-title p');
    const descriptions = document.querySelectorAll('.about-text p');
    
    if (title) title.textContent = about.title;
    if (subtitle) subtitle.textContent = about.subtitle;
    if (descriptions[0]) descriptions[0].textContent = about.description1;
    if (descriptions[1]) descriptions[1].textContent = about.description2;
}

function translateProjects(projects) {
    const title = document.querySelector('#projects .section-title h2');
    const subtitle = document.querySelector('#projects .section-title p');
    const projectTitles = document.querySelectorAll('.project-content h3');
    const projectDescriptions = document.querySelectorAll('.project-content p');
    const demoLinks = document.querySelectorAll('.project-link:first-child');
    const codeLinks = document.querySelectorAll('.project-link:last-child');
    
    if (title) title.textContent = projects.title;
    if (subtitle) subtitle.textContent = projects.subtitle;
    
    // Traducir proyectos individuales
    const projectData = [projects.project1, projects.project2, projects.project3];
    
    projectTitles.forEach((title, index) => {
        if (projectData[index]) {
            title.textContent = projectData[index].title;
        }
    });
    
    projectDescriptions.forEach((desc, index) => {
        if (projectData[index]) {
            desc.textContent = projectData[index].description;
        }
    });
    
    // Traducir enlaces
    demoLinks.forEach(link => {
        const textNode = link.childNodes[link.childNodes.length - 1];
        if (textNode && textNode.nodeType === Node.TEXT_NODE) {
            textNode.textContent = ` ${projects.demo}`;
        }
    });
    
    codeLinks.forEach(link => {
        const textNode = link.childNodes[link.childNodes.length - 1];
        if (textNode && textNode.nodeType === Node.TEXT_NODE) {
            textNode.textContent = ` ${projects.code}`;
        }
    });
}

function translateExperience(experience) {
    const title = document.querySelector('#experience .section-title h2');
    const subtitle = document.querySelector('#experience .section-title p');
    
    if (title) title.textContent = experience.title;
    if (subtitle) subtitle.textContent = experience.subtitle;
    
    // Traducir timeline items
    const timelineItems = document.querySelectorAll('.timeline-content');
    const experienceData = [
        experience.timeline.future,
        experience.timeline.freelance,
        experience.timeline.student,
        experience.timeline.start
    ];
    
    timelineItems.forEach((item, index) => {
        const role = item.querySelector('h3');
        const company = item.querySelector('h4');
        const description = item.querySelector('p');
        
        if (experienceData[index]) {
            if (role) role.textContent = experienceData[index].role;
            if (company) company.textContent = experienceData[index].company;
            if (description) description.textContent = experienceData[index].description;
        }
    });
}

function translateContact(contact) {
    const title = document.querySelector('#contact .section-title h2');
    const subtitle = document.querySelector('#contact .section-title p');
    const description = document.querySelector('.contact-info p');
    
    if (title) title.textContent = contact.title;
    if (subtitle) subtitle.textContent = contact.subtitle;
    if (description) description.textContent = contact.description;
    
    // Traducir formulario
    const nameLabel = document.querySelector('label[for="name"]');
    const emailLabel = document.querySelector('label[for="email"]');
    const subjectLabel = document.querySelector('label[for="subject"]');
    const messageLabel = document.querySelector('label[for="message"]');
    const submitBtn = document.querySelector('.submit-btn');
    
    if (nameLabel) nameLabel.textContent = contact.form.name;
    if (emailLabel) emailLabel.textContent = contact.form.email;
    if (subjectLabel) subjectLabel.textContent = contact.form.subject;
    if (messageLabel) messageLabel.textContent = contact.form.message;
    if (submitBtn) submitBtn.textContent = contact.form.send;
}

function translateFooter(footer) {
    const copyright = document.querySelector('.copyright');
    if (copyright) copyright.textContent = footer.copyright;
}

// Actualizar mensajes del formulario de contacto
function updateFormMessages() {
    const form = document.getElementById("contactForm");
    
    if (form) {
        // Remover listener anterior si existe
        form.removeEventListener("submit", handleFormSubmit);
        form.addEventListener("submit", handleFormSubmit);
    }
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const status = document.getElementById("form-status");
    const t = translations[currentLang];
    
    // Mostrar estado de carga
    status.textContent = t.contact.form.sending;
    status.style.color = "#667eea";
    status.style.background = "rgba(102, 126, 234, 0.1)";

    const formData = new FormData(e.target);

    try {
        const response = await fetch("https://formspree.io/f/mblrevbl", {
            method: "POST",
            headers: { Accept: "application/json" },
            body: formData,
        });

        if (response.ok) {
            status.textContent = t.contact.form.success;
            status.style.color = "#4CAF50";
            status.style.background = "rgba(76, 175, 80, 0.1)";
            e.target.reset();
        } else {
            throw new Error("Error en el servidor");
        }
    } catch (error) {
        status.textContent = t.contact.form.error;
        status.style.color = "#f44336";
        status.style.background = "rgba(244, 67, 54, 0.1)";
    }
}

// Inicializar configuración global
window.portfolioSettings = window.portfolioSettings || {};