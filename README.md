# Sidebar moderno y minimalista para Nuxt

Este repositorio contiene un componente de **Sidebar** profesional, diseñado con un enfoque minimalista y moderno. Es ideal para aplicaciones administrativas o dashboards que requieren una navegación fluida y responsiva.

![sidebar](https://github.com/davidquinterooo/Sidebar-Profesional-Nuxt/blob/ff52edb8948ae27736a2c1d1aa6799ecf164f1ad/Captura%20desde%202026-05-26%2011-16-16.png)
![sidebar](https://github.com/davidquinterooo/Sidebar-Profesional-Nuxt/blob/03d9c6f4ab20a989b3170a1a6bdab3ed21fb6e81/Captura%20desde%202026-05-26%2011-12-29.png) ![sidebar](https://github.com/davidquinterooo/Sidebar-Profesional-Nuxt/blob/9bd65d62f8427aded17069a537d59f9fb19e3084/Captura%20desde%202026-05-26%2011-12-46.png)

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
