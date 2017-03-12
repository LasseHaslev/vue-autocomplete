<template>
    <div id="app">
        <section class="section">
            <div class="container">
                <h3 class="title is-1">
                    <a href="https://github.com/LasseHaslev/vue-confirm">
                        @lassehaslev/vue-confirm
                    </a>
                </h3>
            </div>
        </section>

        <simple-coordinates-input></simple-coordinates-input>

        <div class="hero is-primary is-fullheight">
            <div class="hero-body"ı
                <div class="container is-fluid"></div>
            </div>
        </div>
    </div>
</template>

<script>
import SimpleCoordinatesInput from './tutorials/SimpleCoordinatesInput';
export default {
    name: 'app',
    data () {
        return {
        }
    },
    components: {
        SimpleCoordinatesInput,
    }
}
</script>
