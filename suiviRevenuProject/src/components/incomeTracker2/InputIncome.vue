<template>
    <form>
        <input type="text" placeholder="Description" v-model="formData.incomeDesc">
        <input type="number" placeholder="Montant" v-model="formData.incomeValue">
        <input type="date" placeholder="Date" v-model="formData.incomeData">
        <input type="submit" value="Envoyer" @click.prevent="addIncome">
    </form>
</template>

<script setup>
import { reactive, ref } from 'vue';
const emit = defineEmits(['add-income','error-input']);

const formData = reactive({
    id:null,
    incomeDesc:null,
    incomeValue:null,
    incomeData:null
})

const addIncome = () => {
    if(formData.incomeData !== null && formData.incomeDesc !== null && formData.incomeValue !== null){
        let d = formData.incomeData.split('-');
        let newD = new Date(d[0],d[1],d[2]);
        let date = new Date(newD);
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        let formatedDate;
        if(month < 10) {
            formatedDate = day + '/' + '0' + month + '/' + year;
        }else{
            formatedDate = day + '/' + month + '/' + year;
        }
        emit('add-income',{
            id:Date.now(),
            incomeData:formatedDate,
            incomeDesc:formData.incomeDesc,
            incomeValue:formData.incomeValue
        });

        formData.id = null,
        formData.incomeDesc = null;
        formData.incomeValue = null;
        formData.incomeData = null;
    }else{
        emit('error-input');
    }
}

</script>

<style scoped>


form{
    display: flex;
    justify-content: center;
    margin-top: 50px;
    
}

form input{
    border: none;
    outline: none;
    font-size: 15px;
    color: #888;
}

form input::placeholder{
    color:  #AAA;
}

form input:not([type=submit]){
    padding: 10px 15px;
    background-color: #fff;
}


form input:first-of-type{
    border-radius: 10px 0px 0px 10px;
}

form input:last-of-type{
    border-radius: 0px 10px 10px 0px;
    background-color: orange;
    padding: 10px 15px;
    cursor: pointer;
}


</style>