import {Autocomplete} from '../index';
import axios from 'axios';
export default {
    template: `
        <div>
            <section class="section">
                <div class="container">
                    <h1 class="title">Object picker</h1>
                </div>
            </section>
            <section class="hero is-light">
                <div class="hero-body">

                    <div class="container">
                        <autocomplete :choice-adaptor="choiceAdaptor" value="" placeholder="Type to start autocomplete" delay="" @selected="onSelected" :search="onSearch" :adaptor="adaptor" name=""></autocomplete>
                        <div class="help">{{ lastSelected ? 'Last selected is object: ' + lastSelected + ', with name "' + lastSelected.name + '" and value of "' + lastSelected.value + '"' : 'None selected. Write something in input field.' }}</div>
                    </div>

                </div>
            </section>
            
        </div>
    `,

    data() {
        return {
            options: [],
            lastSelected: null,
        }
    },

    mounted() {
        var colors = [ 'red', 'blue', 'green', 'pink', 'orange', 'berry' ];
        for (var i = 0, len = colors.length; i < len; i++) {
            this.options.push( {
                name: colors[i].charAt(0).toUpperCase() + colors[i].slice(1), // Capetalice first letter
                value: colors[i] + '-color',
            } );
        }
    },

    methods: {
        adaptor( data ) {
            console.log(data);
            return data;
        },
        choiceAdaptor( item ) {
            return item.name;
        },
        onSearch( query ) {
            // console.log(this.options);
            var self = this;
            return Promise.resolve( self.options.filter( function(item) {
                return item.name.toLowerCase().indexOf( query.toLowerCase() ) !== -1;
            } ) );
        },

        onSelected( selected ) {
            this.lastSelected = selected;
        }
    },

    components: {
        Autocomplete,
    }
}
