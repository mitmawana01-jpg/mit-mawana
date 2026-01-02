
import React from 'react';
import { Rocket, Key, Globe, Cloud, Code, Image, CheckCircle, Info, Server, Github, Lock, Unlock, UploadCloud, FileCode, MousePointer2, FileText, Folder, AlertTriangle, CheckSquare } from 'lucide-react';

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
            बिना कोडिंग के अपनी वेबसाइट को GitHub पर डालने और लाइव करने का सबसे आसान तरीका।
          </p>
        </div>

        {/* Steps Container */}
        <div className="space-y-8">
          
          {/* Step 1: Create Repo */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-slate-100 text-slate-900 p-3 rounded-2xl">
                <Github size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Step 1: Repository बनाएँ</h2>
            </div>
            <p className="text-sm text-gray-600 mb-4">GitHub पर 'New' बटन दबाएं, नाम लिखें (जैसे: `mit-site`) और <b>Public</b> चुनकर 'Create Repository' पर क्लिक करें।</p>
          </div>

          {/* New Checklist Section: What files to upload? */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-indigo-100 text-indigo-600 p-3 rounded-2xl">
                <CheckSquare size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">कौन सी फाइलें अपलोड करें?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* TO UPLOAD */}
              <div className="space-y-4">
                <p className="font-bold text-green-600 flex items-center text-sm">
                  <CheckCircle size={16} className="mr-2" /> इन सबको सिलेक्ट करें:
                </p>
                <div className="bg-green-50/50 p-4 rounded-2xl space-y-2 border border-green-100">
                  <div className="flex items-center text-xs text-gray-700"><FileCode size={14} className="mr-2 text-green-600"/> index.html</div>
                  <div className="flex items-center text-xs text-gray-700"><FileCode size={14} className="mr-2 text-green-600"/> index.tsx & App.tsx</div>
                  <div className="flex items-center text-xs text-gray-700"><Folder size={14} className="mr-2 text-green-600"/> pages/ (पूरा फोल्डर)</div>
                  <div className="flex items-center text-xs text-gray-700"><Folder size={14} className="mr-2 text-green-600"/> components/ (पूरा फोल्डर)</div>
                  <div className="flex items-center text-xs text-gray-700"><Folder size={14} className="mr-2 text-green-600"/> services/ (पूरा फोल्डर)</div>
                  <div className="flex items-center text-xs text-gray-700"><FileText size={14} className="mr-2 text-green-600"/> constants.tsx & types.ts</div>
                  <div className="flex items-center text-xs text-gray-700"><FileText size={14} className="mr-2 text-green-600"/> package.json (अगर है)</div>
                </div>
              </div>

              {/* NOT TO UPLOAD */}
              <div className="space-y-4">
                <p className="font-bold text-red-600 flex items-center text-sm">
                  <AlertTriangle size={16} className="mr-2" /> इसे भूलकर भी न डालें:
                </p>
                <div className="bg-red-50 p-4 rounded-2xl border border-red-100">
                  <div className="flex items-center text-xs text-red-700 font-bold mb-1">
                    <Folder size={14} className="mr-2"/> node_modules
                  </div>
                  <p className="text-[10px] text-red-500 leading-relaxed">
                    यह बहुत भारी फोल्डर है। Vercel इसे अपने आप बना लेगा। अगर आप इसे अपलोड करेंगे, तो अपलोड कभी खत्म नहीं होगा या एरर आएगा।
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Drag & Drop */}
          <div className="bg-blue-600 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <UploadCloud size={120} />
             </div>
             
             <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
                    <MousePointer2 size={24} />
                  </div>
                  <h2 className="text-2xl font-bold">Step 2: Drag & Drop</h2>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <p className="text-sm">GitHub पर "uploading an existing file" लिंक पर क्लिक करें।</p>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <p className="text-sm">अपने कंप्यूटर पर प्रोजेक्ट फोल्डर से ऊपर बताई गई फाइलें सिलेक्ट करें और खींचकर GitHub के डिब्बे में छोड़ दें।</p>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <p className="text-sm">"Commit changes" बटन दबाएं।</p>
                  </div>
                </div>
             </div>
          </div>

          {/* Step 3: Vercel */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-2xl">
                <Cloud size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Step 3: Vercel से लाइव करें</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <ol className="list-decimal pl-6 space-y-4 text-sm">
                <li><a href="https://vercel.com" target="_blank" className="text-blue-600 font-bold underline">Vercel.com</a> पर लॉगिन करें।</li>
                <li><b>"Add New" > "Project"</b> पर क्लिक करें।</li>
                <li>अपने GitHub एकाउंट से कनेक्ट करें और अपने `mit-site` वाले रिपॉजिटरी पर <b>"Import"</b> दबाएं।</li>
                <li><b>Environment Variables</b> में <code>API_KEY</code> नाम से अपनी Gemini Key पेस्ट करें।</li>
                <li><b>Deploy</b> दबाएं।</li>
              </ol>
            </div>
          </div>

          {/* Success Summary */}
          <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white flex flex-col md:flex-row items-center gap-8 border border-white/10 shadow-2xl">
            <div className="bg-green-600 p-6 rounded-full shadow-lg shadow-green-600/20">
              <CheckCircle size={48} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Checklist Completed!</h3>
              <p className="text-gray-400 text-sm">
                अगर आपने `node_modules` को छोड़कर बाकी सब अपलोड कर दिया है, तो आप Vercel पर जाने के लिए तैयार हैं।
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminGuide;
