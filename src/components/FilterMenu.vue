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

const handlePersonCheck = (index: number) => {
  const selectedPerson = timelineStore.people[index]
  if (selectedPerson) {
    timelineStore.toggleSelectedPeople(selectedPerson)
  }
}

const handleSelectAllCategories = () => {
  timelineStore.allCategoriesSelected = !timelineStore.allCategoriesSelected
  if (timelineStore.allCategoriesSelected) {
    timelineStore.selectAllCategories()
  } else {
    timelineStore.deselectAllCategories()
  }
}

const handleSelectAllCompanies = () => {
  timelineStore.allCompaniesSelected = !timelineStore.allCompaniesSelected
  if (timelineStore.allCompaniesSelected) {
    timelineStore.selectAllCompanies()
  } else {
    timelineStore.deselectAllCompanies()
  }
}

const handleSelectAllPeople = () => {
  timelineStore.allPeopleSelected = !timelineStore.allPeopleSelected
  if (timelineStore.allPeopleSelected) {
    timelineStore.selectAllPeople()
  } else {
    timelineStore.deselectAllPeople()
  }
}
</script>

<template>
  <div class="filter-menu">
    <div class="filter-list-wrapper">
      <div class="item-type-list filter-list">
        <div class="column-header">
          <label
            ><input
              type="checkbox"
              name="all-categories"
              :checked="timelineStore.allCategoriesSelected"
              @change="handleSelectAllCategories()"
            />
            <h4>Categories:</h4></label
          >
        </div>
        <ul>
          <li v-for="(itemType, index) in timelineStore.itemTypes" :key="itemType">
            <label
              ><input
                type="checkbox"
                :name="itemType"
                :checked="timelineStore.selectedCategories.includes(itemType)"
                @change="handleCategoryCheck(index)"
              />{{ itemType }}</label
            >
          </li>
        </ul>
      </div>
      <div class="company-list filter-list">
        <div class="column-header">
          <label
            ><input
              type="checkbox"
              name="all-companies"
              :checked="timelineStore.allCompaniesSelected"
              @change="handleSelectAllCompanies()"
            />
            <h4>Companies:</h4></label
          >
        </div>
        <ul>
          <li v-for="(company, index) in timelineStore.companies" :key="company">
            <label
              ><input
                type="checkbox"
                :name="company"
                :checked="timelineStore.selectedCompanies.includes(company)"
                @change="handleCompanyCheck(index)"
              />{{ company }}</label
            >
          </li>
        </ul>
      </div>
      <div class="person-list filter-list">
        <div class="column-header">
          <label
            ><input
              type="checkbox"
              name="all-people"
              :checked="timelineStore.allPeopleSelected"
              @change="handleSelectAllPeople()"
            />
            <h4>People:</h4></label
          >
        </div>
        <ul>
          <li v-for="(person, index) in timelineStore.people" :key="person">
            <label
              ><input
                type="checkbox"
                :name="person"
                :checked="timelineStore.selectedPeople.includes(person)"
                @change="handlePersonCheck(index)"
              />{{ person }}</label
            >
          </li>
        </ul>
      </div>
    </div>
    <button class="close-button" @click="timelineStore.showFilterMenu = false">Close</button>
  </div>
</template>

<style scoped>
h4 {
  font-weight: bold;
  border-bottom: 1px solid #777;
}

ul {
  padding: 0;
}

li {
  list-style-type: none;
}

input {
  margin-right: 0.5em;
}

label {
  display: flex;
  flex-direction: row;
}

.column-header {
  margin-bottom: 0.5em;
  padding-bottom: 0.25em;
}

.filter-menu {
  position: fixed;
  top: 5.5em;
  background-color: #222;
  display: flex;
  flex-direction: column;
  left: 50%;
  transform: translate(-50%, 0);
  color: #eee;
  border-radius: 8px;
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

.close-button {
  width: 10em;
  margin: 0 auto 1em auto;
  background-color: #777;
  color: #eee;
  border: none;
  font-size: 0.8em;
  cursor: pointer;
}
</style>
