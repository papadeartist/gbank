import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6 }}>
      
      {/* GIỚI THIỆU */}
      <section style={{ padding: '40px', backgroundColor: '#eafaf1' }}>
        <h1 style={{ color: '#2e7d32' }}>🌿 GBANK – Green Bonds Academy and Knowledge</h1>
        <p>
          Nền tảng giáo dục và tương tác giúp sinh viên và doanh nghiệp hiểu, tiếp cận và ứng dụng trái phiếu xanh & bền vững.
        </p>
      </section>

      {/* VÌ SAO NÊN DÙNG */}
      <section style={{ padding: '40px' }}>
        <h2>🌟 Vì sao nên sử dụng GBANK?</h2>
        <ul>
          <li>✅ Cập nhật kiến thức mới nhất về trái phiếu xanh & bền vững</li>
          <li>✅ Học qua quiz, mini game, case thực tế</li>
          <li>✅ Doanh nghiệp có thể tìm hiểu quy trình phát hành trái phiếu xanh</li>
          <li>✅ Giao diện thân thiện, nội dung song ngữ 🇻🇳/🇬🇧</li>
        </ul>
      </section>

      {/* TIN NỔI BẬT */}
      <section style={{ padding: '40px', backgroundColor: '#f1f8e9' }}>
        <h2>🔥 Tin nổi bật</h2>
        <p>
          <strong>[07/2025]</strong> Việt Nam tăng tốc phát hành trái phiếu xanh, hướng đến tài chính bền vững toàn diện.
        </p>
        <p>
          <strong>[06/2025]</strong> Cập nhật hướng dẫn phát hành theo ICMA 2025.{' '}
          <Link to="/news" style={{ color: '#2e7d32', textDecoration: 'underline' }}>Xem thêm →</Link>
        </p>
      </section>

      {/* CÁC TÍNH NĂNG CHÍNH */}
      <section style={{ padding: '40px' }}>
        <h2>🔧 Tính năng chính</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {features.map((item) => (
            <Link
              to={item.link}
              key={item.title}
              style={{
                flex: '1 1 200px',
                border: '1px solid #ddd',
                borderRadius: '10px',
                padding: '20px',
                textAlign: 'center',
                textDecoration: 'none',
                color: '#333',
                backgroundColor: '#fafafa',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{ fontSize: '30px' }}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p style={{ fontSize: '14px' }}>{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#2e7d32', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <p>Nhóm phát triển: <strong>GG</strong></p>
        <p>📞 0383 598 569 | 📧 22122006pa@gmail.com</p>
      </footer>
    </div>
  );
}

const features = [
  {
    title: '📘 Kiến thức',
    desc: 'Học bài viết, infographic, tiêu chuẩn trái phiếu',
    link: '/knowledge',
    icon: '📘'
  },
  {
    title: '📝 Quiz',
    desc: 'Trắc nghiệm & kiểm tra kiến thức',
    link: '/quiz',
    icon: '📝'
  },
  {
    title: '🎮 Game',
    desc: 'Mini game vui học',
    link: '/game',
    icon: '🎮'
  },
  {
    title: '📂 Phân tích Case',
    desc: 'Mô phỏng hồ sơ trái phiếu để luyện tập',
    link: '/case',
    icon: '📂'
  },
  {
    title: '📊 So sánh trái phiếu',
    desc: 'Bảng so sánh giữa trái phiếu xanh và truyền thống',
    link: '/compare',
    icon: '📊'
  },
  {
    title: '📰 Tin tức',
    desc: 'Cập nhật tin thị trường mới nhất',
    link: '/news',
    icon: '📰'
  },
  {
    title: '📚 Thư viện',
    desc: 'Tải tài liệu, hướng dẫn, báo cáo ESG',
    link: '/library',
    icon: '📚'
  },
  {
    title: '👤 Hồ sơ người dùng',
    desc: 'Xem điểm quiz, game và thành tích',
    link: '/profile',
    icon: '👤'
  }
];

export default Home;