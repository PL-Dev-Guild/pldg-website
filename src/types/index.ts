export interface FAQ {
  question: string;
  answer: string | string[];
}

export interface TimelineEvent {
  title: string;
  date: string;
  status: 'completed' | 'in-progress' | 'upcoming';
}

export interface RewardBucket {
  multiplier: number;
  amount: number;
}