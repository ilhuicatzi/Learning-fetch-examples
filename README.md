# ¿Cómo hacer un fetch en JavaScript?

## Descripción

Este repositorio demuestra diversas maneras de realizar solicitudes HTTP (fetch) en JavaScript. Se presentan ejemplos utilizando diferentes enfoques y bibliotecas para facilitar la comprensión y aplicación en distintos contextos de desarrollo.

### Métodos Incluidos

1. **Fetch Nativo**: Uso básico del método fetch integrado en JavaScript.
2. **Fetch con Async/Await**: Mejora de la legibilidad y manejo de promesas con async/await.
3. **Fetch en React**: Implementación de fetch en componentes funcionales de React.
4. **Fetch con Axios en React**: Uso de la biblioteca Axios para simplificar las solicitudes HTTP en React.
5. **Fetch con React Query**: Manejo avanzado de datos en React utilizando React Query para gestionar el estado de las solicitudes y caché.

## Ejemplos

### Random User
- **Descripción**: Este ejemplo muestra cómo realizar un fetch en un proyecto React, presentar los datos en una tabla, y agregar funcionalidades de filtrado y paginación.
- **Características**:
  - Tabla para mostrar usuarios.
  - Filtro por país.
  - Paginación para navegar entre páginas de resultados.

### Cocktail
- **Descripción**: En este ejemplo, se realiza un fetch en un proyecto React para mostrar una lista de cocteles en tarjetas (cards) y se utiliza un modal para mostrar detalles adicionales de cada coctel.
- **Características**:
  - Presentación de datos en tarjetas.
  - Modales para mostrar información detallada de los cocteles.
  - Uso de hooks de estado y efectos.

### Rick and Morty
- **Descripción**: Este ejemplo utiliza React Query para manejar las solicitudes HTTP y el estado de los datos. Además, implementa infinite scroll utilizando Intersection Observer.
- **Características**:
  - Uso de React Query para el manejo de datos.
  - Scroll infinito para cargar más personajes a medida que el usuario se desplaza.
  - Tarjetas para mostrar personajes de Rick and Morty.

## Cómo Usar Este Repositorio

1. **Clonar el repositorio**:
    ```bash
    git clone https://github.com/tuusuario/fetch-examples.git
    ```

2. **Instalar dependencias**:
    ```bash
    cd fetch-examples
    npm install
    ```

3. **Ejecutar el proyecto**:
    ```bash
    npm start
    ```

## Autor

Gonzalo Ilhuicatzi Netzahualcoyotl  
Email: g.ilhuicatzi@gmail.com
