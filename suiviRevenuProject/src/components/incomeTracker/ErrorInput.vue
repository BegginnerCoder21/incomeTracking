<template>
    <Transition name="errorInput">
        <div v-if="props.isEmpty" class="error">
            <span>
                Aucun champs ne doit être vide
            </span>
        </div>
    </Transition>
</template>

<script setup>

const props = defineProps(['isEmpty']);

</script>

<style scoped>
.error{
    position: absolute;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 30px;
    border-radius: 10px;
    width: 50%;
    margin-left: 25%;
}

span{
    color: black;
    font-weight: 900;
    font-size: medium;
    background-color: red;
}

@keyframes shaking {
    0%{
        transform: translateY(-100px);
    }

    50%{
        transform: translateY(0);
    }
    60%{
        transform: translateX(-6px);
    }
    70%{
        transform: translateX(0px);
    }
    80%{
        transform: translateX(6px);
    }
    90%{
        transform: translateX(0px);
    }
    100%{
        transform: translateX(-4px);
    }
    
}

.errorInput-enter-active{
    animation: shaking 0.5s ease;
}

.errorInput-leave-active{
    transition: 0.5s ease all;
}
.errorInput-leave-to{
    transform: translateY(-100px);
}
</style>