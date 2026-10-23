// Genera dist-demo/ (build estático sin indexación) para publicar la demo.
// Uso: npm run demo -- https://prueba.pages.dev
import { spawnSync } from "node:child_process";
import { cpSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const domain = process.argv[2];

if (!domain || !domain.startsWith("https://") || domain.endsWith("/")) {
  console.error(
    "Uso: npm run demo -- https://tu-demo.pages.dev\n" +
      "El dominio debe empezar con https:// y no terminar en barra."
  );
  process.exit(1);
}

const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
if (!whatsapp) {
  console.warn(
    "Aviso: La demo no tiene número de WhatsApp; el formulario no podrá enviar mensajes.\n" +
      'En PowerShell: $env:NEXT_PUBLIC_WHATSAPP_NUMBER="573000000000"; npm run demo -- <dominio>\n'
  );
}

// Mismo comando que el script "build" (next build), sin pasar por shell
const nextBin = resolve("node_modules/next/dist/bin/next");
const build = spawnSync(process.execPath, [nextBin, "build"], {
  stdio: "inherit",
  env: {
    ...process.env,
    NEXT_PUBLIC_DEMO: "true",
    NEXT_PUBLIC_SITE_URL: domain,
    ...(whatsapp && { NEXT_PUBLIC_WHATSAPP_NUMBER: whatsapp }),
  },
});

if (build.status !== 0) process.exit(build.status ?? 1);

const dest = resolve("dist-demo");
rmSync(dest, { recursive: true, force: true });
cpSync(resolve("out"), dest, { recursive: true });

console.log(`\nDemo lista en: ${dest}`);
