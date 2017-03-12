export default {
    props: {
        placeholder: {
            type: String,
            default: '',
        },

        name: {
            type: String,
            default: '',
        },

        'input-selector': {
            type: String,
            default: 'input',
        }
    },

    data() {
        return {
            input: null,
        };
    },

    mounted() {
        this.input = this.$el.querySelector( this.inputSelector );
        if (! this.input) {
            throw 'We cannot find an input with css selector "' + this.inputSelector + '". Please use ( input-selector=\"{css selctor here}\" ). To help find your element.';
        }
    },
}
