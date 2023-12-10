<template>
    <Layout>
        <template #header>
            <Header data-testid="header-component"></Header>
        </template>
        <template #resume>
            <Resume data-testid="resume-component" :amount="10000"/>
        </template>
        <template #movements>
            <Movements data-testid="movements-component" :movements="movements"/>
        </template>
    </Layout>
</template>

<script setup lang="ts">
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Resume from '../../components/Resume';
import Movements from '../../components/Movements'

const movements = [
    {
        id: 1,
        title: "Movimiento",
        description: "Deposito de salario",
        amount: "1000",
    },
    {
        id: 2,
        title: "Movimiento 1",
        description: "Deposito de honorarios",
        amount: "500",
    },
    {
        id: 3,
        title: "Movimiento 3",
        description: "Comida",
        amount: "-100",
    },
    {
        id: 4,
        title: "Movimiento 4",
        description: "Colegiatura",
        amount: "1000",
    },
    {
        id: 5,
        title: "Movimiento 5",
        description: "Reparación equipo",
        amount: "1000",
    },
]
</script>

<style scoped>

</style>