/* ============================================
   AI TOOL DIRECTORY — MAIN SCRIPT
   ============================================ */

// ── Affiliate Click Tracker ──────────────────
// Replace "UA-XXXXXXXXX" with your Google Analytics ID
// or remove this block if not needed
function trackAffiliateClick(toolName, url) {
  // Google Analytics event (works if you add GA to your HTML)
  if (typeof gtag !== 'undefined') {
    gtag('event', 'affiliate_click', {
      tool_name: toolName,
      destination_url: url
    });
  }
  // Also log to console for debugging
  console.log(`[Affiliate Click] ${toolName} → ${url}`);
}

// ── Shared Utilities ──────────────────────────

function getPricingClass(pricing) {
  const map = { 'Free': 'free', 'Freemium': 'freemium', 'Paid': 'paid' };
  return map[pricing] || 'free';
}

function renderStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      // Full filled star
      html += '<span class="star filled"><i class="fas fa-star"></i></span>';
    } else if (rating >= i - 0.5) {
      // Half star
      html += '<span class="star half"><i class="fas fa-star-half-alt"></i></span>';
    } else {
      // Empty star
      html += '<span class="star empty"><i class="far fa-star"></i></span>';
    }
  }
  return html;
}

// Renders either an emoji or an image URL as an icon
function renderIcon(icon, name) {
  if (typeof icon === 'string' && icon.startsWith('http')) {
    return `<img src="${icon}" alt="${name} logo" loading="lazy" onerror="this.style.display='none'; this.insertAdjacentHTML('afterend','🤖');" />`;
  }
  return icon;
}

function renderToolCard(tool) {
  return `
    <article class="tool-card" onclick="goToTool(${tool.id})" tabindex="0" role="button"
      onkeydown="if(event.key==='Enter'||event.key===' ') goToTool(${tool.id})"
      aria-label="${tool.name} - ${tool.category}">
      <div class="card__pricing">
        <span class="pricing-badge ${getPricingClass(tool.pricing)}">${tool.pricing}</span>
      </div>
      <div class="card__header">
        <div class="card__icon" aria-hidden="true">${renderIcon(tool.icon, tool.name)}</div>
        <div class="card__meta">
          <div class="card__name">${tool.name}</div>
          <span class="card__category-badge">${tool.category}</span>
        </div>
      </div>
      <div class="card__rating">
        <div class="stars" aria-label="Rating: ${tool.rating} out of 5">${renderStars(tool.rating)}</div>
        <span class="rating-num">${tool.rating.toFixed(1)}</span>
      </div>
      <p class="card__desc">${tool.description}</p>
      <div class="card__arrow">
        <span class="card__arrow-btn">View details <i class="fas fa-arrow-right"></i></span>
      </div>
    </article>
  `;
}

function goToTool(id) {
  window.location.href = `tool-detail.html?id=${id}`;
}

// Restore preferred sort from localStorage
function getSavedSort() {
  return localStorage.getItem('ai_dir_sort') || 'rating';
}

function saveSort(val) {
  localStorage.setItem('ai_dir_sort', val);
}

// ── Navigation ──────────────────────────────

function initNav() {
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
    });
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      }
    });
  }

  document.querySelectorAll('.btn-submit, .btn-submit-nav, .mobile-submit').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Demo — form not implemented');
    });
  });

  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link, .nav__mobile-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href.includes(page) || (page === 'index.html' && href === 'index.html') || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ── HOMEPAGE ────────────────────────────────

