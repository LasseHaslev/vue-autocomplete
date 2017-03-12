import BaseAutocomplete from './BaseAutocomplete';

export default {
    mixins: [ BaseAutocomplete ],

    template: `
        <div>
            <p class="control">
                <input class="input"
                type="text"
                :name="name"
                :placeholder="placeholder"
                v-model="inputValue">
            </p>
            <div class="panel is-default" v-if="showChoices">
                <div v-for="choice in choices" class="panel-block">
                    {{ choice }}
                </div>
            </div>
        </div>
    `,
}
