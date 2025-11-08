<<<<<<< HEAD
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
=======
# Proyecto3 BD - Frontend de Reportes de Reservas de Canchas Deportivas

Este proyecto es el frontend para visualizar distintos **reportes de reservas de canchas deportivas**
Para visualizarlo puedes ingresar a (https://bd-api.eduvial.space/)

## ¿Qué hace este proyecto?

Este sistema permite generar **5 reportes interactivos** con filtros personalizados para analizar la información de las reservas:

1. **Reporte de Reservas**  
   Visualiza las reservas realizadas por los usuarios, con filtros por fecha, estado y tipo de cancha.

2. **Reporte de Ingresos**  
   Muestra el ingreso económico generado por las reservas, con opción de filtrar por fechas.

3. **Reporte de Usuarios**  
   Lista los usuarios con más reservas, permite filtrar por fecha, horario y cantidad mínima de reservas. Además, muestra su cancha más utilizada.

4. **Reporte de Promociones**  
   Muestra qué promociones se han utilizado, cuantas y que usuarios. Filtros por fechas y tipo de promoción.

5. **Reporte de Canchas**  
   Permite ver qué canchas son más utilizadas en un rango de fechas o por tipo de cancha y horario.

---

## Cómo correr el proyecto

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Jonialen/Proyecto3_bd_fronted.git
   cd Proyecto3_bd_fronted

2. **Instalar dependencias**
    ```bash
    npm install

3. **Iniciar el servidor de desarrollo**
    ```bash
    npm run dev
Esto normalmente se abrira en tu navegador en: http://localhost:5173

>>>>>>> 2672aaba9bee1395cb77bc90382bd355a5876a2f
