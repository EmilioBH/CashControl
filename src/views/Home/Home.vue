<template>
    <Layout>
        <template #header>
            <Header></Header>
        </template>
        <template #resume>
            <resume />
        </template>
        <template #movements>
            <Movements />
        </template>
    </Layout>
</template>

<script setup lang="ts">
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Resume from '../../components/Resume';
import Movements from '../../components/Movements'
</script>

<style scoped>

</style>