function initHomepage() {
  if (!document.getElementById('toolsGrid')) return;

  let currentCategory = 'all';
  let currentSort = getSavedSort();
  let currentSearch = '';
  let visibleCount = 6;

  const searchInput = document.getElementById('heroSearch');
  const toolsGrid = document.getElementById('toolsGrid');
  const loadMoreBtn = document.getElementById('loadMore');
  const sortSelect = document.getElementById('sortSelect');
  const toolCount = document.getElementById('toolCount');

  const catContainer = document.getElementById('categoryFilters');
  if (catContainer) {
    const allBtn = createFilterBtn('all', 'All Tools', true);
    catContainer.appendChild(allBtn);
    CATEGORIES.forEach(cat => {
      catContainer.appendChild(createFilterBtn(cat, cat, false));
    });
  }

  if (sortSelect) {
    sortSelect.value = currentSort;
    sortSelect.addEventListener('change', () => {
      currentSort = sortSelect.value;
      saveSort(currentSort);
      visibleCount = 6;
      render();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      currentSearch = searchInput.value.toLowerCase().trim();
      visibleCount = 6;
      render();
    });
    const searchBtn = document.getElementById('heroSearchBtn');
    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        currentSearch = searchInput.value.toLowerCase().trim();
        visibleCount = 6;
        render();
      });
    }
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      visibleCount += 6;
      render();
      window.scrollTo({ top: loadMoreBtn.offsetTop - 200, behavior: 'smooth' });
    });
  }

  function createFilterBtn(val, label, active) {
    const btn = document.createElement('button');
    btn.className = `filter-btn${active ? ' active' : ''}`;
    btn.textContent = label;
    btn.dataset.cat = val;
    btn.addEventListener('click', () => {
      currentCategory = val;
      visibleCount = 6;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render();
    });
    return btn;
  }

  function getFiltered() {
    let tools = [...AI_TOOLS];
    if (currentCategory !== 'all') tools = tools.filter(t => t.category === currentCategory);
    if (currentSearch) {
      tools = tools.filter(t =>
        t.name.toLowerCase().includes(currentSearch) ||
        t.description.toLowerCase().includes(currentSearch) ||
        t.category.toLowerCase().includes(currentSearch)
      );
    }
    if (currentSort === 'rating') tools.sort((a, b) => b.rating - a.rating);
    else if (currentSort === 'price') {
      const order = { 'Free': 0, 'Freemium': 1, 'Paid': 2 };
      tools.sort((a, b) => order[a.pricing] - order[b.pricing]);
    } else if (currentSort === 'name') {
      tools.sort((a, b) => a.name.localeCompare(b.name));
    }
    return tools;
  }

  function render() {
    const filtered = getFiltered();
    const visible = filtered.slice(0, visibleCount);
    if (toolCount) toolCount.textContent = `${filtered.length} tool${filtered.length !== 1 ? 's' : ''}`;

    if (filtered.length === 0) {
      toolsGrid.innerHTML = `
        <div class="empty-state">
          <div class="empty-state__icon">🔍</div>
          <div class="empty-state__title">No tools found</div>
          <p class="empty-state__desc">Try adjusting your search or filters</p>
        </div>`;
      if (loadMoreBtn) loadMoreBtn.classList.add('hidden');
      return;
    }

    toolsGrid.innerHTML = visible.map(renderToolCard).join('');
    if (loadMoreBtn) {
      loadMoreBtn.classList.toggle('hidden', visibleCount >= filtered.length);
      const remaining = filtered.length - visibleCount;
      loadMoreBtn.textContent = `Load more tools (${remaining} remaining)`;
    }
  }

  render();
}

// ── CATEGORY PAGE ────────────────────────────

