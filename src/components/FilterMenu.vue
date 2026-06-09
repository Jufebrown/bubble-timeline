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
    <button class="close-button" @click="timelineStore.showFilterMenu = false">
      CLOSE<span class="close-x">X</span>
    </button>
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
              />
              <span class="icon">{{ timelineStore.determineIcon(itemType) }}</span>
              {{ itemType }}</label
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
            <h4>Companies/Organizations:</h4></label
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
  left: 0;
  background-color: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #eee;
  height: 85vh;
  width: 100%;
  overflow-y: auto;
  z-index: 100;
}

.filter-list-wrapper {
  margin-top: 2em;
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

.icon {
  font-size: 1.1em;
  margin-right: 0.2em;
}

.close-button {
  position: absolute;
  top: 1.5em;
  right: 1.2em;
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
</style>
