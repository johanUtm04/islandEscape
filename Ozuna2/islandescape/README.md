 ISLAND ESCAPE: MANIFIESTO DE OPERACIONES 

 ESTADO DEL PROYECTO: BETA TÁCTICA 

Esta plataforma opera sobre una arquitectura React + Vite, diseñada para ser rápida, responsiva y altamente inmersiva. Todos los reportes, bugs y datos de contacto son canalizados a través de Firebase Firestore para garantizar una gestión de misión en tiempo real.

PROPÓSITO DE MISIÓN

El objetivo principal de esta landing page es servir como el Portal de Acceso para la comunidad de Island Escape, el videojuego de supervivencia donde la única cosa más peligrosa que la isla, es la verdad.

 TECNOLOGÍAS CLAVE Y ARQUITECTURA

Tecnología

Rol en el Ecosistema

React + Vite

Motor principal para un desarrollo frontal rápido (HMR).

CSS Inmersivo

Estilización Neo-Noir y Cyberpunk para una experiencia de Terminal de Comando.

Firebase Firestore

Base de datos NoSQL para gestión de Reportes de Misión (Formulario de Contacto).

React Hooks

Manejo de estado (useState) para la captura de datos del formulario y el control de envío.

 RUTA DE DESPLIEGUE RÁPIDO

Para clonar esta terminal y ponerla operativa en tu máquina local:

Clonar el repositorio:

git clone [URL_DEL_REPOSITORIO]
cd island-escape


Instalar dependencias:

npm install
# Asegúrate de tener 'firebase' instalado.


Encender el Servidor de Prueba:

npm run dev 
# O simplemente 'npm start'


La terminal se levantará en http://127.0.0.1:5173/ (o similar).

 CONEXIÓN CRÍTICA CON FIRESTORE
Para que el formulario de contacto envíe datos (colección: reportes):

Configuración: Asegúrate de que tu archivo src/firebaseConfig.js contenga tus credenciales y que exporte la instancia db.

Activación en Consola: Debes haber activado Firestore Database en la consola de Firebase. La colección reportes se crea automáticamente al recibir el primer envío de datos desde el componente Contact.jsx.

Seguridad (Temporal): Actualmente, las reglas de Firestore deben estar en Modo de Prueba (allow read, write) para permitir envíos públicos desde el frontend.

 SECCIONES Y OBJETIVOS

Header/Nav: Sistema de navegación Sticky para acceso inmediato a puntos clave de la misión.

Hero: Área de impacto visual con el título Island Escape y el botón de descarga (Rojo Crítico).

News/Characters: Módulos estáticos para alimentar el lore y el contenido del juego.

Contact: La Terminal de Reporte de Misión. Usa addDoc para archivar todos los reportes de la comunidad en la base de datos reportes.

Footer: Terminal de Comando final, con enlaces de soporte.

 PROTOCOLOS DE DESARROLLO

Este proyecto utiliza Vite para su flujo de trabajo moderno.

Fast Refresh: Activo por defecto. Los cambios de código se reflejan instantáneamente sin perder el estado de la aplicación.

ESLint: Configurado para mantener la calidad del código, crucial para misiones de alta prioridad.

El mundo no te va a esperar. Codea con velocidad, o serás consumido por la oscuridad de Aztaroth.