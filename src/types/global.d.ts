export {}

declare global {
  interface TimelineItem {
    year: number
    month: number
    day?: string
    poi?: string[]
    companies: string[]
    type: string
    title: string
    details: string
    links?: string[]
  }
}
