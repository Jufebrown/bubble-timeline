<script setup lang="ts">
import { useTimelineStore } from '@/stores/timeline'
import TimelineItem from './TimelineItem.vue'

const timelineStore = useTimelineStore()

const getCorrectYearIndex = (index: number) => {
  if (index > 6) {
    return index % 14
  } else {
    return index
  }
}
const getYearBackgroundColor = (index: number) => {
  return timelineStore.backgroundColors[getCorrectYearIndex(index)]
}
const getMonthBackgroundColor = (yearIndex: number, monthIndex: number) => {
  const correctYearIndex = getCorrectYearIndex(yearIndex)
  if (timelineStore.monthBackgroundColors[correctYearIndex] !== undefined) {
    return timelineStore.monthBackgroundColors[correctYearIndex][monthIndex]
  } else {
    return getYearBackgroundColor(correctYearIndex)
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
        :style="{ backgroundColor: getYearBackgroundColor(yearIndex) }"
      >
        <ul class="month-list">
          <li
            class="month-block"
            v-for="(month, monthIndex) in timelineStore.months"
            :key="month"
            :style="{
              backgroundColor: getMonthBackgroundColor(yearIndex, monthIndex),
            }"
          >
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
  justify-content: stretch;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1px 3px 1px;
  margin: 0;
}

.month-label {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-align: center;
  font-size: 1em;
  color: #222222;
  height: 1.5em;
  width: 1.5em;
  border: 1px solid #222222;

  padding: 0;
  margin: 10px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
