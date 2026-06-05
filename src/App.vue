<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useTimelineStore } from '@/stores/timeline'
import TimelineControls from '@/components/TimelineControls.vue'

const timelineStore = useTimelineStore()

onMounted(() => {
  timelineStore.selectAllCategories()
  timelineStore.selectAllCompanies()
  timelineStore.selectAllPeople()
})
</script>

<template>
  <div class="wrapper">
    <header class="header">
      <h1>Timeline of the LLM (AI) Bubble</h1>
      <TimelineControls />
    </header>
    <RouterView />
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

.wrapper {
  scrollbar-width: thin;
  scrollbar-color: #555 #222;
}

@media (min-width: 1024px) {
}
</style>
