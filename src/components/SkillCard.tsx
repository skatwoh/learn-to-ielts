'use client';

import Link from 'next/link';
import { Headphones, BookOpen, PenTool, Mic, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, LucideIcon> = {
  Headphones,
  BookOpen,
  PenTool,
  Mic,
};

interface SkillCardProps {
  id: string;
  title: string;
  titleVi: string;
  description: string;
  icon: string;
  color: string;
}

export default function SkillCard({ id, title, titleVi, description, icon, color }: SkillCardProps) {
  const Icon = iconMap[icon] || BookOpen;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4 text-white`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm font-medium text-blue-600 mb-3">{titleVi}</p>
      <p className="text-gray-600 mb-6 line-clamp-2">{description}</p>
      <Link
        href={`/${id}`}
        className="text-blue-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all"
      >
        Luyện tập ngay <span>→</span>
      </Link>
    </motion.div>
  );
}
