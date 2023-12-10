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
  import { defineAsyncComponent, Component } from 'vue';

  const Home = defineAsyncComponent( async() =>{
    await new Promise(resolve => setTimeout(resolve, 2500));
    const component = (await import('./views/Home/Home.vue')).default as Component;
    return component;
  })
</script>