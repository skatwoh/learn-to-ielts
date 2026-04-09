'use client';

import Link from 'next/link';
import { BookOpen, User, LayoutDashboard, CreditCard, Book } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/listening', label: 'Nghe' },
    { href: '/reading', label: 'Đọc' },
    { href: '/writing', label: 'Viết' },
    { href: '/speaking', label: 'Nói' },
    { href: '/vocabulary', label: 'Từ vựng' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">IELTS Master</span>
            </Link>

            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-bold transition-colors ${
                    pathname === link.href ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/pricing" className="hidden sm:flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors mr-2">
              <CreditCard className="w-4 h-4" />
              Bảng giá
            </Link>

            <Link href="/dashboard" className="p-2 text-gray-500 hover:text-blue-600 transition-colors">
              <LayoutDashboard className="w-6 h-6" />
            </Link>

            <Link href="/login" className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
