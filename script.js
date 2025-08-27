document.getElementById?.('subscribe-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  if (!email) return alert('Please enter an email');
  alert('Thanks — ' + email + ' subscribed!');
  this.reset();
});

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });
}

const prev = document.querySelector('.carousel-prev');
const next = document.querySelector('.carousel-next');
if (prev && next) {
  prev.addEventListener('click', () => { alert('Prev slide (demo)'); });
  next.addEventListener('click', () => { alert('Next slide (demo)'); });
}
