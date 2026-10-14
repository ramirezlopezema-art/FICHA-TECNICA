/* Portafolio arquitectónico — contenido centralizado para ampliar galerías sin rediseñar. */
const asset = (name) => `assets/references/${name}`;
const media = {
  'home-hero': {src:asset('home-hero.jpg'), title:'Vista general del proyecto', description:'Maqueta física del Colegio Marino Gómez Estrada. Esta vista reúne los accesos, patios, aulas y espacios exteriores.'},
  'maqueta-hero': {src:asset('maqueta-hero.jpg'), title:'Maqueta — vista principal', description:'Modelo físico del proyecto con lectura integral de volúmenes, circulaciones y zonas verdes.'},
  'maqueta-detail': {src:asset('maqueta-detail.jpg'), title:'Maqueta — vista isométrica', description:'Vista elevada para estudiar la distribución espacial y las relaciones entre los ambientes.'},
  'planos-hero': {src:asset('planos-hero.jpg'), title:'Planos arquitectónicos', description:'Documentación técnica que presenta la distribución y el sistema espacial de la propuesta.'},
  'planos-feature': {src:asset('planos-feature.jpg'), title:'Planta arquitectónica general', description:'Lámina de referencia para examinar la organización general del proyecto.'},
  'planos-cortes': {src:asset('planos-cortes.jpg'), title:'Cortes arquitectónicos', description:'Secciones del proyecto para estudiar alturas, niveles y relaciones entre espacios.'},
  'planos-fachadas': {src:asset('planos-fachadas.jpg'), title:'Fachadas arquitectónicas', description:'Elevaciones para observar la composición exterior, proporciones y accesos del proyecto.'},
  'planos-detalles': {src:asset('planos-detalles.jpg'), title:'Detalles arquitectónicos', description:'Ampliaciones técnicas de elementos y encuentros constructivos del proyecto.'},
  'render-hero': {src:asset('render-hero.jpg'), title:'Renderizado — visión del conjunto', description:'Visualización exterior que relaciona el proyecto con el paisaje y su contexto.'},
  'render-feature': {src:asset('render-feature.jpg'), title:'Vista exterior general', description:'Render exterior del acceso y la fachada institucional.'},
  'render-exterior-1': {src:asset('render-exterior-1.jpg'), title:'Patio y zonas de encuentro', description:'Vista exterior de las áreas comunes del proyecto.'},
  'render-exterior-2': {src:asset('render-exterior-2.jpg'), title:'Acceso institucional', description:'Perspectiva exterior del acceso principal.'},
  'render-interior-1': {src:asset('render-interior-1.jpg'), title:'Aula de aprendizaje', description:'Visualización interior de un ambiente académico.'},
  'render-interior-2': {src:asset('render-interior-2.jpg'), title:'Biblioteca y zona común', description:'Espacio interior de lectura, trabajo y encuentro.'},
  'video-hero': {src:asset('video-hero.jpg'), title:'Recorrido virtual — vista previa', description:'Poster de demostración para el recorrido 3D. Sustituye esta imagen por tu archivo de video final cuando esté disponible.'},
  'video-chapter-1': {src:asset('video-chapter-1.jpg'), title:'Introducción y entorno', description:'El proyecto se presenta desde su implantación y su relación con Aguadas.'},
  'video-chapter-2': {src:asset('video-chapter-2.jpg'), title:'Recorrido exterior', description:'Accesos, patios, fachadas y recorridos exteriores.'},
  'video-chapter-3': {src:asset('video-chapter-3.jpg'), title:'Recorrido interior', description:'Aulas, biblioteca y espacios colectivos de aprendizaje.'},
  'video-chapter-4': {src:asset('video-chapter-4.jpg'), title:'Vistas finales', description:'Síntesis de los puntos de vista principales del proyecto.'},
  'process-hero': {src:asset('process-hero.jpg'), title:'Proceso de diseño', description:'Mesa de trabajo donde convergen la maqueta, los planos, las herramientas digitales y el registro del proyecto.'},
  'process-1': {src:asset('process-1.jpg'), title:'Investigación y análisis', description:'Lectura del contexto, referentes y necesidades de la institución.'},
  'process-2': {src:asset('process-2.jpg'), title:'Diseño y propuesta', description:'Bocetos, zonificación y definición de la idea arquitectónica.'},
  'process-3': {src:asset('process-3.jpg'), title:'Planos arquitectónicos', description:'Plantas, cortes, fachadas y detalles de la propuesta.'},
  'process-4': {src:asset('process-4.jpg'), title:'Elaboración de maqueta', description:'Construcción y ajuste del modelo físico a escala.'},
  'process-5': {src:asset('process-5.jpg'), title:'Renderizado', description:'Materialidad, iluminación y visualización espacial.'},
  'process-6': {src:asset('process-6.jpg'), title:'Video 3D', description:'Recorrido virtual y comunicación final del proyecto.'}
};

/* Los datos de contenido viven en contenido.js para editar fotos sin tocar esta lógica. */
if (window.portfolioContent?.media) Object.assign(media, window.portfolioContent.media);

const routeItems = [
  ['01','maqueta','Maqueta','Representación física del diseño arquitectónico a escala.','maqueta-hero'],
  ['02','planos','Planos arquitectónicos','Plantas, cortes, fachadas y detalles técnicos.','planos-feature'],
  ['03','renderizado','Renderizado 3D','Visualización realista del proyecto arquitectónico.','render-hero'],
  ['04','video','Video 3D','Recorrido virtual del proyecto en tres dimensiones.','video-hero'],
  ['05','proceso','Proceso y documentación','Memoria, análisis y desarrollo de la propuesta.','process-hero']
];

