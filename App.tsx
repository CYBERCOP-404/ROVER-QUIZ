
import React, { useState } from 'react';
import { UserData, QuizResult, AppView } from './types';
import { QUESTIONS } from './constants';
import { sendQuizResultsToTelegram } from './services/telegramService';
import RegistrationModal from './components/RegistrationModal';
import Quiz from './components/Quiz';
import Results from './components/Results';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.REGISTRATION);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  const handleRegistrationComplete = (data: UserData) => {
    setUserData(data);
    setView(AppView.QUIZ);
  };

  const handleQuizFinish = async (result: QuizResult) => {
    setQuizResult(result);
    setView(AppView.RESULTS);
    
    // Auto-submission to Telegram
    if (userData) {
      await sendQuizResultsToTelegram(userData, result);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center font-sans antialiased text-gray-900">
      <header className="w-full max-w-2xl px-4 py-8 text-center">
        <h1 className="text-4xl font-black text-blue-600 drop-shadow-sm flex items-center justify-center gap-2">
           <span className="bg-blue-600 text-white p-2 rounded-xl text-2xl">QM</span>
           কুইজ মাস্টার
        </h1>
        <p className="text-gray-500 mt-2 font-medium">রোভার • আইসিটি • গণিত</p>
      </header>

      <main className="w-full flex-grow">
        {view === AppView.REGISTRATION && (
          <RegistrationModal onComplete={handleRegistrationComplete} />
        )}

        {view === AppView.QUIZ && (
          <Quiz questions={QUESTIONS} onFinish={handleQuizFinish} />
        )}

        {view === AppView.RESULTS && userData && quizResult && (
          <Results userData={userData} result={quizResult} />
        )}
      </main>

      <footer className="w-full py-6 text-center text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} কুইজ মাস্টার অ্যাপ | সকল অধিকার সংরক্ষিত
      </footer>
    </div>
  );
};

export default App;
