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
            <ul>
                <li v-for="choice in choices">{{ choice }}</li>
            </ul>
        </div>
    `,
}