const maquetaItems = [
  {key:'maqueta-detail', tags:['general','isometricas','detalles','galeria']},
  {key:'maqueta-hero', tags:['general','detalles','galeria']},
  {key:'home-hero', tags:['general','isometricas','galeria']}
];

const maquetaViewDetails = {
  general: {
    label:'VISTA GENERAL',
    title:'Una mirada al conjunto',
    description:'Descubre la composición completa de la maqueta: la distribución de los espacios, las circulaciones y la relación entre las áreas principales.',
    detail:'La vista general ayuda a comprender cómo se conectan los ambientes y cómo se organiza la propuesta a escala.',
    mediaKey:'maqueta-hero',
    action:'Ampliar vista general'
  },
  isometricas: {
    label:'VISTA ISOMÉTRICA',
    title:'Volúmenes y profundidad',
    description:'La perspectiva isométrica permite observar varios lados del modelo al mismo tiempo y entender cómo se relacionan sus volúmenes.',
    detail:'Fíjate en las alturas, los recorridos y la conexión entre los distintos espacios de la propuesta.',
    mediaKey:'maqueta-detail',
    action:'Ampliar vista isométrica'
  },
  detalles: {
    label:'DETALLES DE LA MAQUETA',
    title:'Elementos que dan forma al proyecto',
    description:'Acércate a los componentes visibles del modelo, como las fachadas, los accesos y la composición de sus volúmenes.',
    detail:'Estas fotografías muestran el nivel de lectura que permite la maqueta sin confundirla con los planos o los renderizados.',
    mediaKey:'maqueta-detail',
    action:'Ampliar detalle'
  },
  galeria: {
    label:'GALERÍA FOTOGRÁFICA',
    title:'Explora todas las fotografías',
    description:'Reúne las distintas vistas disponibles para recorrer la maqueta desde diferentes ángulos.',
    detail:'Selecciona una fotografía para ampliarla y consultar su descripción completa.',
    mediaKey:'maqueta-hero',
    action:'Ampliar fotografía destacada'
  }
};
let selectedMaquetaFilter = 'general';

const planItems = [
  {number:'01', filter:'planta', key:'planos-feature', title:'Planta arquitectónica general', description:'Distribución de espacios, circulaciones y accesos del proyecto.'},
  {number:'02', filter:'cortes', key:'planos-cortes', title:'Cortes arquitectónicos', description:'Alturas, niveles y relaciones verticales entre los espacios.'},
  {number:'03', filter:'fachadas', key:'planos-fachadas', title:'Fachadas arquitectónicas', description:'Composición exterior, proporciones y accesos del proyecto.'},
  {number:'04', filter:'detalles', key:'planos-detalles', title:'Detalles arquitectónicos', description:'Ampliaciones de elementos y encuentros constructivos.'}
];

const exteriorItems = ['render-exterior-1','render-exterior-2','render-feature','render-hero'];
const interiorItems = ['render-interior-1','render-interior-2'];
const renderViewDetails = {
  exterior: {label:'VISTA EXTERIOR', title:'El proyecto y su entorno', description:'Explora la fachada y la relación del proyecto arquitectónico con el espacio exterior.', key:'render-feature'},
  interior: {label:'VISTA INTERIOR', title:'Espacios para aprender', description:'Recorre un ambiente interior y observa su distribución, iluminación y relación con las actividades académicas.', key:'render-interior-1'},
  zonas: {label:'ZONAS EXTERIORES', title:'Encuentro y recorrido', description:'Descubre los patios y las áreas comunes que conectan los distintos espacios del proyecto.', key:'render-exterior-1'},
  galeria: {label:'GALERÍA DE RENDERIZADOS', title:'Vistas del proyecto', description:'Explora la colección de visualizaciones exteriores e interiores disponibles.', key:'render-interior-2'}
};
let selectedPlanFilter = 'planta';
let selectedRenderFilter = 'exterior';
const chapters = [
  {number:'01', key:'video-chapter-1', duration:'00:20', category:'entorno'},
  {number:'02', key:'video-chapter-2', duration:'00:35', category:'exterior'},
  {number:'03', key:'video-chapter-3', duration:'00:45', category:'interior'},
  {number:'04', key:'video-chapter-4', duration:'00:25', category:'exterior'}
];
const videoFilterDetails = {
  all:{key:'video-hero', description:'Vista de presentación del recorrido completo, desde el entorno hasta los espacios interiores.'},
  exterior:{key:'video-chapter-2', description:'Capítulos dedicados a accesos, fachadas, patios y recorridos exteriores.'},
  interior:{key:'video-chapter-3', description:'Capítulos para recorrer aulas, biblioteca y ambientes de aprendizaje.'},
  entorno:{key:'video-chapter-1', description:'Capítulos para conocer la ubicación del proyecto y su relación con Aguadas.'}
};
const timeline = [
  ['01','process-1','Investigación y análisis','Contexto, referentes y necesidades del colegio.'],
  ['02','process-2','Diseño y propuesta','Bocetos, zonificación y definición de la idea.'],
  ['03','process-3','Planos arquitectónicos','Plantas, cortes, fachadas y detalles técnicos.'],
  ['04','process-4','Elaboración de maqueta','Construcción del modelo físico a escala.'],
  ['05','process-5','Renderizado','Imágenes, atmósferas y visualización digital.'],
  ['06','process-6','Video 3D','Recorrido virtual y vistas finales del proyecto.']
];

