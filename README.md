# Plantilla de landing para despachos de abogados

Landing de una sola página para despachos de abogados. Incluye: **hero** con foto, **quiénes somos**, **especialidades**, **experiencia**, **equipo**, **metodología**, **formulario de evaluación de caso** en tres pasos y **páginas legales** (aviso legal, privacidad y cookies), en **español e inglés**.

Está hecha con **Next.js 16**, React, Tailwind CSS, shadcn/ui y Motion. No necesita base de datos ni servidor propio: el formulario no guarda datos, sino que abre WhatsApp con el mensaje ya escrito. Al compilarla se genera una carpeta de archivos estáticos (`out`) que se publica en Cloudflare Pages (ver `DESPLIEGUE-CLOUDFLARE.md`).

Todos los datos de contacto y legales son **marcadores de ejemplo** entre corchetes (por ejemplo `[NOMBRE DEL DESPACHO]`). Antes de publicar, léete la **[guía de cumplimiento](GUIA-CUMPLIMIENTO.md)** y reemplaza cada marcador.

---

## 1. Requisitos

- **Node.js 24** (lo indica el archivo `.node-version`). El mínimo para compilar es Node 20.9. Verifica tu versión con `node -v`.
- **npm** (viene con Node.js).

## 2. Instalación y prueba local

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
npm run dev
```

La web queda disponible en **http://localhost:3000/es** (versión en español) y **http://localhost:3000/en** (versión en inglés). Los cambios que guardes se ven al instante. Para detenerlo: `Ctrl + C`.

Otros comandos:

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor local de desarrollo. |
| `npm run build` | Compila la web estática. El resultado queda en la carpeta `out`, que es la que se publica. |
| `npx tsc --noEmit` | Revisa los tipos de TypeScript sin generar archivos. |

## 3. Mapa de archivos

| Qué quieres cambiar | Dónde está |
| --- | --- |
| Nombre del despacho, número de WhatsApp, dirección, ciudad, correo y datos de la entidad legal | `src/content/firm.ts` |
| Textos de la web en español | `es.ts` (dentro de la carpeta de contenido o diccionario de idiomas) |
| Textos de la web en inglés | `en.ts` (misma carpeta que el de español) |
| Lógica de prioridad del formulario (urgencia, proceso abierto, plazo) | `evaluate.ts` (dentro de `features/case-evaluation`) |
| Construcción del mensaje de WhatsApp | `src/features/case-evaluation/build-message.ts` |
| Número y función de envío a WhatsApp | `src/lib/whatsapp.ts` |
| Redirecciones y páginas 404 de Cloudflare | `public/_redirects` |
| Fotos | Carpeta `public/` (las fotos actuales son de Unsplash, ver la guía de cumplimiento) |

---

## 4. Cómo cambiar los datos del despacho

Todos los datos de contacto y legales están en **`src/content/firm.ts`**. Cada marcador entre corchetes debe sustituirse por el dato real. El número de WhatsApp es el más importante: sin él el formulario no puede enviar el mensaje.

| Marcador | Qué es | Formato |
| --- | --- | --- |
| `[NÚMERO DE WHATSAPP]` | Número de WhatsApp del despacho. | Solo dígitos, con código de país y sin `+`, espacios ni guiones. Ejemplo: `573001234567`. |
| `[DIRECCIÓN]` | Dirección de la oficina. | Texto libre. |
| `[CIUDAD]` | Ciudad de la oficina. | Texto libre. |
| `[CORREO ELECTRÓNICO]` | Correo de contacto. | Un correo válido. |
| `[NOMBRE DEL DESPACHO]` | Nombre de la entidad que aparece en las páginas legales. | Texto libre. |
| `[NIF/CIF]` | Identificador fiscal de la entidad. | Según el país del despacho. |
| `[NÚMERO DE REGISTRO]` | Número de registro profesional o mercantil. | Texto libre. |
| `[COLEGIO DE ABOGADOS]` | Colegio profesional al que pertenece el despacho. | Texto libre. |
| `[FECHA DE ACTUALIZACIÓN]` | Fecha de la última revisión de las páginas legales. | Formato que prefieras, por ejemplo `15 de octubre de 2026`. |

**Ejemplo, antes y después:**

```ts
// Antes
whatsapp: "[NÚMERO DE WHATSAPP]",

