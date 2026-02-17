
import React, { useState } from 'react';
import { UserData } from '../types';

interface Props {
  onComplete: (data: UserData) => void;
}

const RegistrationModal: React.FC<Props> = ({ onComplete }) => {
  const [formData, setFormData] = useState<UserData>({
    name: '',
    semester: '',
    department: '',
    shift: '',
    phone: '',
    email: '',
  });

  const [showNotice, setShowNotice] = useState(false);
  const [error, setError] = useState('');

  const validateAndShowNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.semester || !formData.department || !formData.shift || !formData.phone) {
      setError('অনুগ্রহ করে সব তারকা চিহ্নিত (*) তথ্যগুলো প্রদান করুন। মোবাইল নম্বর বাধ্যতামূলক।');
      return;
    }
    setError('');
    setShowNotice(true);
  };

  const handleStart = () => {
    onComplete(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      {!showNotice ? (
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
          <div className="bg-blue-600 p-6 text-center">
            <h2 className="text-2xl font-bold text-white">১ম, স্বাগতম!</h2>
            <p className="text-blue-100 text-sm mt-1">আপনার তথ্য দিয়ে কুইজ শুরু করুন</p>
          </div>
          
          <form onSubmit={validateAndShowNotice} className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">নাম <span className="text-red-500">*</span></label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="আপনার পুরো নাম"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">সেমিস্টার <span className="text-red-500">*</span></label>
                <select
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  value={formData.semester}
                  onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                >
                  <option value="">নির্বাচন করুন</option>
                  <option value="1st">১ম</option>
                  <option value="2nd">২য়</option>
                  <option value="3rd">৩য়</option>
                  <option value="4th">৪র্থ</option>
                  <option value="5th">৫ম</option>
                  <option value="6th">৬ষ্ঠ</option>
                  <option value="7th">৭ম</option>
                  <option value="8th">৮ম</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">বিভাগ <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  placeholder="যেমন: কম্পিউটার"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">শিফট <span className="text-red-500">*</span></label>
              <div className="mt-1 flex gap-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="shift"
                    value="1st"
                    className="text-blue-600 focus:ring-blue-500"
                    onChange={(e) => setFormData({ ...formData, shift: e.target.value })}
                  />
                  <span>১ম</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="shift"
                    value="2nd"
                    className="text-blue-600 focus:ring-blue-500"
                    onChange={(e) => setFormData({ ...formData, shift: e.target.value })}
                  />
                  <span>২য়</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">মোবাইল নম্বর <span className="text-red-500">*</span></label>
              <input
                type="tel"
                required
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="017XXXXXXXX"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">ইমেইল (অপশনাল)</label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="example@gmail.com"
              />
            </div>

            {error && <p className="text-red-500 text-xs italic">{error}</p>}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95 mt-4"
            >
              কুইজ শুরু করুন
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in duration-300 p-8 text-center space-y-6">
          <div className="text-4xl">⏳</div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-gray-800">মনোযোগ দিন!</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              আপনার হাতে মাত্র ৩ মিনিট সময় আছে। এই সময়ের মধ্যে যত সম্ভব উত্তর দিন এবং চেষ্টা করুন। ৩ মিনিট শেষ হলে ফর্মটি স্বয়ংক্রিয়ভাবে সাবমিট হবে।
            </p>
          </div>
          <button
            onClick={handleStart}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg transition-all active:scale-95"
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
};

export default RegistrationModal;
