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
  if (timelineStore.detailData.day && timelineStore.detailData.day !== '') {
    workingDate = workingDate + ' ' + timelineStore.detailData.day + ','
  }
  return workingDate + ' ' + timelineStore.detailData.year
}
</script>

<template>
  <div
    class="detail-sidebar"
    :style="{
      left: determineSidebarPosition('left'),
      right: determineSidebarPosition('right'),
      color: timelineStore.detailMonthColor,
    }"
  >
    <button class="close-button" @click="timelineStore.displayDetailSidebar = false">
      CLOSE<span class="close-x">X</span>
    </button>

    <div>
      <span class="icon">{{ timelineStore.determineIcon(timelineStore.detailData.type) }}</span
      ><span>{{ timelineStore.detailData.type }}</span>
    </div>
    <h5 class="date-header">
      {{ getFormattedDate() }}
    </h5>
    <h2 class="title-header">
      {{ timelineStore.detailData.title }}
    </h2>
    <p class="details-body">{{ timelineStore.detailData.details }}</p>
    <ul class="links" v-if="timelineStore.detailData.links">
      <h5>Links:</h5>
      <li v-for="link in timelineStore.detailData?.links" :key="link">
        <a :style="{ color: timelineStore.detailMonthColor }" v-bind:href="link" target="_blank">{{
          link
        }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  padding: 0;
}

li {
  margin-left: 1.1em;
}

a {
  text-decoration: none;
  font-size: 0.8em;
  margin-bottom: 0.5em;
}

.detail-sidebar {
  position: fixed;
  top: 8.5vh;
  width: 25vw;
  height: 85.5vh;
  background-color: #1c1c1c;
  color: #eee;
  padding: 2em;
  z-index: 200;
  transition: all 0.3s ease;
  right: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.detail-sidebar.left-bar {
  left: 0;
  background-color: red;
}

.detail-sidebar.right-bar {
  right: 0;
}

.close-button {
  position: absolute;
  top: 1em;
  right: 1em;
  background-color: transparent;
  color: #eee;
  border: none;
  font-size: 0.8em;
  cursor: pointer;
}

.close-x {
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 1px 2px;
  margin-left: 3px;
}

.date-header {
  margin-bottom: 4em;
  font-size: 0.9em;
}

.title-header {
  margin-bottom: 1em;
  font-size: 1.3em;
  font-weight: bold;
}

.icon {
  font-size: 1.5em;
  border-radius: 50%;
  text-align: center;
}

.details-body {
  margin: 1em 0 2em 0;
  font-size: 0.95em;
}

.links {
  margin: auto 0 8em 0;
  list-style-type: square;
}

@media (max-width: 720px) {
  .detail-sidebar {
    width: 100%;
  }
}
</style>
