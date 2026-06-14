/* ============================================
   AI DIRECTORY — BLOG PAGE SCRIPT
   ============================================ */

// ── Blog Data ────────────────────────────────
const BLOG_POSTS = [
  {
    id: 1,
    title: "Attention Is All You Need — The Transformer Revolution",
    excerpt: "The groundbreaking 2017 paper that introduced the Transformer architecture, fundamentally changing how we build language models and kickstarting the modern AI era.",
    content: `
      <p>In 2017, researchers at Google Brain published "Attention Is All You Need" — a paper that would fundamentally change the trajectory of artificial intelligence. The Transformer architecture introduced in this paper abandoned recurrent neural networks entirely in favor of a mechanism called self-attention.</p>
      <h3>What is Self-Attention?</h3>
      <p>Self-attention allows every element in a sequence to directly attend to every other element, regardless of their distance apart. This solved a critical problem with previous RNNs: the inability to efficiently capture long-range dependencies in text.</p>
      <h3>Why It Mattered</h3>
      <p>The Transformer's parallelizable architecture made it dramatically faster to train on modern GPUs. This efficiency, combined with its representational power, enabled researchers to scale models to unprecedented sizes — eventually leading to GPT, BERT, and every modern large language model we use today.</p>
      <blockquote>"The dominant sequence transduction models are based on complex recurrent or convolutional neural networks... We propose a new simple network architecture, the Transformer, based solely on attention mechanisms." — Vaswani et al., 2017</blockquote>
      <h3>The Legacy</h3>
      <p>Today, transformers power GPT-4, Claude, Gemini, Stable Diffusion, and virtually every state-of-the-art AI system. The paper has been cited over 100,000 times — arguably the most influential AI paper of the 21st century.</p>
      <ul>
        <li>Introduced multi-head self-attention mechanism</li>
        <li>Enabled parallelization unlike sequential RNNs</li>
        <li>Scaled to billions of parameters efficiently</li>
        <li>Foundation of all modern LLMs</li>
      </ul>
    `,
    tag: "AI Research",
    icon: "🧠",
    author: "Research Team",
    date: "June 10, 2025",
    readTime: "8 min read",
    featured: true
  },
  {
    id: 2,
    title: "Boston Dynamics Atlas: From Hydraulics to Full Electric",
    excerpt: "How Boston Dynamics rebuilt its iconic humanoid robot from the ground up with an all-electric design, and what this means for the future of robotics.",
    content: `
      <p>In April 2024, Boston Dynamics retired the hydraulic Atlas robot that had become a YouTube sensation and introduced an all-new, fully electric version. This wasn't just an upgrade — it was a complete ground-up redesign that signals where humanoid robotics is heading.</p>
      <h3>Why Electric?</h3>
      <p>Hydraulic systems are powerful but come with significant downsides: they require complex pumps and valves, are prone to leaks, and consume enormous amounts of energy. Electric actuators offer cleaner operation, finer control, and dramatically lower energy consumption.</p>
      <h3>The New Capabilities</h3>
      <p>The new Atlas can move in ways that would be mechanically impossible for humans. Its joints aren't constrained to human ranges of motion — it can rotate 360 degrees in ways that look uncanny but are functionally superior for many tasks.</p>
      <h3>Commercial Applications</h3>
      <p>Unlike the research-focused previous Atlas, the new version is designed with commercial deployment in mind. Hyundai (which owns Boston Dynamics) plans to use Atlas robots in automobile manufacturing, handling components in ways that reduce worker strain and improve precision.</p>
      <blockquote>"We're not trying to replicate humans. We're trying to build the most capable robot for the work humans need done." — Boston Dynamics</blockquote>
    `,
    tag: "Robotics",
    icon: "🤖",
    author: "Tech Editorial",
    date: "May 28, 2025",
    readTime: "6 min read",
    featured: false
  },
  {
    id: 3,
    title: "Scaling Laws: Why Bigger AI Models Keep Getting Better",
    excerpt: "The empirical observation that AI model performance scales predictably with compute, data, and parameters — and the implications for the race to AGI.",
    content: `
      <p>In 2020, OpenAI published "Scaling Laws for Neural Language Models" — a paper showing that AI model performance follows remarkably predictable power-law relationships with three factors: the number of model parameters, the amount of training data, and the amount of compute used.</p>
      <h3>The Power Laws</h3>
      <p>The key finding was that loss (how wrong the model is) decreases as a smooth power law function of each scaling dimension. Double the parameters, and loss decreases by a predictable amount. Double the data, same thing. This wasn't obviously true before — researchers expected diminishing returns to set in.</p>
      <h3>Chinchilla Scaling</h3>
      <p>In 2022, DeepMind's Chinchilla paper refined these laws, showing that most large models at the time were under-trained — they had too many parameters relative to the amount of data. The optimal approach was to train smaller models on more data, achieving better performance at lower cost.</p>
      <h3>Where This Leads</h3>
      <p>Scaling laws have been the guiding principle behind the AI race. They give researchers confidence that simply training larger models on more data will yield improvements — which has largely proven true through GPT-3, GPT-4, Claude, and Gemini.</p>
      <ul>
        <li>Performance scales predictably with compute</li>
        <li>No plateau observed at current scales</li>
        <li>Guides trillion-dollar investment decisions</li>
        <li>Chinchilla showed optimal data-to-parameter ratios</li>
      </ul>
    `,
    tag: "Machine Learning",
    icon: "📊",
    author: "ML Research",
    date: "May 15, 2025",
    readTime: "7 min read",
    featured: false
  },
  {
    id: 4,
    title: "How Large Language Models Actually Work",
    excerpt: "A clear, accessible explanation of the token prediction process, embeddings, and attention mechanisms that power today's AI assistants.",
    content: `
      <p>Large Language Models like GPT-4 and Claude seem almost magical — you type a question and get a coherent, knowledgeable response. But under the hood, they're doing something surprisingly simple (in principle): predicting the next token.</p>
      <h3>Everything is Tokens</h3>
      <p>LLMs don't process text character-by-character or word-by-word. They use "tokens" — roughly 3-4 characters each. The word "understanding" might be a single token, while "uncharacteristically" might be split into 4 tokens. This tokenization is why LLMs sometimes struggle with counting letters in words.</p>
      <h3>The Prediction Process</h3>
      <p>Given a sequence of tokens, the LLM outputs a probability distribution over its entire vocabulary (typically 50,000+ tokens) for what token should come next. It then samples from this distribution — choosing a likely token but not always the most likely one, which is what makes outputs feel creative rather than robotic.</p>
      <h3>Why They "Know" Things</h3>
      <p>During training on trillions of tokens of internet text, the model learns statistical patterns at extraordinary depth. It can't look up facts — it learned to reproduce the patterns of text that discusses those facts.</p>
      <blockquote>LLMs are like very sophisticated compression of human knowledge — able to decompress on demand in contextually appropriate ways.</blockquote>
    `,
    tag: "LLMs",
    icon: "💡",
    author: "AI Education",
    date: "April 30, 2025",
    readTime: "10 min read",
    featured: false
  },
  {
    id: 5,
    title: "Computer Vision in 2025: From ImageNet to Embodied AI",
    excerpt: "The evolution of computer vision from basic classification tasks to powering autonomous vehicles, medical diagnosis, and robotic manipulation.",
    content: `
      <p>In 2012, AlexNet's victory in the ImageNet challenge launched the deep learning revolution in computer vision. Thirteen years later, computer vision has evolved from classifying cats and dogs to enabling robots to perform surgery and cars to navigate complex urban environments.</p>
      <h3>The ImageNet Moment</h3>
      <p>AlexNet achieved a top-5 error rate of 15.3%, compared to 26.2% for the second-place entry. This ~11 percentage point gap shocked the field and immediately triggered massive investment in deep learning for vision.</p>
      <h3>Modern Vision Models</h3>
      <p>Today's vision models like SAM 2 (Segment Anything Model), CLIP, and GPT-4o don't just classify images — they understand scenes, track objects across video frames, generate captions, and ground language descriptions to specific image regions.</p>
      <h3>Embodied AI</h3>
      <p>The frontier is now "embodied AI" — vision systems that help robots understand and interact with physical environments. Projects like Google's RT-2 and Physical Intelligence's π0 combine vision with language understanding and robotic control, enabling manipulation of objects never seen during training.</p>
      <ul>
        <li>Foundation models replace task-specific architectures</li>
        <li>Multimodal models combine vision + language + audio</li>
        <li>Real-time 3D scene understanding now possible</li>
        <li>Medical imaging AI matches radiologist accuracy</li>
      </ul>
    `,
    tag: "Computer Vision",
    icon: "👁️",
    author: "Vision Research",
    date: "April 18, 2025",
    readTime: "9 min read",
    featured: false
  },
  {
    id: 6,
    title: "The Best AI Tools for Content Creators in 2025",
    excerpt: "A practical roundup of the top AI tools for video creation, writing, image generation, and audio production — with honest assessments of each.",
    content: `
      <p>The AI tools landscape for content creators has matured dramatically. Instead of experimental curiosities, we now have production-ready tools that genuinely speed up workflows. Here's our honest assessment of what's actually worth using.</p>
      <h3>Video Creation</h3>
      <p>For text-to-video, Sora and Runway Gen-3 Alpha lead on quality, while Kling offers the best value. For repurposing long-form content into shorts, OpusClip and Klap are genuinely useful time-savers, not gimmicks.</p>
      <h3>Writing & Research</h3>
      <p>Claude excels at long-form writing with its 200K context window. Perplexity is the best research assistant for fact-checked, cited answers. For SEO content at scale, Jasper and Writesonic offer brand voice customization that generic ChatGPT doesn't.</p>
      <h3>Image Generation</h3>
      <p>Midjourney v6.1 still produces the most aesthetically refined outputs. Stable Diffusion with ControlNet gives you maximum control. DALL-E 3 via ChatGPT is the most accessible for non-technical users.</p>
      <h3>Audio & Voice</h3>
      <p>ElevenLabs remains the gold standard for voice cloning and synthesis. For background music, Udio and Suno produce surprisingly usable tracks. Murf AI is the best for professional voiceover work with team collaboration needs.</p>
    `,
    tag: "Tools",
    icon: "🛠️",
    author: "Editorial Team",
    date: "June 5, 2025",
    readTime: "12 min read",
    featured: false
  },
  {
    id: 7,
    title: "Reinforcement Learning from Human Feedback (RLHF) Explained",
    excerpt: "The technique that turned raw language models into helpful assistants — how human preferences are used to fine-tune AI behavior.",
    content: `
      <p>GPT-3 was impressive but hard to use: it would complete prompts in unexpected ways, generate harmful content, and rarely followed instructions cleanly. Reinforcement Learning from Human Feedback (RLHF) is what turned it into InstructGPT — and eventually ChatGPT.</p>
      <h3>The Three-Stage Process</h3>
      <p>First, you fine-tune the base model on human-written demonstrations of desired behavior. Second, you train a "reward model" on human comparisons between different model outputs. Third, you optimize the original model against this reward model using PPO (Proximal Policy Optimization) reinforcement learning.</p>
      <h3>Why It Works</h3>
      <p>The reward model learns what humans prefer — not just grammatically correct text, but honest, helpful, harmless responses that follow instructions. This preference signal, scaled up across millions of comparisons, fundamentally changes how the model distributes probability mass.</p>
      <h3>Limitations and Alternatives</h3>
      <p>RLHF is expensive (requires thousands of human annotations), can lead to "reward hacking," and may suppress model capabilities. Newer approaches like DPO (Direct Preference Optimization) and Constitutional AI from Anthropic aim to achieve similar alignment with less overhead.</p>
      <blockquote>"Alignment is not a solved problem. RLHF is a step in the right direction, but the fundamental challenge of specifying human values remains." — AI Safety Researchers</blockquote>
    `,
    tag: "Machine Learning",
    icon: "🎯",
    author: "ML Research",
    date: "March 22, 2025",
    readTime: "11 min read",
    featured: false
  },
  {
    id: 8,
    title: "Soft Robotics: Machines That Can Touch Without Breaking",
    excerpt: "How flexible, compliant robotic grippers inspired by octopus arms are enabling robots to handle delicate objects that rigid robots would crush.",
    content: `
      <p>Traditional robotic grippers are rigid, heavy, and notoriously bad at handling irregular or fragile objects. Soft robotics — drawing inspiration from biological organisms like octopuses, elephant trunks, and human hands — is changing this.</p>
      <h3>Pneumatic Actuators</h3>
      <p>Most soft robotic grippers use pneumatic actuators: flexible chambers that expand when filled with air, causing the gripper fingers to curl around an object. The compliance of the material naturally accommodates irregular shapes without pre-programmed grasps.</p>
      <h3>Applications in Food and Pharma</h3>
      <p>Traditional robots struggle enormously with food handling — a tomato, a bread roll, and a steak all require completely different gripping strategies. Soft grippers handle all three without reprogramming, making them invaluable in food processing and packaging lines.</p>
      <h3>Medical Robotics</h3>
      <p>Soft robotic surgical tools can be inserted through small incisions and navigate to a surgical site while complying with the body's natural geometry. Combined with haptic feedback, they give surgeons unprecedented precision for minimally invasive procedures.</p>
      <ul>
        <li>Compliant materials absorb impact and adapt to shape</li>
        <li>Safe for human-robot collaboration (cobots)</li>
        <li>Dramatically lower cost than precision rigid grippers</li>
        <li>Enabled by advances in flexible sensor materials</li>
      </ul>
    `,
    tag: "Robotics",
    icon: "🦾",
    author: "Robotics Editorial",
    date: "March 10, 2025",
    readTime: "8 min read",
    featured: false
  }
];

