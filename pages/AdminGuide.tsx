
import React from 'react';
import { Rocket, Github, CheckSquare, Folder, FileCode, FileText, MousePointer2, ExternalLink, Globe, Zap, CheckCircle2 } from 'lucide-react';

const AdminGuide: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-white mb-12 shadow-xl border border-white/10">
          <h1 className="text-4xl font-black mb-4 flex items-center">
            <Rocket className="mr-4 text-blue-500" size={40} />
            MIT Final Steps
          </h1>
          <p className="text-gray-400 text-lg">
            GitHub पर अपलोड होने के बाद, अब अपनी वेबसाइट को दुनिया को दिखाने का समय है।
          </p>
        </div>

        {/* Step 3: Vercel Deployment */}
        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-indigo-100 mb-12">
          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-indigo-600 text-white p-4 rounded-2xl shadow-lg shadow-indigo-200">
              <Globe size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight">Step 3: वेबसाइट को Live करें</h2>
              <p className="text-indigo-600 font-bold text-sm uppercase tracking-widest">Free Hosting with Vercel</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="bg-indigo-50 text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center font-black flex-shrink-0 border border-indigo-100">1</div>
              <div>
                <p className="text-gray-900 font-bold text-lg mb-1">Vercel.com पर जाएँ</p>
                <p className="text-gray-600">वहाँ <b>"Continue with GitHub"</b> बटन दबाकर लॉगिन करें।</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-indigo-50 text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center font-black flex-shrink-0 border border-indigo-100">2</div>
              <div>
                <p className="text-gray-900 font-bold text-lg mb-1">Project Import करें</p>
                <p className="text-gray-600">आपको वहाँ अपना <code>mit-site</code> नाम का प्रोजेक्ट दिखेगा, उसके सामने <b>"Import"</b> बटन दबाएं।</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-indigo-50 text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center font-black flex-shrink-0 border border-indigo-100">3</div>
              <div>
                <p className="text-gray-900 font-bold text-lg mb-1">API Key सेटअप करें (जरूरी)</p>
                <p className="text-gray-600 mb-4">नीचे 'Environment Variables' का बटन होगा, उसे खोलें और ये भरें:</p>
                <div className="bg-slate-900 p-5 rounded-2xl font-mono text-sm text-blue-300 border border-white/10 shadow-inner">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-500 uppercase text-[10px] font-bold">Variable Name</span>
                    <span className="text-gray-500 uppercase text-[10px] font-bold">Value</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-bold">API_KEY</span>
                    <span className="text-green-400">अपनी Gemini API Key यहाँ डालें</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-indigo-50 text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center font-black flex-shrink-0 border border-indigo-100">4</div>
              <div>
                <p className="text-gray-900 font-bold text-lg mb-1">Deploy बटन दबाएं</p>
                <p className="text-gray-600">बस <b>"Deploy"</b> पर क्लिक करें। 1 मिनट के अंदर आपकी वेबसाइट का लिंक (जैसे: mit-site.vercel.app) आपको मिल जाएगा!</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-green-50 rounded-3xl border border-green-100 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Zap className="text-green-600 animate-pulse" />
              <p className="text-green-800 font-bold">सब कुछ तैयार है! आपकी वेबसाइट अब ऑनलाइन जाने के लिए रेडी है।</p>
            </div>
            <a href="https://vercel.com/new" target="_blank" className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold flex items-center space-x-2 shadow-lg shadow-green-200">
              <span>Go to Vercel</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Support Section */}
        <div className="text-center text-gray-500 text-sm">
          <p>अगर कोई दिक्कत आए, तो GitHub Repo का नाम चेक करें।</p>
        </div>
      </div>
    </div>
  );
};

export default AdminGuide;
