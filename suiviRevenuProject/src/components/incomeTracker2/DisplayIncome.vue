<template>
    <div >
        <transition-group name="list" tag="ul">
            <li v-for="states in props.state" :key="states.id">
                <i id="cross" @click="$emit('remove-income',states)" class="fa-solid fa-xmark"></i>
                <span>{{ states.incomeDesc }}</span>
                <span>{{ states.incomeValue}}</span>
                <span>{{ states.incomeData }}</span>
            </li>
        </transition-group>
    </div>
</template> 

<script setup>

const props = defineProps(['state'])

</script>

<style scoped>

ul{
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    display: block;
    margin-left: 22%;
}

ul li{
    border-radius: 10px;
    background-color: white;
    padding: 10px 20px;
    margin-bottom: 20px;
    align-items: center;
    width: 70%;
    display: flex;
}

ul li span{
    background-color: white;
    flex: 1;
    padding: 3px 20px;
}

ul li:hover{
    #cross{
        opacity: 1;
    }
}

li i{
    opacity: 0;
    background-color: white;
    cursor: pointer;
}

.list-move,
.list-enter-active{
    transition: 0.4s ease all;
}
.list-leave-active{
    transition: 0.4s ease all;
    position: absolute;
}


.list-leave-to,
.list-enter-from{
    opacity: 0;
    transform: scale(0.6);
}


</style>