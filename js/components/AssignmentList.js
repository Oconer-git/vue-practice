import assignment from "./Assignment.js"
export default {
    components:{
        assignment,
    },
    template:`
        <section v-show="assignments.length" class="p-4">
            <h1 class="text-xl font-bold mb-2">{{title}}</h1>
            <ul class="text-lg border-2 border-gray-600 divide-y divide-gray-600">
                <assignment v-for="assignment in assignments" class="text-center" :key="assignment.id" :assignment="assignment">
                </assignment>
            </ul>
        </section>
    `,
    props: {
        assignments: Array,
        title: String,
    }
}