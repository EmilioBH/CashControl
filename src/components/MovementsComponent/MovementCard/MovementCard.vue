<template>
  <div class="movement">
    <div class="content">
      <h4>{{ title }}</h4>
      <p>{{ description }}</p>
    </div>
    <div class="action">
      <i
        class="pi pi-trash"
        style="font-size: 1.5rem"
        @click="removeMovementById"
        data-testid="trash-icon"
      />
      <p :class="[{ red: isNegative, green: !isNegative }]">
        {{ formatCurrency(amount ?? 0) }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs, inject } from 'vue';
import { formatCurrency } from '../../../utils/number';

const deleteMovement = inject<(id: number) => void>('deleteMovement');

const props = defineProps<{
  id: number;
  title: string;
  description: string;
  amount: number;
}>();

const { id, title, description, amount } = toRefs(props);

const isNegative = computed(() => {
  const parseAmount = (amount: number | undefined) => {
    if (amount === undefined) {
      return 0;
    } else {
      return amount;
    }
  };

  return parseAmount(amount?.value) < 0;
});

const removeMovementById = () => {
  if (deleteMovement) {
    deleteMovement(id.value);
  }
};
</script>

<style scoped>
.movement {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
  background-color: #e6f9ff;
  border-radius: 8px;
  box-sizing: border-box;
}
.movement .content {
  width: 100%;
}
.movement .action {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
}
h4,
p {
  margin: 0;
  padding: 0;
}
h4 {
  margin-bottom: 8px;
}
.movement .action i {
  margin-bottom: 16px;
}
.red {
  color: red;
}
.green {
  color: green;
}
</style>
