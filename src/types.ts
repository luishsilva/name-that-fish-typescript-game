// If you have any types that are SHARED BY MANY COMPONENTS,put them here
export type CounterType = {
  incorrectCount: number,
  correctCount: number,
}

export type FnType = {
  handleIncorrectCountCount: () => void
}