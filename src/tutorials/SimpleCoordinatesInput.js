import {Autocomplete} from '../index';
export default {
    template: `
        <div>
            <section class="section">
                <div class="container">
                    <h1 class="title">Simple confirm</h1>
                    <p>This is a simple vue modal where you can listen to events if it is confirmed or canceled</p>
                    <pre>
    &#60;coordinate-input :drag-marker="true" @select="onSelect" :lat="0" :lng="0" lat-name="lat-name" lng-name="lng-name" api-key="">&#60;/coordinate-input>
        </pre>
                </div>
            </section>
            <section class="hero is-light">
                <div class="hero-body">

                    <div class="container">
                        <autocomplete value="" placeholder="Type to start autocomplete" delay="" @select="" value-adaptor="" input-adaptor="" url="" adaptor="" name="" data=""></autocomplete>
                    </div>

                </div>
            </section>
            
        </div>
    `,

    components: {
        Autocomplete,
    }
}
