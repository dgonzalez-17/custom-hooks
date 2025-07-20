# 🧩 Custom Hooks en React

Este repositorio contiene una colección de **Custom Hooks** que desarrollé como parte de mi proceso de aprendizaje en **React**. Son funciones reutilizables que encapsulan lógica común para facilitar el desarrollo de componentes más limpios y eficientes.
> 🚧 *Este repositorio está en construcción mientras sigo aprendiendo React.*
---

## 🔧 Hooks incluidos

| Hook       | Descripción                                                  |
|------------|--------------------------------------------------------------|
| `useCounter` | Manejo de contadores con incremento, decremento y reset.   |
| `useFetch`   | Consumo de APIs externas con manejo de estados (`loading`, `error`, `data`). |
| `useForm`    | Manejo de formularios con estado centralizado.             |
| `useTodos`   | Gestión de tareas tipo ToDo con funcionalidades básicas.   |

---

## 🎯 Objetivos del repositorio

- Practicar creación y uso de hooks personalizados en React.
- Reforzar conceptos como *estado*, *efectos*, *customización de lógica* y *reutilización*.
- Usar este repositorio como una librería base en otros proyectos.

---

## 🚀 Cómo usar

Importa el hook que necesites en tu componente:

```js
import { useCounter } from './useCounter/useCounter';

const { counter, increment, decrement, reset } = useCounter();
```
## 🛠️ Tecnologías utilizadas
React (v18+)

JavaScript (ES6+)

Vite / CRA (dependiendo del entorno de pruebas)

## 📌 Estado del proyecto
✅ Repositorio en desarrollo, se irán agregando más hooks con el tiempo.

## ✍️ Autor
Yesid Gonzalez
Aprendiendo React con ganas y sin miedo al useEffect 💪
