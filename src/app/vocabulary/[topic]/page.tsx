'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { vocabulary } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Loader2, ChevronFirst, ChevronLast } from 'lucide-react';
import Link from 'next/link';

const ITEMS_PER_PAGE = 10;

export default function VocabularyDetailPage() {
  const { topic } = useParams();
  const [topicData, setTopicData] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);

  const fetchAIContent = useCallback(async (topicTitle: string) => {
    setIsGenerating(true);
    try {
      const res = await fetch('/api/vocabulary/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: topicTitle }),
      });
      if (!res.ok) throw new Error('Failed to generate');
      const data = await res.json();
      return data.words;
    } catch (err) {
      console.error(err);
      setError('Không thể tạo từ vựng. Vui lòng thử lại sau.');
      return [];
    } finally {
      setIsGenerating(false);
    }
  }, []);

  useEffect(() => {
    const loadInitialData = async () => {
      const staticData = vocabulary.find((t) => t.id === topic);
      if (staticData) {
        setTopicData({ ...staticData });
      } else {
        const topicTitle = (topic as string).split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setIsGenerating(true);
        const words = await fetchAIContent(topicTitle);
        if (words.length > 0) {
          setTopicData({
            id: topic,
            title: topicTitle,
            titleVi: `Chủ đề ${topicTitle}`,
            words: words,
            isAiGenerated: true
          });
        } else {
          setError('Không tìm thấy chủ đề này.');
        }
        setIsGenerating(false);
      }
    };

    loadInitialData();
  }, [topic, fetchAIContent]);

  const currentWord = topicData?.words[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % topicData.words.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + topicData.words.length) % topicData.words.length);
  };

  const handleLearnMore = async () => {
    const newWords = await fetchAIContent(topicData.title);
    if (newWords.length > 0) {
      const existingWords = topicData.words.map((w: any) => w.word.toLowerCase());
      const filteredNewWords = newWords.filter((w: any) => !existingWords.includes(w.word.toLowerCase()));

      setTopicData({
        ...topicData,
        words: [...topicData.words, ...filteredNewWords]
      });
    }
  };

  // Pagination logic
  const totalPages = useMemo(() => {
    if (!topicData) return 0;
    return Math.ceil(topicData.words.length / ITEMS_PER_PAGE);
  }, [topicData]);

  const paginatedWords = useMemo(() => {
    if (!topicData) return [];
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return topicData.words.slice(start, start + ITEMS_PER_PAGE);
  }, [topicData, currentPage]);

  if (error) return (
    <div className="p-20 text-center">
      <p className="text-red-500 mb-4">{error}</p>
      <Link href="/vocabulary" className="text-orange-600 font-medium hover:underline">
        ← Quay lại danh sách chủ đề
      </Link>
    </div>
  );

  if (!topicData) return (
    <div className="p-20 text-center flex flex-col items-center gap-4">
      <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
      <p className="text-gray-600 font-medium">Đang chuẩn bị bài học AI cho bạn...</p>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/vocabulary" className="text-orange-600 font-medium mb-8 inline-block hover:underline">
        ← Quay lại danh sách chủ đề
      </Link>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {topicData.title}
            {topicData.isAiGenerated && <span className="ml-4 text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full align-middle">AI Content</span>}
          </h1>
          <p className="text-lg text-gray-600">{topicData.titleVi}</p>
        </div>

        <button
          onClick={handleLearnMore}
          disabled={isGenerating}
          className="bg-orange-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-orange-700 transition-all disabled:opacity-50 shadow-lg shadow-orange-200"
        >
          {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
          Học thêm bằng AI
        </button>
      </div>

      {/* Flashcard with improved non-flipping animation */}
      {topicData.words.length > 0 && (
        <div className="relative h-80 w-full max-w-lg mx-auto overflow-hidden rounded-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex + (isFlipped ? '-back' : '-front')}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="w-full h-full bg-white rounded-3xl shadow-xl border border-gray-100 cursor-pointer flex flex-col items-center justify-center p-8 text-center"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {!isFlipped ? (
                <>
                  <span className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4">English</span>
                  <h2 className="text-5xl font-extrabold text-gray-900">{currentWord.word}</h2>
                  <p className="mt-8 text-gray-400 text-sm">Nhấn để xem nghĩa</p>
                </>
              ) : (
                <>
                  <span className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Vietnamese</span>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{currentWord.translation}</h2>
                  <p className="text-gray-600 italic leading-relaxed">{currentWord.definition}</p>
                  <p className="mt-8 text-gray-400 text-sm">Nhấn để quay lại</p>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* Flashcard Controls */}
      {topicData.words.length > 0 && (
        <div className="flex justify-center items-center gap-8 mt-12">
          <button
            onClick={handlePrev}
            className="p-4 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <span className="font-bold text-gray-600">
            {currentIndex + 1} / {topicData.words.length}
          </span>
          <button
            onClick={handleNext}
            className="p-4 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Paginated Vocabulary List */}
      <div className="mt-20">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold">Danh sách từ vựng</h3>
          <p className="text-gray-500 text-sm">Tổng cộng {topicData.words.length} từ</p>
        </div>

        <div className="grid gap-4 mb-8">
          <AnimatePresence mode="popLayout">
            {paginatedWords.map((w: any, i: number) => (
              <motion.div
                key={w.word + i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-6 rounded-xl border border-gray-100 flex justify-between items-center hover:border-orange-200 transition-colors"
              >
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{w.word}</h4>
                  <p className="text-gray-500 text-sm">{w.definition}</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-orange-600">{w.translation}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-30 transition-colors"
            >
              <ChevronFirst className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-1 mx-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg font-bold transition-all ${
                    currentPage === page
                      ? 'bg-orange-600 text-white'
                      : 'hover:bg-orange-50 text-gray-600'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-30 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-30 transition-colors"
            >
              <ChevronLast className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