// ── State ────────────────────────────────────
let currentTag = 'all';
let currentSearch = '';
let visibleCount = 6;
let pdfDoc = null;
let currentPage = 1;
let pdfScale = 1.4;

// ── Filter & Render ───────────────────────────
function getFilteredPosts() {
  let posts = [...BLOG_POSTS].filter(p => !p.featured);

  if (currentTag !== 'all') {
    posts = posts.filter(p => p.tag === currentTag);
  }

  if (currentSearch) {
    const q = currentSearch.toLowerCase();
    posts = posts.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.tag.toLowerCase().includes(q)
    );
  }

  return posts;
}

function renderFeatured() {
  const featuredEl = document.getElementById('featuredPost');
  if (!featuredEl) return;

  const featured = BLOG_POSTS.find(p => p.featured);
  if (!featured) { featuredEl.style.display = 'none'; return; }

  featuredEl.querySelector('.container').innerHTML = `
    <div class="featured-card" onclick="openBlogModal(${featured.id})">
      <div class="featured-card__img">
        <div class="featured-card__img-placeholder">${featured.icon}</div>
        <span class="featured-card__badge">Featured</span>
      </div>
      <div class="featured-card__body">
        <span class="featured-card__tag"><i class="fas fa-tag"></i> ${featured.tag}</span>
        <h2 class="featured-card__title">${featured.title}</h2>
        <p class="featured-card__excerpt">${featured.excerpt}</p>
        <div class="featured-card__meta">
          <span><i class="fas fa-user"></i> ${featured.author}</span>
          <span><i class="fas fa-calendar"></i> ${featured.date}</span>
          <span><i class="fas fa-clock"></i> ${featured.readTime}</span>
        </div>
        <button class="featured-card__read-btn">
          Read Article <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  `;
}

