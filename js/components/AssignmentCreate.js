export default {
    template: `
        <form @submit.prevent="add" class="flex mt-2 w-full">
            <input type="text" v-model="new_assignment" placeholder="Add new assignment..." class="text-black p-2 text-sm">
            <input type="submit" value="submit" class="bg-slate-300 border-l text-sm text-black p-2">
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