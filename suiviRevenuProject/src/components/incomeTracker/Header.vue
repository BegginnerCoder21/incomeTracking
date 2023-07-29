<template>
      <header>
        <h1>Suivis de Revenu</h1>
        <div class="total_amount">
            {{ props.total_value }} fcfa
        </div>
      </header>
</template>

<script setup>
const props = defineProps(['total_value'])

</script>

<style scoped>

header{
    display: flex;
    justify-content: space-between;
    padding: 30px 50px;
    background-color: #313131;
    align-items: center;
    border-bottom: 5px solid #ffce00;
}

header h1{
    background-color: #313131;
    color: #fff;
}

.total_amount{
    background-color: #ffce00;
    padding: 10px 30px;
    border-radius: 10px;
    font-size: 20px;
    color: #fff;
    font-weight: 900;
    box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.25);
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
}

</style>