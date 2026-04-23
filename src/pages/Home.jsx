import { Link } from 'react-router-dom'
import './Home.css'

const highlights = [
  {
    title: '50个委员工作室',
    desc: '覆盖全区14个街道，实现履职平台全覆盖',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 21h18"/>
        <path d="M5 21V7l8-4v18"/>
        <path d="M19 21V11l-6-4"/>
        <path d="M9 9v.01"/>
        <path d="M9 12v.01"/>
        <path d="M9 15v.01"/>
        <path d="M9 18v.01"/>
      </svg>
    )
  },
  {
    title: '一室一品',
    desc: '打造特色品牌，深化楼宇商圈、宋韵文化公益慈善建设',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    )
  },
  {
    title: '三位一体',
    desc: '坚持党建引领，强化委员工作室建设',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    )
  }
]

const quickLinks = [
  { path: '/introduction', title: '政协简介', desc: '了解上城区政协基本信息' },
  { path: '/proposals', title: '政协提案', desc: '查看政协提案工作' },
  { path: '/studios', title: '委员工作室', desc: '50个委员工作室信息' },
  { path: '/activities', title: '活动记录', desc: '活动现场照片与素材' },
]

const photoWall = [
  { src: '/images/fenzhongxin/fzx_01.webp', caption: '市政协新时代协商民主实践中心矩阵建设座谈会' },
  { src: '/images/fenzhongxin/fzx_02.webp', caption: '市区街三级政协党建联建工作会议' },
  { src: '/images/fenzhongxin/fzx_03.webp', caption: '彭埠街道"圆梦安居"民生议事堂专题协商' },
  { src: '/images/fenzhongxin/fzx_04.webp', caption: '彭埠街道委员小组非遗体验活动' },
  { src: '/images/fenzhongxin/fzx_05.webp', caption: '联盟单位夏衍小学棋类比赛' },
  { src: '/images/fenzhongxin/fzx_06.webp', caption: '妇联界别国学文化品鉴暨界别调研总结会' },
  { src: '/images/fenzhongxin/fzx_07.webp', caption: '中医养生专题讲座及义诊服务活动' },
  { src: '/images/fenzhongxin/fzx_08.webp', caption: '湖滨街道"助推商圈社区建设"民生议事堂' },
  { src: '/images/fenzhongxin/fzx_09.webp', caption: '清波街道老旧小区物业服务"质价双提"协商' },
  { src: '/images/fenzhongxin/fzx_10.webp', caption: '小营街道"遇见东坡"交流会' },
  { src: '/images/fenzhongxin/fzx_13.webp', caption: '区政协孙国方主席赴紫阳分中心调研' },
  { src: '/images/fenzhongxin/fzx_15.webp', caption: '紫阳上羊实践点"推动邻里食堂智能化"专题协商' },
]

function Home() {
  return (
    <div className="home">
      {/* 英雄区域 */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <div className="hero-text fade-in">
            <h1>杭州市上城区政协</h1>
            <p className="hero-subtitle">凝聚共识 汇聚力量 助推高质量发展</p>
            <p className="hero-desc">
              上城区政协按照"向基层延伸覆盖"和"不建机构建机制"工作要求，
              坚持党建引领，深化"一室一品"建设，着力构建宽领域、多层次、
              常态化的协商体系。
            </p>
            <div className="hero-actions">
              <Link to="/studios" className="btn btn-primary">查看委员工作室</Link>
              <Link to="/introduction" className="btn btn-outline">了解更多</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 数据亮点 */}
      <section className="highlights">
        <div className="container">
          <h2 className="section-title">工作亮点</h2>
          <div className="highlights-grid">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card card">
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 快速入口 */}
      <section className="quick-links">
        <div className="container">
          <h2 className="section-title">快速入口</h2>
          <div className="links-grid">
            {quickLinks.map((link, index) => (
              <Link key={index} to={link.path} className="link-card">
                <h3>{link.title}</h3>
                <p>{link.desc}</p>
                <svg className="link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 活动照片墙 */}
      <section className="photo-wall">
        <div className="container">
          <h2 className="section-title">活动风采</h2>
          <p className="section-subtitle">记录上城区政协委员履职足迹</p>
          <div className="photo-grid">
            {photoWall.map((photo, index) => (
              <div key={index} className="photo-item">
                <img src={photo.src} alt={photo.caption} loading="lazy" />
                <div className="photo-caption">{photo.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 统计信息 */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">50</span>
              <span className="stat-label">委员工作室</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">25</span>
              <span className="stat-label">五星级工作室</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">14</span>
              <span className="stat-label">覆盖街道</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2026</span>
              <span className="stat-label">年度工作</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
