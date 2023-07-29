<template>
    <Transition name="errors">
        <div v-if="props.isEmpty" class="error">
            <span>Aucun champs ne doit être vide</span>
        </div>
    </Transition>
</template>

<script setup>

const props = defineProps(['isEmpty']);
    
</script>

<style scoped>

.error{
    display: flex;
    justify-content: center;
    padding: 10px 20px;
    color: #000;
    background-color: red;
    border-radius: 10px;
    position: absolute;
    width: 40%;
    margin-left: 30%;
    
}

.error span{
    background-color: red;
    font-weight: 500;
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
        transform: translateX(0);
    }
    80%{
        transform: translateX(6px);
    }
    90%{
        transform: translateX(0);
    }
    100%{
        transform: translateX(-4px);
    }
}

.errors-enter-active{
    animation: shaking 0.4s ease;
}
.errors-leave-active{
    transition: 0.4S ease all;
}

.errors-leave-to{
    transform: translateY(-100px);
}

</style>