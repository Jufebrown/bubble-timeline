<script setup lang="ts">
import ExpandButton from './ExpandButton.vue'
import CollapseButton from './CollapseButton.vue'
import FilterButton from './FilterButton.vue'
import FilterMenu from './FilterMenu.vue'
import { useTimelineStore } from '@/stores/timeline.ts'

const timelineStore = useTimelineStore()
</script>

<template>
  <menu>
    <ExpandButton></ExpandButton>
    <CollapseButton></CollapseButton>
    <FilterButton></FilterButton>
  </menu>
  <FilterMenu v-if="timelineStore.showFilterMenu"></FilterMenu>
</template>

<style scoped>
menu {
  margin: auto 10% auto 0;
  display: flex;
  flex-direction: row;
  height: 2.5em;
}
</style>
