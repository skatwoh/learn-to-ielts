import Link from 'next/link';
import { Leaf, Cpu, GraduationCap, LucideIcon, Book } from 'lucide-react';
import { vocabulary } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  Leaf,
  Cpu,
  GraduationCap,
};

export default function VocabularyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white">
          <Book className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Từ vựng IELTS theo chủ đề</h1>
          <p className="text-gray-600">Nâng cao vốn từ vựng với các chủ đề thường gặp trong kỳ thi</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {vocabulary.map((topic) => {
          const Icon = iconMap[topic.icon] || Leaf;
          return (
            <Link
              key={topic.id}
              href={`/vocabulary/${topic.id}`}
              className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <Icon className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{topic.title}</h2>
              <p className="text-orange-600 font-medium mb-4">{topic.titleVi}</p>
              <p className="text-gray-500 text-sm mb-6">Bao gồm {topic.words.length} từ vựng quan trọng và ví dụ chi tiết.</p>
              <span className="text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                Học ngay <span>→</span>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
