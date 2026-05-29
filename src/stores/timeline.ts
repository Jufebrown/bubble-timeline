import { defineStore } from 'pinia'
import { timelineData } from '../assets/timeline-data.json'
import TimelineItem from '@/components/TimelineItem.vue'

export const useTimelineStore = defineStore('timelineItems', {
  state: () => {
    return {
      months: [
        { short: 'J', long: 'January' },
        { short: 'F', long: 'February' },
        { short: 'M', long: 'March' },
        { short: 'A', long: 'April' },
        { short: 'M', long: 'May' },
        { short: 'J', long: 'June' },
        { short: 'J', long: 'July' },
        { short: 'A', long: 'August' },
        { short: 'S', long: 'September' },
        { short: 'O', long: 'October' },
        { short: 'N', long: 'November' },
        { short: 'D', long: 'December' },
      ],
      backgroundColors: [
        '#ffadad',
        '#ffc6b5',
        '#ffd6a5',
        '#ffe5b5',
        '#fdffb6',
        '#d9ffb6',
        '#caffbf',
        '#b5ffda',
        '#9bf6ff',
        '#9bdfff',
        '#a0c4ff',
        '#bdb2ff',
        '#e0b1ff',
        '#ffc6ff',
      ],
      monthBackgroundColors: [
        [
          '#ffadad',
          '#ffafaf',
          '#ffb2b2',
          '#ffb5b5',
          '#ffb8b8',
          '#ffbbbb',
          '#ffbebe',
          '#ffc1c1',
          '#ffc4c4',
          '#ffc7c7',
          '#ffcaca',
          '#ffcdcd',
        ],
        [
          '#ffc6b5',
          '#ffc8b7',
          '#ffcaba',
          '#ffccbd',
          '#ffcebf',
          '#ffd0c2',
          '#ffd2c5',
          '#ffd4c7',
          '#ffd6ca',
          '#ffd8cd',
          '#ffdacf',
          '#ffdcd2',
        ],
        [
          '#ffd6a5',
          '#ffd7a8',
          '#ffd8ab',
          '#ffdaae',
          '#ffdbb2',
          '#ffddb5',
          '#ffdeb8',
          '#ffe0bb',
          '#ffe1bf',
          '#ffe3c2',
          '#ffe4c5',
          '#ffe6c9',
        ],
        [
          '#ffe5b5',
          '#ffe5b7',
          '#ffe6ba',
          '#ffe7bd',
          '#ffe8bf',
          '#ffe9c2',
          '#ffeac5',
          '#ffebc7',
          '#ffecca',
          '#ffedcd',
          '#ffeecf',
          '#ffefd2',
        ],
        [
          '#fdffb6',
          '#fdffb8',
          '#fdffbb',
          '#fdffbd',
          '#fdffc0',
          '#fdffc3',
          '#fdffc5',
          '#fdffc8',
          '#fdffcb',
          '#fdffcd',
          '#fdffd0',
          '#fdffd3',
        ],
        [
          '#d9ffb6',
          '#daffb8',
          '#dbffbb',
          '#ddffbd',
          '#deffc0',
          '#dfffc3',
          '#e1ffc5',
          '#e2ffc8',
          '#e4ffcb',
          '#e5ffcd',
          '#e6ffd0',
          '#e8ffd3',
        ],
        [
          '#caffbf',
          '#cbffc1',
          '#cdffc3',
          '#cfffc5',
          '#d1ffc8',
          '#d3ffca',
          '#d5ffcc',
          '#d7ffcf',
          '#d9ffd1',
          '#dbffd3',
          '#ddffd6',
          '#dfffd8',
        ],
        [
          '#b5ffda',
          '#b7ffdb',
          '#baffdc',
          '#bdffde',
          '#bfffdf',
          '#c2ffe0',
          '#c5ffe2',
          '#c7ffe3',
          '#caffe4',
          '#cdffe6',
          '#cfffe7',
          '#d2ffe8',
        ],
        [
          '#9bf6ff',
          '#9ef6ff',
          '#a2f6ff',
          '#a5f6ff',
          '#a9f7ff',
          '#adf7ff',
          '#b0f7ff',
          '#b4f8ff',
          '#b8f8ff',
          '#bbf8ff',
          '#bff9ff',
          '#c3f9ff',
        ],
        [
          '#9bdfff',
          '#9ee0ff',
          '#a2e1ff',
          '#a5e2ff',
          '#a9e3ff',
          '#ade4ff',
          '#b0e5ff',
          '#b4e7ff',
          '#b8e8ff',
          '#bbe9ff',
          '#bfeaff',
          '#c3ebff',
        ],
        [
          '#a0c4ff',
          '#a3c6ff',
          '#a6c8ff',
          '#aacaff',
          '#adccff',
          '#b1ceff',
          '#b4d0ff',
          '#b8d3ff',
          '#bbd5ff',
          '#bfd7ff',
          '#c2d9ff',
          '#c6dbff',
        ],
        [
          '#bdb2ff',
          '#bfb4ff',
          '#c1b7ff',
          '#c4baff',
          '#c6bdff',
          '#c9c0ff',
          '#cbc2ff',
          '#cdc5ff',
          '#d0c8ff',
          '#d2cbff',
          '#d5ceff',
          '#d7d0ff',
        ],
        [
          '#e0b1ff',
          '#e1b3ff',
          '#e2b6ff',
          '#e3b9ff',
          '#e4bcff',
          '#e5bfff',
          '#e6c2ff',
          '#e7c4ff',
          '#e9c7ff',
          '#eacaff',
          '#ebcdff',
          '#ecd0ff',
        ],
        [
          '#ffc6ff',
          '#ffc8ff',
          '#ffcaff',
          '#ffccff',
          '#ffceff',
          '#ffd0ff',
          '#ffd2ff',
          '#ffd4ff',
          '#ffd6ff',
          '#ffd8ff',
          '#ffdaff',
          '#ffdcff',
        ],
      ],
      displayDetailSidebar: false,
      timelineItems: timelineData as TimelineItem[],
      detailData: {} as TimelineItem,
      detailMonthColor: '',
      extendMonths: false,
      showFilterMenu: false,
      selectedCategories: [] as string[],
      selectedCompanies: [] as string[],
    }
  },
  getters: {
    years(state) {
      const workingYearsList: number[] = []
      state.timelineItems.forEach((item: TimelineItem) => {
        if (!workingYearsList.includes(item.year)) {
          workingYearsList.push(item.year)
        }
      })
      // return a list of years from the earliest to latest with all years in between in case there are skipped years in data
      const yearsList: number[] = []
      for (let i = Math.min(...workingYearsList); i <= Math.max(...workingYearsList); i++) {
        yearsList.push(i)
      }
      return yearsList
    },
    companies(state) {
      const companiesList: CompanyInfo[] = []
      const tempCompaniesList: string[] = []
      state.timelineItems.forEach((item: TimelineItem) => {
        item.companies.forEach((company) => {
          if (!tempCompaniesList.includes(company)) {
            tempCompaniesList.push(company)
            const currentCompany: CompanyInfo = { name: company, selected: true }
            companiesList.push(currentCompany)
          }
        })
      })
      return companiesList.sort()
    },
    itemTypes(state) {
      const itemTypes: ItemCategory[] = []
      const tempItemTypes: string[] = []
      state.timelineItems.forEach((item: TimelineItem) => {
        if (!tempItemTypes.includes(item.type)) {
          tempItemTypes.push(item.type)
          const currentItemType: ItemCategory = { name: item.type, selected: true }
          itemTypes.push(currentItemType)
        }
      })
      return itemTypes
    },
  },
  actions: {
    getMonthItems(year: string | undefined, monthIndex: number | undefined) {
      let monthItems: TimelineItem[] = []
      let month
      if (monthIndex !== undefined) {
        month = monthIndex + 1
      }
      for (let i = 0; i < this.timelineItems.length; i++) {
        const element = this.timelineItems[i]
        if (element !== undefined && element.year.toString() == year && element.month == month) {
          if (
            this.selectedCategories.includes(element.type) &&
            this.determineIfCompaniesSelected(element)
          ) {
            monthItems.push(element)
          } else {
            monthItems = monthItems.filter((item) => item !== element)
          }
        }
      }
      return monthItems
    },
    determineIfCompaniesSelected(timelineItem: TimelineItem) {
      let result = false
      timelineItem.companies.forEach((company) => {
        if (this.selectedCompanies.includes(company)) {
          result = true
        } else {
          result = false
        }
      })
      return result
    },
    toggleSelectedCategories(category: string) {
      if (!this.selectedCategories.includes(category)) {
        this.selectedCategories.push(category)
      } else {
        this.selectedCategories = this.selectedCategories.filter((item) => item !== category)
      }
    },
    toggleSelectedCompanies(company: string) {
      if (!this.selectedCompanies.includes(company)) {
        this.selectedCompanies.push(company)
      } else {
        this.selectedCompanies = this.selectedCompanies.filter((item) => item !== company)
      }
    },
    selectAllCategories() {
      this.itemTypes.forEach((itemType) => {
        if (!this.selectedCategories.includes(itemType)) {
          this.selectedCategories.push(itemType)
        }
      })
    },
    selectAllCompanies() {
      this.companies.forEach((company) => {
        if (!this.selectedCompanies.includes(company)) {
          this.selectedCompanies.push(company)
        }
      })
    },
    selectAllPeople() {
      this.people.forEach((person) => {
        this.selectedPeople.push(person)
      })
    },
  },
})
