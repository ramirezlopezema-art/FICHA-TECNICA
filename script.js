/* Portafolio arquitectónico — contenido centralizado para ampliar galerías sin rediseñar. */
const asset = (name) => `assets/references/${name}`;
const media = {
  'home-hero': {src:asset('home-hero.jpg'), title:'Vista general del proyecto', description:'Maqueta física del Colegio Marino Gómez Estrada. Esta vista reúne los accesos, patios, aulas y espacios exteriores.'},
  'maqueta-hero': {src:asset('maqueta-hero.jpg'), title:'Maqueta — vista principal', description:'Modelo físico del proyecto con lectura integral de volúmenes, circulaciones y zonas verdes.'},
  'maqueta-detail': {src:asset('maqueta-detail.jpg'), title:'Maqueta — vista isométrica', description:'Vista elevada para estudiar la distribución espacial y las relaciones entre los ambientes.'},
  'planos-hero': {src:asset('planos-hero.jpg'), title:'Planos arquitectónicos', description:'Documentación técnica que presenta la distribución y el sistema espacial de la propuesta.'},
  'planos-feature': {src:asset('planos-feature.jpg'), title:'Planta arquitectónica general', description:'Lámina de referencia para examinar la organización general del proyecto.'},
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
  {key:'maqueta-detail', tags:['general','isometricas','galeria']},
  {key:'maqueta-hero', tags:['general','galeria']},
  {key:'home-hero', tags:['general','isometricas','galeria']},
  {key:'render-feature', tags:['detalles','galeria']},
  {key:'render-exterior-2', tags:['detalles','galeria']}
];

const planItems = [
  {number:'02', key:'planos-feature', title:'Cortes arquitectónicos', description:'Secciones que muestran la relación vertical entre niveles.', tags:['planta','cortes']},
  {number:'03', key:'render-feature', title:'Fachadas', description:'Vistas exteriores con acabados y proporciones generales.', tags:['fachadas']},
  {number:'04', key:'planos-hero', title:'Detalles arquitectónicos', description:'Elementos constructivos y uniones significativas del diseño.', tags:['detalles','planta']}
];

const exteriorItems = ['render-exterior-1','render-exterior-2','render-feature','render-hero'];
const interiorItems = ['render-interior-1','render-interior-2','video-chapter-3','maqueta-detail'];
const chapters = [
  {number:'01', key:'video-chapter-1', duration:'00:20', category:'entorno'},
  {number:'02', key:'video-chapter-2', duration:'00:35', category:'exterior'},
  {number:'03', key:'video-chapter-3', duration:'00:45', category:'interior'},
  {number:'04', key:'video-chapter-4', duration:'00:25', category:'exterior'}
];
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
let videoTimer = null;
let videoSeconds = 0;
let renderIndex = 0;

