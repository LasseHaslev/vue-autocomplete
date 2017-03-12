import InputEvents from './mixins/InputEvents';
import Input from './mixins/Input';

export default {

    props: {
        'search-delay': {
            type: Number,
            default: 300,
        },
        'search': {
            type: Function,
            default() {
                throw 'No search function is set.';
            }
        },
        adaptor: {
            type: Function,
            default( response ) {
                return response;
            }
        },
        'min-length': {
            type: Number,
            default: 1,
        }
    },

    data() {
        return {
            choices: [],
        }
    },

    computed: {
        showChoices() {
            return this.choices.length && this.hasEnoughInputTypes();
        }
    },

    mixins: [ 
        Input,
        InputEvents,
    ],

    methods: {
        doneTyping() {
            var self = this;
            if (this.hasEnoughInputTypes()) {
                this.search( this.inputValue ).then( function( response ) {
                    self.choices = self.adaptor( response );
                } );
            }
        },
        hasEnoughInputTypes() {
            return this.inputValue.length >= this.minLength
        }
    }

}
