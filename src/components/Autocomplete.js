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
            <div class="panel is-default" v-if="showChoices_" style="background-color: white;">
                <div v-for="choice in choices" @click="confirm( choice )" class="panel-block" :style="{ 'background-color': isSelected(choice) ? '#E0E0E0' : 'inherit' }" style="cursor:pointer;">
                    {{ choiceAdaptor( choice ) }}
                </div>
            </div>
        </div>
    `,
}
