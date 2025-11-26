Proyecto GranMarc: E-commerce con APIs Externas y Panel Admin

Descripción General

Este proyecto representa la Entrega Final de un E-commerce desarrollado en React. El objetivo principal fue crear una aplicación completa que gestiona un catálogo de productos, un carrito de compras funcional, y un panel de administración robusto para el alta de nuevos ítems, todo ello apoyado en servicios externos (APIs) para la persistencia y almacenamiento de datos.

El proyecto demuestra un flujo de datos completo, desde la carga de un producto por el administrador hasta su visualización por el usuario final.

🛠️ Tecnologías Clave

Frontend: React (Vite)

Estilos: Bootstrap 5 (Clases de utilidad para un diseño responsivo y limpio).

Ruteo: React Router DOM (Manejo de rutas tipo SPA).

🎯 Características Implementadas

La aplicación se divide en dos grandes áreas para asegurar la funcionalidad completa de un E-commerce:

1. Área Pública (Frontend)

Catálogo (ItemListContainer): Muestra todos los productos obtenidos en tiempo real.

Detalle de Producto (ItemDetailContainer): Presenta información ampliada y la funcionalidad de contador para añadir al carrito.

Carrito (Cart): Gestión completa de añadir, eliminar ítems, y generar una orden de compra simulada.

2. Panel de Administración (Ruta Protegida)

Login (/admin): Implementación de un Contexto de Autenticación para proteger el acceso a las funciones de administración.

Alta de Productos: Formulario funcional para el ingreso de nuevos ítems, incluyendo la gestión de archivos (imágenes).

🔗 Arquitectura y Uso de APIs Externas

La clave del proyecto fue integrar servicios externos para manejar la persistencia de datos y el almacenamiento de archivos.

1. MockAPI (Base de Datos para JSON)

Función: Almacenamiento y gestión de la información estructurada de los productos (nombre, precio, descripción, categoría).

Implementación: Se realizaron llamadas asíncronas para las operaciones esenciales:

GET: Lectura del catálogo y detalles por ID.

POST: Envío de nuevos productos a la base de datos a través del formulario de administración.

2. ImgBB (Almacenamiento de Imágenes)

Función: Almacenamiento seguro de archivos binarios (las fotos de los productos).

Flujo de Datos:

El usuario sube una imagen en el formulario.

El código gestiona la subida de esta imagen a ImgBB.

ImgBB devuelve una URL pública permanente.

Solo esta URL (y no la imagen binaria) es guardada en el campo correspondiente del producto en MockAPI.

Este enfoque asegura un rendimiento óptimo, ya que la base de datos solo gestiona texto y los archivos pesados se sirven desde un CDN (Content Delivery Network).

🚀 Despliegue en Vercel

El proyecto está desplegado y accesible a través de Vercel.

Solución al Routing (Error 404)

Al tratarse de una Single Page Application (SPA), las rutas internas (/admin, /carrito) generaban un error 404 en el servidor. Esto se solucionó mediante la inclusión del archivo de configuración vercel.json en la raíz del proyecto, el cual reescribe todas las peticiones a index.html para que React Router tome el control del ruteo.