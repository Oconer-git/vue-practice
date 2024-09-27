export default {
    template: `
        <li class="flex justify-between align-center px-2 py-1">
            <label>{{assignment.name}}</label>
            <input type="checkbox" v-model="assignment.complete" class="ml-2">
        </li>
    `,

    props: {
        assignment: Object
    }

}