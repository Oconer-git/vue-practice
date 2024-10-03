
import Assignments from "./Assignments.js";
import Panel from "./Panel.js"
export default {
    components: {
        Assignments, Panel
    },
    template: `
        <div class="flex gap-2">
            <assignments></assignments>
            <panel theme="light">
                <template v-slot:heading>
                    First heading slot
                </template>
                <template v-slot:default>
                    This is default slot
                </template>
            </panel>
            <panel theme="dark">
                <template v-slot:heading>
                    Second heading slot
                </template>
                <template v-slot:footer>
                    this is footer
                </template>
            </panel>
        </div>
        `
    ,
  
}