<template>
<div>
    <nav
        class="navbar bg-body-tertiary d-lg-none px-3 w-100"
        style="border-bottom: 1px solid rgba(0, 0, 0, 0.1);">
        <div class="container-fluid">
            <img
                src="/images/logo.png"
                alt="logo"
                width="32"
                height="32"
                class="me-2"
            >
            <NuxtLink class="nav-item nav-link link-dark" to="#">
                <span class="navbar-brand mb-0 h1 fs-5">SINIDOT</span>
            </NuxtLink> 
            <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-label="Toggle navigation"
            >
            <span class="navbar-toggler-icon" />
            </button>
        </div>
    </nav>
    <main>
    <!-- Sidebar -->
        <div
            id="sidebarMenu"
            class="
            sidebar 
            offcanvas-lg 
            offcanvas-start 
            d-flex flex-column 
            flex-shrink-0
            p-3 
            bg-light 
            vh-100 
            border-end
            "
            tabindex="-1"
            style="width: 280px;"
        >
            <NuxtLink 
            class="nav-item 
            nav-link 
            link-dark 
            d-none 
            d-lg-flex 
            align-items-center 
            mb-3 
            mb-md-0 
            me-md-auto
            link-dark 
            text-decoration-none
            p-2" 
            to="#"
            >
                <img
                src="/images/logo.png"
                alt="logo"
                width="32"
                height="32"
                class="me-2"
                >
                <span class="fs-4 m-0">SINIDOT</span>
            </NuxtLink> 

            <ul 
            class="
                nav 
                nav-pills 
                flex-column 
                mb-auto">
                <li>
                <NuxtLink class="sidebar-desk text-decoration-none link-dark" to="/">
                    <span class="navbar-brand mb-0 h1 fs-5 p-3">SINIDOT</span>
                </NuxtLink> 
                </li>
                <hr class="mt-2">
                <li>
                    <NuxtLink 
                    class="
                        nav-item   
                        nav-link 
                        link-dark" 
                        to="https:/fundavene.gob.ve/">
                        <i class="bi bi-balloon-heart-fill me-2" />
                        FUNDAVENE
                    </NuxtLink>    
                </li>
                <li>
                    <NuxtLink class="nav-item nav-link link-dark" to="#">
                        <i class="bi bi-house-heart-fill me-2" />
                        Inicio
                    </NuxtLink>    
                </li>
                <li>
                    <NuxtLink 
                    class="
                        nav-item 
                        nav-link 
                        link-dark" 
                        to="#">
                        <i class="bi bi-people me-2" width="16" height="16" />
                        Gestión de usuarios
                    </NuxtLink>    
                </li>
                <li class="nav-item">
                    <a
                    href="#"
                    class="nav-link 
                        link-dark 
                        d-flex 
                        align-items-center 
                        justify-content-between"
                    data-bs-toggle="collapse"
                    data-bs-target="#customers-collapse"
                    aria-expanded="false"
                    >
                    <div>
                        <i class="bi bi-people me-2" width="16" height="16" />
                        Gestión de donantes
                    </div>
                    <i class="bi bi-chevron-down small" />
                    </a>
                    <div id="customers-collapse" class="collapse">
                        <ul 
                        class="
                            btn-toggle-nav 
                            list-unstyled 
                            fw-normal 
                            pb-1 
                            small 
                            ps-4">
                            <li>
                                <NuxtLink 
                                class="
                                    link-dark 
                                    d-inline-flex 
                                    text-decoration-none 
                                    rounded 
                                    pt-2" 
                                    to="#">
                                    <i class="bi bi-people me-2" width="16" height="16" />
                                    Donantes
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item">
                    <a
                    href="#"
                    class="
                        nav-link 
                        link-dark 
                        d-flex 
                        align-items-center 
                        justify-content-between"
                    data-bs-toggle="collapse"
                    data-bs-target="#Solicitudes"
                    aria-expanded="false"
                    >
                    <div>
                        <i class="bi bi-people me-2" width="16" height="16" />
                        Gestión de solicitudes
                    </div>
                    <i class="bi bi-chevron-down small" />
                    </a>
                    <div id="Solicitudes" class="collapse">
                    <ul 
                    class="
                        btn-toggle-nav 
                        list-unstyled 
                        fw-normal 
                        pb-1 
                        small 
                        ps-4">
                        <li>
                            <NuxtLink 
                            class="
                                link-dark 
                                d-inline-flex 
                                text-decoration-none 
                                rounded 
                                pt-2" 
                                to="#">
                                <i class="bi bi-people me-2" width="16" height="16" />
                                Solicitantes
                            </NuxtLink>
                        </li>
                    </ul>
                    </div>
                </li>
                <li class="nav-item">
                    <a
                    href="#"
                    class="
                        nav-link 
                        link-dark 
                        d-flex 
                        align-items-center 
                        justify-content-between"
                    data-bs-toggle="collapse"
                    data-bs-target="#user-collapse"
                    aria-expanded="false"
                    >
                    <div>
                        <i class="bi bi-people me-2" width="16" height="16" />
                        User
                    </div>
                    <i class="bi bi-chevron-down small" />
                    </a>
                    <div 
                    id="user-collapse" class="collapse">
                        <ul 
                        class="
                            btn-toggle-nav 
                            list-unstyled 
                            fw-normal 
                            pb-1 small 
                            ps-4">
                            <li>
                                <NuxtLink 
                                class="
                                    link-dark 
                                    d-inline-flex 
                                    text-decoration-none 
                                    rounded 
                                    pt-2" 
                                    to="#">
                                    <i class="bi bi-person me-2" width="16" height="16" />
                                    Perfil
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink 
                                class="
                                    link-dark 
                                    d-inline-flex 
                                    text-decoration-none 
                                    rounded 
                                    pt-2" to="#">
                                    <i class="bi bi-box-arrow-right me-2" width="16" height="16" />
                                    Salir
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
<!-- End Sidebar -->
        <!-- Main Content Area -->
        <!-- End Main Content Area -->
        </main>       
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useNuxtApp } from '#app'

