import Vue from 'vue';

// Vue.component('notification', require('./components/Notification.vue'));
import Notification from './components/Notification.vue';

new Vue({
    el: '#app',

    components: { Notification }
});