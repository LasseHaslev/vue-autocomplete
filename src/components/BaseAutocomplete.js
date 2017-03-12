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
        }
    },

    data() {
        return {
            choices: [],
        }
    },

    mixins: [ 
        Input,
        InputEvents,
    ],

    methods: {
        doneTyping() {
            var self = this;
            this.search( this.inputValue ).then( function( response ) {
                self.choices = self.adaptor( response );
            } )
        },
    }

}
