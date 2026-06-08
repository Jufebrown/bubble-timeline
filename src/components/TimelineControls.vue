<script setup lang="ts">
import ExpandButton from './ExpandButton.vue'
import CollapseButton from './CollapseButton.vue'
import FilterButton from './FilterButton.vue'
import FilterMenu from './FilterMenu.vue'
import { useTimelineStore } from '@/stores/timeline.ts'
import AboutButton from './AboutButton.vue'

const timelineStore = useTimelineStore()
</script>

<template>
  <div class="navbar">
    <menu>
      <ExpandButton></ExpandButton>
      <CollapseButton></CollapseButton>
      <FilterButton></FilterButton>
    </menu>
    <AboutButton></AboutButton>
    <FilterMenu v-if="timelineStore.showFilterMenu"></FilterMenu>
  </div>
</template>

<style scoped>
menu {
  display: flex;
  flex-direction: row;
  height: 2.5em;
  margin-right: 5em;
}

.navbar {
  margin: auto 3% auto 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