const footerData = {
  inicio: ['MAQUETA','A 1/1','MODELO FÍSICO · PLANOS<br>RENDERIZADOS · VIDEO 3D'], maqueta:['MAQUETA','M 1/1','FOTOGRAFÍAS · VISTAS ISOMÉTRICAS<br>DETALLES · ELEMENTOS ARQUITECTÓNICOS'], planos:['PLANOS','P 1/1','PLANTAS · CORTES · FACHADAS<br>DETALLES · INFORMACIÓN TÉCNICA'], renderizado:['RENDERIZADO','R 1/1','RENDERS EXTERIORES · RENDERS INTERIORES<br>ZONAS COMUNES · MATERIALIDAD'], video:['VIDEO 3D','V 1/1','RECORRIDO VIRTUAL · VISTAS EXTERIORES<br>VISTAS INTERIORES · PERSPECTIVAS'], proceso:['PROCESO','P 1/1','INVESTIGACIÓN · DISEÑO · PLANOS<br>MAQUETA · RENDERIZADO · VIDEO 3D']
};

const $ = (selector, scope=document) => scope.querySelector(selector);
const $$ = (selector, scope=document) => [...scope.querySelectorAll(selector)];
const safe = value => String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
const mediaBadge = key => `<span class="media-index">FOTO ${safe(media[key]?.number || '—')}</span>`;
let currentModalKeys = [];
let currentModalIndex = 0;
let zoomLevel = 1;
let activeLocalVideoUrl = '';
let selectedVideoFile = null;
let renderIndex = 0;
let inlineTextTargets = new Map();

function renderRoute() {
  $('#route-cards').innerHTML = routeItems.map(([number, view, title, description, key]) => `<button class="route-card" data-view="${view}"><span class="route-image"><img src="${media[key].src}" alt="${safe(media[key].alt || media[key].title)}"><i class="route-number">${number}</i>${mediaBadge(key)}</span><span class="route-copy"><b>${safe(title)}</b><p>${safe(description)}</p></span></button>`).join('');
}
function cardMarkup(item, className='gallery-card') {
  const content = media[item.key];
  return `<button class="${className}" data-media-key="${item.key}" aria-label="Abrir ${safe(content.title)}"><span class="gallery-image"><img src="${content.src}" alt="${safe(content.alt || content.title)}">${mediaBadge(item.key)}</span><span class="media-caption">${safe(content.title)} ↗</span></button>`;
}
function renderMaqueta(filter=selectedMaquetaFilter) {
  selectedMaquetaFilter = Object.prototype.hasOwnProperty.call(maquetaViewDetails, filter) ? filter : 'general';
  const details = maquetaViewDetails[selectedMaquetaFilter];
  $('#maqueta-view-label').textContent = details.label;
  $('#maqueta-view-title').textContent = details.title;
  $('#maqueta-view-description').textContent = details.description;
  $('#maqueta-view-detail').textContent = details.detail;
  const viewLink = $('#maqueta-view-link');
  viewLink.dataset.mediaKey = details.mediaKey;
  viewLink.setAttribute('aria-label', details.action);
  $('span', viewLink).textContent = details.action;
  $('#maqueta-gallery').setAttribute('aria-labelledby', `maqueta-tab-${selectedMaquetaFilter === 'isometricas' ? 'isometrica' : selectedMaquetaFilter}`);
  const visible = maquetaItems.filter(item => selectedMaquetaFilter === 'galeria' || item.tags.includes(selectedMaquetaFilter));
  $('#maqueta-gallery').innerHTML = [...new Map(visible.map(item => [item.key, item])).values()].map(item => cardMarkup(item)).join('');
}
function renderPlans(filter=selectedPlanFilter) {
  selectedPlanFilter = planItems.some(item => item.filter === filter) ? filter : 'planta';
  const selected = planItems.find(item => item.filter === selectedPlanFilter);
  const image = media[selected.key];
  $('#planos-view-label').textContent = selected.title.toLocaleUpperCase('es');
  $('#planos-view-title').textContent = selected.filter === 'planta' ? 'Distribución de los espacios' : selected.title;
  $('#planos-view-description').textContent = selected.description;
  $('#planos-view-detail').textContent = image.description;
  $('#planos-sheet-number').textContent = selected.number;
  $('#planos-sheet-title').textContent = selected.title.toLocaleUpperCase('es');
  $('#planos-sheet-scale').textContent = selected.filter === 'detalles' ? 'DETALLE TÉCNICO' : 'DOCUMENTO TÉCNICO';
  const featured = $('#planos-featured');
  featured.dataset.mediaKey = selected.key;
  featured.setAttribute('aria-label', `Abrir ${selected.title}`);
  featured.setAttribute('aria-labelledby', `planos-tab-${selected.filter}`);
  $('img', featured).src = image.src;
  $('img', featured).alt = image.alt || selected.title;
  const hero = $('.planos-hero-image');
  hero.dataset.mediaKey = selected.key;
  $('img', hero).src = image.src;
  $('img', hero).alt = image.alt || selected.title;
  const visible = planItems.filter(item => item.filter !== selectedPlanFilter);
  $('#plans-gallery').innerHTML = visible.map(item => `<button class="plan-item" data-media-key="${item.key}" aria-label="Abrir ${safe(item.title)}"><span class="image-slot"><img src="${media[item.key].src}" alt="${safe(media[item.key].alt || item.title)}">${mediaBadge(item.key)}</span><span><b>${item.number} · ${safe(item.title)}</b><span>${safe(item.description)}</span></span></button>`).join('');
}
function renderThumbs(id, keys) {
  $(`#${id}`).innerHTML = keys.map(key => `<button class="render-thumb" data-media-key="${key}" aria-label="Abrir ${safe(media[key].title)}"><span class="render-image"><img src="${media[key].src}" alt="${safe(media[key].alt || media[key].title)}">${mediaBadge(key)}</span><span class="media-caption">${safe(media[key].title)}</span></button>`).join('');
}
function renderChapters(filter='all') {
  const visible = chapters.filter(chapter => filter === 'all' || chapter.category === filter);
  $('#chapters').innerHTML = visible.map(({number,key,duration,category}) => `<button class="chapter" data-chapter-key="${key}" data-video-category="${category}" aria-label="Seleccionar ${safe(media[key].title)}"><span class="chapter-image"><img src="${media[key].src}" alt="${safe(media[key].alt || media[key].title)}">${mediaBadge(key)}</span><b>${number}</b><h3>${safe(media[key].title)}</h3><small>${duration}</small></button>`).join('');
}
function setVideoFilter(filter) {
  const selectedFilter = Object.prototype.hasOwnProperty.call(videoFilterDetails, filter) ? filter : 'all';
  const details = videoFilterDetails[selectedFilter];
  const item = media[details.key];
  renderChapters(selectedFilter);
  $('#video-filter-description').textContent = details.description;
  $('#chapters').setAttribute('aria-labelledby', `video-tab-${selectedFilter}`);
  $('#chapters').setAttribute('aria-labelledby', `video-tab-${selectedFilter}`);
  $('#video-stage').setAttribute('aria-label', `Vista previa: ${item.title}`);
  $('#video-poster').src = item.src;
  $('#video-poster').alt = item.alt || item.title;
  $('#video-chapter-name').textContent = item.title.toLocaleUpperCase('es');
  const video = $('#project-video');
  video.poster = item.src;
  if (video.src) video.currentTime = 0;
}
function setProjectVideoSource(source) {
  const video = $('#project-video');
  const placeholder = $('#video-placeholder');
  video.pause();
  if (activeLocalVideoUrl && source !== activeLocalVideoUrl) {
    URL.revokeObjectURL(activeLocalVideoUrl);
    activeLocalVideoUrl = '';
  }
  if (!source) {
    video.removeAttribute('src');
    video.load();
    video.hidden = true;
    placeholder.hidden = false;
    if (activeLocalVideoUrl) URL.revokeObjectURL(activeLocalVideoUrl);
    activeLocalVideoUrl = '';
    return;
  }
  video.src = source;
  video.hidden = false;
  placeholder.hidden = true;
  video.load();
}
function renderTimeline() {
  $('#process-timeline').innerHTML = timeline.map(([number,key,title,description]) => `<button class="timeline-card" data-media-key="${key}" aria-label="Abrir etapa ${number}: ${safe(title)}"><span class="timeline-image"><img src="${media[key].src}" alt="${safe(media[key].alt || title)}">${mediaBadge(key)}</span><span class="stage-number">${number}</span><h3>${safe(title)}</h3><p>${safe(description)}</p></button>`).join('');
}
function syncStaticMedia() {
  $$('[data-media-key]').forEach(node => {
    const item = media[node.dataset.mediaKey];
    const image = $('img', node);
    if (!item || !image) return;
    image.src = item.src;
    image.alt = item.alt || item.title;
    let badge = $('.media-index', node);
    if (!badge) { badge = document.createElement('span'); badge.className = 'media-index'; node.append(badge); }
    badge.textContent = `FOTO ${item.number || '—'}`;
  });
}
function renderAll() { renderRoute(); renderMaqueta(); renderPlans(selectedPlanFilter); renderThumbs('render-exterior', exteriorItems); renderThumbs('render-interior', interiorItems); renderChapters(); renderTimeline(); syncStaticMedia(); setRenderFilter(selectedRenderFilter, false); }