// Después
whatsapp: "573001234567",
```

Además, el número de WhatsApp tiene un comentario `TODO` en `firm.ts`. Bórralo cuando lo hayas cambiado.

**Importante:** la web muestra el dato de la hero (`Reg. 04521`) como ejemplo. Cámbialo por el número de registro real del despacho o elimínalo.

---

## 5. Cómo cambiar las secciones

- **Textos**: `es.ts` y `en.ts`. Si cambias un texto en un idioma, cámbialo también en el otro para que no queden versiones distintas.
- **Especialidades, experiencia, equipo y metodología**: se definen en los textos de `es.ts` y `en.ts` y en los componentes de cada sección.
- **Formulario de evaluación de caso**: tiene tres pasos. La prioridad (alta, media o normal) se calcula en `evaluate.ts` según la urgencia, si hay un proceso abierto y el plazo. Cada área tiene asignado un abogado de referencia, y el formulario genera una referencia del tipo `AF-XXXXXX`.
- **Envío por WhatsApp**: el formulario abre WhatsApp con el mensaje ya escrito. El visitante lo envía con un toque. El sitio no guarda ningún dato. Los campos son nombre, teléfono, email, situación, tipo de cliente, preferencia de contacto, urgencia, proceso abierto, plazo y descripción.
- **Páginas legales**: aviso legal, privacidad y cookies, en ambos idiomas. Los textos son borradores con marcadores. **Deben revisarlos un abogado antes de publicar.**

### Notas sobre el envío

- El mensaje se abre desde el clic en el botón. Si el navegador bloquea la ventana, la pantalla de confirmación tiene el botón **Abrir WhatsApp de nuevo**.
- Los datos viajan en la URL del enlace de WhatsApp. No los pegues en herramientas de analítica o registros de servidor.

---

## 6. Antes de publicar

Lista de verificación:

- [ ] Todos los marcadores de `firm.ts` reemplazados (busca `[` en el archivo).
- [ ] Número de WhatsApp real y probado: envía una consulta de prueba desde un móvil real.
- [ ] Textos de `es.ts` y `en.ts` revisados en ambos idiomas.
- [ ] Páginas legales revisadas **por un abogado** y fecha de actualización puesta.
- [ ] Las fotos del hero y del equipo son del despacho o tienes derecho a usarlas.
- [ ] El dato de registro de la hero (`Reg. 04521`) es real o está eliminado.
- [ ] Variable `NEXT_PUBLIC_SITE_URL` configurada en Cloudflare con el dominio real.
- [ ] `npm run build` termina sin errores.
- [ ] En el sitio publicado, `/es`, `/en`, `/legal/cookies` y `/es/legal/privacidad` responden como se espera.

Para la guía completa de publicación, ver [DESPLIEGUE-CLOUDFLARE.md](DESPLIEGUE-CLOUDFLARE.md).

---

## 7. Cómo publicar

El sitio se compila con `npm run build` y se publica la carpeta **`out`**. El hosting recomendado es **Cloudflare Pages** (tiene plan gratuito). Los pasos para una persona no técnica están en **[DESPLIEGUE-CLOUDFLARE.md](DESPLIEGUE-CLOUDFLARE.md)**.

Configuración en Cloudflare Pages:

- **Framework preset:** `None` (no uses el preset de Next.js, que es para sitios con servidor).
- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Variable de entorno:** `NEXT_PUBLIC_SITE_URL` con el dominio real, por ejemplo `https://midespacho.com`.

Las rutas sin idioma (`/`, `/legal/...`) se redirigen con reglas explícitas en `public/_redirects`. Si añades una página nueva sin idioma, agrégala ahí a mano.

---

## 8. Soporte y próximos pasos

El soporte gratuito del proveedor dura **[PLAZO DE SOPORTE]** desde la entrega, con respuesta en **[TIEMPO DE RESPUESTA]**. El mantenimiento posterior se contrata aparte: la personalización de textos, fotos, colores, idiomas adicionales, integraciones y contenido legal se presupuesta por separado. Ver `LICENSE.md`.

**Si algo se rompe:**

1. **La web publicada se ve mal después de un cambio.** Restaura un despliegue anterior desde el panel de Cloudflare Pages (pestaña *Deployments*).
2. **`npm run build` da error.** El mensaje indica el archivo y la línea. Los errores más comunes son una comilla o llave sin cerrar, o una coma que falta.
3. **Un cambio no aparece en local.** Detén `npm run dev`, vuelve a ejecutarlo y recarga con `Ctrl + F5`.
4. **Un comando no funciona.** Verifica `node -v` y que estás dentro de la carpeta del proyecto.

---

## 9. Licencia

El uso de este proyecto está sujeto a los términos del archivo **LICENSE.md**. El soporte, la personalización y el uso comercial se rigen por ese documento.

---

## 10. Build de demostración (solo para el proveedor)

`npm run demo -- https://tu-demo.pages.dev` genera `dist-demo/` con datos ficticios, `noindex` y sin canonical/hreflang. `npm run build` no cambia: sigue mostrando los marcadores `[ ]`.

**WhatsApp de pruebas:** la demo lee el número de la variable de entorno `NEXT_PUBLIC_WHATSAPP_NUMBER` (con prefijo de país, solo dígitos). No lo escribas en el código. En PowerShell:

```
$env:NEXT_PUBLIC_WHATSAPP_NUMBER="573000000000"; npm run demo -- https://tu-demo.pages.dev
```

Si la variable no está definida, el script avisa y el formulario de la demo no podrá enviar mensajes.
