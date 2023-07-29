<template>
    <Header>
            <h2>
                Suivi Des Revenus
            </h2>
            <span>
                {{props.income_value }} fcfa
            </span>
            
    </Header>
</template>

<script setup>
const props = defineProps(['income_value']);

</script>

<style scoped>

Header{
    display: flex;
    justify-content: space-between;
    padding: 30px 50px;
    color: #fff;
    background-color: #313131;
    border-bottom: 7px solid orange;
    box-shadow: inset 0px 0px 6px orange;
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
}

Header h2{
    background-color: #313131;
    font-size: 35px;
}

Header span{
    background-color: orange;
    font-size: 20px;
    padding: 10px 30px;
    border-radius: 10px;
    box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.25);

}


</style>