<template>
  <div class="contenedor app-viewport d-flex flex-column">
    <!-- Contenedor maestro Flexbox horizontal para Sidebar + Contenido -->
    <div 
    class="
      d-flex 
      flex-column 
      flex-lg-row
      flex-grow-1 
      w-100 
      layout-wrapper
      order-0
      ">
      <Sidebar />
      <!-- Columna derecha contenedora que crecerá para ocupar el espacio restante -->
      <div 
      class=" 
        flex-grow-1 
        d-flex 
        flex-column 
        min-w-0 
        main-content-wrapper
        order-1
        "> 
          <main class="container p-4 order-2">
            <NuxtPage />
          </main>
      </div>
    </div>
  </div>
</template>
