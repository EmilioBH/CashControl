<template>
    <div class="movement">
        {{ title }}
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

    const props = defineProps({
        title: String
    })

    const {title} = toRefs(props)
</script>

<style scoped>

</style>