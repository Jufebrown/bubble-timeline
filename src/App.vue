<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useTimelineStore } from '@/stores/timeline'
import TimelineControls from '@/components/TimelineControls.vue'

const timelineStore = useTimelineStore()

const router = useRouter()

onMounted(() => {
  timelineStore.selectAllCategories()
  timelineStore.selectAllCompanies()
  timelineStore.selectAllPeople()
})
</script>

<template>
  <div class="wrapper">
    <header class="header">
      <button class="home-button" @click="router.push({ path: '/' })">
        <h1>Timeline of the LLM (AI) Bubble</h1>
      </button>
      <TimelineControls />
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}

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
  background-color: #181818;
}

.home-button {
  border: none;
  background: none;
  box-shadow: none;
  cursor: pointer;
}

.wrapper {
  scrollbar-width: thin;
  scrollbar-color: #555 #222;
}

@media (min-width: 1024px) {
}
</style>