/* Editor rápido: guarda una prueba local. Para cambios permanentes usa contenido.js. */
const editorStorageKey = 'colegio-marino-portfolio-draft-v1';
const editableTexts = [
  {id:'home-lead', label:'Inicio — descripción principal', selector:'#inicio .lead'},
  {id:'route-title', label:'Inicio — título de etapas', selector:'#route-title'},
  {id:'maqueta-lead', label:'Maqueta — descripción', selector:'#maqueta .lead'},
  {id:'planos-lead', label:'Planos — descripción', selector:'#planos .lead'},
  {id:'render-lead', label:'Renderizado — descripción', selector:'#renderizado .lead'},
  {id:'video-lead', label:'Video 3D — descripción', selector:'#video .lead'},
  {id:'process-lead', label:'Proceso — descripción', selector:'#proceso .lead'}
];
let editorDraft = {media:{}, texts:{}, video:{src:''}};

function readEditorDraft() {
  try { editorDraft = JSON.parse(localStorage.getItem(editorStorageKey)) || {media:{}, texts:{}, video:{src:''}}; } catch { editorDraft = {media:{}, texts:{}, video:{src:''}}; }
  Object.entries(editorDraft.media || {}).forEach(([key, value]) => { if (media[key]) Object.assign(media[key], value); });
  Object.entries(editorDraft.texts || {}).forEach(([id, value]) => {
    const target = editableTexts.find(item => item.id === id);
    const node = target && $(target.selector);
    if (node) node.textContent = value;
  });
}
function saveEditorDraft() { localStorage.setItem(editorStorageKey, JSON.stringify(editorDraft)); }
function setEditorPane(tab) {
  $$('[data-editor-tab]').forEach(button => { const active = button.dataset.editorTab === tab; button.classList.toggle('is-active', active); button.setAttribute('aria-selected', String(active)); });
  $$('[data-editor-pane]').forEach(pane => { const active = pane.dataset.editorPane === tab; pane.classList.toggle('is-active', active); pane.hidden = !active; });
}
function fillMediaEditor(key) {
  const item = media[key];
  if (!item) return;
  $('#editor-media-title').value = item.title || '';
  $('#editor-media-description').value = item.description || '';
  $('#editor-media-source').value = item.src || '';
  $('#editor-media-preview').src = item.src;
  $('#editor-media-preview').alt = item.alt || item.title || '';
  $('#editor-media-preview-title').textContent = `FOTO ${item.number || '—'} · ${item.title || ''}`;
  $('#editor-media-section').textContent = mediaSectionForKey(key);
}
function mediaSectionForKey(key) {
  const sections = [
    ['home-', 'Inicio'],
    ['maqueta-', 'Maqueta'],
    ['planos-', 'Planos'],
    ['render-', 'Renderizado'],
    ['video-', 'Video 3D'],
    ['process-', 'Proceso']
  ];
  return sections.find(([prefix]) => key.startsWith(prefix))?.[1] || 'Otros';
}
function fillTextEditor(id) {
  const target = editableTexts.find(item => item.id === id);
  const inlineTarget = inlineTextTargets.get(id);
  const node = inlineTarget?.node || (target && $(target.selector));
  $('#editor-text-value').value = node?.textContent?.trim() || '';
}
function elementSelectorPath(element) {
  const parts = [];
  let current = element;
  while (current && current !== document.body) {
    if (current.id) { parts.push(`#${CSS.escape(current.id)}`); break; }
    const siblings = [...current.parentElement.children].filter(item => item.tagName === current.tagName);
    parts.push(`${current.tagName.toLowerCase()}:nth-of-type(${siblings.indexOf(current) + 1})`);
    current = current.parentElement;
  }
  return `body > ${parts.reverse().join(' > ')}`;
}
function textSectionLabel(element) {
  const page = element.closest('.page');
  if (page) return ({inicio:'Inicio',maqueta:'Maqueta',planos:'Planos',renderizado:'Renderizado',video:'Video 3D',proceso:'Proceso'})[page.id] || 'Portafolio';
  if (element.closest('.site-header')) return 'Navegación';
  if (element.closest('.technical-footer')) return 'Pie de página';
  return 'Portafolio';
}
function populateTextEditorOptions(textSelect, selectedValue='') {
  textSelect.replaceChildren();
  const fixedGroups = new Map();
  editableTexts.forEach(item => {
    const section = item.label.split(' — ')[0];
    if (!fixedGroups.has(section)) {
      const group = document.createElement('optgroup');
      group.label = section;
      textSelect.append(group);
      fixedGroups.set(section, group);
    }
    fixedGroups.get(section).append(new Option(item.label.split(' — ')[1] || item.label, item.id));
  });
  const inlineGroups = new Map();
  inlineTextTargets.forEach((item, id) => {
    if (!inlineGroups.has(item.section)) {
      const group = document.createElement('optgroup');
      group.label = item.section;
      textSelect.append(group);
      inlineGroups.set(item.section, group);
    }
    const option = new Option(item.label, id);
    inlineGroups.get(item.section).append(option);
  });
  if (selectedValue && textSelect.querySelector(`option[value="${CSS.escape(selectedValue)}"]`)) textSelect.value = selectedValue;
}
function refreshInlineTextTargets() {
  const excluded = '.content-editor, .intro-loader, #media-modal, #toast, [data-media-key], [data-chapter-key], .route-card, .chapter, .timeline-card, .gallery-card, .render-thumb, .plan-item';
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
        if (!parent || !node.textContent.trim() || parent.closest(excluded)) return NodeFilter.FILTER_REJECT;
      if (parent.closest('script, style, svg, noscript, textarea, input, select, option')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const pending = [];
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const parent = node.parentElement;
    const wrapper = parent.closest('[data-inline-text-id]');
    if (wrapper) {
      pending.push({node, wrapper, id:wrapper.dataset.inlineTextId, text:editorDraft.texts[wrapper.dataset.inlineTextId] ?? node.textContent, section:textSectionLabel(wrapper)});
      continue;
    }
    const textIndex = [...parent.childNodes].filter(child => child.nodeType === Node.TEXT_NODE).indexOf(node);
    const id = `site-text:${elementSelectorPath(parent)}::${textIndex}`;
    pending.push({node, parent, id, text:editorDraft.texts[id] ?? node.textContent, section:textSectionLabel(parent)});
  }
  inlineTextTargets = new Map();
  pending.forEach(item => {
    const wrapper = item.wrapper || document.createElement('span');
    if (!item.wrapper) {
      wrapper.dataset.inlineTextId = item.id;
      wrapper.textContent = item.text;
      item.node.replaceWith(wrapper);
    } else if (item.wrapper.textContent !== item.text) wrapper.textContent = item.text;
    inlineTextTargets.set(item.id, {node:wrapper, section:item.section, label:item.text.trim().replace(/\s+/g,' ').slice(0,72) || 'Texto'});
  });
  const select = $('#editor-text-target');
  if (select) {
    const selectedValue = select.value;
    populateTextEditorOptions(select, selectedValue);
  }
}
const editorAccessStorageKey = 'colegio-marino-editor-access';
const editorPasswordHash = 'f81856844cc075f48b9d80a23e05027d064eb2cc298e240b9c7dc5ad0fe01751';
function openContentEditor() {
  $('#content-editor').classList.add('is-open');
  $('#content-editor').setAttribute('aria-hidden', 'false');
  $('#editor-trigger').setAttribute('aria-expanded', 'true');
}
async function hashEditorPassword(value) {
  const bytes = new TextEncoder().encode(value);
  const hash = await crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(hash)].map(byte => byte.toString(16).padStart(2, '0')).join('');
}
function showEditorPasswordPrompt() {
  if ($('#editor-access')) return;
  const access = document.createElement('section');
  access.className = 'editor-access'; access.id = 'editor-access'; access.setAttribute('role', 'dialog'); access.setAttribute('aria-modal', 'true'); access.setAttribute('aria-labelledby', 'editor-access-title');
  access.innerHTML = `<div class="editor-access__backdrop"></div><form class="editor-access__card"><p class="eyebrow">ÁREA DE EDICIÓN</p><h2 id="editor-access-title">Acceso protegido</h2><p>Ingresa la clave para cambiar textos o cargar una vista previa de las fotografías.</p><label>Contraseña<input id="editor-password" type="password" inputmode="numeric" autocomplete="current-password" required></label><p class="editor-access__error" id="editor-access-error" role="alert"></p><div><button type="button" data-cancel-editor>Cancelar</button><button type="submit">Entrar al editor</button></div></form>`;
  document.body.append(access); $('#editor-password').focus();
  $('[data-cancel-editor]', access).addEventListener('click', () => access.remove());
  $('.editor-access__backdrop', access).addEventListener('click', () => access.remove());
  $('form', access).addEventListener('submit', async event => {
    event.preventDefault();
    const submit = $('button[type="submit"]', access); submit.disabled = true;
    try {
      const matches = await hashEditorPassword($('#editor-password', access).value);
      if (matches !== editorPasswordHash) { $('#editor-access-error', access).textContent = 'La contraseña no es correcta.'; submit.disabled = false; return; }
      sessionStorage.setItem(editorAccessStorageKey, 'granted'); access.remove(); openContentEditor();
    } catch { $('#editor-access-error', access).textContent = 'No se pudo comprobar la contraseña en este navegador.'; submit.disabled = false; }
  });
}
function requestEditorAccess() {
  if (sessionStorage.getItem(editorAccessStorageKey) === 'granted') openContentEditor();
  else showEditorPasswordPrompt();
}
function initializeEditor() {
  const textSelect = $('#editor-text-target');
  const mediaSelect = $('#editor-media-target');
  $('#project-video').addEventListener('error', () => showToast('No se pudo cargar el video. Revisa la ruta, el archivo y su formato.'));
  populateTextEditorOptions(textSelect);
  const mediaGroups = new Map();
  Object.entries(media).sort(([,a],[,b]) => String(a.number).localeCompare(String(b.number), 'es', {numeric:true})).forEach(([key, item]) => {
    const section = mediaSectionForKey(key);
    if (!mediaGroups.has(section)) {
      const group = document.createElement('optgroup');
      group.label = section;
      mediaSelect.append(group);
      mediaGroups.set(section, group);
    }
    mediaGroups.get(section).append(new Option(`FOTO ${item.number || '—'} — ${item.title}`, key));
  });
  fillTextEditor(textSelect.value);
  fillMediaEditor(mediaSelect.value);
  $('#editor-video-source').value = editorDraft.video?.src || '';
  setProjectVideoSource(editorDraft.video?.src || '');
  $('#editor-video-source').addEventListener('input', () => { selectedVideoFile = null; });
  $('#editor-trigger').addEventListener('click', requestEditorAccess);
  $$('[data-close-editor]').forEach(button => button.addEventListener('click', () => { $('#content-editor').classList.remove('is-open'); $('#content-editor').setAttribute('aria-hidden', 'true'); $('#editor-trigger').setAttribute('aria-expanded', 'false'); }));
  $$('[data-editor-tab]').forEach(button => button.addEventListener('click', () => setEditorPane(button.dataset.editorTab)));
  textSelect.addEventListener('change', () => fillTextEditor(textSelect.value));
  mediaSelect.addEventListener('change', () => fillMediaEditor(mediaSelect.value));
  $('#save-video-change').addEventListener('click', () => {
    const path = $('#editor-video-source').value.trim();
    const source = selectedVideoFile || path;
    if (!source) { setProjectVideoSource(''); editorDraft.video = {src:''}; saveEditorDraft(); showToast('Selecciona un video o escribe la ruta del archivo.'); return; }
    setProjectVideoSource(source);
    editorDraft.video = {src:source.startsWith('blob:') ? path : source};
    saveEditorDraft();
    selectedVideoFile = null;
    $('#editor-video-file').value = '';
    showToast(source.startsWith('blob:') ? 'Video de tu equipo listo para probar en esta sesión' : 'Video del recorrido actualizado');
  });
  $('#editor-video-file').addEventListener('change', event => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('video/')) { showToast('Selecciona un archivo de video válido.'); event.target.value = ''; return; }
    if (activeLocalVideoUrl) URL.revokeObjectURL(activeLocalVideoUrl);
    activeLocalVideoUrl = URL.createObjectURL(file);
    selectedVideoFile = activeLocalVideoUrl;
    $('#editor-video-source').value = '';
    setProjectVideoSource(activeLocalVideoUrl);
    showToast('Video cargado: pulsa reproducir en el reproductor.');
  });
  $('#save-text-change').addEventListener('click', () => {
    const target = editableTexts.find(item => item.id === textSelect.value);
    const value = $('#editor-text-value').value.trim();
    const inlineTarget = inlineTextTargets.get(textSelect.value);
    if (!value || (!target && !inlineTarget)) return;
    if (inlineTarget) inlineTarget.node.textContent = value;
    else $(target.selector).textContent = value;
    editorDraft.texts[textSelect.value] = value;
    const option = textSelect.selectedOptions[0];
    if (option) option.textContent = inlineTarget ? `${inlineTarget.section} — ${value.slice(0,72)}` : target.label;
    saveEditorDraft(); showToast('Texto aplicado en este navegador');
  });
  $('#save-media-change').addEventListener('click', () => {
    const key = mediaSelect.value;
    const item = media[key];
    if (!item) return;
    Object.assign(item, {title:$('#editor-media-title').value.trim() || item.title, description:$('#editor-media-description').value.trim() || item.description, src:$('#editor-media-source').value.trim() || item.src});
    editorDraft.media[key] = {...item}; saveEditorDraft(); renderAll(); refreshInlineTextTargets(); fillMediaEditor(key); showToast(`FOTO ${item.number} actualizada en este navegador`);
  });
  $('#editor-media-file').addEventListener('change', event => {
    const file = event.target.files?.[0]; if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    $('#editor-media-source').value = previewUrl;
    $('#editor-media-preview').src = previewUrl;
    $('#editor-media-preview-title').textContent = `Vista previa · ${file.name}`;
    showToast('Vista previa lista. Guarda la foto en assets/references y escribe su ruta para conservarla.');
  });
  $('#reset-content').addEventListener('click', () => { localStorage.removeItem(editorStorageKey); window.location.reload(); });
}

