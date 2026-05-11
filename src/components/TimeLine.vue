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
        v-for="(year, yearIndex) in timelineStore.years"
        :key="year"
        :style="{ backgroundColor: setBackgroundColor(yearIndex) }"
      >
        <ul class="month-list">
          <li class="month-block" v-for="(month, monthIndex) in timelineStore.months" :key="month">
            <TimelineItem
              v-for="item in timelineStore.getMonthItems(
                timelineStore.years[yearIndex],
                monthIndex,
              )"
              :key="item.year"
              >{{ item.title }}</TimelineItem
            >
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
  min-width: 20em;
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
  height: 80vh;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.month-label {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-align: center;
  font-size: 1em;
  color: #222222;
  height: 1.5em;
  width: 1.5em;
  border: 1px solid #222222;
  border-radius: 50%;
  padding: 0;
  margin: 10px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
