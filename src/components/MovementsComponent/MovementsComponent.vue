<template>
  <div class="movements">
    <h2 class="title">Movement Historical</h2>
    <div class="content">
        <movement-card 
          v-for="{ id, title, description, amount } in movements" 
          :key="id"
          :id="id" 
          :title="title"
          :description="description"
          :amount="amount"
          @remove-movement="removeMovement"
          data-testid="movement-card"
        />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PropType, toRefs } from 'vue';

  import MovementCard from './MovementCard'
  import type { Movement } from '../../modules/movements.types'; 

  const props = defineProps({
    movements: Object as PropType<Movement[]>
  })

  const { movements } = toRefs(props)

  const removeMovement = (id: any) => {
    console.log('remove', id);
  }
</script>

<style scoped>
.movements {
  max-height: 100%;
  padding: 0 8px;
  margin-bottom: 14px;
}
.title {
  margin: 8px 16px 24px 16px;
  color: var(--brand-blue);
}
.content {
  max-height: 68vh;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;
}
</style>