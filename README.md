# Plantilla de landing para despachos de abogados

Landing page lista para un despacho especializado en derecho empresarial, laboral y civil. Viene en español e inglés, con un selector ES/EN, e incluye un formulario de evaluación inicial del caso que envía la consulta por **WhatsApp**.

La marca "Altamira Ferrer" y su equipo son **datos ficticios de demostración**. Los datos de contacto y legales vienen como marcadores entre corchetes, por ejemplo `[NÚMERO DE WHATSAPP]`, para sustituirlos por los del despacho.

**Sin backend:** es un **sitio estático**: HTML, CSS y JS generados en la carpeta `out/`. No tiene servidor, API, funciones serverless ni base de datos, y no instala cookies. El formulario no guarda nada. Al enviarlo se abre WhatsApp con la consulta ya escrita y el visitante solo tiene que pulsar enviar.

**Tecnologías:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, shadcn/ui, Motion y React Hook Form.

## Ejecutar en local

Necesitas **Node.js 20.9 o superior**. El proyecto usa Node 24, indicado en `.node-version`.

```bash
npm install
npm run dev
```

Abre http://localhost:3000. En desarrollo, la raíz `/` muestra un instante la página 404 global, que lleva a `/es`. En producción, esa redirección la hace Cloudflare Pages con `public/_redirects` (302).

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Genera el sitio estático en `out/` |
| `npm run lint` | Revisa el código |

`npm start` no se usa: el sitio no necesita servidor. Para ver la versión compilada, sube `out/` a Cloudflare Pages o ábrela con cualquier servidor de archivos estáticos.

## Qué personalizar

Para encontrar todo lo pendiente, busca `[` (corchete) y `TODO` en el proyecto.

| Archivo | Qué contiene |
|---|---|
| `src/content/firm.ts` | **Número de WhatsApp** (`whatsapp`, el TODO principal), correo, dirección y ciudad. También los datos legales (`legalEntity`): nombre del despacho, NIF/CIF, número de registro y colegio de abogados. Aquí están el **equipo** (nombres y fotos), las **fotos** de cada sección y qué abogado recibe cada área. Las fotos de demostración se cargan desde Unsplash; para usar fotos propias, colócalas en `public/` (por ejemplo `/fotos/equipo-1.jpg`) y quita el párrafo de Unsplash de la política de privacidad. |
| `src/i18n/dictionaries/es.ts` | Todos los **textos en español**: secciones, formulario, mensaje de WhatsApp, aviso legal, privacidad y cookies. |
| `src/i18n/dictionaries/en.ts` | Los mismos textos **en inglés**. TypeScript avisa si falta alguno. |
| `src/app/globals.css` | Colores de la marca (variables `--navy-*`, `--gold*`, `--cream`). |

### El número de WhatsApp

Edítalo en `src/content/firm.ts`, en el campo `whatsapp`, con el prefijo de país; por ejemplo `+34 600 123 456`. Los espacios y los símbolos se eliminan solos al generar el enlace `https://wa.me/...`.

Mientras siga el marcador `[NÚMERO DE WHATSAPP]`, el formulario abre WhatsApp sin destinatario y la consola de desarrollo muestra un aviso.

## Despliegue en Cloudflare Pages

Conecta el repositorio en **Workers & Pages → Create → Pages → Connect to Git** y usa esta configuración:

| Campo | Valor |
|---|---|
| Framework preset | `None` (no elijas "Next.js": ese preset es para sitios con servidor) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | *(vacío)* |
| Node version | `24`. Pages lo lee de `.node-version`; si quieres fijarlo a mano, añade la variable `NODE_VERSION` = `24`. |

**Variable de entorno recomendada** (Settings → Variables and secrets, para Production y Preview):

| Variable | Ejemplo | Para qué sirve |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://www.despacho.com` | Genera las etiquetas `canonical` y `hreflang` con el dominio real. Sin ella, el sitio funciona igual, pero no se emiten. |

Si cambias el dominio o la variable, vuelve a desplegar: los valores se escriben en el HTML durante el build.

### Redirecciones y páginas 404

- `public/_redirects` se copia a `out/` en el build. Cloudflare Pages lo aplica antes de servir los archivos:

  ```
  /                     /es                      302
  /legal/aviso-legal    /es/legal/aviso-legal    302
  /legal/privacidad     /es/legal/privacidad     302
  /legal/cookies        /es/legal/cookies        302
  ```

- **Las rutas sin idioma se redirigen con reglas explícitas** en `public/_redirects`, una por ruta, con destino al mismo path bajo `/es`. Si añades una ruta nueva sin idioma, debes añadir su regla a mano en ese archivo. No añadas reglas para rutas que existan como archivo en `out/`, porque Cloudflare Pages daría prioridad al archivo.
- **No se usa una regla comodín** (`/* /es`). En Cloudflare Pages las reglas de `_redirects` se aplican aunque el archivo exista, así que un comodín también redirigiría `/es`, los scripts y las imágenes, y el sitio entraría en un bucle.
- **El resto de rutas sin idioma** (por ejemplo `/contacto`) muestran `out/404.html`, que lleva de inmediato a `/es`. Lo hace con una etiqueta `<meta refresh>`, así que funciona sin JavaScript.
- **Las rutas inexistentes dentro de un idioma** (`/es/...`, `/en/...`) muestran la página 404 de ese idioma (`out/es/404.html`, `out/en/404.html`). Cloudflare Pages siempre sirve el `404.html` más cercano.

## Qué incluye la compra

- La plantilla completa: código fuente, versión en español e inglés, formulario con envío por WhatsApp y páginas legales con marcadores.
- Esta documentación.
- Soporte para **errores de la plantilla** y **dudas de uso** (instalación, ejecución y dónde se cambia cada cosa).

## Qué no incluye

Estos trabajos se presupuestan aparte:

- Personalización de textos, fotos o colores.
- Idiomas adicionales.
- Integraciones (CRM, correo, calendario, analítica, etc.).
- Redacción o adaptación del contenido legal.

## Aviso sobre el contenido legal

El aviso legal, la política de privacidad, la política de cookies y el texto de consentimiento son **plantillas orientativas**. No son asesoramiento jurídico. Antes de publicar el sitio, **un abogado debe revisarlos** y adaptarlos a la normativa del país del despacho, y hay que completar todos los marcadores (`[NOMBRE DEL DESPACHO]`, `[NÚMERO DE REGISTRO]`, `[DIRECCIÓN]`, etc.).
