import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
    components: {
        AssignmentList, AssignmentCreate
    },

    template: `
        <section>
            <assignment-list :assignments="filters.in_progress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
            <assignment-create @add="add"></assignment-create>
        </section>
    `,
    data() {
        return {
            assignments: [
                {name: 'Math', complete: false, id: 1},
                {name: 'English', complete: false, id: 2},
                {name: 'Science', complete: false, id: 3},
                {name: 'Mapeh', complete: false, id: 4},
            ],
        }
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