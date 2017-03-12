import InputEvents from './mixins/InputEvents';
import HasChoices from './mixins/HasChoices';
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
        },
    },

    mixins: [ 
        Input,
        HasChoices,
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
        gotFocus() {
            this.showChoices = true;
        },
        lostFocus() {
            var self = this;
            window.setTimeout( function() {
                self.showChoices = false;
            }, 300 );
        },
        hasEnoughInputTypes() {
            return this.inputValue.length >= this.minLength
        },

        confirm( item ) {
            if ( !item && !this.choices.length) {
                return false;
            }
            else if (item) {
                var selectedItem = item;
            }
            else {
                var selectedItem = this.choices[ this.selectedIndex ];
            }

            this.inputValue = this.choiceAdaptor( selectedItem );

            this.$emit( 'selected', selectedItem );

            this.input.blur();
        },
    }

}
