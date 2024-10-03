export default {
    template: `
        <form @submit.prevent="add" class="bg-white rounded-md flex justify-between mt-2">
            <input type="text" v-model="new_assignment" placeholder="Add new assignment..." class="rounded-md text-black p-2 text-sm">
            <input type="submit" value="submit" class="rounded-md bg-slate-300 border-l text-sm text-black p-2">
        </form>
    `,
    data() {
        return {
            new_assignment: ''
        }
    },
    methods: {
        add() {
            this.$emit('add',this.new_assignment);
            this.new_assignment = ''
        }
    }

}