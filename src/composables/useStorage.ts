import { ref } from 'vue'

import { Movement } from '../modules/movements.types'

const storedMovements = localStorage.getItem('movements')
const movements = ref<Movement[]>(storedMovements ? JSON.parse(storedMovements) : [])

const addMovement = (mov: Movement) => {
    debugger
    movements.value.push(mov)
    saveMovements()
}

const deleteMovement = (id: number) => {
    movements.value = movements.value.filter( mov => mov.id !== id )
    saveMovements()
}

const saveMovements = () => {
    localStorage.setItem('movements', JSON.stringify(movements.value))
}

export { movements, addMovement, deleteMovement }