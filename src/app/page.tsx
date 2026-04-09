import Hero from '@/components/Hero';
import SkillCard from '@/components/SkillCard';
import { skills, tips } from '@/lib/data';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-20">
      <Hero />

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Luyện tập theo kỹ năng</h2>
          <p className="text-gray-600">Chọn kỹ năng bạn muốn cải thiện ngay hôm nay</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Kinh nghiệm & Bí kíp</h2>
              <p className="text-gray-600">Những bài viết giúp bạn tối ưu hóa quá trình ôn luyện</p>
            </div>
            <button className="text-blue-600 font-semibold hover:underline">Xem tất cả →</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{tip.category}</span>
                <h3 className="text-lg font-bold text-gray-900 mt-2 mb-4 hover:text-blue-600 cursor-pointer transition-colors">
                  {tip.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{tip.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-blue-600 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sẵn sàng bắt đầu hành trình?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Tham gia cùng hàng nghìn học viên khác và bắt đầu nâng cao điểm số IELTS của bạn ngay hôm nay.
            </p>
            <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors">
              Đăng ký tài khoản miễn phí
            </button>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-20" />
          <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-64 h-64 bg-blue-400 rounded-full opacity-20" />
        </div>
      </section>
    </div>
  );
}
