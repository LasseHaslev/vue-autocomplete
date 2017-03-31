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

        <array-picker></array-picker>
        <object-picker></object-picker>
        <axios-complete></axios-complete>

        <div class="hero is-primary is-fullheight">
            <div class="hero-body"ı
                <div class="container is-fluid"></div>
            </div>
        </div>
    </div>
</template>

<script>
import AxiosComplete from './tutorials/AxiosComplete';
import ObjectPicker from './tutorials/ObjectPicker';
import ArrayPicker from './tutorials/ArrayPicker';
export default {
    name: 'app',
    data () {
        return {
        }
    },
    components: {
        AxiosComplete,
        ObjectPicker,
        ArrayPicker,
    }
}
</script>
