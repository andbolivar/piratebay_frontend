<template>

    <div class="form">
        <TheNavigation1 />
        <h2 class="heading">*Nombre de pelicula</h2>
        <form action="#" @submit.prevent="updateC">
            <!--div>{{posts[i].movie.id}}</div-->
            <div class="form-control">
                <label for="mCount">Movie count </label>
                <input type="mCount" name="mCount" id="mCount" v-model="mCount">
            </div>
            <!--div>{{posts[i].movie.name}}</div-->
            <div class="form-control mb-more">
                <label >Ware House Count = *#*</label>
                <p></p>
                <label >Movie Buyed Count = *#*</label>

            </div>

            <div class="form-control">
                <button type="submit" class="btn-submit">Llamar a courrier</button>
            </div>


        </form>
        <form action="#" @submit.prevent="Reportar">
            <div class="form-control">
                <button type="submit" class="btn-submit">Reportar Problema</button>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from "axios";
    import TheNavigation1 from '@/components/TheNavigation1'

    export default {

        name: 'Pelicula',
        data() {
            return {
                posts:null,
                mCount: '',
                wCount: '',
            }
        },

        components: {
            TheNavigation1
        },
        methods: {
            mounted() {
                axios.get(`http://localhost:8008/api/v1/movie/1`,{'headers': { 'Authorization': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmZWF0dXJlcyI6W10sInN1YiI6IjQiLCJpc3MiOiJQaXJhdGVCYXkiLCJ0eXBlIjoiQVVUSE4iLCJleHAiOjE1OTQzMzc1Mzh9.kAEYh-d_fJW0P9dIHYHnTY5BZZ3d14fTPYETmFfzagM'}})
                    .then(response => {
                        this.posts = response.data
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            },

            updateC() {
                axios.post(`http://localhost:8008/api/v1/order/4`,
                    {'headers':
                            { 'Authorization': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmZWF0dXJlcyI6W10sInN1YiI6IjQiLCJpc3MiOiJQaXJhdGVCYXkiLCJ0eXBlIjoiQVVUSE4iLCJleHAiOjE1OTQzMzc1Mzh9.kAEYh-d_fJW0P9dIHYHnTY5BZZ3d14fTPYETmFfzagM'},
                    'Body' : {
                        "list_id": "#",
                        "movie_count": "mCount"
                    }}
                    )
                    .then(response => {
                        this.posts = response.data
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            }
        }
    }
</script>
<style scoped>

</style>
