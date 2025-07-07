import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Knowledge from './pages/Knowledge'
import Quiz from './pages/Quiz'
import Game from './pages/Game'
import Case from './pages/Case'
import Compare from './pages/Compare'
import News from './pages/News'
import Library from './pages/Library'
import Profile from './pages/Profile'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', background: '#eeffe0', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <Link to="/">🏠 Trang chủ</Link>
        <Link to="/knowledge">📘 Kiến thức</Link>
        <Link to="/quiz">🧠 Quiz</Link>
        <Link to="/game">🎮 Game</Link>
        <Link to="/case">📂 Case</Link>
        <Link to="/compare">📊 So sánh</Link>
        <Link to="/news">📰 Tin tức</Link>
        <Link to="/library">📚 Tài liệu</Link>
        <Link to="/profile">👤 Hồ sơ</Link>
        <Link to="/login">🔑 Đăng nhập</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/game" element={<Game />} />
        <Route path="/case" element={<Case />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/news" element={<News />} />
        <Route path="/library" element={<Library />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App