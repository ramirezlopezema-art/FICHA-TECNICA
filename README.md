# Portafolio arquitectónico — Colegio Marino Gómez Estrada

Sitio web estático en HTML, CSS y JavaScript para el proyecto de Emanuel Ramírez López.

## Abrir el sitio

Abra `index.html` en un navegador. No requiere instalación ni framework.

## Añadir el material definitivo

Organice los archivos en las carpetas siguientes:

```text
assets/
├── maqueta/       fotografías del modelo físico
├── planos/        plantas, cortes, fachadas y detalles
├── renders/       imágenes de visualización digital
├── proceso/       bocetos y registro de desarrollo
├── galeria/       imágenes adicionales
└── video/         recorrido-3d.mp4
```

Las tarjetas de ejemplo se definen al comienzo de `script.js`, en `portfolioData`. Para cada fotografía agregue una entrada con su nombre; la cuadrícula se adapta automáticamente. Sustituya el degradado de muestra por una URL relativa, por ejemplo:

```js
['Fachada principal', "url('assets/maqueta/fachada-principal.jpg') center / cover"]
```

Para el video real, reemplace la escena de ejemplo por una etiqueta `<video controls>` apuntando a `assets/video/recorrido-3d.mp4`.
