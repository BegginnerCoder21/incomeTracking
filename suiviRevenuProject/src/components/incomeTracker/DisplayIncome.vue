<template>
    <div class="incomeList">
        <transition-group name="income" appear tag="ul">
            <li v-for="list in props.incomeList" :key="index" class="list">
                <i id="cross" @click="$emit('remove-income',list)" class="fa-solid fa-xmark"></i>
                <span>{{ list.incomeDesc }}</span>
                <span>{{ list.incomeValue }}</span>
                <span>{{ list.incomeData}}</span>
            </li>
        </transition-group>
    </div>
</template>

<script setup>

const props = defineProps(['incomeList']);

</script>

<style scoped>

.incomeList{
    margin-top: 50px;
    justify-content: center;
    display: flex;
    align-items: center;
    position: relative;
}


.list{
    width: 100%;
    padding: 10px 30px;
    display: flex;
    align-items: center;
    background-color: #fff;
    color: #000;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.list span{
    flex: 1;
    background-color: #fff;
    padding: 7px 50px;
}


i{
    color: red;
    font-size: 20px;
    margin-right: 8px;
    cursor: pointer;
    opacity: 0;
    background-color: #fff;
}

li:hover{
    #cross{
        opacity: 1;
    }
}

.income-move,
.income-enter-active{
    transition: all 0.5s ease;
}

.income-leave-active{
    transition: all 0.5s ease;
}

.income-leave-to,
.income-enter-from{
    opacity: 0;
    transform: scale(0.5);
}

</style>