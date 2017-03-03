import Vue from 'vue';
import axios from 'axios';

window.axios = axios;
window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest'
};

import Users from './components/Users.vue';

new Vue({
    el: '#app',

    components: { Users }
});