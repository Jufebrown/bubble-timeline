<script setup lang="ts">
import { useTimelineStore } from '@/stores/timeline'

const timelineStore = useTimelineStore()

const determineSidebarPosition = (side: string) => {
  const yearList = document.querySelector('.year-list')
  if (yearList) {
    if (yearList.scrollLeft > 3000 && side === 'left') {
      return 0
    } else if (yearList.scrollLeft <= 3000 && side === 'right') {
      return 0
    }
    return 'auto'
  }
}

const getMonthName = (monthNumber: number) => {
  const monthIndex = monthNumber - 1
  return timelineStore?.months[monthIndex]?.long
}

const getFormattedDate = () => {
  let workingDate = getMonthName(timelineStore.detailData.month)
  if (timelineStore.detailData.day !== '') {
    workingDate = workingDate + ' ' + timelineStore.detailData.day + ','
  }
  return workingDate + ' ' + timelineStore.detailData.year
}
</script>

<template>
  <div
    class="detail-sidebar"
    :style="{ left: determineSidebarPosition('left'), right: determineSidebarPosition('right') }"
  >
    <button @click="timelineStore.displayDetailSidebar = false">Close</button>
    <div>
      <h5>{{ getFormattedDate() }}</h5>
      <h2>{{ timelineStore.detailData.title }}</h2>
      <p>{{ timelineStore.detailData.details }}</p>
    </div>
  </div>
</template>

<style scoped>
.detail-sidebar {
  position: fixed;
  top: 9vh;
  width: 25vw;
  height: 85.5vh;
  background-color: #222;
  color: #eee;
  padding: 2em;
  z-index: 200;
  transition: all 0.3s ease;
  right: 0;
  overflow-y: auto;
}

.detail-sidebar.left-bar {
  left: 0;
  background-color: red;
}

.detail-sidebar.right-bar {
  right: 0;
}
</style>