function switchPage(view) {
  const page = document.getElementById(view);
  if (!page) return;
  $$('.page').forEach(item => item.classList.toggle('is-active', item === page));
  $$('.nav-link').forEach(item => item.classList.toggle('is-active', item.dataset.view === view));
  document.body.className = `view-${view}`;
  $('#technical-footer').classList.toggle('is-dark', view === 'inicio');
  const [title, code, contains] = footerData[view] || footerData.inicio;
  $('#footer-project').textContent = title;
  $('#footer-code').textContent = code;
  $('#footer-contains').innerHTML = contains;
  document.title = `${title} | Colegio Marino Gómez Estrada`;
  $('#main-nav').classList.remove('is-open');
  $('#menu-toggle').setAttribute('aria-expanded','false');
  window.scrollTo({top:0,behavior:'smooth'});
}

function setActiveTab(button) {
  const container = button.closest('.section-tabs');
  $$('button', container).forEach(item => {
    const active = item === button;
    item.classList.toggle('is-active', active);
    if (item.getAttribute('role') === 'tab') {
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
    }
  });
}
function setRenderFilter(filter, notify=true) {
  selectedRenderFilter = Object.prototype.hasOwnProperty.call(renderViewDetails, filter) ? filter : 'exterior';
  const details = renderViewDetails[selectedRenderFilter];
  const item = media[details.key];
  const feature = $('#render-feature');
  feature.dataset.mediaKey = details.key;
  feature.setAttribute('aria-labelledby', `render-tab-${selectedRenderFilter}`);
  feature.setAttribute('aria-label', `Abrir ${item.title}`);
  $('img', feature).src = item.src;
  $('img', feature).alt = item.alt || item.title;
  $('.panel-title', feature).innerHTML = `<b>${safe(item.number || '01')}</b> ${safe(item.title).toLocaleUpperCase('es')}`;
  const hero = $('.page-renderizado .internal-media');
  hero.dataset.mediaKey = details.key;
  $('img', hero).src = item.src;
  $('img', hero).alt = item.alt || item.title;
  $('#render-view-label').textContent = details.label;
  $('#render-view-title').textContent = details.title;
  $('#render-view-description').textContent = details.description;
  const exterior = $('#render-exterior').closest('.render-panel');
  const interior = $('#render-interior').closest('.render-panel');
  exterior.style.display = selectedRenderFilter === 'interior' ? 'none' : 'block';
  interior.style.display = selectedRenderFilter === 'exterior' || selectedRenderFilter === 'zonas' ? 'none' : 'block';
  if (notify) showToast(selectedRenderFilter === 'galeria' ? 'Mostrando todas las visualizaciones' : `Vista ${details.label.toLocaleLowerCase('es')} seleccionada`);
}

