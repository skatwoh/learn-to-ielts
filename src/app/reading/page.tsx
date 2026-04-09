import { BookOpen } from 'lucide-react';

export default function ReadingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white">
          <BookOpen className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Luyện kỹ năng Đọc (Reading)</h1>
          <p className="text-gray-600">Rèn luyện kỹ thuật Skimming và Scanning hiệu quả</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Bài đọc thực tế</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-gray-800">The Impact of Climate Change on Biodiversity</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">LEVEL {i}</span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">Tìm hiểu về những ảnh hưởng của biến đổi khí hậu đối với sự đa dạng sinh học trên Trái Đất...</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
            <h3 className="font-bold text-green-900 mb-2">Chiến thuật Reading</h3>
            <ul className="text-sm text-green-800 space-y-2 list-disc pl-4">
              <li>Đừng cố gắng hiểu từng từ một.</li>
              <li>Tập trung vào từ khóa (Keywords).</li>
              <li>Luôn đọc câu hỏi trước khi đọc bài.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
