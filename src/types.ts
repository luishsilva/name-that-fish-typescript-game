// If you have any types that are SHARED BY MANY COMPONENTS,put them here
export type ScoreBoardType = {
  incorrectCount: number;
  correctCount: number;
  nameFishes: Array<{ name: string; url: string }>;
};
