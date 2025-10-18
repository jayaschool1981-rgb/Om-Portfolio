// assets/js/main.js - enhanced helpers for portfolio
document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav simple toggle (if you add a .nav-toggle element)
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav');
  if(toggle && menu) toggle.addEventListener('click', ()=> menu.classList.toggle('open'));

  // Simple filter buttons using data-filter attribute
  document.querySelectorAll('[data-filter]').forEach(btn=>{
    btn.addEventListener('click', ()=> {
      const cat = btn.getAttribute('data-filter');
      document.querySelectorAll('.project-card').forEach(card=>{
        const cats = card.dataset.categories || '';
        card.style.display = (cat==='all' || cats.includes(cat)) ? '' : 'none';
      });
    });
  });

  // Load project data and render cards (if projects-grid exists)
  const grid = document.getElementById('projects-grid');
  if(grid){
    fetch('/data/project-data.json').then(r=>r.json()).then(data=>{
      // clear static content only if dynamic file exists
      grid.innerHTML = '';
      data.forEach(p => {
        const art = document.createElement('article');
        art.className = 'project-card';
        art.dataset.categories = p.category || '';
        art.innerHTML = `
          <header><div class="project-title">${p.title}</div><div class="project-date">${p.date || ''}</div></header>
          <p class="project-desc">${p.summary}</p>
          <div class="tech-tags">${p.tech.map(t=>`<span class="tech-tag">${t}</span>`).join('')}</div>
          <div class="project-actions">
            <div class="kv">${p.kv || ''}</div>
            <div style="display:flex;gap:8px">
              <a class="action-link" href="/project-detail.html?project=${p.slug}">Details</a>
              <a class="action-link primary" href="${p.repo}" target="_blank">Source</a>
            </div>
          </div>`;
        grid.appendChild(art);
      });
    }).catch(()=>{console.warn('No project-data.json found or failed to load');});
  }
});
