export default {
    template: `
        <div :class="{
            'rounded-md p-4' : true,
            'bg-slate-700 border-white' : theme === 'dark',
            'bg-gray-200 border-black text-black' : theme === 'light'
        }">
            <p v-if="$slots.heading" class="text-xl font-bold mb-2">
                <slot name="heading">
            </p>
            <slot/> 
            <p v-if="$slots.footer" class="border-t border-gray-100 p-1 mt-4 text-sm">
                <slot name="footer">
            </p>
        </div>
    `,
    props: {
        theme: {type: String, default:'dark'}
    }
}

