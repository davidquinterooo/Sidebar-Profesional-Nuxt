<template>
<div>
    <nav
        class="navbar bg-body-tertiary d-lg-none px-3 w-100 bg-light"
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
                <span class="navbar-brand mb-0 h1 fs-5 color-white">SINIDOT</span>
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
                <span class="fs-4 m-0"
                style="
                color: #FFFFFF;
                font-weight: bold;
                ">SINIDOT</span>
            </NuxtLink> 

            <ul 
            class="
                nav 
                nav-pills 
                flex-column 
                mb-auto">
                <li class="nav-item">
                <NuxtLink class="sidebar-desk text-decoration-none link-dark" to="/">
                    <img
                        src="/images/logo.png"
                        alt="logo"
                        width="32"
                        height="32"
                        class="ms-2"
                    >
                    <span class="navbar-brand mb-0 h1 fs-5 p-3 color-white"><b>SINIDOT</b></span>
                </NuxtLink> 
                </li>
                <hr class="mt-2 mb-2" style="color: #FFFFFF !important;">
                <li class="nav-item">
                    <NuxtLink 
                    class="
                        nav-link 
                        link-dark" 
                        to="https:/fundavene.gob.ve/">
                        <i class="bi bi-link-45deg me-2 color-white" />
                        <b class="color-white">FUNDAVENE</b>
                    </NuxtLink>    
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link link-dark" to="#">
                        <i class="bi bi-house-door me-2 color-white" />
                        <b class="color-white">Inicio</b>
                    </NuxtLink>    
                </li>
                <li>
                    <NuxtLink 
                    class="
                        nav-item 
                        nav-link 
                        link-dark" 
                        to="#">
                        <i class="bi bi-people me-2 color-white" width="16" height="16" />
                        <b class="color-white">Gestión de usuarios</b> 
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
                        <i class="bi bi-file-earmark-text me-2 color-white" width="16" height="16" />
                        <b class="color-white">Gestión de donantes</b>
                    </div>
                    <i class="bi bi-chevron-down small" 
                    style="color: #FFFFFF !important;"/>
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
                                    <i class="bi bi-file-earmark-text me-2 color-white" width="16" height="16" />
                                    <b class="color-white">Donantes</b>
                                    
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
                        <i class="bi bi-file-earmark-text me-2 color-white" width="16" height="16" />
                        <b class="color-white">Gestión de solicitudes</b>
                        
                    </div>
                    <i class="bi bi-chevron-down small" style="color: #FFFFFF !important;" />
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
                                <i class="bi bi-file-earmark-text me-2 color-white" width="16" height="16" />
                                <b class="color-white">Solicitantes</b> 
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
                        <i class="bi bi-people me-2 color-white" width="16" height="16" />
                        <b class="color-white">User</b>
                        
                    </div>
                    <i class="bi bi-chevron-down small" style="color: #FFFFFF !important;" />
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
                                    <i class="bi bi-person me-2 color-white" width="16" height="16" />
                                    <b class="color-white">Perfil</b>
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
                                    <i class="bi bi-box-arrow-right me-2 color-white" width="16" height="16" />
                                    <b class="color-white">Salir</b> 
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

