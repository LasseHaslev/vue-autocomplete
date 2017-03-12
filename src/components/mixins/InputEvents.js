export default {

    mounted() {
        this.input.addEventListener( 'keyup', this.onKeyUp );
        this.input.addEventListener( 'focus', this.onInputFocus );
        this.input.addEventListener( 'blur', this.onInputFocusLost );
    },

    methods: {
        onKeyUp( evt ) {
            this.doneTyping();
        },
        onInputFocus( evt ) {
            console.log('Focus');
        },
        onInputFocusLost( evt ) {
            console.log('Blur');
        },
    },
}