function mediaKeysFromPage() {
  const active = $('.page.is-active');
  const keys = $$('[data-media-key]', active).map(item => item.dataset.mediaKey).filter(Boolean);
  return [...new Set(keys)];
}
function openModal(key) {
  if (!media[key]) return;
  currentModalKeys = mediaKeysFromPage();
  if (!currentModalKeys.includes(key)) currentModalKeys.push(key);
  currentModalIndex = Math.max(0,currentModalKeys.indexOf(key));
  const item = media[key];
  $('#modal-image').src = item.src;
  $('#modal-image').alt = item.title;
  $('#modal-title').textContent = item.title;
  $('#modal-description').textContent = item.description;
  resetZoom();
  const modal = $('#media-modal');
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden','false');
  $('.modal-close').focus();
}
function closeModal() { const modal=$('#media-modal'); modal.classList.remove('is-open'); modal.setAttribute('aria-hidden','true'); }
function showModalAt(offset) { if (!currentModalKeys.length) return; currentModalIndex=(currentModalIndex+offset+currentModalKeys.length)%currentModalKeys.length; openModal(currentModalKeys[currentModalIndex]); }
function resetZoom() { zoomLevel=1; $('#modal-image').style.transform='scale(1)'; }
function adjustZoom(amount) { zoomLevel=Math.min(3,Math.max(.75,zoomLevel+amount)); $('#modal-image').style.transform=`scale(${zoomLevel})`; }
function showToast(message) { const toast=$('#toast'); toast.textContent=message; toast.classList.add('is-visible'); clearTimeout(showToast.timer); showToast.timer=setTimeout(()=>toast.classList.remove('is-visible'),2200); }

