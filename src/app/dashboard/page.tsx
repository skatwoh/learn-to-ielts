import {
  BarChart3,
  BookOpen,
  Clock,
  Trophy,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Chào mừng trở lại, Nguyễn Văn A!</h1>
          <p className="text-gray-600">Hôm nay là một ngày tuyệt vời để luyện tập IELTS.</p>
        </div>
        <div className="flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-xl">
          <Trophy className="text-yellow-600 w-5 h-5" />
          <span className="font-bold text-blue-900">1,250 Points</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Bài học đã học', value: '12', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Thời gian học', value: '45h', icon: Clock, color: 'text-purple-600', bg: 'bg-purple-50' },
          { label: 'Bài tập hoàn thành', value: '85', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50' },
          { label: 'Điểm trung bình', value: '7.5', icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className={`w-10 h-10 ${stat.bg} rounded-lg flex items-center justify-center mb-4`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <p className="text-sm font-medium text-gray-500">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Hoạt động gần đây</h2>
              <button className="text-sm text-blue-600 font-bold">Xem tất cả</button>
            </div>
            <div className="space-y-4">
              {[
                { activity: 'Luyện tập Reading Test 5', time: '2 giờ trước', result: '8.5 Band' },
                { activity: 'Học từ vựng Environment', time: 'Hôm qua', result: '15 từ mới' },
                { activity: 'Luyện nghe IELTS Listening Part 1', time: '2 ngày trước', result: '9.0 Band' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <div>
                      <p className="font-bold text-gray-800">{item.activity}</p>
                      <p className="text-xs text-gray-500">{item.time}</p>
                    </div>
                  </div>
                  <span className="font-bold text-blue-600">{item.result}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold mb-6">Gợi ý lộ trình cho bạn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-blue-100 rounded-xl bg-blue-50">
                <h3 className="font-bold text-blue-900 mb-1">Writing Task 1</h3>
                <p className="text-sm text-blue-700">Hãy thử viết về biểu đồ đường (Line Graph) để cải thiện điểm số.</p>
              </div>
              <div className="p-4 border border-purple-100 rounded-xl bg-purple-50">
                <h3 className="font-bold text-purple-900 mb-1">Speaking Part 2</h3>
                <p className="text-sm text-purple-700">Luyện tập mô tả một chuyến đi đáng nhớ của bạn.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-gray-900 text-white p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-4 text-center">Nâng cấp tài khoản PRO</h3>
            <p className="text-gray-400 text-sm mb-6 text-center leading-relaxed">
              Truy cập vào 500+ bài test thực tế và nhận đánh giá từ giáo viên bản xứ.
            </p>
            <button className="w-full bg-blue-600 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
              Nâng cấp ngay
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold mb-4">Lịch học tuần này</h3>
            <div className="space-y-4">
              {['Thứ 2: Reading', 'Thứ 4: Listening', 'Thứ 6: Writing & Speaking'].map((day, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  <span className="text-sm text-gray-600">{day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
