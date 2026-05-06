// script.js

// ===== Scroll suave para links de navegação =====
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60, // ajuste para header fixo
                behavior: 'smooth'
            });
        }
    });
});

// ===== Botão Voltar ao Topo =====
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = '↑ Topo';
backToTopBtn.id = 'backToTop';
document.body.appendChild(backToTopBtn);

// Estilo do botão via JS
backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '30px';
backToTopBtn.style.right = '30px';
backToTopBtn.style.padding = '10px 15px';
backToTopBtn.style.fontSize = '16px';
backToTopBtn.style.backgroundColor = '#ff4500';
backToTopBtn.style.color = '#fff';
backToTopBtn.style.border = 'none';
backToTopBtn.style.borderRadius = '6px';
backToTopBtn.style.cursor = 'pointer';
backToTopBtn.style.display = 'none';
backToTopBtn.style.boxShadow = '0 4px 6px rgba(0,0,0,0.3)';
backToTopBtn.style.transition = 'opacity 0.3s';

// Mostrar ou esconder o botão baseado no scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// Função do botão
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Seções colapsáveis =====
document.querySelectorAll('section h2').forEach(header => {
    header.style.cursor = 'pointer';
    header.addEventListener('click', () => {
        const section = header.parentElement;
        const content = Array.from(section.children).filter(child => child !== header);
        content.forEach(el => {
            if (el.style.display === 'none') {
                el.style.display = '';
            } else {
                el.style.display = 'none';
            }
        });
    });
});
