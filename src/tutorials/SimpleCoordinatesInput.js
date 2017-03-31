import {Autocomplete} from '../index';
import axios from 'axios';
export default {
    template: `
        <div>
            <section class="section">
                <div class="container">
                    <h1 class="title">Simple object picker</h1>
                </div>
            </section>
            <section class="hero is-light">
                <div class="hero-body">

                    <div class="container">
                        <autocomplete value="" placeholder="Type to start autocomplete" delay="" @selected="onSelected" :search="onSearch" :adaptor="adaptor" name=""></autocomplete>
                        <div class="help">{{ lastSelected ? 'Last selected is: ' + lastSelected : 'None selected. Write something in input field.' }}</div>
                    </div>

                </div>
            </section>
            
        </div>
    `,

    data() {
        return {
            lastSelected: null,
        }
    },

    methods: {
        adaptor( data ) {
            return data.data.data;
        },
        onSearch( query ) {
            return axios.get( 'http://localhost:1337/api/states?q=' + query );
        },

        onSelected( selected ) {
            this.lastSelected = selected;
        }
    },

    components: {
        Autocomplete,
    }
}
