<template>
  <div class="year"></div>
</template>

<style scoped>
.year {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

@media (min-width: 1024px) {
  .year {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }
}
</style>
