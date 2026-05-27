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

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 5.5em;
  align-items: flex-end;
}

@media (min-width: 1024px) {
}
</style>
