const content = window.PORTFOLIO_CONTENT;
try {
  const savedProjects = localStorage.getItem('dnoong-projects');
  if (savedProjects) content.projects = JSON.parse(savedProjects);
} catch (error) {
  console.warn('无法读取本地作品数据，将显示默认作品。', error);
}
let language = 'zh';
let activeFilter = '全部';

const translations = {
  zh: { navWorks: '作品', navAbout: '关于', navContact: '联系', heroEyebrow: '摄影师 / 视觉叙事', heroTitleA: '记录', heroTitleB: '值得记住的光。', heroIntro: '以人为线索，以光为语言，记录真实而有温度的瞬间。', explore: '浏览作品', moreAbout: '认识我', heroCaption: '精选影像 · 2024', profileLabel: '摄影师', quickWorks: '全部作品', quickAbout: '个人简介', quickContact: '合作联系', availability: '2024 / 接受新项目', introKicker: '从现场出发', introText: '人像、空间、品牌与日常。我希望每一组照片都保留现场的呼吸感。', selected: '精选项目', worksTitle: '作品集', aboutEyebrow: '关于摄影师', aboutTitleA: '让光线', aboutTitleB: '留下温度。', workTogether: '开始一个项目', contactEyebrow: '合作与联系', contactTitleA: '有一个故事', contactTitleB: '想要被看见？', contactIntro: '欢迎合作委托、品牌视觉与私人肖像项目。', backTop: '回到顶部 ↑', manageWorks: '管理作品', footerNote: '影像，作为一种记忆。' },
  en: { navWorks: 'Works', navAbout: 'About', navContact: 'Contact', heroEyebrow: 'PHOTOGRAPHER / VISUAL STORYTELLING', heroTitleA: 'Collecting', heroTitleB: 'light worth keeping.', heroIntro: 'Following people with light as a language — preserving honest, warm moments.', explore: 'Explore works', moreAbout: 'About me', heroCaption: 'Selected image · 2024', profileLabel: 'Photographer', quickWorks: 'All works', quickAbout: 'About me', quickContact: 'Contact', availability: '2024 / Available for projects', introKicker: 'From the field', introText: 'Portraits, spaces, brands and everyday life. Every series keeps the breath of the place.', selected: 'Selected projects', worksTitle: 'Portfolio', aboutEyebrow: 'About the photographer', aboutTitleA: 'Let light', aboutTitleB: 'keep its warmth.', workTogether: 'Start a project', contactEyebrow: 'Collaboration & contact', contactTitleA: 'Have a story', contactTitleB: 'to be seen?', contactIntro: 'Available for commissions, brand stories and private portraits.', backTop: 'Back to top ↑', manageWorks: 'Manage works', footerNote: 'Images, as memory.' }
};

const $ = (selector) => document.querySelector(selector);

function renderFilters() {
  const categories = ['全部', ...new Set(content.projects.map((project) => project.category))];
  const names = { 全部: 'All', 人像: 'Portrait', 空间: 'Space', 生活: 'Life' };
  $('#filters').innerHTML = categories.map((category) => `<button class="filter ${category === activeFilter ? 'is-active' : ''}" data-filter="${category}">${language === 'zh' ? category : names[category] || category}</button>`).join('');
  document.querySelectorAll('.filter').forEach((button) => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    renderFilters();
    renderProjects();
  }));
}

function renderProjects() {
  const projects = activeFilter === '全部' ? content.projects : content.projects.filter((project) => project.category === activeFilter);
  $('#worksGrid').innerHTML = projects.map((project, index) => `<article class="work-card work-card-${index % 4}" tabindex="0" data-project="${content.projects.indexOf(project)}"><div class="work-image" style="background-image:url('${project.image}')"></div><div class="work-info"><span>${language === 'zh' ? project.category : project.en}</span><h3>${language === 'zh' ? project.title : project.en}</h3><span>${project.year}</span></div></article>`).join('');
  document.querySelectorAll('.work-card').forEach((card) => {
    card.addEventListener('click', () => openLightbox(Number(card.dataset.project)));
    card.addEventListener('keydown', (event) => { if (event.key === 'Enter') openLightbox(Number(card.dataset.project)); });
  });
}

function renderAbout() {
  $('#aboutBody').textContent = content.profile[language];
  $('#aboutMeta').innerHTML = content.profile.facts.map((fact) => `<div><span>${language === 'zh' ? fact.label : fact.labelEn}</span><strong>${language === 'zh' ? fact.value : fact.valueEn}</strong></div>`).join('');
  $('#contactEmail').textContent = content.contact.email;
  $('#contactEmail').href = `mailto:${content.contact.email}`;
  $('#socials').innerHTML = content.contact.socials.map(([name, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${name} ↗</a>`).join('');
}

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((element) => { element.textContent = translations[language][element.dataset.i18n]; });
  $('#languageSwitch').textContent = language === 'zh' ? 'EN' : '中';
  renderFilters(); renderProjects(); renderAbout();
}

function openLightbox(index) {
  const project = content.projects[index];
  $('#lightboxImage').style.backgroundImage = `url('${project.image}')`;
  $('#lightboxTitle').textContent = `${language === 'zh' ? project.title : project.en} · ${project.year}`;
  $('#lightboxCount').textContent = `${String(index + 1).padStart(2, '0')} / ${String(content.projects.length).padStart(2, '0')}`;
  $('#lightbox').showModal();
}

$('#languageSwitch').addEventListener('click', () => setLanguage(language === 'zh' ? 'en' : 'zh'));
$('#lightboxClose').addEventListener('click', () => $('#lightbox').close());
$('#lightbox').addEventListener('click', (event) => { if (event.target === $('#lightbox')) $('#lightbox').close(); });
$('#menuButton').addEventListener('click', () => document.body.classList.toggle('menu-open'));
document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => document.body.classList.remove('menu-open')));
$('#year').textContent = new Date().getFullYear();
setLanguage('zh');
