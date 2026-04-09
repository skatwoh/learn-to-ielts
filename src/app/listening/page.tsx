import { Headphones } from 'lucide-react';

export default function ListeningPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white">
          <Headphones className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Luyện kỹ năng Nghe (Listening)</h1>
          <p className="text-gray-600">Tổng hợp các bài luyện nghe từ cơ bản đến nâng cao</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Bài học mới nhất</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-blue-600 border border-gray-200">{i}</span>
                    <span className="font-medium text-gray-800">IELTS Listening Practice Test {i}</span>
                  </div>
                  <span className="text-sm text-gray-500">20 phút</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <h3 className="font-bold text-blue-900 mb-2">Lời khuyên cho bạn</h3>
            <p className="text-sm text-blue-800 leading-relaxed">
              Hãy luyện nghe ít nhất 30 phút mỗi ngày thông qua các bản tin BBC hoặc Podcast để làm quen với nhiều giọng đọc khác nhau.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
