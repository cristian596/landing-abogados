# Plantilla de landing para despachos de abogados

Landing page lista para un despacho especializado en derecho empresarial, laboral y civil. Viene en español e inglés, con un selector ES/EN, e incluye un formulario de evaluación inicial del caso que envía la consulta por **WhatsApp**.

La marca "Altamira Ferrer" y su equipo son **datos ficticios de demostración**. Los datos de contacto y legales vienen como marcadores entre corchetes, por ejemplo `[NÚMERO DE WHATSAPP]`, para sustituirlos por los del despacho.

**Sin backend:** el sitio no tiene servidor de datos, API ni base de datos. El formulario no guarda nada. Al enviarlo se abre WhatsApp con la consulta ya escrita y el visitante solo tiene que pulsar enviar.

**Tecnologías:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, shadcn/ui, Motion y React Hook Form.

## Ejecutar en local

Necesitas **Node.js 18 o superior**.

```bash
npm install
npm run dev
```

Abre http://localhost:3000. La raíz redirige a `/es` o `/en` según el idioma del navegador.

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Compila para producción |
| `npm start` | Sirve la versión compilada |
| `npm run lint` | Revisa el código |

## Qué personalizar

Para encontrar todo lo pendiente, busca `[` (corchete) y `TODO` en el proyecto.

| Archivo | Qué contiene |
|---|---|
| `src/content/firm.ts` | **Número de WhatsApp** (`whatsapp`, el TODO principal), correo, dirección y ciudad. También los datos legales (`legalEntity`): nombre del despacho, NIF/CIF, número de registro y colegio de abogados. Aquí están el **equipo** (nombres y fotos), las **fotos** de cada sección y qué abogado recibe cada área. |
| `src/i18n/dictionaries/es.ts` | Todos los **textos en español**: secciones, formulario, mensaje de WhatsApp, aviso legal, privacidad y cookies. |
| `src/i18n/dictionaries/en.ts` | Los mismos textos **en inglés**. TypeScript avisa si falta alguno. |
| `src/app/globals.css` | Colores de la marca (variables `--navy-*`, `--gold*`, `--cream`). |

### El número de WhatsApp

Edítalo en `src/content/firm.ts`, en el campo `whatsapp`, con el prefijo de país; por ejemplo `+34 600 123 456`. Los espacios y los símbolos se eliminan solos al generar el enlace `https://wa.me/...`.

Mientras siga el marcador `[NÚMERO DE WHATSAPP]`, el formulario abre WhatsApp sin destinatario y la consola de desarrollo muestra un aviso.

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
