'use client';

import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">IELTS Master</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/listening" className="text-gray-600 hover:text-blue-600 transition-colors">Nghe</Link>
            <Link href="/reading" className="text-gray-600 hover:text-blue-600 transition-colors">Đọc</Link>
            <Link href="/writing" className="text-gray-600 hover:text-blue-600 transition-colors">Viết</Link>
            <Link href="/speaking" className="text-gray-600 hover:text-blue-600 transition-colors">Nói</Link>
          </div>
          <div className="flex items-center">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
