// Smooth Scroll para links de âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // offset para não ficar colado no topo (considera o nav fixo)
        behavior: 'smooth'
      });
      
      // Fecha menu mobile se estiver aberto (futuro-proof)
      document.querySelector('nav ul').classList.remove('active');
    }
  });
});

// Highlight link ativo no menu ao scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Fade-in das seções ao scroll
const observerOptions = {
  threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  section.classList.add('fade-in');
  observer.observe(section);
});

// Validação e feedback do formulário
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = form.querySelector('input[name="nome"]');
    const email = form.querySelector('input[name="email"]');
    const mensagem = form.querySelector('textarea');
    const button = form.querySelector('button');
    
    if (!nome.value.trim() || !email.value.trim() || !mensagem.value.trim()) {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return;
    }
    
    // Simula envio (você pode trocar por fetch real depois)
    button.disabled = true;
    button.textContent = 'Enviando...';
    
    setTimeout(() => {
      alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
      form.reset();
      button.disabled = false;
      button.textContent = 'Enviar Mensagem';
    }, 1500);
  });
}

// Adiciona classe para animação CSS (adicione isso no styles.css)
