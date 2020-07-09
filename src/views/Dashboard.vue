<template>
    <div >
        Dashboard
        <button type="onsubmit" class="button">
            <span>Peliculas
            </span>
        </button>
        <button type="onsubmit" class="button">
            <span>
            <router-link
                    :to="{
                name : 'Pedido'
            }">
                Pedido
            </router-link>
                </span>
        </button>
        <button type="onsubmit" class="button">
            <span>Paquetes
                </span>
        </button>
        <button ><span id="token"></span></button>
    </div>



</template>

<script>

    export default {
        created() {
            document.getElementById("token").innerHTML = localStorage.getItem("refresh");
        },
        name: 'Dashboard',
        components: {
            //
        }
    }
</script>

<style>
    .button {
        border-radius: 4px;
        background-color: #808080;
        border: none;
        color: #FFFFFF;
        text-align: center;
        font-size: 28px;
        padding: 20px;
        width: 200px;
        transition: all 0.5s;
        cursor: pointer;
        margin: 5px;
    }

    .button span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
    }

    .button span:after {
        content: '\00bb';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -20px;
        transition: 0.5s;
    }

    .button:hover span {
        padding-right: 25px;
    }

    .button:hover span:after {
        opacity: 1;
        right: 0;
    }
</style>
