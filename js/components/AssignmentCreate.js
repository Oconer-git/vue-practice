export default {
    template: `
        <form @submit.prevent="add" class="p-4">
            <input type="text" v-model="new_assignment" placeholder="Add new assignment..." class="text-black p-2">
            <input type="submit" class="bg-gray-400 p-2">
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