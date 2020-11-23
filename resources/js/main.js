import { name, version } from '../../package.json'
import vuePlugin from './plugin.js'

const awemaPlugin = {

    name, version,

    install() {
        Vue.use(vuePlugin)
    }
}

if ('AWEMA' in window) {
    AWEMA.use(awemaPlugin)
} else {
    window.__awema_plugins_stack__ = window.__awema_plugins_stack__ || []
    window.__awema_plugins_stack__.push(awemaPlugin)
}
