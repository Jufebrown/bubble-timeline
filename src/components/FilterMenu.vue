<script setup lang="ts">
import { useTimelineStore } from '@/stores/timeline'

const timelineStore = useTimelineStore()
</script>

<template>
  <div class="filter-menu">
    <div class="filter-list-wrapper">
      <div class="item-type-list filter-list">
        <h5>Categories:</h5>
        <ul>
          <li v-for="itemType in timelineStore.itemTypes" :key="itemType">
            <input type="checkbox" :name="itemType" :checked="true" /><label for="itemType">{{
              itemType
            }}</label>
          </li>
        </ul>
      </div>
      <div class="company-list filter-list">
        <h5>Companies:</h5>
        <ul>
          <li v-for="company in timelineStore.companies" :key="company">
            <input type="checkbox" :name="company" :checked="true" /><label for="company">{{
              company
            }}</label>
          </li>
        </ul>
      </div>
    </div>
    <button @click="timelineStore.showFilterMenu = false">Filter</button>
  </div>
</template>

<style scoped>
ul {
  padding: 0;
}

li {
  list-style-type: none;
}

label {
  margin-left: 0.5em;
}

.filter-menu {
  position: fixed;
  top: 5.5em;
  background-color: #222;
  display: flex;
  flex-direction: column;
  left: 50%;
  transform: translate(-50%, 0);
}

.filter-list-wrapper {
  display: flex;
  flex-direction: row;
}

.filter-list {
  margin: 2em;
}

.company-list {
  padding: 0 3em;
  border-left: 1px solid #777;
  border-right: 1px solid #777;
}
</style>
