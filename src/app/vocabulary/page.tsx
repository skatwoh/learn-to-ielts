'use client';

import Link from 'next/link';
import { Leaf, Cpu, GraduationCap, LucideIcon, Book, Sparkles, Loader2 } from 'lucide-react';
import { vocabulary } from '@/lib/data';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const iconMap: Record<string, LucideIcon> = {
  Leaf,
  Cpu,
  GraduationCap,
};

export default function VocabularyPage() {
  const [topicInput, setTopicInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [aiTopics, setAiTopics] = useState<any[]>([]);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topicInput.trim()) return;

    setIsLoading(true);
    try {
      // Simulate checking if topic exists or just adding it to the UI list
      const topicId = topicInput.toLowerCase().replace(/\s+/g, '-');

      const newTopic = {
        id: topicId,
        title: topicInput,
        titleVi: `Chủ đề ${topicInput}`,
        icon: 'Sparkles',
        words: [], // Detail page will fetch if words are empty
        isAiGenerated: true
      };

      // Prevent duplicates in the UI list
      if (!allTopics.find(t => t.id === topicId)) {
        setAiTopics([newTopic, ...aiTopics]);
      }
      setTopicInput('');
    } catch (error) {
      console.error('Failed to generate:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const allTopics = [...aiTopics, ...vocabulary];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white">
            <Book className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Từ vựng IELTS theo chủ đề</h1>
            <p className="text-gray-600">Nâng cao vốn từ vựng với các chủ đề thường gặp hoặc tự tạo mới bằng AI</p>
          </div>
        </div>

        {/* AI Generator Input */}
        <form onSubmit={handleGenerate} className="relative flex-grow max-w-md">
          <input
            type="text"
            value={topicInput}
            onChange={(e) => setTopicInput(e.target.value)}
            placeholder="Nhập chủ đề bạn muốn học (VD: Music, Space...)"
            className="w-full pl-4 pr-32 py-4 border-2 border-orange-100 rounded-2xl focus:outline-none focus:border-orange-500 transition-colors bg-orange-50/30"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="absolute right-2 top-2 bottom-2 bg-orange-600 text-white px-4 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-orange-700 transition-all disabled:opacity-50"
          >
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            Tạo bằng AI
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AnimatePresence>
          {allTopics.map((topic, index) => {
            const Icon = topic.icon === 'Sparkles' ? Sparkles : (iconMap[topic.icon] || Leaf);
            return (
              <motion.div
                key={topic.id + index}
                initial={topic.isAiGenerated ? { opacity: 0, scale: 0.9 } : false}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`/vocabulary/${topic.id}`}
                  className={`block group bg-white p-8 rounded-2xl border ${topic.isAiGenerated ? 'border-orange-200 bg-orange-50/20' : 'border-gray-100'} shadow-sm hover:shadow-md transition-all hover:-translate-y-1 relative overflow-hidden`}
                >
                  {topic.isAiGenerated && (
                    <div className="absolute top-0 right-0 bg-orange-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
                      AI GENERATED
                    </div>
                  )}
                  <div className={`w-14 h-14 ${topic.isAiGenerated ? 'bg-orange-600 text-white' : 'bg-orange-50 text-orange-600'} rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{topic.title}</h2>
                  <p className="text-orange-600 font-medium mb-4">{topic.titleVi}</p>
                  <p className="text-gray-500 text-sm mb-6">Bao gồm {topic.words.length > 0 ? topic.words.length : 'nhiều'} từ vựng quan trọng và ví dụ chi tiết.</p>
                  <span className="text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Học ngay <span>→</span>
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
