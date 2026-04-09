export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">IELTS Master</h3>
            <p className="text-gray-400 max-w-sm">
              Nền tảng học IELTS trực tuyến hàng đầu cho người Việt. Cung cấp tài liệu, bài tập và lộ trình học cá nhân hóa.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kỹ năng</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/listening" className="hover:text-white transition-colors">Luyện Nghe</a></li>
              <li><a href="/reading" className="hover:text-white transition-colors">Luyện Đọc</a></li>
              <li><a href="/writing" className="hover:text-white transition-colors">Luyện Viết</a></li>
              <li><a href="/speaking" className="hover:text-white transition-colors">Luyện Nói</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Hỗ trợ</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Về chúng tôi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Liên hệ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {new Date().getFullYear()} IELTS Master. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
