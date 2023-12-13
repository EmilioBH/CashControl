<template>
  <div class="header">
    <img
      alt="cashcontrol-logo"
      data-testid="brand-logo"
      style="cursor: pointer"
      @click="reload"
      src="../../assets/cashcontrol-icon.svg"
    />
    <h1><span>Cash</span>Control</h1>
    <span></span>
  </div>
</template>

<script setup lang="ts">
const reload = () => {
  location.reload();
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
}
img,
span {
  width: 48px;
}
h1 {
  font-size: 1.4rem;
  color: var(--brand-blue);
}
h1 span {
  color: var(--brand-green);
}
</style>
