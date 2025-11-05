---
title: Dominando el Estado en React con Hooks
author: Jane Doe
date: 2024-07-21
tags: React, JavaScript, Frontend
readingTime: 7
excerpt: Profundiza en los Hooks de React como useState, useEffect y useReducer para gestionar el estado de tu aplicación de forma eficaz y escribir código más limpio y mantenible.
---

### Introducción a los Hooks de React

Los Hooks de React, introducidos en React 16.8, revolucionaron la forma en que escribimos componentes funcionales. Nos permiten "engancharnos" al estado y a las características del ciclo de vida de React desde componentes de función sin escribir una clase.

### El Poder de `useState`

El hook más fundamental es `useState`. Te permite añadir estado a tus componentes funcionales.

```jsx
import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>
        Haz clic aquí
      </button>
    </div>
  );
}
```

### Manejando Efectos Secundarios con `useEffect`

El Hook `useEffect` te permite realizar efectos secundarios en componentes funcionales. La obtención de datos, la configuración de una suscripción y la modificación manual del DOM son ejemplos de efectos secundarios.

```jsx
import React, { useState, useEffect } from 'react';

function Ejemplo() {
  const [contador, setContador] = useState(0);

  // Similar a componentDidMount y componentDidUpdate:
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = `Has hecho clic ${contador} veces`;
  });

  return (
    <div>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>
        Haz clic aquí
      </button>
    </div>
  );
}
```

### Conclusión

Los Hooks son una adición poderosa a React, que facilita la reutilización de la lógica con estado y la escritura de componentes complejos con menos código. Al dominar `useState` y `useEffect`, estarás en buen camino para convertirte en un desarrollador de React más competente.
