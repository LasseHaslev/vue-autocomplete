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
            <div class="panel is-default" v-if="showChoices_">
                <div v-for="choice in choices" @click="confirm( choice )" track-by="$index" class="panel-block">
                    {{ isSelected(choice) ? 'Selected: ' : 'Not selected: ' }}
                    {{ choiceAdaptor( choice ) }}
                </div>
            </div>
        </div>
    `,
}
