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
import { Ref, computed, inject, ref, watchEffect } from 'vue';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Resume from '../../components/Resume';
import Movements from '../../components/Movements'

import { Movement } from '../../modules/movements.types';

const movements = inject<Ref<Movement[]>>('movements')
const amounts = ref<number[]>([])

watchEffect(() => {
  if (!movements || movements.value.length === 0) {
    amounts.value = [];
    return;
  }

  const lastAmounts = movements.value.filter(mov => {
    const today = new Date();
    const oldDate = new Date(today.setDate(today.getDate() - 30));
    return new Date(mov.time) > oldDate;
  }).map(mov => mov.amount);

  amounts.value = lastAmounts.map((_, i) => {
    const lastMovements = lastAmounts.slice(0, i + 1);
    return lastMovements.reduce((sum, current) => sum + current, 0);
  });
});

const totalAmount = computed(() => {
    if(!movements){
        return 0
    }
    return movements.value.reduce((sum, { amount }) => sum+amount, 0 )})

</script>

<style scoped>

</style>