onMounted(() => {
    const { $bootstrap } = useNuxtApp()
    
    if ($bootstrap && $bootstrap.Tooltip) {
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
            .forEach(el => new $bootstrap.Tooltip(el))
    }
})
</script>

<style>
body {
    min-height: 100vh;
    min-height: -webkit-fill-available;
}

html {
    height: -webkit-fill-available;
}
</style>

<style scoped>
main {
    display: flex;
    flex-wrap: nowrap;
    height: 100vh;
    height: -webkit-fill-available;
    max-height: 100vh;
    overflow-x: auto;
    overflow-y: hidden;
}

.b-example-divider {
    flex-shrink: 0;
    width: 1.5rem;
    height: 100vh;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.bi {
    vertical-align: -.125em;
    pointer-events: none;
    fill: currentColor;
}

.dropdown-toggle { outline: 0; }

.nav-flush .nav-link {
    border-radius: 0;
}

.btn-toggle {
    display: inline-flex;
    align-items: center;
    padding: .25rem .5rem;
    font-weight: 600;
    color: rgba(0, 0, 0, .65);
    background-color: transparent;
    border: 0;
}

.btn-toggle:hover,
.btn-toggle:focus {
    color: rgba(0, 0, 0, .85);
    background-color: lightgray;
}

.btn-toggle[aria-expanded="true"] {
    color: rgba(0, 0, 0, .85);
}

.btn-toggle[aria-expanded="true"]::before {
    transform: rotate(90deg);
}

.btn-toggle-nav a {
    display: inline-flex;
    padding: .1875rem .5rem;
    margin-top: .125rem;
    margin-left: 1.25rem;
    text-decoration: none;
}

.btn-toggle-nav a:hover,
.btn-toggle-nav a:focus {
    background-color: lightgray;
}

.scrollarea {
    overflow-y: auto;
}

.fw-semibold { font-weight: 600; }

.lh-tight { line-height: 1.25; }

/*************************************************
 * Estilos para el menú desplegable
 *************************************************
 */

/* Estado inicial: el icono tiene una transición suave */
.nav-link .bi-chevron-down {
    transition: transform 0.3s ease;
}

/* Cuando el menú se expande, rotamos el icono 180 grados */
.nav-link[aria-expanded="true"] .bi-chevron-down {
    transform: rotate(180deg);
}

/********************************************
 * Efectos hover para los enlaces del sidebar
 ********************************************
 */

/* Efecto hover para los enlaces principales del sidebar
 */
.sidebar .nav-pills .nav-link:hover,
.sidebar .dropdown > a.dropdown-toggle:hover {
    background-color: rgba(0, 0, 0, 0.05); /* Un gris muy sutil */
    color: #000000 !important; /* Oscurece un poco el texto al pasar el cursor */
}

/* Efecto hover para el botón desplegable de Customers. */
.sidebar .btn.dropdown-toggle:hover {
    background-color: rgba(0, 0, 0, 0.05);
    color: #000000 !important;
}

/* Opcional: Agrega una transición suave a todos los elementos interactivos del
*  sidebar
*/
.sidebar .nav-link,
.sidebar .btn.dropdown-toggle,
.sidebar .btn-toggle-nav a,
.sidebar .dropdown > a.dropdown-toggle {
    transition: background-color 0.2s ease, color 0.2s ease;
}

/* Estilos para el separador (hr) dentro del sidebar */
.sidebar hr {
    margin-top: 2px;
    margin-bottom: 2px;
    margin-left: -1rem;  /* Contrarresta exactamente el p-3 del contenedor */
    margin-right: -1rem; /* Contrarresta exactamente el p-3 del contenedor */
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1); /* Asegura una línea limpia de lado a lado */
    opacity: 1; /* Bootstrap a veces baja la opacidad; con esto se ve nítida */
}

@media (min-width:991px){
    .sidebar-desk{
        display: none;
    }
}
</style>