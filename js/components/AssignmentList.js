import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
export default {
    components:{
        Assignment, AssignmentTags
    },
    template:`
        <section v-show="assignments.length" class="p-4">
            <p class="text-xl font-bold">
                {{title}}
                <span>({{assignments.length}})</span>
            </p>
            <assignment-tags @change="current_tag = $event":initial-tags="assignments.map(a => a.tag)">  </assignment-tags>
            <ul class="text-lg border-2 border-gray-600 divide-y divide-gray-600">
                <assignment v-for="assignment in filtered_assignments" class="text-center" :key="assignment.id" :assignment="assignment">
                </assignment>
            </ul>
        </section>
    `,
    props: {
        assignments: Array,
        title: String,
    },
    data() {
        return {
            current_tag: 'all',
        };
    },
    computed: {
        filtered_assignments() {
            if (this.current_tag == 'all') {
                return this.assignments
            }
            else {
                return this.assignments.filter(a => a.tag === this.current_tag)
            }
        },
    }
}