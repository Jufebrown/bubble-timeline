import { defineStore } from 'pinia'
import { timelineData } from '../assets/timeline-data.json'

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
      timelineItems: timelineData as TimelineItem[],
    }
  },
})
