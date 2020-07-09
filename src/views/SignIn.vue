<template>
    <form @submit.prevent="submit">
        <div>
            <label for="username">
                Username
            </label>

            <input type="text" name="username" id="username" v-model="form.username">
        </div>

        <div>
            <label for="password">
                Password
            </label>

            <input type="password" name="password" id="password" v-model="form.password">
        </div>

        <div>
            <button type="submit">
                Sign in
            </button>
        </div>
    </form>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Signin',
        components: {
            //
        },
        data () {
            return {
                form: {
                    username: '',
                    password: ''
                }
            }
        },

        methods:{

            async submit() {

                let response = axios.post('http://localhost:8008/api/v1/security/login', {
                    username: this.form.username,
                    password: this.form.password
                },{
                    headers: {
                        'Content-Type': 'application/json',
                        }
                }
                ).catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                   } else if (error.request) {
                       console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                });
                console.log(response.data);
                console.log("olo");
                this.$router.push('Dashboard')
            }
        }
    }
</script>
