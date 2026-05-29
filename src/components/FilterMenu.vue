<script setup lang="ts">
import { useTimelineStore } from '@/stores/timeline'

const timelineStore = useTimelineStore()

const handleCategoryCheck = (index: number) => {
  const selectedCategory = timelineStore.itemTypes[index]
  if (selectedCategory) {
    timelineStore.toggleSelectedCategories(selectedCategory)
  }
}

const handleCompanyCheck = (index: number) => {
  const selectedCompany = timelineStore.companies[index]
  if (selectedCompany) {
    timelineStore.toggleSelectedCompanies(selectedCompany)
  }
}
</script>

<template>
  <div class="filter-menu">
    <div class="filter-list-wrapper">
      <div class="item-type-list filter-list">
        <h5>Categories:</h5>
        <ul>
          <li v-for="(itemType, index) in timelineStore.itemTypes" :key="itemType">
            <input
              type="checkbox"
              :name="itemType"
              :checked="timelineStore.selectedCategories.includes(itemType)"
              @change="handleCategoryCheck(index)"
            /><label for="itemType.name">{{ itemType }}</label>
          </li>
        </ul>
      </div>
      <div class="company-list filter-list">
        <h5>Companies:</h5>
        <ul>
          <li v-for="(company, index) in timelineStore.companies" :key="company">
            <input
              type="checkbox"
              :name="company"
              :checked="timelineStore.selectedCompanies.includes(company)"
              @change="handleCompanyCheck(index)"
            /><label for="company.name">{{ company.name }}</label>
          </li>
        </ul>
      </div>
    </div>
    <button @click="handleFilterClick()">Close</button>
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
