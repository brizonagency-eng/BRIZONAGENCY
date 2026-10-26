# BRIZON AGENCY — web estática con formulario por correo

## Archivos
- `index.html`: página principal y formulario.
- `cuba.html`: servicios relacionados con Cuba.
- `espana.html`: servicios de extranjería en España.
- `styles.css`: diseño responsive; usa fuentes del sistema por defecto para evitar una petición a Google Fonts.
- `script.js`: menú móvil y validación del estado de configuración.
- `aviso-legal.html`, `privacidad.html`, `cookies.html`: borradores legales.
- `README.md`: esta guía.

## Solución recomendada para recibir solicitudes
Esta web es estática: no puede enviar correos de forma segura por sí sola ni debe contener contraseñas SMTP. La plantilla está preparada para conectarse a un servicio de formularios como Formspree, que recibe el formulario y lo reenvía al correo destinatario que configures y verifiques (en este caso, `brizonagency@gmail.com`).

### Configuración del formulario
1. Crea una cuenta en el proveedor elegido y crea un formulario nuevo.
2. Verifica la dirección de correo a la que quieres recibir consultas.
3. Copia el endpoint que te da el proveedor. Normalmente tendrá un formato similar a `https://formspree.io/f/FORM_ID`.
4. Abre `index.html` y busca `https://formspree.io/f/xzeeevld`.
5. Sustituye `xzeeevld` por el identificador real que te proporcione el servicio. No inventes ni compartas credenciales privadas.
6. En Formspree, configura y verifica `brizonagency@gmail.com` como dirección destinataria del formulario. El enlace de correo del pie de página ya está actualizado a `brizonagency@gmail.com`.
7. Haz una prueba con datos ficticios y confirma que el correo llega, que no acaba en spam y que la respuesta funciona.
8. Revisa el límite gratuito, la política de privacidad, la ubicación del procesamiento, las transferencias internacionales y el acuerdo de tratamiento de datos del proveedor antes de elegirlo.

## Publicar gratis como web estática
Una opción sencilla es Netlify o GitHub Pages. Los planes y límites cambian, así que compruébalos al registrarte.
1. Descomprime `BRIZON_AGENCY_web.zip`.
2. Crea una cuenta en el proveedor de alojamiento.
3. Sube la carpeta `BRIZON_AGENCY` o conecta un repositorio Git con estos archivos.
4. Abre la URL de prueba HTTPS y verifica que todas las páginas carguen.
5. Prueba menú móvil, enlaces a WhatsApp, el formulario y páginas legales.
6. Cuando elijas un dominio, añádelo desde el panel del proveedor y configura los registros DNS indicados por este.
7. Confirma que HTTPS esté activo antes de compartir la web.

## Protección de datos: lista previa a publicar
- Completa los campos entre corchetes en `aviso-legal.html` y `privacidad.html`.
- La política debe identificar al responsable real, la finalidad, base jurídica, destinatarios, conservación, derechos y canal de contacto.
- Revisa las condiciones del proveedor de formularios y si actúa como encargado del tratamiento; formaliza los acuerdos necesarios.
- Recoge solo datos mínimos en el primer contacto. No pidas pasaportes, NIE, certificados, datos de salud ni documentos de menores por el formulario general.
- No añadas analítica, píxeles publicitarios ni cookies no necesarias sin revisar obligaciones de información y consentimiento.
- Define un proceso para responder, borrar consultas que ya no necesites y proteger el buzón.
- Configura un correo de negocio con contraseña única y autenticación multifactor.
- Añade precios, condiciones de contratación, cancelaciones y datos de atención al cliente cuando corresponda.
- Comprueba que cada servicio anunciado se presta realmente y que la actividad cumple los requisitos profesionales aplicables. No presentes el negocio como organismo oficial ni prometas resultados migratorios.

## WhatsApp
Enlace configurado: `https://wa.me/447918467592` para el número `+44 7918 467592`.

## Importante
El formulario no funcionará hasta que insertes el endpoint real del proveedor. Esta plantilla es una base técnica, no asesoramiento jurídico. Los textos legales son borradores y deben adaptarse a la actividad, ubicación y situación del titular.
