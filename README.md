[Ver en Español](#español)

---

# Minimalist Blog

A clean, modern, open-source blog built with React, TypeScript, and Tailwind CSS. Designed with a focus on readability, performance, and a straightforward development experience. Content is managed through Markdown files, making it ideal for developers and technical writers.

## ✨ Key Features

- **Bilingual Support**: Full content available in English and Spanish, with a language switcher.
- **Customizable Theming**: Switch between multiple themes (Dark, Light, Sepia) and easily create your own.
- **Markdown-Based Content**: Write and manage posts using `.md` files with frontmatter for metadata.
- **Syntax Highlighting**: Code blocks feature syntax highlighting powered by `highlight.js`, supporting multiple languages.
- **"Copy Code" Functionality**: A button to easily copy the content of code blocks to the clipboard.
- **Real-Time Search and Filtering**:
    - **Filter by Tags**: Browse posts by selecting tags of interest.
    - **Instant Search**: Find posts by searching through titles, authors, or excerpts.
- **Optimized for User Experience**:
    - **Share Buttons**: Share posts on Twitter, LinkedIn, or copy the link.
    - **"Back to Top" Button**: Easily navigate to the top of long posts.
    - **Responsive Design**: Fully adaptable to any screen size.
- **Minimalist Aesthetic**: A clean, distraction-free interface with monospaced typography (`JetBrains Mono`) for excellent code and text readability.

## 🚀 Tech Stack

- **Frontend**: [React](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **State Management**: React Context for global state (Theme & Language).
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with the `typography` plugin and CSS Variables for dynamic theming.
- **Markdown Parsing**: [Marked.js](https://marked.js.org/) to convert Markdown to HTML on the client side.
- **Syntax Highlighting**: [Highlight.js](https://highlightjs.org/) for code colorization.
- **Bundler-Free**: The project uses an `importmap` to load dependencies directly from a CDN, simplifying the setup and eliminating the need for a build step.

## 📂 Project Structure

```
/
├── components/       # Reusable React components
├── contexts/         # React Context providers (ThemeContext)
├── pages/            # Page components
├── posts/            # Language-specific subdirectories for posts
│   ├── en/           # English posts and manifest
│   └── es/           # Spanish posts and manifest
├── themes/           # Theme definitions
├── utils/            # Utility functions
├── App.tsx           # Main component and routing logic
├── index.html        # Application entry point
└── README.md         # This documentation
```

## 🛠️ Getting Started

This project does not require a complex build process. You can run it directly with a static web server.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/minimalist-blog.git
    cd minimalist-blog
    ```

2.  **Start a local server:**
    You can use any static server, like Python's built-in server or Node's `serve`.
    ```bash
    # Python 3
    python -m http.server
    ```

3.  **Open your browser:**
    Visit `http://localhost:8000` to see the blog in action.

## 🎨 How to Create a New Theme

Adding a new theme is incredibly simple and requires editing only one file.

1.  **Open `themes/index.ts`:**
    This file contains an array of all available theme objects.

2.  **Add a New Theme Object:**
    Copy an existing theme object and paste it at the end of the `themes` array. Customize the `name` and the color palette. The system will automatically pick it up and add it to the theme switcher.

    Example of a new "Forest" theme:
    ```typescript
    // in themes/index.ts
    {
      name: 'forest', // Unique, lowercase name
      colors: {       // Define your color palette
        'background': '#1a2e2a',
        'text-primary': '#e0e7d4',
        'text-secondary': '#a3b8a3',
        'accent': '#6a994e',
        'accent-hover': '#8abf69',
        'card': '#24403a',
        'border': '#3c6454',
        // ... and so on for all color properties
      },
    },
    ```
That's it! No other code changes are needed.

## ✍️ How to Add a New Post

To add a new post in both languages, follow these steps:

1.  **Create the English Markdown file:**
    - Add a new `.md` file inside the `/posts/en` directory (e.g., `my-new-post.md`). The filename becomes the URL slug.
    - Add the frontmatter with the post's metadata.

2.  **Create the Spanish Markdown file:**
    - Add a corresponding `.md` file in `/posts/es` with the **exact same filename** (`my-new-post.md`).
    - Add the translated frontmatter.

3.  **Update both manifests:**
    - Add the new post's metadata to `/posts/en/manifest.json`.
    - Add the translated metadata to `/posts/es/manifest.json`.
    - **Crucially, the `id` must be the same in both files** and must match the filename.

## 🤝 How to Contribute

Contributions are welcome! Please open an issue to discuss your ideas before submitting a pull request.

## 📄 License

This project is licensed under the **MIT License**.

---

<div id="español"></div>

[View in English](#)

---

# Blog Minimalista

Un blog de código abierto, limpio y moderno construido con React, TypeScript y Tailwind CSS. Diseñado con un enfoque en la legibilidad, el rendimiento y una experiencia de desarrollo sencilla. El contenido se gestiona a través de archivos Markdown, haciéndolo ideal para desarrolladores y escritores técnicos.

## ✨ Características Principales

- **Soporte Bilingüe**: Contenido completo disponible en inglés y español, con un selector de idioma.
- **Temas Personalizables**: Cambia entre múltiples temas (Oscuro, Claro, Sepia) y crea los tuyos fácilmente.
- **Gestión de Contenido con Markdown**: Escribe y gestiona posts usando archivos `.md` con *frontmatter* para los metadatos.
- **Resaltado de Sintaxis**: Bloques de código con resaltado de sintaxis gracias a `highlight.js`.
- **Funcionalidad "Copiar Código"**: Un botón para copiar fácilmente el contenido de los bloques de código.
- **Búsqueda y Filtrado en Tiempo Real**:
    - **Filtrado por Etiquetas**: Navega por los posts seleccionando etiquetas.
    - **Búsqueda Instantánea**: Encuentra posts buscando por título, autor o extracto.
- **Optimizado para la Experiencia de Usuario**:
    - **Botones para Compartir**: Comparte posts en redes sociales o copia el enlace.
    - **Botón "Volver Arriba"**: Navega fácilmente al inicio en posts largos.
    - **Diseño Responsivo**: Totalmente adaptable a cualquier pantalla.
- **Estética Minimalista**: Una interfaz limpia y sin distracciones, con una tipografía monoespaciada (`JetBrains Mono`) para una excelente legibilidad.

## 🚀 Tecnologías Utilizadas

- **Frontend**: [React](https://react.dev/) y [TypeScript](https://www.typescriptlang.org/)
- **Gestión de Estado**: React Context para el estado global (Tema e Idioma).
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) con el plugin `typography` y Variables CSS para temas dinámicos.
- **Parseo de Markdown**: [Marked.js](https://marked.js.org/)
- **Resaltado de Sintaxis**: [Highlight.js](https://highlightjs.org/)
- **Sin Bundler**: El proyecto utiliza un `importmap` para cargar dependencias desde una CDN, simplificando la configuración.

## 📂 Estructura del Proyecto

```
/
├── components/       # Componentes reutilizables de React
├── contexts/         # Providers de React Context (ThemeContext)
├── pages/            # Componentes de página
├── posts/            # Subdirectorios por idioma para los posts
│   ├── en/           # Posts y manifiesto en inglés
│   └── es/           # Posts y manifiesto en español
├── themes/           # Definiciones de los temas
├── utils/            # Funciones de utilidad
├── App.tsx           # Componente principal y lógica de enrutamiento
├── index.html        # Punto de entrada de la aplicación
└── README.md         # Esta documentación
```

## 🛠️ Cómo Empezar

Este proyecto no requiere un proceso de compilación complejo. Puedes ejecutarlo directamente con un servidor web estático.

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/minimalist-blog.git
    cd minimalist-blog
    ```

2.  **Inicia un servidor local:**
    Puedes usar cualquier servidor estático, como el servidor integrado de Python o `serve` de Node.
    ```bash
    # Python 3
    python -m http.server
    ```

3.  **Abre el navegador:**
    Visita `http://localhost:8000` para ver el blog en acción.

## 🎨 Cómo Crear un Nuevo Tema

Añadir un nuevo tema es increíblemente sencillo y solo requiere editar un archivo.

1.  **Abre `themes/index.ts`:**
    Este archivo contiene un array con todos los objetos de tema disponibles.

2.  **Añade un Nuevo Objeto de Tema:**
    Copia un objeto de tema existente y pégalo al final del array `themes`. Personaliza el `name` y la paleta de colores. El sistema lo detectará automáticamente y lo añadirá al selector de temas.

    Ejemplo de un nuevo tema "Bosque" (`forest`):
    ```typescript
    // en themes/index.ts
    {
      name: 'forest', // Nombre único en minúsculas
      colors: {       // Define tu paleta de colores
        'background': '#1a2e2a',
        'text-primary': '#e0e7d4',
        'text-secondary': '#a3b8a3',
        'accent': '#6a994e',
        'accent-hover': '#8abf69',
        'card': '#24403a',
        'border': '#3c6454',
        // ... y así sucesivamente para todas las propiedades de color
      },
    },
    ```
¡Eso es todo! No se necesita ningún otro cambio en el código.

## ✍️ Cómo Añadir un Nuevo Post

Para añadir un nuevo post en ambos idiomas, sigue estos pasos:

1.  **Crea el archivo Markdown en inglés:**
    - Añade un nuevo archivo `.md` en `/posts/en` (ej. `mi-nuevo-post.md`). El nombre del archivo será la URL.
    - Añade el *frontmatter* con los metadatos.

2.  **Crea el archivo Markdown en español:**
    - Añade un archivo `.md` correspondiente en `/posts/es` con el **mismo nombre de archivo** (`mi-nuevo-post.md`).
    - Añade el *frontmatter* traducido.

3.  **Actualiza ambos manifiestos:**
    - Añade los metadatos del nuevo post a `/posts/en/manifest.json`.
    - Añade los metadatos traducidos a `/posts/es/manifest.json`.
    - **Es crucial que el `id` sea idéntico en ambos archivos** y coincida con el nombre del archivo.

## 🤝 Cómo Contribuir

¡Las contribuciones son bienvenidas! Por favor, abre un issue para discutir tus ideas antes de enviar un pull request.

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**.
