<template>
    <div id="app">
        <section class="section">
            <div class="container">
                <h3 class="title is-1">
                    <a href="https://github.com/LasseHaslev/vue-autocomplete">
                        @lassehaslev/vue-autocomplete
                    </a>
                </h3>
            </div>
        </section>

        <simple-coordinates-input></simple-coordinates-input>
        <object-picker></object-picker>

        <div class="hero is-primary is-fullheight">
            <div class="hero-body"ı
                <div class="container is-fluid"></div>
            </div>
        </div>
    </div>
</template>

<script>
import SimpleCoordinatesInput from './tutorials/SimpleCoordinatesInput';
import ObjectPicker from './tutorials/ObjectPicker';
export default {
    name: 'app',
    data () {
        return {
        }
    },
    components: {
        SimpleCoordinatesInput,
        ObjectPicker,
    }
}
</script>
