
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Question, QuizResult } from '../types';
import { QUIZ_DURATION_SECONDS } from '../constants';

interface Props {
  questions: Question[];
  onFinish: (result: QuizResult) => void;
}

const Quiz: React.FC<Props> = ({ questions, onFinish }) => {
  // Shuffling logic
  const shuffledQuestions = useMemo(() => {
    return [...questions].sort(() => Math.random() - 0.5);
  }, [questions]);

  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(QUIZ_DURATION_SECONDS);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const calculateResult = useCallback((): QuizResult => {
    let score = 0;
    let correct = 0;
    let incorrect = 0;

    userAnswers.forEach((ans, idx) => {
      if (ans === shuffledQuestions[idx].correctIndex) {
        score++;
        correct++;
      } else if (ans !== null) {
        incorrect++;
      }
    });

    return {
      score,
      totalQuestions: shuffledQuestions.length,
      correctAnswers: correct,
      incorrectAnswers: incorrect,
      userAnswers,
      shuffledQuestions
    };
  }, [userAnswers, shuffledQuestions]);

  const handleSubmit = useCallback(() => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    const result = calculateResult();
    onFinish(result);
  }, [calculateResult, onFinish, isSubmitting]);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, handleSubmit]);

  const handleSelectAnswer = (qIdx: number, ansIdx: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[qIdx] = ansIdx;
    setUserAnswers(newAnswers);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6 pb-24 space-y-8">
      {/* Sticky Header with Timer */}
      <div className="sticky top-0 bg-gray-50/90 backdrop-blur-md z-40 py-4 border-b flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-gray-800">কুইজ চলছে</h2>
          <p className="text-xs text-gray-500">{shuffledQuestions.length} টি প্রশ্নের সবগুলো উত্তর দিন</p>
        </div>
        <div className={`text-2xl font-mono font-bold px-6 py-3 rounded-2xl shadow-lg border-2 ${
          timeLeft < 30 ? 'text-red-600 bg-red-50 border-red-200 animate-pulse' : 'text-blue-600 bg-blue-50 border-blue-100'
        }`}>
          ⏱️ {formatTime(timeLeft)}
        </div>
      </div>

      {/* All Questions List */}
      <div className="space-y-6">
        {shuffledQuestions.map((q, qIdx) => (
          <div key={q.id} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 animate-in fade-in slide-in-from-bottom duration-300">
            <div className="flex items-start gap-3 mb-4">
              <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-lg text-sm">{qIdx + 1}</span>
              <h3 className="text-lg font-semibold text-gray-800 leading-tight">{q.text}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {q.options.map((option, ansIdx) => (
                <button
                  key={ansIdx}
                  onClick={() => handleSelectAnswer(qIdx, ansIdx)}
                  className={`p-4 text-left rounded-xl border-2 transition-all flex items-center gap-3 active:scale-[0.98] ${
                    userAnswers[qIdx] === ansIdx
                      ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-100'
                      : 'bg-white border-gray-100 hover:border-blue-200'
                  }`}
                >
                  <div className={`min-w-[20px] h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                    userAnswers[qIdx] === ansIdx ? 'bg-blue-600 border-blue-600' : 'border-gray-300'
                  }`}>
                    {userAnswers[qIdx] === ansIdx && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                  </div>
                  <span className="text-gray-700 text-sm md:text-base">{option}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Manual Submit Button at Bottom */}
      <div className="flex justify-center pt-8">
        <button
          onClick={handleSubmit}
          className="w-full max-w-sm py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl shadow-xl transition-all active:scale-95"
        >
          সাবমিট করুন
        </button>
      </div>
    </div>
  );
};

export default Quiz;
