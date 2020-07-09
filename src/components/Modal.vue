<template>
    <div id="app">
        <button type="button" class="btn" @click="showModal">
            Open Modal!
        </button>

        <modal v-show="isModalVisible" @close="closeModal" />
    </div>
</template>
    <script type="text/x-template" id="modal">

        <transition name="modal-fade">
            <div class="modal-backdrop" role="dialog">
                <div class="modal" ref="modal">
                    <header class="modal-header">
                        <slot name="header">
                            <h2>
                                This is the default tile!
                            </h2>


                        </slot>
                    </header>

                    <section class="modal-body">
                        <slot name="body">
                            I'm the default body!
                        </slot>
                    </section>

                    <footer class="modal-footer">
                        <slot name="footer">

                        </slot>
                    </footer>
                </div>
            </div>
        </transition>
    </script>


<script>

        const Modal = {
            name: 'modal',
            template: '#modal',
            methods: {
                close(event) {
                    this.$emit('close');
                },
            },
        };

        new Vue({
            el: '#app',
            name: 'app',
            components: {
                modal: Modal,
            },
            data () {
                return {
                    isModalVisible: false,
                };
            },
            methods: {
                showModal() {
                    this.isModalVisible = true;
                },
                closeModal() {
                    this.isModalVisible = false;
                }
            },
        });


</script>

<style scoped>

</style>
