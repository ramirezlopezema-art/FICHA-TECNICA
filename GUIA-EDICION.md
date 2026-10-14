# Guía de edición del portafolio

La web funciona con archivos estáticos: abre `index.html` en un navegador o súbela al tema de Drupal.

## Cambiar fotos, títulos y descripciones

Edita [contenido.js](contenido.js). Cada objeto tiene un número visible en la página, por ejemplo `FOTO 08`.

1. Guarda tu fotografía dentro de `assets/references/`.
2. Busca en `contenido.js` el objeto que tenga ese mismo `number`.
3. Cambia `src` por la ruta de tu archivo, por ejemplo:

```js
'render-exterior-1': {
  number: '08',
  src: 'assets/references/foto-08-patio.jpg',
  title: 'Patio central',
  alt: 'Fotografía del patio central del colegio',
  description: 'Explica aquí lo que se ve en la fotografía.'
}
```

`title` aparece en la galería, `alt` describe la imagen para accesibilidad y `description` se muestra al abrirla.

## Editar desde la página

El botón **Editar** abre un panel de prueba. Allí puedes cambiar textos e imágenes mientras revisas el diseño. Esos cambios se guardan solo en ese navegador. Para que sean permanentes, copia los mismos datos en `contenido.js`.

## Qué modifica cada archivo

- `index.html`: estructura de las secciones, el pie técnico y los dos emblemas.
- `contenido.js`: índice numerado de fotos, títulos, textos alternativos y descripciones. Es el archivo principal para cambiar contenido.
- `script.js`: navegación, filtros, visor de imágenes, búsqueda y editor rápido. No hace falta modificarlo para cambiar fotos.
- `portfolio.css`: diseño base de la página.
- `polish.css`: lectura tipográfica, etiquetas `FOTO 01`, adaptación a móvil y panel de edición.
- `assets/branding/escudo-colegio.jfif`: emblema del colegio.
- `assets/branding/sena.svg`: emblema gráfico del SENA que se muestra en el pie.

## Tamaño recomendado de las fotos

Usa JPG o WebP horizontales de al menos **1600 × 1000 px**. Comprime las fotos antes de subirlas: así la web mantiene buena calidad sin volverse lenta en móvil.

## Integración en Drupal

Copia estos archivos a un tema personalizado y adjunta `portfolio.css`, `polish.css`, `contenido.js` y `script.js` como librería del tema. Mantén las rutas de `assets/` dentro de la misma carpeta del tema.
