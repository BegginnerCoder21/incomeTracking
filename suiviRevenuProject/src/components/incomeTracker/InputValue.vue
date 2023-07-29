<template>
    <form >
        <input type="text" placeholder="Description" v-model="formData.incomeDesc">
        <input type="number" placeholder="Montant" v-model="formData.incomeValue">
        <input type="date" placeholder="Date" v-model="formData.incomeData">
        <input type="submit" @click.prevent="incomeState" value="Envoyer">
    </form>
</template>

<script setup>
import inputValues from '../../composables/inputValue';
const emit = defineEmits(['add-income','error-value']);

        const incomeState = () => {
            if(formData.incomeData == null || formData.incomeDesc == null || formData.incomeValue == null){
                emit('error-value');
            }else{
                emit('add-income',{
                    id:Date.now(),
                    incomeDesc:formData.incomeDesc,
                    incomeValue : formData.incomeValue,
                    incomeData:formData.incomeData
                });
                formData.incomeData = null;
                formData.incomeDesc = null;
                formData.incomeValue = null;
            }

        }


const {
    formData,
} = inputValues();

</script>

<style scoped>

form{
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

form input{
    font-size: 20px;
    border: none;
    outline: none;
    color: #888;
}

form input::placeholder{
    color: #AAA;
}

form input:not([type="submit"]){
   padding: 5px 15px;
   background: #fff;
}

form input[type="submit"]{
    background: none;
    color: #fff;
    padding: 10px 15px;
    background-color: #ffce00;
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    font-weight: 500;

}

form input:first-of-type{
    border-radius: 8px 0px 0px 8px;
}

form input:last-of-type{
    border-radius: 0px 8px 8px 0px;
}

</style>