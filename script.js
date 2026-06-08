const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Toggle details per project card
const cards = document.querySelectorAll('[data-project]');
cards.forEach(card => {
  const btn = card.querySelector('[data-demo-link]');
  const details = card.querySelector('.details');
  if (!btn || !details) return;

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const isHidden = details.hasAttribute('hidden');
    if (isHidden) {
      details.removeAttribute('hidden');
      btn.textContent = 'Fechar';
    } else {
      details.setAttribute('hidden', '');
      btn.textContent = 'Ver detalhes';
    }
  });
});

