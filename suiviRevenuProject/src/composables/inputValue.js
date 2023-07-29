import { reactive,defineEmits } from 'vue';


export default function inputValues () {
    

    
        const formData = reactive({
            incomeDesc : null,
            incomeValue : null,
            incomeData : null
            
        });
    
        
    return {
        formData,
    }
}