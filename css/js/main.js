// Гар утасны цэсийг нээх/хаах
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');

function setMenu(open) {
  menu.classList.toggle('open', open);
  toggle.classList.toggle('active', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Цэс хаах' : 'Цэс нээх');
}

toggle.addEventListener('click', () => setMenu(!menu.classList.contains('open')));

// Холбоос дарахад цэс хаагдана
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));

// Esc дарахад хаагдана
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

// Дэлгэц томроход цэсийн төлөвийг цэвэрлэнэ
window.matchMedia('(min-width: 768px)').addEventListener('change', e => { if (e.matches) setMenu(false); });