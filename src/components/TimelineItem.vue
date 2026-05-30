<script setup lang="ts">
import { useTimelineStore } from '@/stores/timeline'

const timelineStore = useTimelineStore()

const props = defineProps<{
  itemData: TimelineItem
  extendMonth: boolean
  monthColor?: string
}>()

const showDetail = (event: MouseEvent) => {
  if (event.target instanceof Element) {
    const currentMonth = event.target.closest('.month-block')
    if (currentMonth instanceof Element) {
      currentMonth?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
    }
  }
  timelineStore.detailData = props.itemData
  timelineStore.displayDetailSidebar = true
  timelineStore.detailMonthColor = props.monthColor || ''
}

const determineIcon = (itemType: string) => {
  for (let i = 0; i < timelineStore.categoryIcons.length; i++) {
    if (timelineStore?.categoryIcons[i]?.name === itemType) {
      return timelineStore.categoryIcons[i]?.icon
    }
  }
}
</script>

<template>
  <div class="item">
    <span class="icon">{{ determineIcon(itemData.type) }}</span>
    <span class="title" v-if="extendMonth" @click.stop="showDetail"
      >{{ itemData.title }} <span class="more">more...</span></span
    >
  </div>
</template>

<style scoped>
.item {
  display: flex;
  flex-direction: row;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #ddd;
  margin-bottom: 0.25em;
}

.icon {
  height: 1.75em;
  width: 1.75em;
  border: 1px solid #222;
  border-radius: 50%;
  background-color: #222;
  text-align: center;
}

.title {
  color: #ddd;
  background-color: #222;
  padding: 0 5px;
  border-radius: 0.35em;
  position: relative;
  filter: opacity(75%);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: max-content;
  z-index: 10;
  text-align: center;
  margin: 0 0 0 0.35em;
  align-items: center;
}

.title::after {
  content: ' ';
  position: absolute;
  top: 50%;
  left: -10px;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent #222 transparent transparent;
}

.more {
  font-size: 0.75em;
  color: #aaa;
  margin-left: 0.5em;
}
</style>
