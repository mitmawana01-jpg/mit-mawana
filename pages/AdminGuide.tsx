
import React from 'react';
import { Rocket, Github, CheckSquare, Folder, FileCode, FileText, MousePointer2, Download, CheckCircle2 } from 'lucide-react';

const AdminGuide: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-white mb-12 shadow-xl border border-white/10">
          <h1 className="text-4xl font-black mb-4 flex items-center">
            <Rocket className="mr-4 text-blue-500" size={40} />
            MIT Publishing Guide
          </h1>
          <p className="text-gray-400 text-lg">
            बधाई हो! आपने फाइलें Extract कर ली हैं। अब बस आखिरी कदम बाकी है।
          </p>
        </div>

        {/* Final Upload Checklist */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-blue-100 mb-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <CheckCircle2 size={120} className="text-blue-600" />
          </div>
          
          <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
            <CheckSquare className="mr-3 text-blue-600" />
            फाइनल चेकलिस्ट: सिर्फ इन्हें अपलोड करें
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-blue-600 uppercase tracking-wider text-sm">ये 3 फोल्डर्स चुनें:</h3>
              <div className="space-y-2">
                <div className="flex items-center p-3 bg-blue-50 rounded-xl border border-blue-100">
                  <Folder className="text-blue-500 mr-3" size={20} />
                  <span className="font-mono font-bold">pages</span>
                </div>
                <div className="flex items-center p-3 bg-blue-50 rounded-xl border border-blue-100">
                  <Folder className="text-blue-500 mr-3" size={20} />
                  <span className="font-mono font-bold">components</span>
                </div>
                <div className="flex items-center p-3 bg-blue-50 rounded-xl border border-blue-100">
                  <Folder className="text-blue-500 mr-3" size={20} />
                  <span className="font-mono font-bold">services</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-indigo-600 uppercase tracking-wider text-sm">ये 6 फाइलें चुनें:</h3>
              <div className="grid grid-cols-1 gap-2">
                {[
                  'index.html', 'index.tsx', 'App.tsx', 
                  'constants.tsx', 'types.ts', 'metadata.json'
                ].map(file => (
                  <div key={file} className="flex items-center p-2 bg-indigo-50 rounded-lg border border-indigo-100">
                    <FileCode className="text-indigo-500 mr-3" size={16} />
                    <span className="font-mono text-xs font-bold">{file}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: GitHub Instructions */}
        <div className="bg-blue-600 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
           <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
                  <Github size={24} />
                </div>
                <h2 className="text-2xl font-bold">Step 2: GitHub पर 'Commit' करें</h2>
              </div>
              <p className="text-lg mb-6 leading-relaxed">
                ऊपर बताई गई चीजों को GitHub के अपलोड बॉक्स में डालें। जब अपलोड पूरा हो जाए, तो नीचे <b>"Commit changes"</b> बटन दबाएं। 
              </p>
              <div className="bg-black/20 p-4 rounded-2xl border border-white/10 text-sm">
                <b>याद रखें:</b> अगर आपको वहां <code>node_modules</code> नाम का फोल्डर दिखे, तो उसे अपलोड <u>नहीं</u> करना है।
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AdminGuide;
