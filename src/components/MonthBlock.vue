<script setup lang="ts">
import { useTimelineStore } from '@/stores/timeline'
import TimelineItem from './TimelineItem.vue'
import { ref } from 'vue'

defineProps<{
  month: {
    short: string
    long: string
  }
  monthIndex: number
  yearIndex: number
}>()

const timelineStore = useTimelineStore()

const extendMonth = ref(false)

defineExpose({
  extendMonth,
})

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
const determineShortOrLongMonthLabel = (
  extendMonth: boolean,
  month: { short: string; long: string },
) => {
  return extendMonth ? month.long : month.short
}
</script>

<template>
  <div
    class="month-block"
    @click="extendMonth = !extendMonth"
    :style="{
      backgroundColor: getMonthBackgroundColor(yearIndex, monthIndex),
      minWidth: extendMonth ? '7em' : '2em',
    }"
  >
    <TimelineItem
      v-for="(item, itemIndex) in timelineStore.getMonthItems(
        timelineStore.years[yearIndex],
        monthIndex,
      )"
      :key="itemIndex"
      :itemData="item"
      :extendMonth="extendMonth"
      :monthColor="getMonthBackgroundColor(yearIndex, monthIndex)"
      >{{ item }}</TimelineItem
    >
    <div
      class="month-label"
      :style="{
        minWidth: extendMonth ? '6em' : '1.75em',
      }"
    >
      {{ determineShortOrLongMonthLabel(extendMonth, month) }}
    </div>
  </div>
</template>

<style scoped>
.month-block {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0 1px 3px 1px;
  margin: 0;
}

.month-label {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-align: center;
  font-size: 1em;
  color: #222222;
  height: 1.75em;
  border: 1px solid #222222;
  padding: 0;
  margin: 10px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
}
</style>
