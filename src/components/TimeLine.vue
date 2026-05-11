<script setup lang="ts">
import { useTimelineStore } from '@/stores/timeline'
import TimelineItem from './TimelineItem.vue'

defineProps<{
  msg: string
}>()

const timelineStore = useTimelineStore()

const setBackgroundColor = (index: number) => {
  if (index > 6) {
    return timelineStore.backgroundColors[index % 14]
  } else {
    return timelineStore.backgroundColors[index]
  }
}
</script>

<template>
  <div>
    <ul class="year-list">
      <li
        class="year-block"
        v-for="(year, index) in timelineStore.years"
        v-bind:key="year"
        :style="{ backgroundColor: setBackgroundColor(index) }"
      >
        <ul class="month-list">
          <li class="month-block" v-for="month in timelineStore.months" v-bind:key="month">
            <div class="month-label">{{ month }}</div>
          </li>
        </ul>
        <div class="year-label">{{ year }}</div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  list-style-type: none;
}

.year-list {
  overflow: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding-bottom: 40px;
  padding-left: 0;
  scrollbar-width: thin;
  scrollbar-color: #555 #222;
}

.year-block {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  min-width: 14em;
  text-align: center;
}

.year-label {
  font-size: 2em;
  color: #222222;
}

.month-list {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0;
}

.month-block {
  font-size: 1em;
}

.month-label {
  font-size: 0.8em;
  color: #222222;
}
</style>
