import { computed, ref } from 'vue';

export default function InputUsers(){
    
    const state = ref([]);
    const income_value = computed(() => {
        let valueIncome = 0;
        if(state.value.length > 0){
            for(let i = 0 ; i < state.value.length; i++ ){
                valueIncome += state.value[i].incomeValue;
            }
        }
        return valueIncome;
    })

    const addIncome = (listData) => {
        state.value.unshift(listData);
    }
    const isEmpty = ref(null);
    const errorInput = () => {
        isEmpty.value = true;
        setTimeout(() => {
            isEmpty.value = null;
        },2500);
    }
     const removeIncome = (removelist) => {
        state.value = state.value.filter((list) => list.id != removelist.id);
     }  

    return  {
        state,
        income_value,
        addIncome,
        errorInput,
        isEmpty,
        removeIncome,
    }
}