function renderBlogGrid() {
  const grid = document.getElementById('blogGrid');
  const countEl = document.getElementById('blogCount');
  const loadMoreBtn = document.getElementById('blogLoadMore');
  if (!grid) return;

  const filtered = getFilteredPosts();
  const visible = filtered.slice(0, visibleCount);

  if (countEl) countEl.textContent = `${filtered.length} article${filtered.length !== 1 ? 's' : ''}`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="blog-empty">
        <div class="blog-empty__icon">📭</div>
        <div class="blog-empty__title">No articles found</div>
        <p class="blog-empty__desc">Try a different search or category</p>
      </div>`;
    if (loadMoreBtn) loadMoreBtn.classList.add('hidden');
    return;
  }

  grid.innerHTML = visible.map(post => `
    <article class="blog-card" onclick="openBlogModal(${post.id})">
      <div class="blog-card__img">
        <span>${post.icon}</span>
        <span class="blog-card__tag-badge">${post.tag}</span>
      </div>
      <div class="blog-card__body">
        <h3 class="blog-card__title">${post.title}</h3>
        <p class="blog-card__excerpt">${post.excerpt}</p>
        <div class="blog-card__meta">
          <div class="blog-card__meta-left">
            <span><i class="fas fa-clock"></i> ${post.readTime}</span>
            <span>${post.date}</span>
          </div>
          <span class="blog-card__read-link">Read <i class="fas fa-arrow-right"></i></span>
        </div>
      </div>
    </article>
  `).join('');

  if (loadMoreBtn) {
    loadMoreBtn.classList.toggle('hidden', visibleCount >= filtered.length);
    loadMoreBtn.textContent = `Load more articles (${filtered.length - visibleCount} remaining)`;
  }
}

// ── Blog Modal ────────────────────────────────
function openBlogModal(id) {
  const post = BLOG_POSTS.find(p => p.id === id);
  if (!post) return;

  const overlay = document.createElement('div');
  overlay.className = 'blog-modal-overlay';
  overlay.id = 'blogModalOverlay';
  overlay.innerHTML = `
    <div class="blog-modal" role="dialog" aria-modal="true" aria-label="${post.title}">
      <button class="blog-modal__close" onclick="closeBlogModal()" aria-label="Close">
        <i class="fas fa-times"></i>
      </button>
      <div class="blog-modal__hero">
        <span style="font-size:5rem">${post.icon}</span>
      </div>
      <div class="blog-modal__body">
        <div class="blog-modal__tag"><i class="fas fa-tag"></i> ${post.tag}</div>
        <h2 class="blog-modal__title">${post.title}</h2>
        <div class="blog-modal__meta">
          <span><i class="fas fa-user"></i> ${post.author}</span>
          <span><i class="fas fa-calendar"></i> ${post.date}</span>
          <span><i class="fas fa-clock"></i> ${post.readTime}</span>
        </div>
        <div class="blog-modal__content">${post.content}</div>
        <button class="blog-modal__pdf-btn" onclick="closeBlogModal(); scrollToPDF()">
          <i class="fas fa-file-pdf"></i> Read a PDF Paper
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeBlogModal();
  });

  document.addEventListener('keydown', handleEsc);
}

