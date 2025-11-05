---
title: TypeScript para Principiantes
author: Emily White
date: 2024-06-25
tags: TypeScript, JavaScript, Buenas Prácticas
readingTime: 10
excerpt: Aprende los conceptos básicos de TypeScript, incluyendo tipado estático, interfaces y genéricos, para escribir aplicaciones JavaScript más robustas y sin errores.
---

### ¿Por qué TypeScript?

TypeScript es un superconjunto de JavaScript que añade tipos estáticos. Esto significa que puedes detectar errores durante el desarrollo, mucho antes de que tu código se ejecute en el navegador. Esto conduce a un código más fiable, mejores herramientas y un autocompletado mejorado en tu editor.

### Tipos Básicos

Puedes añadir anotaciones de tipo a tus variables y parámetros de función.

```typescript
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
```

### Interfaces

Una interfaz es una forma de definir la estructura de un objeto. Es una manera poderosa de definir contratos dentro de tu código.

```typescript
interface Persona {
  nombre: string;
  apellido: string;
}

function saludar(persona: Persona) {
  return "Hola, " + persona.nombre + " " + persona.apellido;
}

let usuario = { nombre: "Jane", apellido: "User" };

document.body.textContent = saludar(usuario);
```
Esto asegura que cualquier objeto pasado a la función `saludar` tenga las propiedades `nombre` y `apellido` requeridas.

### Cómo Empezar

Para empezar con TypeScript, puedes instalarlo a través de npm:

```bash
npm install -g typescript
```

Luego, puedes compilar un archivo `.ts` a un archivo `.js` usando el compilador de TypeScript, `tsc`.
