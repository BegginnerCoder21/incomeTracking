<template>
    <div >
        <ErrorInput :isEmpty="isEmpty" />  
        <Header :total_value="total_income" />
        <inputValue @error-value="errors" @add-income="addIncome" />
        <DisplayIncome :incomeList="state" @remove-income="removeIncome" />
    </div>
</template>

<script setup>

import { ref } from 'vue';
import DisplayIncome from '../components/incomeTracker/DisplayIncome.vue';
import ErrorInput from '../components/incomeTracker/ErrorInput.vue';
import Header from '../components/incomeTracker/Header.vue';
import InputValue from '../components/incomeTracker/inputValue.vue';
import inputUser from '../composables/index';

const isEmpty = ref(null)

const errors = () => {
    isEmpty.value = true;
    setTimeout(() => {
        isEmpty.value = null;
    },2500);
}



const {
    total_income,
    addIncome,
    state,
    removeIncome
} = inputUser();

</script>

<style  scoped>

</style>