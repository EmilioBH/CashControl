<template>
  <suspense>
    <template #default>
      <home />
    </template>
    <template #fallback>
      <splash-screen />
    </template>
  </suspense>
</template>

<script setup lang="ts">
  //import Home from './views/Home'
  import SplashScreen from './views/SplashScreen'
  import { defineAsyncComponent, Component } from 'vue';

  const Home = defineAsyncComponent( async() =>{
    await new Promise(resolve => setTimeout(resolve, 2500));
    const component = (await import('./views/Home/Home.vue')).default as Component;
    return component;
  })
</script>

<style scoped>
  html,body,.app {
    min-height: 100vh;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  *{
    --brand-green: #04b500;
    --brand-blue: #0689b0;
  }
</style>