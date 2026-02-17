
export interface UserData {
  name: string;
  semester: string;
  department: string;
  shift: string;
  phone: string; // Now mandatory
  email?: string;
}

export interface Question {
  id: number;
  category: 'Rover' | 'ICT' | 'Math';
  text: string;
  options: string[];
  correctIndex: number;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  userAnswers: (number | null)[];
  shuffledQuestions: Question[];
}

export enum AppView {
  REGISTRATION = 'REGISTRATION',
  QUIZ = 'QUIZ',
  RESULTS = 'RESULTS'
}
