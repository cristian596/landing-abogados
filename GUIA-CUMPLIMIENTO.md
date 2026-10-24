# Guía de cumplimiento para el despacho

Esta guía resume los puntos legales y de privacidad que debe revisar el despacho antes de publicar la landing. **No es asesoría legal.** Las referencias normativas son orientativas: un abogado debe confirmar cada punto y adaptarlo a la jurisdicción del despacho, que es la que determina la norma aplicable.

Las páginas legales de la plantilla (aviso legal, privacidad y cookies) son **borradores** con marcadores. Ningún texto de la plantilla debe publicarse sin revisión de un abogado.

---

## 1. Quién es el responsable de los datos

El **responsable del tratamiento** es el despacho que publica la web, no el proveedor de la plantilla. Eso significa que el despacho decide para qué se usan los datos y responde por ellos.

Completa en `src/content/firm.ts` el bloque de datos de la entidad: `[NOMBRE DEL DESPACHO]`, `[NIF/CIF]`, `[NÚMERO DE REGISTRO]`, `[COLEGIO DE ABOGADOS]` y la fecha de actualización. Estos datos deben coincidir con los que el despacho tiene registrados oficialmente.

---

## 2. Datos que recoge el formulario

El formulario de evaluación pide nombre, teléfono, correo, situación, tipo de cliente, preferencia de contacto, urgencia, si hay un proceso abierto, plazo y descripción del caso.

Puntos a considerar:

- **Son datos sensibles en la práctica.** La descripción de un caso jurídico puede contener información sobre salud, situación económica, antecedentes penales o relaciones familiares. El aviso de privacidad debe explicarlo claramente.
- **Consentimiento.** La casilla de autorización del formulario debe estar **sin marcar por defecto** y el visitante debe marcarla para enviar. El texto debe explicar la finalidad, quién trata los datos y cómo ejercer los derechos.
- **Minimización.** Pide solo lo necesario para evaluar el caso. Si un campo no es imprescindible, quítalo.

---

## 3. El canal de WhatsApp y el secreto profesional

La web envía los datos del caso a WhatsApp. Esto tiene implicaciones que el despacho debe conocer:

- **Confidencialidad.** Los abogados tienen un deber de confidencialidad y secreto profesional. WhatsApp no es un canal con las garantías de confidencialidad de un correo corporativo o un sistema del despacho. Un abogado debe valorar si este canal es adecuado para los casos que recibe.
- **Quién ve los mensajes.** El mensaje llega al teléfono del despacho. Si varias personas usan ese teléfono, todas pueden leerlo.
- **Dispositivos y copias.** Los mensajes pueden quedar en copias de seguridad del teléfono o en otros dispositivos vinculados.
- **Datos en la URL.** El enlace de WhatsApp incluye el texto del mensaje. No es un registro del sitio, pero el visitante debe saber que su información viaja por ese canal.
- **Recomendación.** Informa al visitante en el propio formulario que la información viaja por WhatsApp y que no debe enviar documentos sensibles por ese medio sin confirmar antes el canal.

Un abogado debe revisar si el uso de WhatsApp para recibir consultas es compatible con las normas deontológicas de su colegio profesional.

---

## 4. Publicidad de servicios jurídicos

La publicidad de los abogados suele estar regulada por las normas deontológicas y por el colegio profesional. Un abogado debe revisar, al menos:

- Si el texto de la landing (titulares, promesas de resultados, comparaciones) está permitido.
- Si se pueden mostrar testimonios de clientes y en qué condiciones.
- Si las especialidades y el equipo se pueden presentar como se muestran.
- Si el formulario de evaluación gratuita o el mensaje de prioridad ("urgente") puede inducir a error al visitante.

**Evita promesas de resultado** en los textos de la web. Frases como "ganaremos su caso" o "garantizamos la indemnización" pueden infringir la normativa.

---

## 5. Política de privacidad y aviso legal

Las páginas `/es/legal/privacidad` y `/es/legal/aviso-legal` (y sus equivalentes en inglés) deben incluir, como mínimo:

