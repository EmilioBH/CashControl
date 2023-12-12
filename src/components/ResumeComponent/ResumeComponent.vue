<template>
  <main>
    <p>Total savings</p>
    <h1 :class="[{ 'red': isNegative, 'green': !isNegative }]">
      {{ totalAmount ? formatCurrency(totalAmount) : formatCurrency(0) }}
    </h1>
    <div class="graphic">
      <movements-graphic :amounts="amounts"/>
    </div>
    <div class="action">
      <add-movement-button />
    </div>
  </main>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  import { formatCurrency } from '../../utils/number'

  import AddMovementButton from './AddMovementButton'
  import MovementsGraphic from './MovementsGraph'

  const props = defineProps<{
    totalAmount: number,
    amounts: number[]
  }>()

  const isNegative = computed(() => props.totalAmount < 0 ? true : false)
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

h1,
p {
  margin: 0;
  text-align: center;
  font-weight: 700;
}

p{
  font-size: 1.25rem;
}

h1 {
  margin-top: 14px;
}
.graphic {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 48px 24px;
  box-sizing: border-box;
}
.red {
    color: red;
}
.green {
    color: green;
}
</style>