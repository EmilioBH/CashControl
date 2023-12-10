<template>
    <div class="modal">
        <div class="head">
            <p>Nuevo movimiento</p>
            <i class="pi pi-times" style="font-size: 1.5rem; color: var(--brand-blue)" @click="closeModal" />
        </div>
        <div class="body">
            Form will be here!
        </div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['closeModal'])

const closeModal = () => emit('closeModal')
</script>

<style scoped>
.modal {
  z-index: 2;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: white;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 24px 24px;
  box-sizing: border-box;
}

p {
  margin: 0;
  font-size: 1.5rem;
  color: var(--brand-blue);
}
</style>