'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { vocabulary } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import Link from 'next/link';

export default function VocabularyDetailPage() {
  const { topic } = useParams();
  const topicData = vocabulary.find((t) => t.id === topic);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  if (!topicData) return <div className="p-20 text-center">Topic not found</div>;

  const currentWord = topicData.words[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % topicData.words.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + topicData.words.length) % topicData.words.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/vocabulary" className="text-blue-600 font-medium mb-8 inline-block hover:underline">
        ← Quay lại danh sách chủ đề
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{topicData.title}</h1>
        <p className="text-lg text-gray-600">{topicData.titleVi}</p>
      </div>

      {/* Flashcard */}
      <div className="relative h-80 w-full max-w-lg mx-auto perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex + (isFlipped ? '-back' : '-front')}
            initial={{ rotateY: isFlipped ? -180 : 180, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: isFlipped ? 180 : -180, opacity: 0 }}
            transition={{ duration: 0.4 }}
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

      {/* Controls */}
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

      <div className="mt-20">
        <h3 className="text-2xl font-bold mb-8">Danh sách từ vựng</h3>
        <div className="grid gap-4">
          {topicData.words.map((w, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 flex justify-between items-center">
              <div>
                <h4 className="text-xl font-bold text-gray-900">{w.word}</h4>
                <p className="text-gray-500 text-sm">{w.definition}</p>
              </div>
              <div className="text-right">
                <span className="font-bold text-blue-600">{w.translation}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
