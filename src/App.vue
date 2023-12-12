<template>
  <Suspense>
    <template #default>
      <home />
    </template>
    <template #fallback>
      <splash-screen />
    </template>
  </Suspense>
</template>

<script setup lang="ts">
  import SplashScreen from './views/SplashScreen'
  import { defineAsyncComponent, Component, provide, onMounted } from 'vue';
  import{ movements, addMovement, deleteMovement } from './composables/useStorage'

  provide('movements', movements)
  provide('addMovement', addMovement)
  provide('deleteMovement', deleteMovement)

  onMounted(() => {
    movements.value.map( mov => ({ ...mov, time: new Date(mov.time).getTime()}) )
  })

  const Home = defineAsyncComponent( async() =>{
    await new Promise(resolve => setTimeout(resolve, 2500));
    const component = (await import('./views/Home/Home.vue')).default as Component;
    return component;
  })
</script>