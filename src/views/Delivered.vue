<template>

    <div>
        <TheNavigation1 />
        <h1>Entregado</h1>
        <table class="table table-bordered table-hover">
            <thead>
            <tr>
                <th>Numero de pedido</th>
                <th>Fecha ordenada</th>
                <th>Fecha enviada</th>
                <th>Fecha recibida</th>

            </tr>
            </thead>
            <tbody>
            <tr v-for="(post,i) in posts" :key="i">
                <th>{{ posts[i].list_id }}</th>
                <th>{{ posts[i].date_order }}</th>
                <td>{{ posts[i].date_courrier }} </td>
                <td>{{ posts[i].date_recived }}</td>
            </tr>
            </tbody>
        </table>
    </div>


</template>

<script>
    import TheNavigation1 from '@/components/TheNavigation1'
    import axios from 'axios'


    export default {
        name: 'Delivered',

        mounted() {
            axios.get(`http://localhost:8008/api/v1/order/3`,{'headers': { 'Authorization': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmZWF0dXJlcyI6W10sInN1YiI6IjQiLCJpc3MiOiJQaXJhdGVCYXkiLCJ0eXBlIjoiQVVUSE4iLCJleHAiOjE1OTQzMzc1Mzh9.kAEYh-d_fJW0P9dIHYHnTY5BZZ3d14fTPYETmFfzagM'}})
                .then(response => {
                    this.posts = response.data
                })
                .catch(e => {
                    this.errors.push(e)
                })
        },
        components: {
            TheNavigation1
        },

        data() {
            return {
                posts:null,
                params: {
                    /* data: [
                        ['Numero pedido', `Fecha Pedido`, `Cliente`, `Direccion`],
                    ],*/
                    data: this.posts,
                    header: 'row',
                    border: true,
                    stripe: true,
                    height: 180
                }
            }
        },
        methods: {
            mostrar_dato: function (data) {
                // this dentro de los métodos apunta a la instancia de Vue
                // eslint-disable-next-line no-undef
                console.log(data.list_id)
                alert(data.list_id)
            }
        }


    }

</script>
<style  scoped>
    table {
        border-collapse: collapse;
        width: 100%;
    }

    th, td {
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(even) {background-color: #f2f2f2;}
</style>