function closeBlogModal() {
  const overlay = document.getElementById('blogModalOverlay');
  if (overlay) overlay.remove();
  document.body.style.overflow = '';
  document.removeEventListener('keydown', handleEsc);
}

function handleEsc(e) {
  if (e.key === 'Escape') closeBlogModal();
}

function scrollToPDF() {
  document.querySelector('.pdf-section')?.scrollIntoView({ behavior: 'smooth' });
}

// ── PDF Viewer ────────────────────────────────
async function loadPDF(file) {
  const pdfViewerWrap = document.getElementById('pdfViewerWrap');
  const pdfTitle = document.getElementById('pdfTitle');

  try {
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

    const arrayBuffer = await file.arrayBuffer();
    pdfDoc = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    currentPage = 1;

    document.getElementById('pdfTotalPages').textContent = pdfDoc.numPages;
    if (pdfTitle) pdfTitle.textContent = file.name;

    pdfViewerWrap.classList.remove('hidden');
    pdfViewerWrap.scrollIntoView({ behavior: 'smooth', block: 'start' });

    await renderPage(currentPage);
    await renderThumbnails();
  } catch (err) {
    alert('Could not load PDF. Please try another file.');
    console.error(err);
  }
}

async function renderPage(pageNum) {
  if (!pdfDoc) return;

  const canvas = document.getElementById('pdfCanvas');
  const ctx = canvas.getContext('2d');
  const page = await pdfDoc.getPage(pageNum);

  const viewport = page.getViewport({ scale: pdfScale });
  canvas.width = viewport.width;
  canvas.height = viewport.height;

  await page.render({ canvasContext: ctx, viewport }).promise;

  document.getElementById('pdfCurrentPage').textContent = pageNum;

  // Update active thumbnail
  document.querySelectorAll('.pdf-thumb').forEach((t, i) => {
    t.classList.toggle('active', i + 1 === pageNum);
  });
}

