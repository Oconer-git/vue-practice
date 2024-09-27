import assignment from "./Assignment.js";
export default {
    components:{
        assignment,
    },
    template:`
        <section v-show="assignments.length" class="p-4">
            <p class="text-xl font-bold">
                {{title}}
                <span>({{assignments.length}})</span>
            </p>
            <div class="flex gap-2 mb-4">
                <button @click="current_tag = tag" v-for="tag in tags" class="border rounded-md text-sm px-1 py"> 
                    {{tag}}
                </button>
            </div>
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
        tags() {
            return ['all', ...new Set(this.assignments.map(a => a.tag))];
        }
    }
}