export default {

    computed: {
        showChoices_() {
            return this.showChoices 
                && this.choices.length
                && this.hasEnoughInputTypes();
        }
    },

    watch: {
        choices() {
            // Reset selected index whenever our options changes
            this.selectedIndex = 0;
        },
    },

    props: {
        'choice-adaptor': {
            type: Function,
            default( item ) {
                return item;
            },
        }
    },

    data() {
        return {
            showChoices: false,
            choices: [],
            selectedIndex: 0,
        }
    },

    methods: {
        moveDown() {
            if (++this.selectedIndex >= this.choices.length -1) {
                this.selectedIndex = this.choices.length-1;
            }
        },
        moveUp() {
            if (--this.selectedIndex <= 0) {
                this.selectedIndex = 0;
            }
        },

        isSelected( choice ) {
            return choice == this.choices[ this.selectedIndex ];
        },
    }

}
