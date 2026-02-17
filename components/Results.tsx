
import React, { useState } from 'react';
import { QuizResult, UserData } from '../types';

interface Props {
  userData: UserData;
  result: QuizResult;
}

const Results: React.FC<Props> = ({ userData, result }) => {
  const [showAnswers, setShowAnswers] = useState(false);
  const percentage = Math.round((result.correctAnswers / result.totalQuestions) * 100);
  const attempted = result.userAnswers.filter(a => a !== null).length;

  const FB_LINK = "https://www.facebook.com/RPIRSG/";

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in slide-in-from-bottom duration-500">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="bg-blue-600 p-8 text-center text-white">
          <div className="text-6xl mb-4">📚</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">আরও অনুশীলন প্রয়োজন!</h2>
          <p className="opacity-90 font-medium">{userData.name}, আপনার ফলাফল নিচে দেওয়া হলো</p>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          {/* List Style Stats */}
          <div className="space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <span className="text-gray-600 font-medium">মোট প্রশ্ন:</span>
              <span className="text-gray-900 font-bold">{result.totalQuestions} টি</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <span className="text-gray-600 font-medium">আপনি উত্তর দিয়েছেন:</span>
              <span className="text-blue-600 font-bold">{attempted} টি</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <span className="text-gray-600 font-medium">সঠিক উত্তর হয়েছে:</span>
              <span className="text-green-600 font-bold">{result.correctAnswers} টি</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">ভুল উত্তর হয়েছে:</span>
              <span className="text-red-500 font-bold">{result.incorrectAnswers} টি</span>
            </div>
          </div>

          {/* Performance Bar */}
          <div className="relative pt-2">
            <div className="flex justify-between text-sm mb-2 font-bold text-gray-600">
              <span>পারফরম্যান্স (শতকরা)</span>
              <span className="text-blue-600">{percentage}%</span>
            </div>
            <div className="w-full bg-gray-100 h-4 rounded-full overflow-hidden border border-gray-200">
              <div 
                className={`h-full transition-all duration-1000 ${percentage > 70 ? 'bg-green-500' : percentage > 40 ? 'bg-yellow-500' : 'bg-red-500'}`} 
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* User Details Card */}
          <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between md:block border-b md:border-none pb-2 md:pb-0">
              <span className="text-blue-400 block mb-1">বিভাগ:</span>
              <span className="font-bold text-gray-800 uppercase">{userData.department}</span>
            </div>
            <div className="flex justify-between md:block border-b md:border-none pb-2 md:pb-0">
              <span className="text-blue-400 block mb-1">সেমিস্টার:</span>
              <span className="font-bold text-gray-800">{userData.semester}</span>
            </div>
            <div className="flex justify-between md:block border-b md:border-none pb-2 md:pb-0">
              <span className="text-blue-400 block mb-1">শিফট:</span>
              <span className="font-bold text-gray-800">{userData.shift === '1st' ? '১ম' : '২য়'}</span>
            </div>
            <div className="flex justify-between md:block">
              <span className="text-blue-400 block mb-1">মোবাইল:</span>
              <span className="font-bold text-gray-800">{userData.phone}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 pt-4">
            <button
              onClick={() => setShowAnswers(!showAnswers)}
              className="w-full py-4 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-all active:scale-[0.98]"
            >
              {showAnswers ? 'সঠিক উত্তর বন্ধ করুন' : 'সঠিক উত্তরগুলো দেখুন'}
            </button>
            <a
              href={FB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
               অফিসিয়াল পেজ দেখুন
            </a>
          </div>
        </div>
      </div>

      {/* Detailed Answers Section */}
      {showAnswers && (
        <div className="space-y-4 animate-in fade-in slide-in-from-top duration-500">
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <span className="bg-blue-600 text-white p-2 rounded-lg text-sm">Q/A</span> 
            সঠিক উত্তর ও বিশ্লেষণ
          </h3>
          <div className="space-y-3">
            {result.shuffledQuestions.map((q, idx) => {
              const userChoice = result.userAnswers[idx];
              const isCorrect = userChoice === q.correctIndex;
              return (
                <div key={q.id} className="bg-white p-5 rounded-2xl border-l-8 border border-gray-100 shadow-sm" style={{ borderLeftColor: isCorrect ? '#22c55e' : userChoice === null ? '#9ca3af' : '#ef4444' }}>
                  <p className="font-bold text-gray-800 mb-3 text-sm md:text-base leading-snug">{idx + 1}. {q.text}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs md:text-sm">
                    <div className={`p-2 rounded-lg ${userChoice === null ? 'bg-gray-100 text-gray-500 italic' : isCorrect ? 'bg-green-50 text-green-700 font-medium' : 'bg-red-50 text-red-700'}`}>
                      আপনার উত্তর: {userChoice !== null ? q.options[userChoice] : 'উত্তর দেননি'}
                    </div>
                    {!isCorrect && (
                      <div className="p-2 rounded-lg bg-blue-50 text-blue-700 font-bold">
                        সঠিক উত্তর: {q.options[q.correctIndex]}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;
