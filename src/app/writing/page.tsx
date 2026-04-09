import { PenTool } from 'lucide-react';

export default function WritingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white">
          <PenTool className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Luyện kỹ năng Viết (Writing)</h1>
          <p className="text-gray-600">Làm chủ Task 1 và Task 2 với các bài mẫu band 8.0+</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Các chủ đề phổ biến</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Education', 'Environment', 'Technology', 'Health'].map((topic) => (
                <div key={topic} className="p-4 border border-gray-100 rounded-xl bg-gray-50 hover:bg-white hover:border-purple-200 transition-all cursor-pointer">
                  <span className="font-bold text-gray-800">{topic}</span>
                  <p className="text-sm text-gray-500 mt-1">10+ bài mẫu & từ vựng</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
            <h3 className="font-bold text-purple-900 mb-2">Cấu trúc bài viết</h3>
            <p className="text-sm text-purple-800 mb-4">
              Luôn đảm bảo bài viết của bạn có đầy đủ: Mở bài, Thân bài (2 đoạn) và Kết bài.
            </p>
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg text-sm font-bold hover:bg-purple-700 transition-colors">
              Xem bộ template Task 2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
