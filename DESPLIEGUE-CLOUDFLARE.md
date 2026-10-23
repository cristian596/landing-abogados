# Guía de despliegue en Cloudflare Pages

Esta guía explica cómo publicar la landing del despacho en Cloudflare Pages. No necesitas conocimientos técnicos avanzados, pero sí tener acceso a la cuenta de GitHub y al panel del dominio.

Antes de empezar, asegúrate de haber completado los datos de `src/content/firm.ts` (ver el README, sección 4) y de que la prueba local funciona con `npm run dev`.

---

## Paso 1: Preparar el proyecto

1. Abre una terminal en la carpeta del proyecto.
2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Compila el sitio:

   ```bash
   npm run build
   ```

4. Confirma que se creó la carpeta `out`. Debe contener los archivos `es.html`, `en.html`, `_redirects` y las páginas legales dentro de `es/legal/` y `en/legal/`.

Si el comando falla, lee el mensaje en la terminal: indica el archivo y la línea con el error.

---

## Paso 2: Subir el código a GitHub

Cloudflare Pages se conecta a un repositorio de GitHub para publicar cada cambio automáticamente.

1. Crea una cuenta en [GitHub](https://github.com) si no tienes una.
2. Crea un repositorio nuevo (**privado** recomendado).
3. Sube el código del proyecto. **No subas** la carpeta `node_modules` ni `out`; el archivo `.gitignore` ya las excluye.

Para la primera subida, es más sencillo usar GitHub Desktop o pedir ayuda a alguien que maneje Git.

---

## Paso 3: Crear el proyecto en Cloudflare Pages

1. Entra a [Cloudflare](https://dash.cloudflare.com) y ve a **Workers & Pages**.
2. Pulsa **Create** → **Pages** → **Connect to Git**.
3. Autoriza a Cloudflare a leer tu cuenta de GitHub y elige el repositorio.
4. En la configuración de compilación, usa exactamente estos valores:

   | Campo | Valor |
   | --- | --- |
   | Framework preset | **None** |
   | Build command | `npm run build` |
   | Build output directory | `out` |

   **No elijas el preset de Next.js**: es para sitios con servidor y esta landing es estática.

5. Antes de guardar, abre **Environment variables** y añade:

   | Variable | Valor |
   | --- | --- |
   | `NEXT_PUBLIC_SITE_URL` | Tu dominio con `https://`, sin barra final. Por ejemplo `https://midespacho.com`. |

   Sin esta variable, la web no genera las etiquetas `canonical` ni `hreflang`, que ayudan a Google a encontrar las versiones en español e inglés.

6. Pulsa **Save and Deploy**. El primer despliegue tarda unos minutos.

---

## Paso 4: Versión de Node

El proyecto incluye el archivo `.node-version` con la versión 24, y Cloudflare lo lee automáticamente. Si el despliegue falla por la versión de Node, añade una variable de entorno:

| Variable | Valor |
| --- | --- |
| `NODE_VERSION` | `24` |

---

## Paso 5: Verificar el sitio

Cuando termine el despliegue, Cloudflare te da una dirección del tipo `nombre-del-proyecto.pages.dev`. Ábrela y comprueba:

- [ ] `/` redirige a `/es`.
- [ ] `/es` muestra la landing en español, con el hero arriba al cargar.
- [ ] `/en` muestra la landing en inglés.
- [ ] `/legal/cookies` redirige a `/es/legal/cookies`.
- [ ] `/es/legal/privacidad` y `/en/legal/privacidad` abren correctamente.
- [ ] `/contacto` (una ruta que no existe) muestra la página de error en español.
- [ ] El formulario de evaluación abre WhatsApp con el mensaje escrito. Pruébalo desde un móvil.
- [ ] Los enlaces del pie de página (aviso legal, privacidad, cookies) funcionan.

Si algo no responde como se describe, revisa primero que `NEXT_PUBLIC_SITE_URL` esté bien escrita y que el último despliegue haya terminado sin errores.

---

## Paso 6: Conectar tu dominio propio

1. Compra el dominio a nombre de la empresa compradora, en un registrador como GoDaddy, Namecheap o Cloudflare.
2. En el proyecto de Pages, ve a **Custom domains** y pulsa **Set up a custom domain**.
3. Escribe el dominio. Si ya está en Cloudflare, los registros DNS se crean solos. Si está en otro registrador, Cloudflare te indica el registro exacto que debes crear. Usa siempre los valores que muestre tu panel.
4. Espera de unos minutos a 24 horas. Cloudflare activa el certificado HTTPS (el candado) de forma automática.

Cuando el dominio funcione, confirma que `NEXT_PUBLIC_SITE_URL` tiene el mismo valor y vuelve a desplegar.

---

## Paso 7: Actualizar el sitio

- **Con repositorio de GitHub:** cada vez que subas un cambio a la rama principal, Cloudflare compila y publica automáticamente.
- **Para revertir:** en el panel de Pages, pestaña **Deployments**, elige un despliegue anterior y restáuralo.

Antes de subir un cambio, ejecuta `npm run build` en tu computadora. Si falla ahí, también fallará en Cloudflare.

---

## Solución de problemas

| Síntoma | Qué revisar |
| --- | --- |
| El despliegue falla en la compilación | Mira el registro del despliegue. Casi siempre es una comilla o llave sin cerrar en un archivo editado. |
| `/es` o `/en` muestra un 404 | Confirma que el build output directory es `out` y no otra carpeta. |
| `/legal/cookies` no redirige | Revisa que `public/_redirects` esté en el repositorio y que su contenido no haya cambiado. |
| Google muestra enlaces a `localhost` | `NEXT_PUBLIC_SITE_URL` no está configurada o tiene un valor incorrecto. |
| El formulario no abre WhatsApp | Revisa que el número en `firm.ts` esté en formato internacional, solo dígitos, sin `+`. |
| Un cambio no aparece en la web | Confirma que el último despliegue terminó bien y recarga con `Ctrl + F5`. |