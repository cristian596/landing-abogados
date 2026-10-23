# Altamira Ferrer Abogados · Plantilla de landing page

Landing page para una firma de abogados especializada en derecho empresarial, laboral y civil. Está disponible en español y en inglés, con un selector ES/EN, e incluye un formulario de evaluación inicial del caso.

**Tecnologías:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, shadcn/ui, Motion y React Hook Form.

## Arrancar en local

Necesitas **Node.js 18 o superior**.

```bash
npm install
npm run dev
```

Abre http://localhost:3000. La raíz redirige a `/es` o a `/en` según el idioma del navegador, o según el idioma que el visitante haya elegido antes con el selector.

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Compila para producción (prerenderiza `/es` y `/en`) |
| `npm start` | Sirve la versión compilada |
| `npm run lint` | Revisa el código con ESLint |

## Estructura

```
src/
├── proxy.ts                  # Redirige "/" al idioma adecuado
├── app/
│   ├── globals.css           # Colores (marino y dorado), tipografías y escalas
│   └── [lang]/
│       ├── layout.tsx        # <html lang>, fuentes y metadatos SEO por idioma
│       └── page.tsx          # Monta la página y reparte los textos a cada sección
├── i18n/
│   ├── config.ts             # Idiomas disponibles y utilidad format()
│   ├── get-dictionary.ts
│   └── dictionaries/
│       ├── es.ts             # TODOS los textos en español (idioma base)
│       └── en.ts             # Traducción al inglés (TypeScript exige la misma forma)
├── content/
│   └── firm.ts               # Datos que no se traducen: teléfono, correo, dirección, fotos
├── components/
│   ├── layout/               # Navbar, footer, logo y selector de idioma
│   ├── sections/             # Hero, quiénes somos, especialidades, experiencia, equipo, metodología
│   ├── shared/               # Piezas reutilizables (botón dorado, etiquetas, animación de entrada)
│   └── ui/                   # Componentes de shadcn/ui
├── features/
│   └── case-evaluation/      # Formulario de evaluación del caso
│       ├── case-evaluation.tsx   # Sección y formulario en 3 pasos
│       ├── result-view.tsx       # Resultado: prioridad, abogado asignado y documentos
│       ├── form-fields.tsx       # Campos accesibles (fieldset, tarjetas de opción)
│       ├── evaluate.ts           # Cálculo de la prioridad (lógica pura, sin React)
│       └── types.ts
└── lib/utils.ts
```

## Cómo personalizarla

- **Textos:** se editan en `src/i18n/dictionaries/es.ts` y `en.ts`. Ningún componente tiene texto escrito a mano.
- **Contacto, dirección y fotos:** están en `src/content/firm.ts`. Las imágenes vienen de Unsplash; para usar fotos propias, colócalas en `public/` y cambia las rutas.
- **Colores y tipografías:** las variables `--navy-*`, `--gold*` y `--cream` están en `src/app/globals.css`. Las fuentes (Playfair Display y Manrope) se cargan en `src/app/[lang]/layout.tsx`.
- **Criterio de prioridad del formulario:** se cambia en `src/features/case-evaluation/evaluate.ts`.

### Añadir un idioma

1. Crea `src/i18n/dictionaries/fr.ts` con el tipo `Dictionary`, copiando `en.ts`.
2. Añade `"fr"` a `locales` y su etiqueta a `localeSwitch` en `src/i18n/config.ts`.
3. Regístralo en `src/i18n/get-dictionary.ts`.

## Conectar el formulario

Ahora mismo el envío es **simulado**: muestra el resultado, pero los datos no van a ningún sitio. Para recibirlos, busca el `TODO` en `src/features/case-evaluation/case-evaluation.tsx`, dentro de la función `onSubmit`, y envíalos a tu backend, a tu CRM o a un servicio como Formspree.

## Publicar

Para que los enlaces canónicos y `hreflang` usen tu dominio, define la variable `NEXT_PUBLIC_SITE_URL` (por ejemplo, `https://altamiraferrer.com`). Después:

```bash
npm run build
```

El proyecto se puede desplegar tal cual en Vercel o en cualquier hosting compatible con Next.js.
