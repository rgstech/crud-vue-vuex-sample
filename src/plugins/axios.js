import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({ // lembrar que definindo no prototype fica disponivel em toda instancia do Vue 
            baseURL: "http://localhost:8080/clientes/"
        }) //obs o axios create criar um instancia do axios preconfigurada e personalizada
    }
})