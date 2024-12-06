// Core type definitions for the PLDG application

export interface FAQ {
  /** The question text displayed in the FAQ section */
  question: string;
  /** The answer can be either a single string or an array of strings for multi-paragraph responses */
  answer: string | string[];
}

export interface TimelineEvent {
  /** The title of the timeline event */
  title: string;
  /** The date or date range for the event */
  date: string;
  /** The current status of the event */
  status: 'completed' | 'in-progress' | 'upcoming';
}

export interface RewardBucket {
  /** The multiplier applied to the base reward amount */
  multiplier: number;
  /** The base reward amount in FIL */
  amount: number;
}