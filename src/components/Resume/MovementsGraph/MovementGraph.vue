<template>
    <div>
        <svg
            @touchstart="tapScreen"
            @touchmove="tapScreen"
            @touchend="untapScreen"
            viewBox="0 0 300 200"
        >
            <line stroke="#c4c4c4" stroke-width="2" x1="0" :y1="zero" x2="300" :y2="zero"/>
            <polyline fill="none" stroke="#0689B0" stroke-width="2" :points="graphPoints"/>
            <line v-if="showPointer" stroke="#04b500" stroke-width="2" :x1="pointer" y1="0" :x2="pointer" y2="200"/>
        </svg>
        <p>Last 30 days</p>
    </div>
</template>

<script setup lang="ts">
    import { computed, ref, toRefs } from 'vue'

    const props = defineProps<{
        amounts: number[]
    }>()

    const { amounts } = toRefs(props)

    const graphPoints = computed(() => {
        const amountLength = props.amounts.length

        return amounts.value.reduce((points, amount, index) => {
            const x = (300/amountLength) * (index+1)
            const y = amountToPixels(amount)
            return `${points} ${x},${y}`
        }, "0, 200")
    })

    const zero = computed(() => {
        return amountToPixels(0)
    })

    const amountToPixels = (amount: number) => {
        const min = Math.min(...amounts.value)
        const max = Math.max(...amounts.value)

        const amountAbs: number = amount + Math.abs(min)
        const minMax: number = Math.abs(max) + Math.abs(min);

        return 200 - ((amountAbs * 100)/ minMax)*2
    }

    const showPointer = ref<boolean>(false)

    const pointer = ref(0)

    const tapScreen = ({ target, touches }:any) => {
        showPointer.value = true
        const elementWidth = target.getBoundingClientRect().width;
        const elementX = target.getBoundingClientRect().x;
        const touchX = touches[0].clientX;

        pointer.value = ((touchX -elementX) * 300) /elementWidth
    }

    const untapScreen = () => {
        showPointer.value = false
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