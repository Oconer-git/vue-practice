export default {
    template: `   
        <div class="flex gap-2 mb-4">
            <button @click="$emit('change', tag)" 
                    v-for="tag in tags" 
                    class="border rounded-md text-sm px-1 py"
                    :class="{
                        'border-blue-500 text-blue-500': tag === currentTag
                    }">
                {{tag}}
            </button>
        </div>`,
    props: {
        initialTags: Array,
        currentTag: String
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