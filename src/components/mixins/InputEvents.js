export default {

    mounted() {
        this.input.addEventListener( 'keyup', this.onKeyUp );
        this.input.addEventListener( 'focus', this.onInputFocus );
        this.input.addEventListener( 'blur', this.onInputFocusLost );
    },

    methods: {
        onKeyUp( evt ) {
            switch (evt.keyCode) {
                case 38: // Arrow up
                    this.moveUp();
                    break;
                case 40: // Arrow down
                    this.moveDown();
                    break;
                case 13: // Enter
                    this.confirm();
                    break;
                
                default:
                    this.doneTyping();
            }
        },
        onInputFocus( evt ) {
            this.gotFocus();
        },
        onInputFocusLost( evt ) {
            this.lostFocus();
        },
    },
}