function initCategoryPage() {
  if (!document.getElementById('categoryGrid')) return;

  const params = new URLSearchParams(window.location.search);
  const cat = decodeURIComponent(params.get('cat') || '');

  const catTitle = document.getElementById('catTitle');
  const catBreadcrumb = document.getElementById('catBreadcrumb');
  const catCount = document.getElementById('catCount');
  const catIcon = document.getElementById('catIcon');
  document.title = `${cat || 'All'} Tools — AI Directory`;

  const CATEGORY_ICONS = {
    'Text Generation': '✍️', 'Image': '🎨',
    'Video': '🎬', 'Audio': '🎵', 'Coding': '💻'
  };

  if (catIcon) catIcon.textContent = CATEGORY_ICONS[cat] || '🤖';
  if (catTitle) catTitle.textContent = cat || 'All Tools';
  if (catBreadcrumb) catBreadcrumb.textContent = cat || 'All';

  let currentSort = getSavedSort();
  let visibleCount = 6;

  const sortSelect = document.getElementById('catSortSelect');
  const grid = document.getElementById('categoryGrid');
  const loadMoreBtn = document.getElementById('catLoadMore');
  const catCountEl = document.getElementById('catToolCount');

  if (sortSelect) {
    sortSelect.value = currentSort;
    sortSelect.addEventListener('change', () => {
      currentSort = sortSelect.value;
      saveSort(currentSort);
      visibleCount = 6;
      render();
    });
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => { visibleCount += 6; render(); });
  }

  function getFiltered() {
    let tools = cat ? AI_TOOLS.filter(t => t.category === cat) : [...AI_TOOLS];
    if (currentSort === 'rating') tools.sort((a, b) => b.rating - a.rating);
    else if (currentSort === 'price') {
      const order = { 'Free': 0, 'Freemium': 1, 'Paid': 2 };
      tools.sort((a, b) => order[a.pricing] - order[b.pricing]);
    } else if (currentSort === 'name') {
      tools.sort((a, b) => a.name.localeCompare(b.name));
    }
    return tools;
  }

  function render() {
    const filtered = getFiltered();
    const visible = filtered.slice(0, visibleCount);
    if (catCountEl) catCountEl.textContent = `${filtered.length} tool${filtered.length !== 1 ? 's' : ''}`;
    if (catCount) catCount.textContent = `${filtered.length} tools`;

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-state__icon">🔍</div>
          <div class="empty-state__title">No tools in this category</div>
          <p class="empty-state__desc"><a href="index.html" style="color:var(--accent)">Browse all tools</a></p>
        </div>`;
      if (loadMoreBtn) loadMoreBtn.classList.add('hidden');
      return;
    }

    grid.innerHTML = visible.map(renderToolCard).join('');
    if (loadMoreBtn) {
      loadMoreBtn.classList.toggle('hidden', visibleCount >= filtered.length);
      loadMoreBtn.textContent = `Load more (${filtered.length - visibleCount} remaining)`;
    }
  }

  const catNav = document.getElementById('categoryNav');
  if (catNav) {
    catNav.innerHTML = '';
    const allBtn = document.createElement('a');
    allBtn.href = 'category.html';
    allBtn.className = `filter-btn${!cat ? ' active' : ''}`;
    allBtn.textContent = 'All';
    catNav.appendChild(allBtn);
    CATEGORIES.forEach(c => {
      const btn = document.createElement('a');
      btn.href = `category.html?cat=${encodeURIComponent(c)}`;
      btn.className = `filter-btn${c === cat ? ' active' : ''}`;
      btn.textContent = c;
      catNav.appendChild(btn);
    });
  }

  render();
}

// ── TOOL DETAIL PAGE ─────────────────────────

function initDetailPage() {
  if (!document.getElementById('detailContent')) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10);
  const tool = AI_TOOLS.find(t => t.id === id);
  const content = document.getElementById('detailContent');

  if (!tool) {
    content.innerHTML = `
      <div class="not-found">
        <div class="not-found__code">404</div>
        <div class="not-found__title">Tool not found</div>
        <p class="not-found__desc">The tool you're looking for doesn't exist or has been removed.</p>
        <a href="index.html" class="btn-primary"><i class="fas fa-home"></i> Back to Directory</a>
      </div>`;
    document.title = '404 — AI Directory';
    return;
  }

  document.title = `${tool.name} — AI Directory`;

  document.getElementById('detailBreadcrumbCat').textContent = tool.category;
  document.getElementById('detailBreadcrumbCat').href = `category.html?cat=${encodeURIComponent(tool.category)}`;
  document.getElementById('detailBreadcrumbTool').textContent = tool.name;
  document.getElementById('detailIcon').innerHTML = renderIcon(tool.icon, tool.name);
  document.getElementById('detailName').textContent = tool.name;
  document.getElementById('detailCategory').textContent = tool.category;
  document.getElementById('detailPricing').textContent = tool.pricing;
  document.getElementById('detailPricing').className = `pricing-badge ${getPricingClass(tool.pricing)}`;
  document.getElementById('detailStars').innerHTML = renderStars(tool.rating);
  document.getElementById('detailRatingNum').textContent = tool.rating.toFixed(1);

  // ── Affiliate link with click tracking ──
  const visitBtn = document.getElementById('visitWebsite');
  if (visitBtn) {
    visitBtn.href = tool.website;
    visitBtn.addEventListener('click', () => {
      trackAffiliateClick(tool.name, tool.website);
    });
  }

  document.getElementById('detailDesc').textContent = tool.fullDescription;

  const featuresList = document.getElementById('featuresList');
  featuresList.innerHTML = tool.features.map(f => `
    <li class="feature-item"><i class="fas fa-check-circle"></i> ${f}</li>
  `).join('');

  document.getElementById('infoRating').textContent = `${tool.rating.toFixed(1)} / 5.0`;
  document.getElementById('infoPricing').textContent = tool.pricing;
  document.getElementById('infoCategory').textContent = tool.category;

  const similar = AI_TOOLS.filter(t => t.category === tool.category && t.id !== tool.id).slice(0, 4);
  const similarGrid = document.getElementById('similarGrid');
  if (similar.length > 0) {
    similarGrid.innerHTML = similar.map(t => `
      <div class="similar-card" onclick="goToTool(${t.id})" tabindex="0" role="button"
        onkeydown="if(event.key==='Enter') goToTool(${t.id})">
        <div class="similar-card__icon">${renderIcon(t.icon, t.name)}</div>
        <div class="similar-card__info">
          <div class="similar-card__name">${t.name}</div>
          <div class="similar-card__rating">${renderStars(t.rating)} ${t.rating.toFixed(1)}</div>
        </div>
        <i class="fas fa-chevron-right" style="color:var(--text-muted);font-size:0.75rem"></i>
      </div>
    `).join('');
  } else {
    const s = document.getElementById('similarSection');
    if (s) s.style.display = 'none';
  }
}

// ── BOOT ─────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initHomepage();
  initCategoryPage();
  initDetailPage();
});