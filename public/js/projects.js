class Errors {
    constructor() {
        this.errors = {};
    }

    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    record(errors) {
        this.errors = errors;
    }

    clear(field) {
        if (field) {
            delete this.errors[field];

            return;
        }

        this.errors = {};
    }

    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    any() {
        return Object.keys(this.errors).length > 0;
    }
}

class Form {
    constructor(data) {
        this.originalData = data;

        for (let field in data) {
            this[field] = data[field];
        }

        this.errors = new Errors();
    }

    reset() {
        for (let field in this.originalData) {
            this[field] = '';
        }
    }

    data() {
        let data = {};

        for (let property in this.originalData) {
            data[property] = this[property];
        }

        return data;
    }

    submit(requestType, url) {
        return new Promise((resolve, reject) => {
            axios[requestType](url, this.data())
                .then(response => {
                    this.onSuccess(response.data);

                    resolve(response.data);
                })
                .catch(error => {
                    this.onFail(error.response.data);

                    reject(error.response.data);
                });
        });

    }

    onSuccess(data) {
        console.log(data.message);
        this.errors.clear();
        this.reset();
    }

    onFail(data) {
        this.errors.record(data);
    }
}

new Vue({
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