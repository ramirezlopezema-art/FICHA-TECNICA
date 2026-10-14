# Portafolio arquitectónico — Colegio Marino Gómez Estrada

Sitio estático en HTML, CSS y JavaScript para presentar el proyecto académico de Emanuel Ramírez López. Abre `index.html` en un navegador; no requiere instalación.

## Cambiar textos e imágenes

Usa el botón **Editar** dentro del sitio. En **Textos** y **Imágenes**, los elementos están agrupados por sección: Inicio, Maqueta, Planos, Renderizado, Video 3D y Proceso. Las fotos que se cargan desde el equipo sirven como vista previa en ese navegador.

Para conservar una imagen en el proyecto, guárdala en `assets/references/` y selecciona su ruta en el editor o actualiza la propiedad `src` del elemento correspondiente en `contenido.js`.

Las vistas de planos tienen archivos independientes para evitar reutilizar la misma foto:

```text
assets/references/
├── planos-feature.jpg
├── planos-cortes.jpg
├── planos-fachadas.jpg
└── planos-detalles.jpg
```

El video real del recorrido se guarda en `assets/video/recorrido-3d.mp4`. La carpeta incluye instrucciones. Abre **Editar → Video** para cargarlo desde esa ruta o probar otro archivo desde el equipo.

Las fotografías de las demás secciones también se configuran en `contenido.js`. Sus nombres aparecen en el editor junto con el título y el número de foto.
