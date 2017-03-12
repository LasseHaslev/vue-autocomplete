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
        }
    },

    mixins: [ 
        Input,
        InputEvents,
    ],

    methods: {
        doneTyping() {
            this.search( this.inputValue ).then( function( response ) {
                console.log(response);
            } )
        },
    }

}
