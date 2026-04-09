import { Mic } from 'lucide-react';

export default function SpeakingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white">
          <Mic className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Luyện kỹ năng Nói (Speaking)</h1>
          <p className="text-gray-600">Luyện tập phản xạ và cải thiện phát âm mỗi ngày</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Luyện tập theo Part</h2>
            <div className="space-y-4">
              {[
                { part: 1, title: 'Introduction & Interview', desc: 'Các câu hỏi về bản thân, gia đình, công việc.' },
                { part: 2, title: 'Individual Long Turn', desc: 'Nói về một chủ đề trong vòng 2 phút.' },
                { part: 3, title: 'Two-way Discussion', desc: 'Thảo luận chuyên sâu về các vấn đề xã hội.' }
              ].map((item) => (
                <div key={item.part} className="p-4 bg-gray-50 rounded-xl hover:bg-white hover:border-red-100 border border-transparent transition-all cursor-pointer">
                  <h3 className="font-bold text-gray-800">Part {item.part}: {item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
            <h3 className="font-bold text-red-900 mb-2">Ghi âm & Đánh giá</h3>
            <p className="text-sm text-red-800 mb-4">
              Hãy thử ghi âm lại câu trả lời của bạn và nghe lại để tự phát hiện lỗi sai trong phát âm và ngữ pháp.
            </p>
            <button className="w-full bg-red-600 text-white py-2 rounded-lg text-sm font-bold hover:bg-red-700 transition-colors">
              Bắt đầu ghi âm thử
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
