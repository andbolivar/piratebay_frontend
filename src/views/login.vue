<template>
    <div class="login-form">
        <h2 class="login-heading">Login</h2>
        <form action="#" @submit.prevent="login">

            <div class="form-control">
                <label for="username">Username</label>
                <input type="username" name="username" id="username" class="login-input" v-model="username">
            </div>

            <div class="form-control mb-more">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" class="login-input" v-model="password">
            </div>

            <div class="form-control">
                <button type="submit" class="btn-submit">Login</button>
            </div>

        </form>
    </div>
</template>

<script>
    export default {

        name: 'login',
        data() {
            return {
                username: '',
                password: '',
            }
        },
        methods: {
            login() {
                this.$store.dispatch('retrieveToken', {
                    username: this.username,
                    password: this.password,
                })
                    .then(response => {
                        console.log(response)
                        this.$router.push('Dashboard')
                    })
            }
        }
    }
</script>