<template>
    <div id="users_component">
        <form @submit.prevent="createUser" class="form-inline">
            <div :class="{'form-group': true, 'has-error': errors.username}">
                <input type="text" v-model="user.username" class="form-control" placeholder="username">
                <span class="help-block" v-for="error in errors.username">{{ error }}</span>
            </div>
            <div :class="{'form-group': true, 'has-error': errors.username}">
                <input type="email" v-model="user.email" class="form-control" placeholder="email">
                <span class="help-block" v-for="error in errors.email">{{ error }}</span>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-success">Create user</button>
            </div>
        </form>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>username</th>
                <th>email</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <user v-for="user in users" :user="user" @delete-user="deleteUser" @update-user="fetchUsers"></user>
            </tbody>
        </table>
    </div>
</template>

<script>
    import User from './User.vue';

    export default {
        data(){
            return {
                users: [],
                errors: [],
                user: {
                    username: '',
                    email: ''
                },
            }
        },
        components: {User},
        methods: {
            fetchUsers(){
                axios.get('/users').then(response => this.users = response.data.users);
            },
            createUser(){
                axios.post('/users', this.user)
                    .then(response => {
                        this.users.unshift(response.data.user);
                        this.user = {username: '', email: ''};
                        this.errors = [];
                    })
                    .catch(error => {
                        if (error.response.status === 422) {
                            this.errors = error.response.data;
                        }
                        console.log(error.response.data.message);
                    });
            },
            deleteUser(user){
                axios.delete(`/users/${user.id}`).then(() => {
                    let index = this.users.indexOf(user);
                    this.users.splice(index, 1);
                });
            },
        },
        created(){
            this.fetchUsers();
        }
    }
</script>