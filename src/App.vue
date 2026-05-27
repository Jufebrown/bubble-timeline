<script setup lang="ts">
import TimeLine from './components/TimeLine.vue'
import TimelineControls from './components/TimelineControls.vue'
</script>

<template>
  <div class="wrapper">
    <header class="header">
      <h1>Timeline of the AI Bubble</h1>
      <TimelineControls />
    </header>

    <TimeLine />
  </div>
</template>

<style scoped>
h1 {
  margin: 0;
  padding: 0 0 0.5em 1em;
  color: #ddd;
  font-size: 2em;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

@media (min-width: 1024px) {
}
</style>
