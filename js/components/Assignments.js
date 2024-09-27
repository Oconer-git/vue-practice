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
                {name: 'Algebra 1', complete: false, id: 1, tag: 'Math' },
                {name: 'Adj and Action Words', complete: false, id: 2, tag: 'English'},
                {name: 'Dance video', complete: false, id: 3, tag: 'Mapeh'},
                {name: 'Arts', complete: false, id: 4, tag: 'Mapeh'},
                {name: 'Trigonometry', complete: false, id: 5, tag: 'Math'},
                {name: 'Calculus', complete: false, id: 6, tag: 'Math'},
                {name: 'Sports essay', complete: false, id: 7, tag: 'PE'},
                {name: 'Sports video', complete: false, id: 8, tag: 'PE'},
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