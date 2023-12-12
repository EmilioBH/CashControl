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
  import { defineAsyncComponent, Component, provide } from 'vue';
  import{ movements, addMovement, deleteMovement } from './composables/useStorage'

  provide('movements', movements)
  provide('addMovement', addMovement)
  provide('deleteMovement', deleteMovement)

  const Home = defineAsyncComponent( async() =>{
    await new Promise(resolve => setTimeout(resolve, 2500));
    const component = (await import('./views/Home/home-view.vue')).default as Component;
    return component;
  })
</script>