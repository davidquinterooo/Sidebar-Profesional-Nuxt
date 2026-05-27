# Sidebar moderno y minimalista para Nuxt

Este repositorio contiene un componente de **Sidebar** profesional, diseñado con un enfoque minimalista y moderno. Es ideal para aplicaciones administrativas o dashboards que requieren una navegación fluida y responsiva.

![sidebar](https://github.com/davidquinterooo/Sidebar-Profesional-Nuxt/blob/2d0991cb1d65b3afbd8352027e33b19945a69972/Captura%20desde%202026-05-27%2012-21-45.png)
![sidebar](https://github.com/davidquinterooo/Sidebar-Profesional-Nuxt/blob/88ca747670c68d80b93f5bc946978513c14a778e/Captura%20desde%202026-05-27%2012-20-29.png) ![sidebar](https://github.com/davidquinterooo/Sidebar-Profesional-Nuxt/blob/3b08dcfef66eeab1a72eee8b7b3fcd79e349df9f/Captura%20desde%202026-05-27%2012-20-49.png)

## Características

- **Diseño Moderno:** Estética limpia con bordes suaves y tipografía legible.
- **100% Responsivo:** Utiliza el sistema de rejilla y Offcanvas de Bootstrap para una experiencia perfecta en móviles y escritorio.
- **Enrutamiento (Routing):** Implementado con `NuxtLink` para aprovechar la navegación instantánea de Nuxt.
- **Fácil Integración:** Código modular listo para copiar y pegar en cualquier proyecto Nuxt.
- **Menús Colapsables:** Gestión de submenús organizada para mejorar la experiencia de usuario.

## Tecnologías

- Nuxt - Framework de Vue.js para la web.
- Bootstrap 5 - Framework de CSS para diseño responsivo.
- Bootstrap Icons - Librería de iconos oficial de Bootstrap.

## Configuración Rápida

### Instalación
```
npm install bootstrap bootstrap-icons
```
### nuxt.config.ts:
```
export default defineNuxtConfig({
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css'
  ]
})
```
## Setup

```
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```