function updateRenderFeature(direction=1) {
  const sets = {
    exterior:['render-feature','render-exterior-1','render-exterior-2'],
    interior:['render-interior-1','render-interior-2'],
    zonas:['render-exterior-1','render-exterior-2'],
    galeria:['render-interior-2','render-hero','render-feature','render-interior-1']
  };
  const set = sets[selectedRenderFilter];
  renderIndex=(renderIndex+direction+set.length)%set.length;
  const key=set[renderIndex]; const item=media[key];
  const button=$('#render-feature');
  button.dataset.mediaKey=key;
  button.setAttribute('aria-label', `Abrir ${item.title}`);
  $('img',button).src=item.src;
  $('img',button).alt=item.alt || item.title;
  $('.panel-title',button).innerHTML=`<b>${safe(item.number || '01')}</b> ${safe(item.title).toLocaleUpperCase('es')}`;
  $('#render-view-title').textContent=item.title;
  $('#render-view-description').textContent=item.description;
}
function selectChapter(key) {
  const item=media[key];
  $('#video-poster').src=item.src;
  $('#video-poster').alt=item.title;
  $('#video-chapter-name').textContent=item.title.toUpperCase();
  $('#project-video').poster=item.src;
  $('#video-stage').setAttribute('aria-label', `Vista previa: ${item.title}`);
  $$('.chapter').forEach(itemNode=>itemNode.classList.toggle('is-selected',itemNode.dataset.chapterKey===key));
  const video=$('#project-video');
  if(video.src){video.pause();video.currentTime=0;}
  showToast(`Capítulo seleccionado: ${item.title}`);
}

