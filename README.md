# Truekealo

Truekealo es una aplicación web desarrollada con **React** y **Vite** que permite a los usuarios intercambiar artículos de manera sencilla y segura. El proyecto está diseñado para facilitar el trueque entre personas, ofreciendo funcionalidades como exploración de artículos, gestión de solicitudes, mensajería y administración de perfiles.

## Características principales
- Autenticación de usuarios (login, registro, recuperación de contraseña)
- Panel de usuario con recomendaciones y solicitudes de intercambio
- Exploración de artículos disponibles
- Gestión de artículos propios
- Mensajería entre usuarios
- Perfil y configuración personal
- Subida de nuevos artículos y realización de ofertas

## Estructura del proyecto
- `index.html`: archivo principal para Live Server
- `App.tsx`, `index.tsx`: entrada de la aplicación React
- `components/`: componentes reutilizables (ej. Sidebar)
- `pages/`: páginas principales (Auth, Dashboard, Acciones)
- `types.ts`: definición de tipos y enums para navegación y usuarios

## Tecnologías utilizadas
- **React 19**
- **Vite**
- **TypeScript**
- **TailwindCSS** (CDN)

## Instalación y ejecución

### Requisitos previos
- Node.js y npm instalados
- VS Code
- Extensión Live Server (opcional)

### Ejecución con Vite
1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Ejecuta la aplicación:
   ```bash
   npm run dev
   ```
3. Abre el navegador en la URL indicada por Vite (por defecto http://localhost:5173)

### Ejecución con Live Server (VS Code)
1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Instala la extensión Live Server en VS Code
3. Haz clic derecho sobre `index.html` y selecciona `Open with Live Server`

## Notas
- Los cambios en los archivos se reflejarán automáticamente en el navegador gracias a Vite o Live Server.
- El diseño utiliza TailwindCSS vía CDN y tipografía Plus Jakarta Sans.
- Puedes personalizar colores y estilos en el archivo `index.html`.

## Scripts disponibles
- `npm run dev`: inicia el servidor de desarrollo Vite
- `npm run build`: genera la versión de producción
- `npm run preview`: previsualiza la build de producción