- Identidad y datos de contacto del responsable.
- Finalidades del tratamiento de los datos.
- Base legal para cada finalidad (consentimiento, contrato, interés legítimo o cumplimiento de una obligación legal).
- Destinatarios y encargados del tratamiento, por ejemplo el proveedor de hosting y WhatsApp.
- Plazo de conservación de los datos.
- Derechos de los titulares y la forma de ejercerlos.
- Transferencias internacionales, si las hay.
- Fecha de última actualización.

El aviso legal debe incluir identidad del titular de la web, condiciones de uso y limitación de responsabilidad sobre el contenido informativo.

Los textos de la plantilla tienen marcadores para `[LEGISLACIÓN APLICABLE]` y `[PLAZO DE CONSERVACIÓN]`. Sustitúyelos con lo que el abogado indique.

---

## 6. Cookies y servicios de terceros

- **Cookies y analítica.** El pie de página tiene un enlace «Configurar cookies» que abre un panel con dos categorías: técnicas (siempre activas) y analítica (desactivada por defecto). La analítica solo se carga si el visitante la activa y si existe la variable `NEXT_PUBLIC_GA_ID`. La elección se guarda en el navegador del visitante (`localStorage`, clave `preferencias-cookies`). La página de cookies es un borrador: el abogado debe revisarla y completar los marcadores del servicio de analítica, la finalidad y el plazo de conservación. Si el despacho añade otra herramienta, debe actualizar esa página y, según la normativa aplicable, pedir consentimiento antes de activarla.
- **Imágenes de Unsplash.** Las fotos de la plantilla se cargan directamente desde los servidores de Unsplash. Al visitar la web, el navegador del visitante contacta con esos servidores, y el visitante puede quedar identificado por su dirección IP. La política de privacidad debe mencionarlo. **Si el despacho publica con fotos propias, puede retirar esa mención.**
- **Fuentes y otros recursos externos.** Revisa si la plantilla carga recursos de terceros y declara cualquiera que el despacho mantenga.

---

## 7. Derechos de los visitantes

El despacho debe tener un canal para atender solicitudes de acceso, rectificación, supresión y oposición. Puede ser el correo de contacto. Define un plazo de respuesta y guarda registro de las solicitudes recibidas.

---

## 8. Lista de verificación

Antes de publicar, confirma con un abogado:

- [ ] Datos de la entidad completos en `firm.ts`: nombre, identificador fiscal, registro y colegio.
- [ ] Ningún marcador `[ ]` queda en la web publicada.
- [ ] Aviso legal, privacidad y cookies revisados por un abogado.
- [ ] Fecha de actualización de las páginas legales puesta.
- [ ] Casilla de autorización del formulario sin marcar por defecto.
- [ ] El formulario explica que la información se envía por WhatsApp.
- [ ] Textos de la landing revisados según las normas de publicidad del colegio profesional.
- [ ] Ninguna promesa de resultados en la web.
- [ ] Testimonios, si existen, con autorización escrita del cliente.
- [ ] Fotos del despacho o con licencia para usarlas.
- [ ] Un canal para ejercer los derechos de los visitantes.
- [ ] Evaluado si WhatsApp es adecuado para los casos que recibe el despacho.

---

## 9. Lo que cambia según el país

Esta plantilla está escrita pensando en un despacho que puede estar en Colombia o en España. Las normas son distintas:

- **Colombia:** protección de datos personales, Ley 1581 de 2012 y sus decretos reglamentarios, y el régimen disciplinario y deontológico de la abogacía.
- **España:** Reglamento General de Protección de Datos (RGPD) y Ley Orgánica 3/2018 (LOPDGDD), y el estatuto general de la abogacía.

Un abogado del país del despacho debe confirmar la norma aplicable y ajustar los textos.

---

## 10. Responsabilidad

La plantilla es una herramienta. La información que se publique, los textos legales y el uso que el despacho haga de los datos de sus clientes son responsabilidad del despacho. Los términos del uso de la plantilla están en `LICENSE.md`, que se completará con el texto revisado por el abogado del proveedor.