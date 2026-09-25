# thewisework

Codigo de la web de Wise Work, publicada en https://thewisework.com

- Produccion: https://thewisework.com
- Hosting: hoy en Itecsa (no publica desde este repositorio; ver instructivo abajo)
- Dominio: registrado en GoDaddy

## Estructura

```
index.html          Pagina unica, con anclas internas (#problem, #thesis, #what, #how, #contacto)
styles.css           Todos los estilos del sitio, incluidas las fuentes @font-face
script.js             Traduccion EN -> ES dinamica (boton ES/EN en el nav) y carrusel de slides de la propuesta
netlify.toml          Configuracion de publicacion y cabeceras, para cuando el hosting pase a Netlify
assets/images/        Logo, imagen del hero y las 7 slides del carrusel de propuesta
assets/fonts/         Instrument Serif y Space Grotesk en woff2
```

## Como funciona el bilingue

El HTML esta escrito en ingles. El boton "ES/EN" del nav ejecuta un diccionario de
traducciones en `script.js` que reemplaza los textos visibles del DOM sin recargar
la pagina. Los elementos marcados con `data-ww-skip` (logo, controles del carrusel)
quedan afuera de la traduccion.

## Ver o crear un derivado

1. Clonar o descargar el repositorio.
2. Abrir `index.html` en un navegador, o servir la carpeta con cualquier servidor
   estatico (por ejemplo `python3 -m http.server`). No hace falta build ni dependencias.
3. Para publicarlo, subir toda la carpeta a cualquier hosting estatico (Netlify,
   GitHub Pages, un hosting compartido, etc.).

## Licencia

MIT No Attribution: se puede usar, copiar, modificar y redistribuir sin necesidad de citar el original. Ver `LICENSE`.
