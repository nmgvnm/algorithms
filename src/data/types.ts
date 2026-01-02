export interface AlgorithmCard {
  id: number
  number: string
  title: string
  description: string
}

export interface AlgorithmDetail {
  id: number
  number: string
  title: string
  description: string
  concept: string
  examples: {
    title: string
    description: string
    code: string
  }[]
  applications: string[]
}
