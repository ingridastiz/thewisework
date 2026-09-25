/* Wise Work overlay (EN source → ES translation) + deck carousel menu. */
(function(){
  // ============== TRANSLATIONS (EN → ES) ==============
  const T = {
    // NAV
    "Ecosystem": "Ecosistema",
    "Services": "Servicios",
    "How we work": "Cómo trabajamos",
    "Let's talk →": "Empecemos →",
    // HERO
    "AI Transformation · Humans in the loop": "Transformación con IA · Humans in the loop",
    "AI transformation that actually works.": "Transformación con IA que funciona.",
    "We help CEOs and Boards lead the AI era, keeping humans in the loop, with 30 years of hands‑on tech leadership and a social sciences background.":
      "Ayudamos a CEOs y Boards a liderar la era de la IA involucrando a las personas en el proceso, con 30 años de liderazgo tecnológico hands-on y background en ciencias sociales.",
    // PROBLEM
    "The Problem": "El Problema",
    "AI is here. Humans aren't.": "La IA ya está aquí. Las personas no.",
    "Organizations are implementing AI. Very few know why, what for, and how to involve people in the transformation process.":
      "Las organizaciones están implementando IA. Muy pocas saben por qué y para qué y cómo involucrar a las personas en el proceso de transformación.",
    "Strategy gap": "Brecha de estrategia",
    "Implementing AI without a human strategy.": "Implementar IA sin una estrategia humana.",
    "New tools, old processes. Technical adoption doesn't translate to real business impact.":
      "Herramientas nuevas, procesos viejos. La adopción técnica no se traduce en impacto real de negocio.",
    "Cognition gap": "Brecha cognitiva",
    "Information overload, decision paralysis.": "Sobrecarga de información, parálisis de decisión.",
    "AI generates at scale, but deciding what matters is still a human question.":
      "La IA genera a escala, pero decidir qué importa sigue siendo una cuestión humana.",
    "Culture gap": "Brecha cultural",
    "Culture change doesn't cascade on its own.": "El cambio cultural no cascadea solo.",
    "Teams reorganize, roles change, but beliefs and resistance stay the same.":
      "Los equipos se reorganizan, los roles cambian, pero las creencias y la resistencia se quedan igual.",
    // THESIS
    "Our Thesis": "Nuestra Tesis",
    "We don't add humans to tech. We help you design the ecosystem where they meet.":
      "No sumamos humanos a la tecnología. Te ayudamos a diseñar el ecosistema donde se encuentran.",
    "Three dimensions working together in a new organizational ecosystem.":
      "Tres dimensiones trabajando juntas en un nuevo ecosistema organizacional.",
    "Dimension · Human": "Dimensión · Humana",
    "Emotions. Meaning. Agency. Resistance.": "Emociones. Sentido. Agencia. Resistencia.",
    "The slow side of change. The one that really decides if anything sticks.":
      "El lado lento del cambio. El que de verdad decide si algo se sostiene.",
    "Slow, contextual, embodied": "Lento, contextual, encarnado",
    "Moves through relationships": "Se mueve por relaciones",
    "Needs to understand to commit": "Necesita entender para comprometerse",
    "Dimension · Organizational": "Dimensión · Organizacional",
    "System. Structures. Processes. Culture.": "Sistema. Estructuras. Procesos. Cultura.",
    "The terrain where Humans and AI become real work. A systemic view: nothing changes in isolation.":
      "El terreno donde Humanos e IA se vuelven trabajo real. Mirada sistémica: nada se cambia aislado.",
    "Workflows, roles, decisions, power": "Workflows, roles, decisiones, poder",
    "Culture as a system of beliefs in use": "Cultura como sistema de creencias en uso",
    "Every change impacts the whole": "Cada cambio impacta el todo",
    "Dimension · AI": "Dimensión · IA",
    "Speed. Scale. Patterns. Prediction.": "Velocidad. Escala. Patrones. Predicción.",
    "The new agent in the system. Fast and ready to produce, but decontextualized.":
      "El nuevo agente en el sistema. Rápido y listo para producir, pero descontextualizado.",
    "Fast, decontextualized, tireless": "Rápido, descontextualizado, incansable",
    "Moves through data": "Se mueve por datos",
    "Commits before it understands": "Se compromete antes de entender",
    // WHY
    "Why Wise Work": "Por qué Wise Work",
    "We combine the best of both worlds: tech and people.":
      "Combinamos lo mejor de dos mundos: tech y people.",
    "We've led digital, agile and cultural transformations from both sides of the table. We know the tech terrain from the inside because we came from there. And we know how to accompany the human side of any transformation.":
      "Hemos liderado transformaciones digitales, ágiles y culturales de los dos lados de la mesa. Conocemos el terreno de la tecnología desde adentro porque venimos de ahí. Y sabemos cómo acompañar la parte humana de cualquier transformación.",
    "Track record": "Trayectoria",
    "Leading transformations": "Liderando transformaciones",
    "Digital, Agile, Cultural. Both sides of the table: tech and people. We know what makes them land.":
      "Digital, Agile, Cultural. Ambos lados de la mesa: tech y personas. Sabemos qué hace que aterricen.",
    "Team expertise": "Expertise del equipo",
    "5 countries, 6 sectors.": "5 países, 6 sectores.",
    "Our team members have worked with organizations in Argentina, Spain, Colombia, US and Canada. Fortune 500, Unicorns, Banks, Telcos, Pharma & Health and NGOs.":
      "Los miembros de nuestro equipo han trabajado con organizaciones en Argentina, España, Colombia, US y Canadá. Fortune 500, Unicorns, Banks, Telcos, Pharma & Health y NGOs.",
    "Inside the team": "Dentro del equipo",
    "\"The anxiety that change brings isn't something to overcome. Resistance is part of the process. We work through it.\"":
      "\"La ansiedad que trae el cambio no es algo que haya que superar. La resistencia es parte del proceso. Trabajamos a través de ella.\"",
    "That's why we put Applied Social Psychology inside the team.":
      "Por eso contamos con la Psicología Social Aplicada adentro del equipo.",
    // WHAT (lenses)
    "What we do": "Qué hacemos",
    "Three lenses. Humans in the loop at every step.": "Tres lentes. Humans in the loop en cada paso.",
    "Optimize, Innovate, Reinvent. Three lenses we apply depending on where you're focusing in your organization.":
      "Optimize, Innovate, Reinvent. Tres miradas que aplicamos según el momento en el que estés haciendo foco en tu organización.",
    "Lens · Present": "Lente · Presente",
    "Optimize.": "Optimizar.",
    "Look at the present.": "Mirá el presente.",
    "Cut costs, improve processes, measure real business impact. No vanity metrics.":
      "Bajar costos, mejorar procesos, medir impacto real de negocio. Nada de vanity metrics.",
    "Lens · Future": "Lente · Futuro",
    "Innovate.": "Innovar.",
    "Look at the future.": "Mirá el futuro.",
    "Boost creativity and design bold futures, without repeating the past.":
      "Potenciar la creatividad y diseñar futuros audaces, sin repetir el pasado.",
    "Lens · People": "Lente · Personas",
    "Reinvent.": "Reinventar.",
    "Look at the people.": "Mirá a las personas.",
    "Up-skilling, re-skilling, redesign roles, teams and culture. Care for mental health. Keep human agency at the center.":
      "Up-skilling, re-skilling, rediseñar roles, equipos y cultura. Cuidar la salud mental. Mantener la agencia humana en el centro.",
    // HOW
    "How we engage": "Cómo trabajamos juntos",
    "Three ways to work together.": "Tres formas de trabajar juntos.",
    "Diagnose.": "Diagnosticar.",
    "Diagnosis + roadmap before implementing anything. Participatory process based on social sciences.":
      "Diagnóstico + roadmap antes de implementar nada. Proceso participativo basado en ciencias sociales.",
    "Before you commit. Know the terrain.": "Antes de comprometerte. Conocer el terreno.",
    "3 weeks": "3 semanas",
    "Discovery": "Discovery",
    "Implement.": "Implementar.",
    "You've decided to implement. We add a tech lead and a people lead so the technology and the team adopt together.":
      "Ya decidiste implementar. Sumamos un tech lead y un people lead para que la tecnología y el equipo adopten juntos.",
    "While you build. We land it together with the people.":
      "Mientras construís. Lo aterrizamos junto con la gente.",
    "3 months": "3 meses",
    "Embedded": "Embedded",
    "Sustain.": "Sostener.",
    "On-demand. No continuity commitment. When you need us, we're there. When you don't, we're not.":
      "On-demand. Sin compromiso de continuidad. Cuando nos necesitás, estamos. Cuando no, no.",
    "After launch. When you need our perspective to sustain or rethink.":
      "Después de lanzar. Cuando necesitás nuestra mirada para sostener o repensar.",
    "1 to 2 days / month": "1 a 2 días / mes",
    "On demand": "On demand",
    // CTA
    "We run a discovery together and identify the root causes: what's still a human problem, and what tech can solve. Real transformation. Humans in the loop.":
      "Hacemos un discovery juntos e identificamos las causas raíz: qué sigue siendo un problema humano, y qué puede resolver la tecnología. Real transformation. Humans in the loop.",
    "If you know the problem, go solve it.": "Si conocés el problema, podés resolverlo.",
    "If you don't, call us.": "Si no, llamanos.",
    "Call us": "Llamanos",
    "Call us →": "Llamanos →",
  };

  // Overlay UI text
  const UI = {
    en: { deck: "See proposal", deckTitle: "Wise Work · Proposal", close: "Close", lang: "ES" },
    es: { deck: "Ver propuesta", deckTitle: "Wise Work · Propuesta", close: "Cerrar", lang: "EN" },
  };

  // ============== I18N WALKER ==============
  function indexElements() {
    const els = [];
    document.body.querySelectorAll('p, h1, h2, h3, h4, h5, h6').forEach(el => {
      if (el.closest('[data-ww-skip]')) return;
      if (el.querySelector('a, button, input, select, textarea, [onclick]')) return;
      const t = (el.textContent || '').trim().replace(/\s+/g, ' ');
      if (T[t]) {
        el.__wwKey = t;
        el.__origHTML = el.innerHTML;
        el.setAttribute('data-ww-handled', '');
        els.push(el);
      }
    });
    return els;
  }
  function indexTextNodes() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => {
        if (!n.textContent || !n.textContent.trim()) return NodeFilter.FILTER_REJECT;
        if (n.parentElement && n.parentElement.closest('[data-ww-skip]')) return NodeFilter.FILTER_REJECT;
        if (n.parentElement && n.parentElement.closest('[data-ww-handled]')) return NodeFilter.FILTER_REJECT;
        if (n.parentElement && ['SCRIPT','STYLE'].includes(n.parentElement.tagName)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const out = [];
    while (walker.nextNode()) out.push(walker.currentNode);
    return out;
  }
  let _nodes = null, _els = null;
  function applyLang(lang) {
    if (!_els) _els = indexElements();
    if (!_nodes) _nodes = indexTextNodes();
    _els.forEach(el => {
      if (lang === 'es' && T[el.__wwKey]) {
        el.textContent = T[el.__wwKey];
      } else {
        el.innerHTML = el.__origHTML;
      }
    });
    // Special-case: keep the hero title on multiple lines in both languages
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && lang === 'es') {
      heroTitle.innerHTML = 'Transformación<br>con IA<br>que funciona.';
    }
    _nodes.forEach(n => {
      if (!n.__origText) n.__origText = n.textContent;
      const trimmed = n.__origText.trim();
      if (lang === 'es' && T[trimmed]) {
        const lead = n.__origText.match(/^\s*/)[0];
        const trail = n.__origText.match(/\s*$/)[0];
        n.textContent = lead + T[trimmed] + trail;
      } else {
        n.textContent = n.__origText;
      }
    });
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-ww-ui]').forEach(el => {
      const k = el.dataset.wwUi;
      if (UI[lang][k]) el.textContent = UI[lang][k];
    });
    try { localStorage.setItem('ww-lang', lang); } catch(e){}
  }

  // ============== OVERLAY UI (deck + lang toggle) ==============
  const SLIDES_FALLBACK = [
    'extracted/slide-01.jpg','extracted/slide-02.jpg','extracted/slide-03.jpg',
    'extracted/slide-04.jpg','extracted/slide-05.jpg','extracted/slide-06.jpg',
    'extracted/slide-07.jpg'
  ];
  function getSlides() {
    const fromDom = [...document.querySelectorAll('#ww-deck-imgs img')].map(i => i.currentSrc || i.src).filter(Boolean);
    return fromDom.length ? fromDom : SLIDES_FALLBACK;
  }

  function makeOverlay() {
    const style = document.createElement('style');
    style.textContent = `
      .ww-menu { position: fixed; top: 5rem; right: 1rem; z-index: 99999; display: flex; gap: 0.4rem; align-items: center; background: rgba(20,40,65,0.96); backdrop-filter: blur(14px); border: 1px solid rgba(255,255,255,0.12); border-radius: 100px; padding: 0.4rem; box-shadow: 0 12px 36px rgba(11,24,40,0.3); font-family: system-ui, -apple-system, sans-serif; }
      .ww-menu button { background: transparent; color: rgba(255,255,255,0.85); border: 0; padding: 0.45rem 0.9rem; font-size: 12px; font-weight: 500; letter-spacing: 0.04em; border-radius: 100px; cursor: pointer; transition: all 0.18s; display: inline-flex; align-items: center; gap: 0.4rem; }
      .ww-menu button:hover { background: rgba(255,255,255,0.08); color: #fff; }
      .ww-menu .ww-lang { background: rgba(239,121,13,0.18); color: #EF790D; }
      .ww-menu .ww-lang:hover { background: #EF790D; color: #fff; }
      .ww-lang-inline { background: rgba(239,121,13,0.15); color: #EF790D; border: 1px solid rgba(239,121,13,0.35); padding: 0.35rem 0.75rem; border-radius: 100px; font-size: 12px; font-weight: 600; letter-spacing: 0.06em; cursor: pointer; font-family: inherit; transition: all 0.18s; }
      .ww-lang-inline:hover { background: #EF790D; color: #fff; border-color: #EF790D; }
      .ww-deck-inline { background: #EF790D; color: #fff; border: 1px solid #EF790D; padding: 0.4rem 0.95rem; border-radius: 100px; font-size: 12px; font-weight: 600; letter-spacing: 0.04em; cursor: pointer; font-family: inherit; transition: all 0.18s; display: inline-flex; align-items: center; gap: 0.4rem; }
      .ww-deck-inline::before { content: '▦'; font-size: 12px; opacity: 0.85; }
      .ww-deck-inline:hover { background: #d96a00; border-color: #d96a00; }
      .ww-menu .ww-deck::before { content: '▦'; font-size: 13px; opacity: 0.7; }
      @media (max-width: 900px) { .ww-menu { top: auto; bottom: 0.9rem; left: 50%; right: auto; transform: translateX(-50%); } .ww-menu button { padding: 0.4rem 0.75rem; font-size: 11px; } }

      .ww-modal { position: fixed; inset: 0; z-index: 10000; background: rgba(11,24,40,0.96); backdrop-filter: blur(8px); display: none; flex-direction: column; align-items: center; justify-content: center; padding: 4rem 2rem 2rem; }
      .ww-modal.open { display: flex; }
      .ww-modal-head { position: absolute; top: 1.25rem; left: 0; right: 0; display: flex; justify-content: space-between; align-items: center; padding: 0 1.5rem; font-family: system-ui, sans-serif; color: #FAF7F2; font-size: 13px; }
      .ww-modal-head .title { letter-spacing: 0.08em; text-transform: uppercase; font-size: 11px; color: rgba(255,255,255,0.7); }
      .ww-modal-head .count { font-family: 'Instrument Serif', serif; font-style: italic; color: #EF790D; font-size: 1.4rem; }
      .ww-modal-close { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15); color: #FAF7F2; padding: 0.45rem 0.9rem; border-radius: 100px; cursor: pointer; font-size: 12px; font-family: inherit; transition: all 0.2s; }
      .ww-modal-close:hover { background: #EF790D; border-color: #EF790D; }
      .ww-stage { position: relative; width: 100%; max-width: 1180px; aspect-ratio: 16/9; display: flex; align-items: center; justify-content: center; }
      .ww-stage img { max-width: 100%; max-height: 100%; width: auto; height: auto; box-shadow: 0 30px 80px rgba(0,0,0,0.5); border-radius: 6px; user-select: none; -webkit-user-drag: none; }
      .ww-nav { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15); color: #fff; width: 48px; height: 48px; border-radius: 50%; cursor: pointer; font-size: 20px; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
      .ww-nav:hover { background: #EF790D; border-color: #EF790D; }
      .ww-nav.prev { left: -64px; } .ww-nav.next { right: -64px; }
      @media (max-width: 1280px) { .ww-nav.prev { left: 0.5rem; } .ww-nav.next { right: 0.5rem; } }
      .ww-dots { position: absolute; bottom: 1rem; left: 0; right: 0; display: flex; justify-content: center; gap: 0.5rem; }
      .ww-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.25); border: 0; cursor: pointer; transition: all 0.2s; padding: 0; }
      .ww-dot.active { background: #EF790D; width: 24px; border-radius: 4px; }
    `;
    document.head.appendChild(style);

    const menu = document.createElement('div');
    menu.className = 'ww-menu';
    menu.setAttribute('data-ww-skip','');
    menu.style.display = 'none';
    menu.innerHTML = `<button class="ww-deck" data-ww-ui="deck" type="button">See proposal</button>`;
    document.body.appendChild(menu);

    const navHost = document.querySelector('nav ul.nav-links') || document.querySelector('nav');
    const deckBtnInline = document.createElement('button');
    deckBtnInline.className = 'ww-deck-inline';
    deckBtnInline.type = 'button';
    deckBtnInline.setAttribute('data-ww-skip','');
    deckBtnInline.setAttribute('data-ww-ui','deck');
    deckBtnInline.textContent = 'See proposal';
    const langBtn = document.createElement('button');
    langBtn.className = 'ww-lang ww-lang-inline';
    langBtn.type = 'button';
    langBtn.setAttribute('data-ww-skip','');
    langBtn.setAttribute('data-ww-ui','lang');
    langBtn.title = 'Switch language / Cambiar idioma';
    langBtn.textContent = 'ES';
    if (navHost && navHost.tagName === 'UL') {
      const liDeck = document.createElement('li');
      liDeck.setAttribute('data-ww-skip','');
      liDeck.appendChild(deckBtnInline);
      navHost.appendChild(liDeck);
      const li = document.createElement('li');
      li.setAttribute('data-ww-skip','');
      li.appendChild(langBtn);
      navHost.appendChild(li);
    } else if (navHost) {
      navHost.appendChild(deckBtnInline);
      navHost.appendChild(langBtn);
    } else {
      menu.style.display = '';
      menu.insertBefore(langBtn, menu.firstChild);
    }
    deckBtnInline.addEventListener('click', open);
    langBtn.addEventListener('click', () => {
      const cur = document.documentElement.lang === 'es' ? 'es' : 'en';
      applyLang(cur === 'en' ? 'es' : 'en');
    });

    const modal = document.createElement('div');
    modal.className = 'ww-modal';
    modal.setAttribute('data-ww-skip','');
    modal.innerHTML = `
      <div class="ww-modal-head">
        <span class="title" data-ww-ui="deckTitle">Wise Work · Proposal</span>
        <button class="ww-modal-close" data-ww-ui="close" type="button">Close</button>
      </div>
      <div class="ww-stage">
        <button class="ww-nav prev" type="button" aria-label="Prev">‹</button>
        <img alt="Slide">
        <button class="ww-nav next" type="button" aria-label="Next">›</button>
        <div class="ww-dots"></div>
      </div>
    `;
    document.body.appendChild(modal);

    let idx = 0;
    const SLIDES = getSlides();
    const img = modal.querySelector('img');
    const dotsBox = modal.querySelector('.ww-dots');
    SLIDES.forEach((_, i) => {
      const b = document.createElement('button');
      b.className = 'ww-dot' + (i===0?' active':'');
      b.type = 'button';
      b.addEventListener('click', () => go(i));
      dotsBox.appendChild(b);
    });
    function go(i) {
      idx = (i + SLIDES.length) % SLIDES.length;
      img.src = SLIDES[idx];
      dotsBox.querySelectorAll('.ww-dot').forEach((d,j) => d.classList.toggle('active', j===idx));
    }
    function open() { go(0); modal.classList.add('open'); document.body.style.overflow = 'hidden'; }
    function close() { modal.classList.remove('open'); document.body.style.overflow = ''; }
    modal.querySelector('.ww-modal-close').addEventListener('click', close);
    modal.querySelector('.ww-nav.prev').addEventListener('click', () => go(idx-1));
    modal.querySelector('.ww-nav.next').addEventListener('click', () => go(idx+1));
    document.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') go(idx-1);
      else if (e.key === 'ArrowRight') go(idx+1);
    });
    modal.addEventListener('click', (e) => { if (e.target === modal) close(); });

    menu.querySelector('.ww-deck').addEventListener('click', open);
  }

  function init() {
    makeOverlay();
    document.addEventListener('click', (e) => {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - 24;
      window.scrollTo({ top, behavior: 'smooth' });
    }, true);
    let lang = 'en';
    try { lang = localStorage.getItem('ww-lang') || 'en'; } catch(e){}
    applyLang(lang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
