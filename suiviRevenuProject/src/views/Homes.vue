<template>
    <div>
        <ErrorIncome :isEmpty="isEmpty" />
        <Headers :income_value="income_value" />
        <InputIncome @add-income="addIncome" @error-input="errorInput" />
        <DisplayIncome :state="state" @remove-income="removeIncome" />
    </div>
</template>

<script setup>
import DisplayIncome from '../components/incomeTracker2/DisplayIncome.vue';
import ErrorIncome from '../components/incomeTracker2/errorIncome.vue';
import Headers from '../components/incomeTracker2/Headers.vue';
import InputIncome from '../components/incomeTracker2/InputIncome.vue';
import InputUsers from '../composables2';
import { ref } from 'vue';



const {
    state,
    income_value,
    addIncome,
    errorInput,
    isEmpty,
    removeIncome,
} = InputUsers();

</script>

<style scoped>

</style>