function renderRoute() {
  $('#route-cards').innerHTML = routeItems.map(([number, view, title, description, key]) => `<button class="route-card" data-view="${view}"><span class="route-image"><img src="${media[key].src}" alt="${safe(media[key].alt || media[key].title)}"><i class="route-number">${number}</i>${mediaBadge(key)}</span><span class="route-copy"><b>${safe(title)}</b><p>${safe(description)}</p></span></button>`).join('');
}
function cardMarkup(item, className='gallery-card') {
  const content = media[item.key];
  return `<button class="${className}" data-media-key="${item.key}" aria-label="Abrir ${safe(content.title)}"><img src="${content.src}" alt="${safe(content.alt || content.title)}">${mediaBadge(item.key)}<span>${safe(content.title)} ↗</span></button>`;
}
function renderMaqueta(filter='general') {
  const visible = maquetaItems.filter(item => filter === 'galeria' || item.tags.includes(filter));
  $('#maqueta-gallery').innerHTML = visible.map(item => cardMarkup(item)).join('');
}
function renderPlans(filter='planta') {
  const visible = planItems.filter(item => filter === 'planta' || item.tags.includes(filter));
  $('#plans-gallery').innerHTML = visible.map(item => `<button class="plan-item" data-media-key="${item.key}" aria-label="Abrir ${safe(item.title)}"><span class="image-slot"><img src="${media[item.key].src}" alt="${safe(media[item.key].alt || item.title)}">${mediaBadge(item.key)}</span><span><b>${item.number} · ${safe(item.title)}</b><span>${safe(item.description)}</span></span></button>`).join('');
}
function renderThumbs(id, keys) {
  $(`#${id}`).innerHTML = keys.map(key => `<button class="render-thumb" data-media-key="${key}" aria-label="Abrir ${safe(media[key].title)}"><img src="${media[key].src}" alt="${safe(media[key].alt || media[key].title)}">${mediaBadge(key)}<span>${safe(media[key].title)}</span></button>`).join('');
}
function renderChapters(filter='all') {
  const visible = chapters.filter(chapter => filter === 'all' || chapter.category === filter);
  $('#chapters').innerHTML = visible.map(({number,key,duration,category}) => `<button class="chapter" data-chapter-key="${key}" data-video-category="${category}" aria-label="Seleccionar ${safe(media[key].title)}"><span class="chapter-image"><img src="${media[key].src}" alt="${safe(media[key].alt || media[key].title)}">${mediaBadge(key)}</span><b>${number}</b><h3>${safe(media[key].title)}</h3><small>${duration}</small></button>`).join('');
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
function syncVideoBadge(key='video-hero') {
  const stage = $('#video-stage');
  if (stage && media[key]) stage.dataset.photoNumber = media[key].number || '—';
}
function renderAll() { renderRoute(); renderMaqueta(); renderPlans(); renderThumbs('render-exterior', exteriorItems); renderThumbs('render-interior', interiorItems); renderChapters(); renderTimeline(); syncStaticMedia(); syncVideoBadge(); }

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
let editorDraft = {media:{}, texts:{}};

function readEditorDraft() {
  try { editorDraft = JSON.parse(localStorage.getItem(editorStorageKey)) || editorDraft; } catch { editorDraft = {media:{}, texts:{}}; }
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
  $('#editor-media-title').value = item.title || '';
  $('#editor-media-description').value = item.description || '';
  $('#editor-media-source').value = item.src || '';
}
function fillTextEditor(id) {
  const target = editableTexts.find(item => item.id === id);
  const node = target && $(target.selector);
  $('#editor-text-value').value = node?.textContent?.trim() || '';
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
  editableTexts.forEach(item => textSelect.add(new Option(item.label, item.id)));
  Object.entries(media).sort(([,a],[,b]) => String(a.number).localeCompare(String(b.number))).forEach(([key, item]) => mediaSelect.add(new Option(`FOTO ${item.number || '—'} — ${item.title}`, key)));
  fillTextEditor(textSelect.value);
  fillMediaEditor(mediaSelect.value);
  $('#editor-trigger').addEventListener('click', requestEditorAccess);
  $$('[data-close-editor]').forEach(button => button.addEventListener('click', () => { $('#content-editor').classList.remove('is-open'); $('#content-editor').setAttribute('aria-hidden', 'true'); $('#editor-trigger').setAttribute('aria-expanded', 'false'); }));
  $$('[data-editor-tab]').forEach(button => button.addEventListener('click', () => setEditorPane(button.dataset.editorTab)));
  textSelect.addEventListener('change', () => fillTextEditor(textSelect.value));
  mediaSelect.addEventListener('change', () => fillMediaEditor(mediaSelect.value));
  $('#save-text-change').addEventListener('click', () => {
    const target = editableTexts.find(item => item.id === textSelect.value);
    const value = $('#editor-text-value').value.trim();
    if (!target || !value) return;
    $(target.selector).textContent = value;
    editorDraft.texts[target.id] = value;
    saveEditorDraft(); showToast('Texto aplicado en este navegador');
  });
  $('#save-media-change').addEventListener('click', () => {
    const key = mediaSelect.value;
    const item = media[key];
    if (!item) return;
    Object.assign(item, {title:$('#editor-media-title').value.trim() || item.title, description:$('#editor-media-description').value.trim() || item.description, src:$('#editor-media-source').value.trim() || item.src});
    editorDraft.media[key] = {...item}; saveEditorDraft(); renderAll(); fillMediaEditor(key); showToast(`FOTO ${item.number} actualizada en este navegador`);
  });
  $('#editor-media-file').addEventListener('change', event => {
    const file = event.target.files?.[0]; if (!file) return;
    $('#editor-media-source').value = URL.createObjectURL(file);
    showToast('Vista previa lista. Para conservarla, copia la foto a assets/references y escribe su ruta.');
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
  $$('button', container).forEach(item => item.classList.toggle('is-active', item === button));
}
function setRenderFilter(filter) {
  const exterior = $('#render-exterior').closest('.render-panel');
  const interior = $('#render-interior').closest('.render-panel');
  if (filter === 'interior') { exterior.style.display='none'; interior.style.display='block'; }
  else if (filter === 'exterior' || filter === 'zonas') { exterior.style.display='block'; interior.style.display='none'; }
  else { exterior.style.display='block'; interior.style.display='block'; }
  showToast(filter === 'galeria' ? 'Mostrando todas las visualizaciones' : `Vista ${filter} seleccionada`);
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
  const set = ['render-feature','render-exterior-1','render-exterior-2','render-hero'];
  renderIndex=(renderIndex+direction+set.length)%set.length;
  const key=set[renderIndex]; const item=media[key];
  const button=$('#render-feature');
  button.dataset.mediaKey=key;
  $('img',button).src=item.src;
  $('img',button).alt=item.title;
  $('.panel-title',button).innerHTML=`<b>01</b> ${safe(item.title).toUpperCase()}`;
}
function selectChapter(key) {
  const item=media[key];
  $('#video-poster').src=item.src;
  $('#video-poster').alt=item.title;
  $('#video-chapter-name').textContent=item.title.toUpperCase();
  syncVideoBadge(key);
  $$('.chapter').forEach(itemNode=>itemNode.classList.toggle('is-selected',itemNode.dataset.chapterKey===key));
  videoSeconds=0; updatePlayer(); showToast(`Capítulo seleccionado: ${item.title}`);
}
function updatePlayer() { const total=135; const min=Math.floor(videoSeconds/60).toString().padStart(2,'0'); const sec=Math.floor(videoSeconds%60).toString().padStart(2,'0'); $('#video-time').textContent=`${min}:${sec} / 02:15`; $('#video-progress').style.width=`${(videoSeconds/total)*100}%`; }
function togglePlayer() { const stage=$('#video-stage'); if (videoTimer) { clearInterval(videoTimer); videoTimer=null; stage.classList.remove('is-playing'); showToast('Vista previa en pausa'); return; } stage.classList.add('is-playing'); showToast('Reproduciendo vista previa'); videoTimer=setInterval(()=>{videoSeconds=(videoSeconds+1)%136;updatePlayer()},500); }

function search(value) {
  const query=value.trim().toLocaleLowerCase('es'); const results=$('#search-results');
  if (!query) {results.classList.remove('is-open');results.innerHTML='';return;}
  const dataset=[...routeItems.map(([,,title,description])=>({type:'Sección',title,description,view:routeItems.find(x=>x[2]===title)[1]})),...Object.entries(media).map(([key,item])=>({type:'Visual',title:item.title,description:item.description,key}))];
  const matches=dataset.filter(item=>`${item.title} ${item.description} ${item.type}`.toLocaleLowerCase('es').includes(query)).slice(0,6);
  results.innerHTML=matches.length?matches.map(item=>`<button data-search-view="${item.view||''}" data-search-media="${item.key||''}"><b>${item.type}</b>${safe(item.title)}</button>`).join(''):'<button disabled>No se encontraron coincidencias.</button>';
  results.classList.add('is-open');
}

readEditorDraft();
renderAll();
initializeEditor();
document.addEventListener('click', event => {
  const view=event.target.closest('[data-view]'); if (view) { switchPage(view.dataset.view); return; }
  const carousel=event.target.closest('[data-render-direction]');if(carousel){event.stopPropagation();updateRenderFeature(carousel.dataset.renderDirection==='next'?1:-1);return;}
  const mediaButton=event.target.closest('[data-media-key]'); if (mediaButton) { openModal(mediaButton.dataset.mediaKey); return; }
  const tab=event.target.closest('[data-tab-group]'); if (tab) { setActiveTab(tab); const group=tab.dataset.tabGroup; const filter=tab.dataset.filter; if(group==='maqueta')renderMaqueta(filter);if(group==='planos')renderPlans(filter);if(group==='render')setRenderFilter(filter); return; }
  const videoFilter=event.target.closest('[data-video-filter]'); if(videoFilter){ setActiveTab(videoFilter);renderChapters(videoFilter.dataset.videoFilter);return; }
  const chapter=event.target.closest('[data-chapter-key]'); if(chapter){selectChapter(chapter.dataset.chapterKey);return;}
 if(event.target.closest('#play-control')||event.target.closest('#player-toggle')||event.target.closest('#video-stage')){event.stopPropagation();togglePlayer();return;}
  if(event.target.closest('[data-close-modal]')){closeModal();return;}
  const searchResult=event.target.closest('[data-search-view],[data-search-media]');if(searchResult){const viewId=searchResult.dataset.searchView;if(viewId)switchPage(viewId);const key=searchResult.dataset.searchMedia;if(key)setTimeout(()=>openModal(key),350);$('#site-search').value='';$('#search-results').classList.remove('is-open');}
});
$('#menu-toggle').addEventListener('click',()=>{const nav=$('#main-nav');nav.classList.toggle('is-open');$('#menu-toggle').setAttribute('aria-expanded',String(nav.classList.contains('is-open')))});
$('#site-search').addEventListener('input',event=>search(event.target.value));
$('#site-search').addEventListener('keydown',event=>{if(event.key==='Escape'){event.target.value='';search('')}});
$('#modal-zoom-in').addEventListener('click',()=>adjustZoom(.2));$('#modal-zoom-out').addEventListener('click',()=>adjustZoom(-.2));$('#modal-previous').addEventListener('click',()=>showModalAt(-1));$('#modal-next').addEventListener('click',()=>showModalAt(1));
$('#modal-image-wrap').addEventListener('wheel',event=>{event.preventDefault();adjustZoom(event.deltaY>0?-.1:.1)},{passive:false});
document.addEventListener('keydown',event=>{const isModal=$('#media-modal').classList.contains('is-open');if(event.key==='Escape'){if(isModal)closeModal();else{ $('#main-nav').classList.remove('is-open');$('#menu-toggle').setAttribute('aria-expanded','false'); }}if(isModal&&event.key==='ArrowLeft')showModalAt(-1);if(isModal&&event.key==='ArrowRight')showModalAt(1);if(isModal&&event.key==='+')adjustZoom(.2);if(isModal&&event.key==='-')adjustZoom(-.2);if((event.key==='Enter'||event.key===' ')&&event.target===$('#video-stage')){event.preventDefault();togglePlayer();}});
