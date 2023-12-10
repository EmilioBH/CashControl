<template>
    <div class="movement">
        <div class="content">
            <h4>{{ title }}</h4>
            <p>{{ description }}</p>
        </div>
        <div class="action">
            --imagen--
            <p>{{ amount }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

    const props = defineProps({
        id: Number,
        title: String,
        description: String,
        amount: String
    })

    const { id, title, description, amount} = toRefs(props)
</script>

<style scoped>

</style>