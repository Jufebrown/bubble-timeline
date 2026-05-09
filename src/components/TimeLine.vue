<script setup lang="ts">
import { useTimelineStore } from '@/stores/timeline'
defineProps<{
  msg: string
}>()

const timelineStore = useTimelineStore()
</script>

<template>
  <div>
    <ul class="year-list">
      <li class="year-block" v-for="year in timelineStore.years" v-bind:key="year">
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
}

.year-block {
  list-style-type: none;
  text-align: center;
  width: 200px;
  padding: 0px 20px;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
