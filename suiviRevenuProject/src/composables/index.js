import { computed, reactive, ref } from "vue";

export default function inputUser() {

    const state = ref([ ]);

    const total_income = computed(() => {
        let total_value = 0;
        if(state.value.length > 0){
            for(let i = 0 ; i < state.value.length ; i++){
               total_value += state.value[i].incomeValue;
            }
        }
        return total_value;
    });

    const addIncome = (data) => {
        state.value.unshift(data);
    }   

    const removeIncome = (lists) => {
        state.value = state.value.filter((list) => list.id !== lists.id);
    }

    return {
        total_income,
        addIncome,
        state,
        removeIncome
    }
}