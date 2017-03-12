import BaseAutocomplete from './BaseAutocomplete';

export default {
    mixins: [ BaseAutocomplete ],

    template: `
        <p class="control">
            <input class="input"
            type="text"
            :name="name"
            :placeholder="placeholder"
            v-model="inputValue">
        </p>
    `,
}
