const defaults = window.PORTFOLIO_CONTENT.projects;
const storageKey = 'dnoong-projects';
const $ = (selector) => document.querySelector(selector);
let projects = loadProjects();
let imageData = '';

function loadProjects() {
  try { return JSON.parse(localStorage.getItem(storageKey)) || defaults.slice(); } catch { return defaults.slice(); }
}
function saveProjects() { localStorage.setItem(storageKey, JSON.stringify(projects)); }
function renderProjects() {
  $('#projectList').innerHTML = projects.length ? projects.map((project, index) => `<article class="project-row"><div class="thumb" style="background-image:url('${project.image}')"></div><div class="project-copy"><strong>${project.title}</strong><span>${project.en} · ${project.category} · ${project.year}</span></div><button type="button" data-delete="${index}" aria-label="删除 ${project.title}">删除</button></article>`).join('') : '<p class="empty">还没有作品，先添加第一张照片。</p>';
  document.querySelectorAll('[data-delete]').forEach((button) => button.addEventListener('click', () => { projects.splice(Number(button.dataset.delete), 1); saveProjects(); renderProjects(); setStatus('作品已删除。'); }));
}
function setStatus(message, error = false) { $('#status').textContent = message; $('#status').classList.toggle('is-error', error); }

$('#imageInput').addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (!file) return;
  if (file.size > 4 * 1024 * 1024) { setStatus('照片超过 4MB，请先压缩后再上传。', true); event.target.value = ''; return; }
  const reader = new FileReader();
  reader.onload = () => { imageData = reader.result; $('#preview').style.backgroundImage = `url('${imageData}')`; $('#preview').classList.add('has-image'); $('#uploadText').textContent = file.name; };
  reader.readAsDataURL(file);
});

$('#workForm').addEventListener('submit', (event) => {
  event.preventDefault();
  if (!imageData) { setStatus('请先选择一张照片。', true); return; }
  projects.unshift({ title: $('#titleInput').value.trim(), en: $('#englishInput').value.trim(), category: $('#categoryInput').value, year: $('#yearInput').value.trim(), image: imageData });
  saveProjects(); renderProjects(); event.target.reset(); $('#yearInput').value = new Date().getFullYear(); $('#preview').style.backgroundImage = ''; $('#preview').classList.remove('has-image'); $('#uploadText').textContent = '选择一张照片'; imageData = ''; setStatus('已保存：首页刷新后即可看到新作品。');
});

$('#resetButton').addEventListener('click', () => { if (!confirm('恢复默认作品？你新增的本地作品会从首页移除。')) return; projects = defaults.slice(); saveProjects(); renderProjects(); setStatus('已恢复默认作品。'); });
renderProjects();
