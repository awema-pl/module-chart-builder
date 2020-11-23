import chartBuilder from '../vue/chart-builder.vue'
// import chartLine from '../vue/chart-line.vue'

export function install(Vue) {

    if ( this.installed ) return
    this.installed = true

    Vue.component('chart-builder', chartBuilder)
    // Vue.component('chart-line', chartLine)
}

export default {
    installed: false,
    install
}