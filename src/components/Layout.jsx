import { Outlet, Link, useLocation } from 'react-router-dom'
import './Layout.css'

const navItems = [
  {
    path: '/', label: '首页',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  },
  {
    path: '/introduction', label: '政协简介',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
  },
  {
    path: '/proposals', label: '政协提案',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
  },
  {
    path: '/activities', label: '活动记录',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
  },
  {
    path: '/workplan', label: '工作计划',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
  },
  {
    path: '/studios', label: '委员工作室',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/></svg>
  },
  {
    path: '/summary', label: '活动总结',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M7 16l4-4 4 4 4-4"/></svg>
  },
  {
    path: '/yearreport', label: '年度总结',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
  },
]

function Layout() {
  const location = useLocation()

  return (
    <div className="layout">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">政</span>
            <div className="logo-text">
              <h1>上城区政协</h1>
              <p>杭州市上城区中国人民政治协商会议</p>
            </div>
          </div>
          <div className="header-badge">
            <span className="badge-year">2026</span>
            <span className="badge-label">履职年</span>
          </div>
        </div>
        <nav className="nav">
          <div className="nav-content container">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-info">
            <h3>杭州市上城区政协</h3>
            <p>杭州市上城区人民政府</p>
          </div>
          <div className="footer-contact">
            <p>联系邮箱：scqzx@hzcbd.gov.cn</p>
            <p>联系电话：0571-87822612</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 杭州市上城区政协 版权所有</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
