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
  interactive?: boolean           // 인터랙티브 컴포넌트가 있는지
  interactiveComponent?: string   // 컴포넌트 키 (예: 'Chapter01')
}
