<template>
    <ul>
        <li>
            <router-link
                    :to="{
                name : 'Home'
            }">
                Home
            </router-link>
        </li>
        <li>
            <router-link
                    :to="{
                name : 'Signin'
            }">
                Old login
            </router-link>
        </li>

        <li v-if="loggedIn">
            <router-link
                    :to="{
                name : 'Dashboard'
            }">
                Dasboard-b
            </router-link>
        </li>

        <li v-if="!loggedIn">
            <router-link
                    :to="{
                name : 'login'
            }">
                Login
            </router-link>
        </li>
            <li v-if="loggedIn" type="submit">
                <router-link
                        :to="{
                name : 'logout'
            }">
                    Logout
                </router-link>
            </li>

    </ul>
</template>

<script>
    export default {
        computed: {
            loggedIn() {
                return this.$store.getters.loggedIn
            }
        }
    }
</script>


<style lang="css">
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
    }

    li {
        float: left;
    }

    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    li a:hover {
        background-color: #111;
    }
</style>