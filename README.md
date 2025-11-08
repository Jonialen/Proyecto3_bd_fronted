# Proyecto3_bd_frontend

Este es el frontend para el sistema de reservas de canchas deportivas. Es una aplicación de una sola página (SPA) construida con React.

## Tabla de Contenidos
- [Proyecto3_bd_frontend](#proyecto3_bd_frontend)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Descripción](#descripción)
  - [Tecnologías](#tecnologías)
  - [Instalación y Uso](#instalación-y-uso)
  - [Scripts Disponibles](#scripts-disponibles)
  - [Estructura de Rutas](#estructura-de-rutas)

## Descripción

La aplicación permite a los usuarios interactuar con la API del backend para ver canchas, registrarse, iniciar sesión, hacer reservas y ver reportes.

## Tecnologías

- React 19
- Vite
- React Router
- Tailwind CSS
- Axios (para las peticiones a la API)
- ESLint

## Instalación y Uso

1.  **Clona el repositorio y navega a este directorio.**

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne).

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

-   `npm run dev`: Inicia la aplicación en modo de desarrollo.
-   `npm run build`: Compila la aplicación para producción en la carpeta `dist`.
-   `npm run lint`: Ejecuta el linter (ESLint) para revisar el código.
-   `npm run preview`: Sirve la compilación de producción localmente para previsualizarla.

## Estructura de Rutas

La aplicación utiliza `react-router-dom` para gestionar la navegación. Las rutas principales son:

-   `/`: Página principal.
-   `/bookings`: Reporte de reservas.
-   `/revenues`: Reporte de ingresos.
-   `/users`: Reporte de usuarios.
-   `/promotions`: Reporte de promociones.
-   `/availability`: Reporte de disponibilidad de canchas.