<template>
  <div class="splashscreen">
    <img 
      src="../../assets/cashcontrol-icon.svg" 
      data-testid="splash-icon" 
      alt="cashcontrol-logo" 
      height="250" 
      width="250" 
    />
    <h1><span>Cash</span>Control</h1>
  </div>
</template>

<style scoped>
.splashscreen {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}
h1 {
  color: var(--brand-blue);
}
h1 span {
  color: var(--brand-green);
}
</style>