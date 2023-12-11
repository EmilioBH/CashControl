<template>
    <Layout>
        <template #header>
            <Header data-testid="header-component"></Header>
        </template>
        <template #resume>
            <Resume data-testid="resume-component" :total-amount="totalAmount" :amounts="amounts"/>
        </template>
        <template #movements>
            <Movements data-testid="movements-component" :movements="movements"/>
        </template>
    </Layout>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Resume from '../../components/Resume';
import Movements from '../../components/Movements'

import { Movement } from '../../modules/movements.types';

const amounts = computed(() => movements.map( mov => mov.amount ))

const totalAmount = computed(() => movements.reduce((sum,mov) => sum+mov.amount, 0 ))

const movements: Movement[] = [
    {
        id: 1,
        title: "Movimiento",
        description: "Deposito de salario",
        amount: 1000,
    },
    {
        id: 2,
        title: "Movimiento 1",
        description: "Deposito de honorarios",
        amount: 500,
    },
    {
        id: 3,
        title: "Movimiento 3",
        description: "Comida",
        amount: -100,
    },
    {
        id: 4,
        title: "Movimiento 4",
        description: "Colegiatura",
        amount: 1000,
    },
    {
        id: 5,
        title: "Movimiento 5",
        description: "Reparación equipo",
        amount: 1000,
    },
]
</script>

<style scoped>

</style>