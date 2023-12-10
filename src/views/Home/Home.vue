<template>
    <Layout>
        <template #header>
            <Header data-testid="header-component"></Header>
        </template>
        <template #resume>
            <Resume data-testid="resume-component" :amount="10000"/>
        </template>
        <template #movements>
            <Movements data-testid="movements-component" />
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