import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
    components: {
        AssignmentList, AssignmentCreate
    },

    template: `
        <section class="flex gap-2 p-2">
            <assignment-list :assignments="filters.in_progress" title="In Progress" theme="light">
                <assignment-create @add="add"></assignment-create>
            </assignment-list>
            <assignment-list
                v-if="show" 
                :assignments="filters.completed " 
                title="Completed" 
                can-toggle
                @toggle="show = !show">
            </assignment-list>
        </section>
    `,
    data() {
        return {
            assignments: [],
            show: true
        }
    },
    created() {
        fetch('http://localhost:3001/assignments')
            .then( response => response.json())
            .then( data => {
               this.assignments = data;
            })
    },
    computed: {
        filters() {
            return {
                in_progress: this.assignments.filter(a => ! a.complete),
                completed: this.assignments.filter(a => a.complete),
            }
        }
    },
    methods: {
        add(name) {
            this.assignments.push({name: name, 
                                   complete:false, 
                                   id: this.assignments.length + 1
                                 });
        },
    }

}