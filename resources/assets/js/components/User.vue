<template>
    <tr>
        <td>
            <input type="text" class="form-control" v-model="editForm.username" v-if="edit">
            <span v-else>{{ user.username }}</span>
        </td>
        <td>
            <input type="text" class="form-control" v-model="editForm.email" v-if="edit">
            <span v-else="edit">{{ user.email }}</span>
        </td>
        <td>
            <button @click="editUser" type="button" class="btn btn-info" v-show="!edit">Edit</button>
            <button @click="updateUser" type="button" class="btn btn-success" v-show="edit">Save</button>
            <button @click="cancelEdit" type="button" class="btn btn-default" v-show="edit">cancel</button>
            <button @click="$emit('delete-user', user)" type="button" class="btn btn-danger" v-if="!edit">&times;</button>
        </td>
    </tr>
</template>

<script>
    export default {
        props: ['user'],

        data(){
            return {
                edit: false,
                editForm: {
                    username: '',
                    email: ''
                }
            }
        },

        methods: {
            editUser(){
                this.edit = true;
                this.editForm.username = this.user.username;
                this.editForm.email = this.user.email;
            },

            cancelEdit(){
                this.edit = false;
            },
            updateUser(){
                axios.patch(`/users/${this.user.id}`, this.editForm)
                    .then(response => {
                        this.$emit('update-user');
                        this.cancelEdit();
                        console.log(response.data);
                    });
            }
        }
    }
</script>