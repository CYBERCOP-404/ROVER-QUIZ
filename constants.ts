
import { Question } from './types';

export const TELEGRAM_BOT_TOKEN = '7458136650:AAHgPVFlOmRddlCmjJDyO10Cj2TNvv7U-MU';
export const TELEGRAM_CHAT_ID = '5316471518';
export const QUIZ_DURATION_SECONDS = 180; // 3 minutes

export const QUESTIONS: Question[] = [
  // Rover Scouting (12 Questions)
  { id: 1, category: 'Rover', text: 'স্কাউটিং আন্দোলনের প্রতিষ্ঠাতা কে?', options: ['রবার্ট স্টিফেনসন স্মিথ লর্ড ব্যাডেন পাওয়েল', 'উইলিয়াম স্মিথ', 'জন টমসন', 'হেনরি ডুনান্ট'], correctIndex: 0 },
  { id: 2, category: 'Rover', text: 'রোভার স্কাউটিং এর মূল নীতি কী?', options: ['সেবা', 'সাহস', 'একতা', 'শান্তি'], correctIndex: 0 },
  { id: 3, category: 'Rover', text: 'বাংলাদেশ স্কাউটসের সদর দপ্তর কোথায় অবস্থিত?', options: ['ঢাকা', 'চট্টগ্রাম', 'রাজশাহী', 'সিলেট'], correctIndex: 0 },
  { id: 4, category: 'Rover', text: 'স্কাউট মটো বা মূলমন্ত্র কী?', options: ['সদা প্রস্তুত', 'দেশপ্রেম', 'সেবা দিন', 'অনুশাসন'], correctIndex: 0 },
  { id: 5, category: 'Rover', text: 'BP এর জন্মদিন কবে?', options: ['২২ ফেব্রুয়ারি', '২৬ মার্চ', '১৬ ডিসেম্বর', '২১ জানুয়ারি'], correctIndex: 0 },
  { id: 6, category: 'Rover', text: 'বিশ্ব স্কাউট জাম্বুরি কত বছর পর পর অনুষ্ঠিত হয়?', options: ['২ বছর', '৩ বছর', '৪ বছর', '৫ বছর'], correctIndex: 2 },
  { id: 7, category: 'Rover', text: 'রোভারিং টু সাকসেস বইটির লেখক কে?', options: ['লর্ড ব্যাডেন পাওয়েল', 'রবীন্দ্রনাথ ঠাকুর', 'উইলিয়াম হেনরি', 'জে কে রাউলিং'], correctIndex: 0 },
  { id: 8, category: 'Rover', text: 'স্কাউট সালাম কয়টি আঙুল দিয়ে দিতে হয়?', options: ['২টি', '৩টি', '৪টি', '৫টি'], correctIndex: 1 },
  { id: 9, category: 'Rover', text: 'স্কাউট আইনের ধারা কয়টি?', options: ['৫টি', '৭টি', '৯টি', '১০টি'], correctIndex: 1 },
  { id: 110, category: 'Rover', text: 'উডব্যাজ কোন আন্দোলনের সর্বোচ্চ পদবী?', options: ['স্কাউট', 'রোভার', 'গার্ল গাইড', 'সবগুলো'], correctIndex: 0 },
  { id: 111, category: 'Rover', text: 'স্কাউটিং এর ৩টি প্রতিজ্ঞার ১টি কি?', options: ['স্রষ্টা ও দেশের প্রতি কর্তব্য', 'সব সময় ঘুমানো', 'খেলাধুলা করা', 'বই পড়া'], correctIndex: 0 },
  { id: 112, category: 'Rover', text: 'স্কাউট হ্যান্ডশেক কোন হাতে করা হয়?', options: ['ডান হাতে', 'বাম হাতে', 'উভয় হাতে', 'হাত মেলানো নিষেধ'], correctIndex: 1 },

  // ICT (12 Questions)
  { id: 11, category: 'ICT', text: 'CPU এর পূর্ণরূপ কী?', options: ['Central Process Unit', 'Central Processing Unit', 'Control Process Unit', 'Core Processing Unit'], correctIndex: 1 },
  { id: 12, category: 'ICT', text: 'কম্পিউটারের মস্তিষ্ক বলা হয় কাকে?', options: ['RAM', 'Monitor', 'CPU', 'Hard Disk'], correctIndex: 2 },
  { id: 13, category: 'ICT', text: 'ইন্টারনেটের জনক কে?', options: ['চার্লস ব্যাবেজ', 'বিল গেটস', 'ভিন্ট সার্ফ', 'স্টিভ জবস'], correctIndex: 2 },
  { id: 14, category: 'ICT', text: 'HTML এর পূর্ণরূপ কী?', options: ['Hyperlink Text Markup Language', 'Hyper Text Markup Language', 'Hyper Text Machine Language', 'Home Tool Markup Language'], correctIndex: 1 },
  { id: 15, category: 'ICT', text: 'সবচেয়ে শক্তিশালী কম্পিউটার কোনটি?', options: ['Microcomputer', 'Supercomputer', 'Mainframe Computer', 'Laptop'], correctIndex: 1 },
  { id: 16, category: 'ICT', text: 'বাইনারি পদ্ধতিতে কয়টি অংক ব্যবহার করা হয়?', options: ['১টি', '২টি', '৮টি', '১০টি'], correctIndex: 1 },
  { id: 17, category: 'ICT', text: 'নিচের কোনটি ইনপুট ডিভাইস?', options: ['Monitor', 'Printer', 'Mouse', 'Speaker'], correctIndex: 2 },
  { id: 18, category: 'ICT', text: 'ফেসবুকের প্রতিষ্ঠাতা কে?', options: ['এলন মাস্ক', 'মার্ক জাকারবার্গ', 'জ্যাক ডরসি', 'ল্যারি পেজ'], correctIndex: 1 },
  { id: 19, category: 'ICT', text: 'ইমেইল ঠিকানায় @ চিহ্নের পরের অংশকে কি বলে?', options: ['Username', 'Domain Name', 'Address', 'Tag'], correctIndex: 1 },
  { id: 20, category: 'ICT', text: 'আধুনিক কম্পিউটারের জনক কে?', options: ['নিউটন', 'চার্লস ব্যাবেজ', 'আইনস্টাইন', 'বিল গেটস'], correctIndex: 1 },
  { id: 121, category: 'ICT', text: 'নিচের কোনটি ব্রাউজার?', options: ['Google Search', 'Chrome', 'Windows', 'Facebook'], correctIndex: 1 },
  { id: 122, category: 'ICT', text: '১ মেগাবাইট (MB) কত কিলোবাইট (KB)?', options: ['১০২৪ KB', '১০০০ KB', '৫১২ KB', '১২০০ KB'], correctIndex: 0 },

  // Math (6 Questions)
  { id: 21, category: 'Math', text: '৭ এর বর্গ কত?', options: ['১৪', '৪৯', '৬৩', '৫৬'], correctIndex: 1 },
  { id: 22, category: 'Math', text: 'ত্রিভুজের তিন কোণের সমষ্টি কত?', options: ['৯০ ডিগ্রী', '১৮০ ডিগ্রী', '২৭০ ডিগ্রী', '৩৬০ ডিগ্রী'], correctIndex: 1 },
  { id: 24, category: 'Math', text: '১ থেকে ১০ পর্যন্ত মৌলিক সংখ্যা কয়টি?', options: ['৩টি', '৪টি', '৫টি', '৬টি'], correctIndex: 1 },
  { id: 25, category: 'Math', text: 'x + 5 = 12 হলে x এর মান কত?', options: ['৫', '৭', '১২', '১৭'], correctIndex: 1 },
  { id: 26, category: 'Math', text: 'সবচেয়ে ক্ষুদ্রতম মৌলিক সংখ্যা কোনটি?', options: ['০', '১', '২', '৩'], correctIndex: 2 },
  { id: 27, category: 'Math', text: '৫০০ এর ২০% কত?', options: ['৫০', '৮০', '১০০', '২০০'], correctIndex: 2 }
];
