import { defineStore } from 'pinia'
import { timelineData } from '../assets/timeline-data.json'

export const useTimelineStore = defineStore('timelineItems', {
  state: () => ({
    items: timelineData,
  }),
})
