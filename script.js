// Selecione o ícone do hambúrguer e o menu mobile
const mobileMenuIcon = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelector('.mobile-menu-links');

// Adiciona o evento de clique para alternar a classe 'active'
mobileMenuIcon.addEventListener('click', () => {
  mobileMenuLinks.classList.toggle('active');
});
