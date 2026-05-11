export {}

declare global {
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
}