async function renderThumbnails() {
  if (!pdfDoc) return;
  const container = document.getElementById('pdfThumbnails');
  container.innerHTML = '';

  for (let i = 1; i <= Math.min(pdfDoc.numPages, 20); i++) {
    const page = await pdfDoc.getPage(i);
    const viewport = page.getViewport({ scale: 0.2 });
    const canvas = document.createElement('canvas');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;

    const thumb = document.createElement('div');
    thumb.className = `pdf-thumb${i === 1 ? ' active' : ''}`;
    thumb.appendChild(canvas);
    const pageNum = i;
    thumb.addEventListener('click', () => {
      currentPage = pageNum;
      renderPage(currentPage);
    });
    container.appendChild(thumb);
  }
}

// ── Init ──────────────────────────────────────
function initBlogPage() {
  if (!document.getElementById('blogGrid')) return;

  renderFeatured();
  renderBlogGrid();

  // Tag filters
  document.querySelectorAll('.blog-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      currentTag = pill.dataset.tag;
      visibleCount = 6;
      document.querySelectorAll('.blog-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      renderBlogGrid();
    });
  });

  // Search
  const searchInput = document.getElementById('blogSearch');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      currentSearch = searchInput.value.toLowerCase().trim();
      visibleCount = 6;
      renderBlogGrid();
    });
  }

  // Load more
  const loadMoreBtn = document.getElementById('blogLoadMore');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      visibleCount += 6;
      renderBlogGrid();
    });
  }

  // PDF Upload
  const pdfInput = document.getElementById('pdfInput');
  if (pdfInput) {
    pdfInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file && file.type === 'application/pdf') {
        loadPDF(file);
      }
    });
  }

  // PDF Controls
  document.getElementById('pdfPrev')?.addEventListener('click', () => {
    if (currentPage > 1) { currentPage--; renderPage(currentPage); }
  });

  document.getElementById('pdfNext')?.addEventListener('click', () => {
    if (pdfDoc && currentPage < pdfDoc.numPages) { currentPage++; renderPage(currentPage); }
  });

  document.getElementById('pdfZoomIn')?.addEventListener('click', () => {
    pdfScale = Math.min(pdfScale + 0.2, 3.0);
    renderPage(currentPage);
  });

  document.getElementById('pdfZoomOut')?.addEventListener('click', () => {
    pdfScale = Math.max(pdfScale - 0.2, 0.6);
    renderPage(currentPage);
  });

  document.getElementById('pdfClose')?.addEventListener('click', () => {
    document.getElementById('pdfViewerWrap')?.classList.add('hidden');
    pdfDoc = null;
    currentPage = 1;
    document.getElementById('pdfThumbnails').innerHTML = '';
    document.getElementById('pdfInput').value = '';
  });

  // Keyboard PDF navigation
  document.addEventListener('keydown', (e) => {
    if (!pdfDoc) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      if (currentPage < pdfDoc.numPages) { currentPage++; renderPage(currentPage); }
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      if (currentPage > 1) { currentPage--; renderPage(currentPage); }
    }
  });
}

document.addEventListener('DOMContentLoaded', initBlogPage);
