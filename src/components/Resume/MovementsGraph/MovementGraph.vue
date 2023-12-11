<template>
    <div>
        <svg
            viewBox="0 0 300 200"
        >
            <line stroke="#c4c4c4" stroke-width="2" x1="0" y1="100" x2="300" y2="100"/>
            <polyline fill="none" stroke="#0689B0" stroke-width="2" :points="graphPoints"/>
            <line stroke="#04b500" stroke-width="2" x1="200" y1="0" x2="200" y2="200"/>
        </svg>
        <p>Last 30 days</p>
        <p>{{ graphPoints }}</p>
    </div>
</template>

<script setup lang="ts">
    import { computed, toRefs } from 'vue'

    const props = defineProps<{
        amounts: number[]
    }>()

    const { amounts } = toRefs(props)

    const graphPoints = computed(() => {
        const amountLength = props.amounts.length

        return Array(amountLength).fill(100).reduce((points, amount, index) => {
            const x = (300/amountLength) * (index+1)
            const y = amountToPixels(amount)
            return `${points} ${x},${y}`
        }, "0,0")
    })

    const amountToPixels = (amount: number) => {
        const min = Math.min(...amounts.value)
        const max = Math.max(...amounts.value)
        const meh = amount

        return `${min}, ${max} ${meh}`
    }
</script>

<style scoped>
    svg {
        width: 100%
    }
    p {
        text-align: center
    }
</style>