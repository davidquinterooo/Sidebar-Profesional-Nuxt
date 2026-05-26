import { defineNuxtPlugin } from '#app'
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default defineNuxtPlugin((_nuxtApp) => {
    return {
        provide: {
        bootstrap: bootstrap
        }
    }
})