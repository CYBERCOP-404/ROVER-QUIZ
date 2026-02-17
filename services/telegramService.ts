
import { UserData, QuizResult, Question } from '../types';
import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from '../constants';

export const sendQuizResultsToTelegram = async (
  userData: UserData,
  result: QuizResult
) => {
  // Get IP Address
  let ip = 'Unknown';
  try {
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    const ipData = await ipResponse.json();
    ip = ipData.ip;
  } catch (e) {
    console.error("Failed to fetch IP", e);
  }

  // Calculate stats
  const attempted = result.userAnswers.filter(a => a !== null).length;
  
  // Date and Time formatting
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  let message = `𓆩𓆩  𝙷𝙸 𝚈𝙾𝚄 𝙷𝙰𝚅𝙴 𝙽𝙴𝚆 𝙷𝙸𝚃  ツ.𓆪𓆪\n`;
  message += `🐉 ⊚-----------------------------------⊚ 🐉\n`;
  message += `💬 <b>MAIN INFO :</b>\n`;
  message += `📧 ↝ Name » ${userData.name}\n`;
  message += `📟 ↝ Semester » ${userData.semester}\n`;
  message += `📟 ↝ Department » ${userData.department}\n`;
  message += `📟 ↝ Shift » ${userData.shift === '1st' ? '১ম' : '২য়'}\n`;
  message += `📟 ↝ Number » ${userData.phone}\n`;
  message += `📟 ↝ Email » ${userData.email || 'দেওয়া হয়নি'}\n\n`;
  
  message += `📊 <b>QUIZ STATS :</b>\n`;
  message += `📝 ↝ Total Q » ${result.totalQuestions}\n`;
  message += `✍️ ↝ Attempted » ${attempted}\n`;
  message += `✅ ↝ Correct » ${result.correctAnswers}\n`;
  message += `❌ ↝ Wrong » ${result.incorrectAnswers}\n`;
  message += `📈 ↝ Score » ${result.score}\n\n`;

  message += `🏴 ↝ 𝙲𝚘𝚞𝚗𝚝𝚛𝚢 »  BANGLADESH\n`;
  message += `⏳ ↝ 𝙲𝚘𝚍𝚎 »  +880\n`;
  message += `📅 Date: ${dateStr}\n`;
  message += `⏱ Time: ${timeStr}\n`;
  message += `🌐 IP: ${ip}\n`;
  message += `🐉 ⊚-----------------------------------⊚ 🐉\n`;
  message += `👨‍💻 Developer : MD.NAHIDUL ISLAM`;

  try {
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
  }
};
