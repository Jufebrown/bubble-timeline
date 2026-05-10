import { defineStore } from 'pinia'
import { timelineData } from '../assets/timeline-data.json'

interface TimelineItem {
  year: number
  month: number
  day: string
  poi: string[]
  companies: string[]
  itemTypes: string[]
  title: string
  details: string
}

export const useTimelineStore = defineStore('timelineItems', {
  state: () => {
    return {
      years: [
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022',
        '2023',
        '2024',
        '2025',
        '2026',
        '2027',
        '2028',
        '2029',
        '2030',
      ],
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      timelineItems: timelineData as TimelineItem[],
    }
  },
})
