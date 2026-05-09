<script setup lang="ts">
import { useTimelineStore } from '@/stores/timeline'
defineProps<{
  msg: string
}>()

const timelineStore = useTimelineStore()
const backgroundColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const setBackgroundColor = (index: number) => {
  if (index > 6) {
    return backgroundColors[index % 7]
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
}

.year-block {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  min-width: 12em;
  text-align: center;
  filter: grayscale(50%);
}

.year-label {
  font-size: 2em;
  color: black;
}

.month-list {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
}

.month-block {
  font-size: 1em;
}

.month-label {
  font-size: 0.8em;
  color: white;
}
</style>
