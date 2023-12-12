<template>
    <div class="modal">
        <div class="head">
            <p>Nuevo movimiento</p>
            <i class="pi pi-times" style="font-size: 1.5rem; color: var(--brand-blue)" @click="closeModal" />
        </div>
        <div class="body">
            <form @submit.prevent="formSubmit">
              <div class="field">
                <label>Title</label>
                <input type="text" v-model="title">
              </div>
              <div class="field">
                <label>Amount</label>
                <input type="number" v-model="amount">
              </div>
              <div class="field">
                <label>Description</label>
                <textarea rows="4" v-model="description"></textarea>
              </div>
              <div class="field">
                <label class="radio-label">
                  <input type="radio" v-model="movementType" value="Ingreso">
                  <span>Ingreso</span>
                </label>
                <label class="radio-label">
                  <input type="radio" v-model="movementType" value="Gasto">
                  <span>Gasto</span>
                </label>
              </div>
              <div class="action">
                <button :disabled="isButtonDisbled" >Agregar</button>
              </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, inject, Ref, computed } from 'vue';
import { Movement } from '../../../modules/movements.types';

const movements = inject<Ref<Movement[]>>('movements')
const addMovement = inject<(mov: Movement) => void>('addMovement')

const emit = defineEmits(['closeModal'])

const title = ref<string>('')
const amount = ref<number>()
const description = ref<string>('')
const movementType = ref<'Ingreso'|'Gasto'>('Ingreso')

const closeModal = () => emit('closeModal')

const formSubmit = () => {
  emit('closeModal')

  if(movements && amount.value){
    const newMovement: Movement = {
      id: new Date().getTime(),
      title: title.value,
      amount: movementType.value === 'Ingreso'  ? amount.value : -amount.value,
      description: description.value,
      time: new Date()
    }
    if(addMovement){
      addMovement(newMovement)
    }
  }
  
}

const isButtonDisbled = computed(() => {
  return title.value.trim() === '' || amount.value === undefined || amount.value < 0
})
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

button {
  color: white;
  font-size: 1.25rem;
  background-color: var(--brand-blue);
  border: none;
  width: 100%;
  padding: 24px 60px;
  border-radius: 60px;
  box-sizing: border-box;
}

button:disabled {
  background-color: grey;
}

form {
  font-size: 1.24rem;
  width: 100%;
}

form .action {
  padding: 0 24px;
}

.field {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 16px 24px;
}

label {
  margin-bottom: 8px;
}

input,
textarea {
  font-size: 1.24rem;
  border: 2px solid var(--brand-blue);
  border-radius: 8px;
  padding: 8px;
}

input[type="number"] {
  text-align: right;
}

.radio-label {
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.radio-label span {
  margin-top: 4px;
  margin-left: 8px;
}

input[type="radio"] {
  appearance: none;
  width: 1.24rem;
  height: 1.24rem;
  color: var(--brand-blue);
  border: 2px solid var(--brand-blue);
  border-radius: 50%;
}

input[type="radio"]:checked {
  background-color: var(--brand-blue);
}
</style>