<script setup lang="ts">
import { useTimelineStore } from '@/stores/timeline'
defineProps<{
  msg: string
}>()

const timelineStore = useTimelineStore()
const backgroundColors = [
  '#ffadad',
  '#ffc6b5',
  '#ffd6a5',
  '#ffe5b5',
  '#fdffb6',
  '#d9ffb6',
  '#caffbf',
  '#b5ffda',
  '#9bf6ff',
  '#9bdfff',
  '#a0c4ff',
  '#bdb2ff',
  '#e0b1ff',
  '#ffc6ff',
]

const setBackgroundColor = (index: number) => {
  if (index > 6) {
    return backgroundColors[index % 14]
  } else {
    return backgroundColors[index]
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
  color: black;
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
  color: slategray;
}
</style>
