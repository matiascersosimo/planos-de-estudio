/** Presentation layer only: the rendered Markdown remains the source of truth. */
function initStudyReader() {
  const candidate = document.querySelector<HTMLElement>('[data-study]');
  if (!candidate) return;
  const root = candidate;
  const content = root.querySelector<HTMLElement>('[data-content]');
  if (!content) return;
  const headings = [...content.querySelectorAll<HTMLElement>(':scope > h2')];
  if (!headings.length) return; // Keep the full document available if it has no chapters.

  const sections: HTMLElement[] = [];
  let section: HTMLElement | null = null;
  // Move existing nodes rather than serializing HTML: formulas, figures and IDs survive.
  for (const node of [...content.childNodes]) {
    if (node instanceof HTMLElement && node.tagName === 'H2') {
      section = document.createElement('section');
      section.className = 'study-chapter';
      section.dataset.chapter = node.id;
      section.setAttribute('aria-labelledby', node.id);
      node.tabIndex = -1;
      content.insertBefore(section, node);
      sections.push(section);
    }
    if (section) section.append(node);
  }
  // Preserve any introduction before the first H2, in both reading modes.
  const prelude = [...content.childNodes].filter(n => !(n instanceof HTMLElement && n.classList.contains('study-chapter')));
  const introduction = document.createElement('div');
  introduction.className = 'study-prelude';
  prelude.forEach(n => introduction.append(n));
  content.prepend(introduction);
  content.querySelectorAll('table').forEach(table => {
    if (table.querySelector('th')?.textContent?.trim() === 'Relación') table.classList.add('study-formula-table');
  });

  const $ = <T extends HTMLElement = HTMLElement>(selector: string) => root.querySelector<T>(selector)!;
  const all = <T extends HTMLElement = HTMLElement>(selector: string) => [...root.querySelectorAll<T>(selector)];
  const ids = sections.map(s => s.dataset.chapter!);
  const key = `study-progress:v1:${root.dataset.subject}`;
  let completed = new Set<string>();
  let last: string | null = null;
  let storageAvailable = true;
  let current = 0;
  let mode: 'overview' | 'reader' | 'continuous' = 'overview';
  try {
    const saved = JSON.parse(localStorage.getItem(key) ?? '{}');
    if (Array.isArray(saved.completed)) completed = new Set(saved.completed.filter((id: unknown) => typeof id === 'string' && ids.includes(id)));
    if (typeof saved.last === 'string' && ids.includes(saved.last)) last = saved.last;
  } catch { storageAvailable = false; }

  function save() {
    try { localStorage.setItem(key, JSON.stringify({ completed: [...completed], last })); storageAvailable = true; }
    catch { storageAvailable = false; }
  }

  function updateProgress() {
    const count = completed.size;
    $('[data-progress-label]').textContent = `${count} de ${sections.length} secciones estudiadas · ${storageAvailable ? 'Guardado en este navegador' : 'Avance disponible durante esta sesión'}`;
    $('[data-progress-bar]').style.width = `${count / sections.length * 100}%`;
    all('[data-status]').forEach(el => {
      const done = completed.has(el.dataset.status!);
      el.textContent = done ? '✓ Estudiado' : 'Por estudiar';
      el.classList.toggle('is-complete', done);
    });
    all('[data-nav-status]').forEach(el => { el.textContent = completed.has(el.dataset.navStatus!) ? '✓' : ''; });
    all<HTMLAnchorElement>('[data-chapter-link]').forEach(el => {
      if (mode === 'reader' && el.dataset.chapterLink === ids[current]) el.setAttribute('aria-current', 'location');
      else el.removeAttribute('aria-current');
    });
    const button = $<HTMLButtonElement>('[data-complete]');
    const done = completed.has(ids[current]);
    button.setAttribute('aria-pressed', String(done));
    button.textContent = done ? '✓ Estudiado · desmarcar' : 'Marcar como estudiado';
    const resume = $<HTMLAnchorElement>('[data-resume]');
    resume.href = `#${last ?? ids[0]}`;
    resume.textContent = last ? 'Retomar lectura →' : 'Comenzar a estudiar →';
  }

  function setPager(selector: string, index: number) {
    const link = $<HTMLAnchorElement>(selector);
    link.hidden = index < 0 || index >= sections.length;
    if (!link.hidden) {
      link.href = `#${ids[index]}`;
      link.querySelector('span')!.textContent = headings[index].textContent;
    }
  }

  function render(nextMode: typeof mode, index = current, target?: HTMLElement, moveFocus = false) {
    mode = nextMode;
    current = index;
    root.dataset.mode = mode;
    $('[data-overview]').hidden = mode !== 'overview';
    $('[data-reading]').hidden = mode === 'overview';
    all('[data-reader-tools]').forEach(el => { el.hidden = mode !== 'reader'; });
    sections.forEach((s, i) => { s.hidden = mode === 'reader' && i !== current; });
    all<HTMLButtonElement>('[data-view]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.view === mode)));
    if (mode === 'reader') {
      last = ids[current];
      save();
      $('[data-position]').textContent = `Sección ${current + 1} de ${sections.length}`;
      const select = $<HTMLSelectElement>('[data-subtopics]');
      select.replaceChildren(new Option('Elegir un tema…', ''));
      sections[current].querySelectorAll<HTMLElement>('h3[id], h4[id]').forEach(h => select.add(new Option(h.textContent ?? '', h.id)));
      if (target && [...select.options].some(option => option.value === target.id)) select.value = target.id;
      const formulaHeading = [...sections[current].querySelectorAll<HTMLElement>('h3[id]')].find(h => /^(Hoja de fórmulas|Hoja de consulta)/.test(h.textContent ?? ''));
      const formulaLink = $<HTMLAnchorElement>('[data-chapter-formulas]');
      formulaLink.hidden = !formulaHeading;
      if (formulaHeading) {
        formulaLink.href = `#${formulaHeading.id}`;
        formulaLink.textContent = formulaHeading.textContent?.startsWith('Hoja de consulta') ? 'Conceptos del capítulo ↓' : 'Fórmulas del capítulo ↓';
      }
      select.closest<HTMLElement>('label')!.hidden = select.options.length === 1;
      setPager('[data-previous]', current - 1);
      setPager('[data-next]', current + 1);
      if (matchMedia('(max-width: 800px)').matches) $<HTMLDetailsElement>('.study-menu').open = false;
    }
    updateProgress();
    if (moveFocus) {
      const destination = target ?? (mode === 'reader' ? headings[current] : mode === 'overview' ? $('[data-overview] h2') : headings[0]);
      destination.tabIndex = -1;
      destination.focus({ preventScroll: true });
      destination.scrollIntoView({ block: 'start', behavior: 'instant' });
    }
  }

  function route(moveFocus = false) {
    let id = '';
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { /* Malformed URLs fall back to the index. */ }
    if (id === 'lectura-completa') { render('continuous', current, undefined, moveFocus); return; }
    const target = document.getElementById(id);
    const owner = target?.closest<HTMLElement>('.study-chapter');
    const index = owner ? sections.indexOf(owner) : -1;
    if (index >= 0) render('reader', index, target!, moveFocus);
    else render('overview', current, undefined, moveFocus);
  }

  all<HTMLButtonElement>('[data-view]').forEach(button => button.addEventListener('click', () => {
    const hash = button.dataset.view === 'continuous' ? '#lectura-completa' : '#indice';
    if (location.hash === hash) route(true);
    else location.hash = hash;
  }));
  $('[data-complete]').addEventListener('click', () => {
    const id = ids[current];
    if (completed.has(id)) completed.delete(id); else completed.add(id);
    save(); updateProgress();
    $('[data-announcement]').textContent = completed.has(id) ? 'Capítulo marcado como estudiado.' : 'Capítulo desmarcado.';
  });
  $<HTMLSelectElement>('[data-subtopics]').addEventListener('change', event => {
    const value = (event.target as HTMLSelectElement).value;
    if (value) location.hash = value;
  });

  const normalize = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  all<HTMLInputElement>('[data-search]').forEach(input => input.addEventListener('input', () => {
    const scope = input.dataset.search!;
    const terms = normalize(input.value).trim().split(/\s+/).filter(Boolean);
    const elements = all(scope === 'overview' ? '[data-card]' : '[data-chapter-link]');
    let visible = 0;
    elements.forEach(el => {
      const text = normalize(el.dataset.searchText ?? '');
      el.hidden = !terms.every(term => text.includes(term));
      if (!el.hidden) visible++;
    });
    $(`[data-empty="${scope}"]`).hidden = visible > 0;
    if (scope === 'overview') $('[data-result-count]').textContent = `${visible} de ${sections.length} secciones`;
  }));

  all('[data-enhanced]').forEach(el => { el.hidden = false; });
  root.classList.add('is-enhanced');
  if (matchMedia('(max-width: 800px)').matches) $<HTMLDetailsElement>('.study-menu').open = false;
  window.addEventListener('hashchange', () => route(true));
  route(Boolean(location.hash));
}

initStudyReader();