function search(value) {
  const query=value.trim().toLocaleLowerCase('es'); const results=$('#search-results');
  if (!query) {results.classList.remove('is-open');results.innerHTML='';return;}
  const dataset=[...routeItems.map(([,,title,description])=>({type:'Sección',title,description,view:routeItems.find(x=>x[2]===title)[1]})),...Object.entries(media).map(([key,item])=>({type:'Visual',title:item.title,description:item.description,key}))];
  const matches=dataset.filter(item=>`${item.title} ${item.description} ${item.type}`.toLocaleLowerCase('es').includes(query)).slice(0,6);
  results.innerHTML=matches.length?matches.map(item=>`<button data-search-view="${item.view||''}" data-search-media="${item.key||''}"><b>${item.type}</b>${safe(item.title)}</button>`).join(''):'<button disabled>No se encontraron coincidencias.</button>';
  results.classList.add('is-open');
}

const introLoader = $('#intro-loader');
if (introLoader) {
  const introTime = $('#intro-time');
  const startedAt = performance.now();
  const introClock = window.setInterval(() => {
    const elapsed = Math.min(10, Math.floor((performance.now() - startedAt) / 1000));
    introTime.textContent = `00:${String(elapsed).padStart(2, '0')} / 00:10`;
  }, 250);
  window.setTimeout(() => {
    window.clearInterval(introClock);
    introTime.textContent = '00:10 / 00:10';
    introLoader.classList.add('is-leaving');
    window.setTimeout(() => introLoader.remove(), 700);
  }, 10000);
}

readEditorDraft();
renderAll();
refreshInlineTextTargets();
initializeEditor();
document.addEventListener('click', event => {
  if (event.target.closest('[data-inline-text-id]')) return;
  const view=event.target.closest('[data-view]'); if (view) { switchPage(view.dataset.view); return; }
  const carousel=event.target.closest('[data-render-direction]');if(carousel){event.stopPropagation();updateRenderFeature(carousel.dataset.renderDirection==='next'?1:-1);return;}
  const mediaButton=event.target.closest('[data-media-key]'); if (mediaButton) { openModal(mediaButton.dataset.mediaKey); return; }
  const tab=event.target.closest('[data-tab-group]'); if (tab) { setActiveTab(tab); const group=tab.dataset.tabGroup; const filter=tab.dataset.filter; if(group==='maqueta')renderMaqueta(filter);if(group==='planos')renderPlans(filter);if(group==='render')setRenderFilter(filter); return; }
  const videoFilter=event.target.closest('[data-video-filter]'); if(videoFilter){ setActiveTab(videoFilter);setVideoFilter(videoFilter.dataset.videoFilter);return; }
  const chapter=event.target.closest('[data-chapter-key]'); if(chapter){selectChapter(chapter.dataset.chapterKey);return;}
  if(event.target.closest('[data-close-modal]')){closeModal();return;}
  const searchResult=event.target.closest('[data-search-view],[data-search-media]');if(searchResult){const viewId=searchResult.dataset.searchView;if(viewId)switchPage(viewId);const key=searchResult.dataset.searchMedia;if(key)setTimeout(()=>openModal(key),350);$('#site-search').value='';$('#search-results').classList.remove('is-open');}
});
$$('[role="tablist"]').forEach(tablist => tablist.addEventListener('keydown', event => {
  const tab = event.target.closest('[role="tab"]');
  if (!tab || !['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
  event.preventDefault();
  const tabs = $$('[role="tab"]', tablist);
  const index = tabs.indexOf(tab);
  const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
  tabs[nextIndex].focus();
  tabs[nextIndex].click();
}));
$('#menu-toggle').addEventListener('click',()=>{const nav=$('#main-nav');nav.classList.toggle('is-open');$('#menu-toggle').setAttribute('aria-expanded',String(nav.classList.contains('is-open')))});
$('#site-search').addEventListener('input',event=>search(event.target.value));
$('#site-search').addEventListener('keydown',event=>{if(event.key==='Escape'){event.target.value='';search('')}});
$('#modal-zoom-in').addEventListener('click',()=>adjustZoom(.2));$('#modal-zoom-out').addEventListener('click',()=>adjustZoom(-.2));$('#modal-previous').addEventListener('click',()=>showModalAt(-1));$('#modal-next').addEventListener('click',()=>showModalAt(1));
$('#modal-image-wrap').addEventListener('wheel',event=>{event.preventDefault();adjustZoom(event.deltaY>0?-.1:.1)},{passive:false});
document.addEventListener('keydown',event=>{const isModal=$('#media-modal').classList.contains('is-open');if(event.key==='Escape'){if(isModal)closeModal();else{ $('#main-nav').classList.remove('is-open');$('#menu-toggle').setAttribute('aria-expanded','false'); }}if(isModal&&event.key==='ArrowLeft')showModalAt(-1);if(isModal&&event.key==='ArrowRight')showModalAt(1);if(isModal&&event.key==='+')adjustZoom(.2);if(isModal&&event.key==='-')adjustZoom(-.2);});
