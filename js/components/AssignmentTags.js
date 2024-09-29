export default {
    template: `   
        <div class="flex gap-2 mb-4">
            <button @click="$emit('change', tag)" v-for="tag in tags" class="border rounded-md text-sm px-1 py"> 
                {{tag}}
            </button>
        </div>`,
    props: {
        initialTags: Array
    },
    data() {
        return {
            current_tag: 'all',
        }
    },
    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    }

    
}