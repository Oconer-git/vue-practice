import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
export default {
    components:{
        Assignment, AssignmentTags
    },
    template:`
        <section v-show="assignments.length" class="p-4 w-64">
            <div class="flex justify-between items-start">
                <p class="text-xl font-bold mb-1">
                    {{title}}
                    <span>({{assignments.length}})</span>
                </p>
                <button v-show="canToggle" @click="$emit('toggle')">
                    &times
                </button>
            </div>
         
            <assignment-tags 
                v-model:current_tag = "current_tag"
                :initial-tags= "assignments.map(a => a.tag)"
                ></assignment-tags>
            <ul class="text-lg border-2 border-gray-600 divide-y divide-gray-600">
                <assignment v-for="assignment in filtered_assignments" class="text-center" :key="assignment.id" :assignment="assignment">
                </assignment>
            </ul>
            <slot></slot>
        </section>  
    `,
    props: {
        assignments: Array,
        title: String,
        canToggle: {type:Boolean, default:false}
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