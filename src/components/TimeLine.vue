<script setup lang="ts">
import { useTimelineStore } from '@/stores/timeline'
defineProps<{
  msg: string
}>()

const timelineStore = useTimelineStore()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
  </div>
  <div>
    <ul class="year-list">
      <li class="year-block" v-for="year in timelineStore.years" v-bind:key="year">
        {{ year }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

.greetings h1,
.greetings h3 {
  text-align: center;
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
