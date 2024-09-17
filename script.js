document.addEventListener('DOMContentLoaded', () => {
    // Animación del header al hacer scroll
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });

    // Animación de los elementos al hacer scroll
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, {
        root: null,
        threshold: 0.1
    });

    document.querySelectorAll('.course-card, .professor-card').forEach(el => {
        observer.observe(el);
    });

    // Animación del hero
    anime({
        targets: '.hero-content',
        opacity: [0, 1],
        translateY: [50, 0],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: 300
    });

    // Animación de los iconos de los cursos
    anime({
        targets: '.course-card i',
        scale: [0.5, 1],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: anime.stagger(100, {start: 300})
    });

    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar el formulario
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });

    // Smooth scroll para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});