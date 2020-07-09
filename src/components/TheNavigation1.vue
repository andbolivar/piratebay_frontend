<template>
    <ul>

        <li type="submit">
            <router-link
                    :to="{
                name : 'Pedido'
            }">
                Pedido
            </router-link>
        </li>

        <li type="submit">
            <router-link
                    :to="{
                name : 'Pelicula'
            }">
                Pelicula
            </router-link>
        </li>

        <li type="submit">
            <router-link
                    :to="{
                name : 'Courrier'
            }">
                Courrier
            </router-link>
        </li>

        <li type="submit">
            <router-link
                    :to="{
                name : 'Delivered'
            }">
                Delivered
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
        background-color: #444;
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
        background-color: #222;
    }
</style>
