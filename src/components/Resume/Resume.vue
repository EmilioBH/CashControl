<template>
    <main>
        <p>Ahorro total</p>
        <h1>{{ formatCurrency(amount) }}</h1>
        <div class="graphic">
          <movements-graphic />
        </div>
        <div class="action">
          <add-movement-button />
        </div>
    </main>
</template>

<script setup lang="ts">
    import { formatCurrency } from '../../utils/number'

    import AddMovementButton from './AddMovementButton'
    import MovementsGraphic from './MovementsGraph'

    defineProps({
      amount:{ 
        type: Number,
        default: 0,
      }
    })
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
}
h1 {
  margin-top: 14px;
  color: var(--brand-green);
}
.graphic {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 48px 24px;
  box-sizing: border-box;
}
</style>