<template>
  <div class="month">
    <slot name="monthNumber"></slot>
  </div>
</template>

<style scoped>
.month {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

@media (min-width: 1024px) {
  .month {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }
}
</style>
