<template>
  <div class="modal">
    <div class="head">
      <p>New Movement</p>
      <i 
        class="pi pi-times" 
        style="font-size: 1.5rem; color: var(--brand-blue)" 
        data-testid="close-btn" 
        @click="closeModal" 
      />
    </div>
    <div class="body">
      <form @submit.prevent="formSubmit" data-testid="form">
        <div class="field">
          <label for="title" class="label-form">
            Title
            <input type="text" id="title" v-model="title">
          </label>
        </div>
        <div class="field">
          <label for="amount" class="label-form">
            Amount
            <input type="number" id="amount" v-model="amount">
          </label>
        </div>
        <div class="field">
          <label for="description">Description</label>
          <textarea rows="4" v-model="description"></textarea>
        </div>
        <div class="field">
          <label class="radio-label">
            <input type="radio" v-model="movementType" value="Income">
            <span>Income</span>
          </label>
          <label class="radio-label">
            <input type="radio" v-model="movementType" value="Expense">
            <span>Expense</span>
          </label>
        </div>
        <div class="action">
          <button :disabled="isButtonDisbled">Add Movement</button>
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
const movementType = ref<'Income'|'Expense'>('Income')

const closeModal = () => emit('closeModal')

const formSubmit = () => {
emit('closeModal')

if(movements && amount.value){
  const newMovement: Movement = {
    id: new Date().getTime(),
    title: title.value,
    amount: movementType.value === 'Income'  ? amount.value : -amount.value,
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
cursor: pointer;
}

button:disabled {
background-color: grey;
cursor: not-allowed;
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

.label-form {
display: flex;
flex-direction: column;
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