import {Autocomplete} from '../index';
import axios from 'axios';
export default {
    template: `
        <div>
            <section class="section">
                <div class="container">
                    <h1 class="title">Array picker</h1>
                </div>
            </section>
            <section class="hero is-light">
                <div class="hero-body">

                    <div class="container">
                        <autocomplete value="" placeholder="Type to start autocomplete" delay="" @selected="onSelected" :search="onSearch" :adaptor="adaptor" name=""></autocomplete>
                        <div class="help">{{ lastSelected ? 'Last selected is object: ' + lastSelected + ', with name "' + lastSelected.name + '" and value of "' + lastSelected.value + '"' : 'None selected. Write something in input field.' }}</div>
                    </div>

                </div>
            </section>
            
        </div>
    `,

    data() {
        return {
            options: [ 'Aardwolf', 'Admiral, indian red', 'Adouri (unidentified)', 'African black crake', 'African buffalo', 'African bush squirrel', 'African clawless otter', 'African darter', 'African elephant', 'African fish eagle', 'African ground squirrel (unidentified)', 'African jacana', 'African lion', 'African lynx', 'African pied wagtail', 'African polecat', 'African porcupine', 'African red-eyed bulbul', 'African skink', 'African snake (unidentified)', 'African wild cat', 'African wild dog', 'Agama lizard (unidentified)', 'Agile wallaby', 'Agouti', 'Albatross, galapagos', 'Albatross, waved', 'Alligator, american', 'Alligator, mississippi', 'Alpaca', 'Amazon parrot (unidentified)', 'American Virginia opossum', 'American alligator', 'American badger', 'American beaver', 'American bighorn sheep', 'American bison', 'American black bear', 'American buffalo', 'American crow', 'American marten', 'American racer', 'American woodcock', 'Anaconda (unidentified)', 'Andean goose', 'Ant (unidentified)', 'Anteater, australian spiny', 'Anteater, giant', 'Antechinus, brown', 'Antelope ground squirrel', 'Antelope, four-horned', 'Antelope, roan', 'Antelope, sable', 'Arboral spiny rat', 'Arctic fox', 'Arctic ground squirrel', 'Arctic hare', 'Arctic lemming', 'Arctic tern', 'Argalis', 'Armadillo, common long-nosed', 'Armadillo, giant', 'Armadillo, nine-banded', 'Armadillo, seven-banded', 'Asian elephant', 'Asian false vampire bat', 'Asian foreset tortoise', 'Asian lion', 'Asian openbill', 'Asian red fox', 'Asian water buffalo', 'Asian water dragon', 'Asiatic jackal', 'Asiatic wild ass', 'Ass, asiatic wild', 'Australian brush turkey', 'Australian magpie', 'Australian masked owl', 'Australian pelican', 'Australian sea lion', 'Australian spiny anteater', 'Avocet, pied' ],
            lastSelected: null,
        }
    },

    methods: {
        adaptor( data ) {
            return data;
        },
        onSearch( query ) {
            return Promise.resolve( this.options.filter( function(item) {
                return item.toLowerCase().indexOf( query.toLowerCase() ) !== -1;
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
