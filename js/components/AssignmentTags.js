export default {
    template: `   
        <div class="flex gap-2 mb-4">
            <button @click = "$emit('update:current_tag',tag)" 
                    v-for="tag in tags" 
                    class="border rounded-md text-sm px-1 py"
                    :class="{
                        'border-blue-500 text-blue-500': tag === current_tag
                    }">
                {{tag}}
            </button>
        </div>`,
    props: {
        initialTags: Array,
        current_tag: String
    },
   
    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    }

    
}