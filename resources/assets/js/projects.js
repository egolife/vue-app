
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Form from './core/Form';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    data: {
        form: new Form({
            name: '',
            description: ''
        }),
        projects: [],
        isLoading: false
    },
    methods: {
        onSubmit(){
            this.isLoading = true;
            this.form.submit('post', '/projects')
                .then(this.handleResponse)
                .catch(errorData => {
                    console.log(errorData);
                    this.isLoading = false;
                });
        },
        handleResponse(data){
            this.getProjects();
            console.log(data.message + ' ' + 'handler');
            this.isLoading = false;
        },
        getProjects(){
            axios.get('/projects')
                .then(response => this.projects = response.data);
        }
    },
    mounted(){
        this.getProjects();
    }
});
