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

  interface CompanyInfo {
    name: string
    selected: boolean
  }

  interface ItemCategory {
    name: string
    selected: boolean
  }
}
