<script setup lang="ts">
import { useTimelineStore } from '@/stores/timeline'
import MonthBlock from './MonthBlock.vue'
import ItemDetail from './ItemDetail.vue'

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
          <li v-for="(month, monthIndex) in timelineStore.months" :key="month.short">
            <MonthBlock :month="month" :monthIndex="monthIndex" :yearIndex="yearIndex" />
          </li>
        </ul>
        <div class="year-label">{{ year }}</div>
      </li>
    </ul>
  </div>
  <Transition name="slide">
    <ItemDetail
      v-show="timelineStore.displayDetailSidebar"
      :displayDetail="timelineStore.displayDetailSidebar"
    />
  </Transition>
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
  text-align: center;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.year-label {
  text-align: center;
  font-size: 2em;
  color: #222222;
  margin: 0;
  padding: 0;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.month-list {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0;
}

.slide-enter-active {
  transition: all 0.3s ease-out;
}

.slide-leave-active {
  transition: all 0.3s ease-out;
}

.slide-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
