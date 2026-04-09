import { Check } from 'lucide-react';

export default function PricingPage() {
  const tiers = [
    {
      name: 'Cơ bản',
      price: '0',
      description: 'Dành cho người mới bắt đầu làm quen với IELTS.',
      features: [
        'Truy cập các bài học cơ bản',
        'Luyện tập 10 bài test/tháng',
        'Flashcards từ vựng cơ bản',
        'Hỗ trợ qua cộng đồng',
      ],
      cta: 'Bắt đầu miễn phí',
      featured: false,
    },
    {
      name: 'Chuyên nghiệp',
      price: '199k',
      period: '/tháng',
      description: 'Lựa chọn tốt nhất cho mục tiêu 6.5 - 7.5.',
      features: [
        'Truy cập toàn bộ kho bài học',
        'Không giới hạn bài test',
        'Đánh giá Writing & Speaking (2 bài/tháng)',
        'Lộ trình học cá nhân hóa',
        'Tải tài liệu PDF độc quyền',
      ],
      cta: 'Nâng cấp ngay',
      featured: true,
    },
    {
      name: 'Cấp tốc',
      price: '499k',
      period: '/tháng',
      description: 'Dành cho người cần đạt điểm cao trong thời gian ngắn.',
      features: [
        'Toàn bộ tính năng gói Chuyên nghiệp',
        'Đánh giá Writing & Speaking không giới hạn',
        'Hỗ trợ 1-1 với giáo viên (2 buổi/tháng)',
        'Ưu tiên sửa bài trong 24h',
      ],
      cta: 'Liên hệ tư vấn',
      featured: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Chọn lộ trình phù hợp với bạn</h1>
        <p className="text-xl text-gray-600">Đầu tư vào kiến thức là khoản đầu tư thông minh nhất.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, i) => (
          <div
            key={i}
            className={`relative p-8 rounded-3xl border ${
              tier.featured
                ? 'border-blue-600 shadow-xl scale-105 z-10 bg-white'
                : 'border-gray-200 bg-white shadow-sm'
            }`}
          >
            {tier.featured && (
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                PHỔ BIẾN NHẤT
              </span>
            )}
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
            <div className="flex items-baseline mb-4">
              <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
              <span className="text-gray-500 ml-1">{tier.period}</span>
            </div>
            <p className="text-gray-600 mb-8">{tier.description}</p>

            <ul className="space-y-4 mb-10">
              {tier.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-xl font-bold transition-all ${
              tier.featured
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}>
              {tier.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-blue-50 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Bạn cần tư vấn lộ trình riêng?</h2>
          <p className="text-blue-700">Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7.</p>
        </div>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold border-2 border-blue-600 hover:bg-blue-50 transition-colors whitespace-nowrap">
          Chat với tư vấn viên
        </button>
      </div>
    </div>
  );
}
