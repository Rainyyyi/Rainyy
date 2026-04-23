import './Introduction.css'

function Introduction() {
  return (
    <div className="page introduction">
      <div className="container">
        <h1 className="page-title">政协简介</h1>
        
        <div className="intro-hero">
          <div className="intro-badge">杭州市上城区</div>
          <h2>中国人民政治协商会议</h2>
          <p className="intro-en">Shangcheng District Committee of CPPCC</p>
        </div>

        <div className="intro-content">
          <div className="intro-section card">
            <h3>机构概况</h3>
            <p>
              杭州市上城区政协是中国人民政治协商会议的地方组织，是中共上城区委领导的
              有统一战线性质的多党合作和政治协商的重要机构，是我区政治生活中
              发扬社会主义民主的重要形式。
            </p>
          </div>

          <div className="intro-section card">
            <h3>工作方针</h3>
            <div className="principles">
              <div className="principle-item">
                <span className="principle-num">01</span>
                <div>
                  <h4>向基层延伸覆盖</h4>
                  <p>推动政协工作向街道、社区延伸，实现履职平台全覆盖</p>
                </div>
              </div>
              <div className="principle-item">
                <span className="principle-num">02</span>
                <div>
                  <h4>不建机构建机制</h4>
                  <p>创新工作机制，发挥委员工作室平台作用</p>
                </div>
              </div>
              <div className="principle-item">
                <span className="principle-num">03</span>
                <div>
                  <h4>党建引领</h4>
                  <p>坚持党对政协工作的全面领导</p>
                </div>
              </div>
            </div>
          </div>

          <div className="intro-section card">
            <h3>三位一体建设</h3>
            <p>
              上城区政协强化委员工作室"三位一体"建设，牢牢把握功能定位，
              立足区域发展实际，以打造"一室一品"为特色，深化：
            </p>
            <div className="brands">
              <div className="brand-item">
                <svg className="brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="4" y="2" width="16" height="20" rx="2"/>
                  <path d="M9 22v-4h6v4"/>
                  <path d="M8 6h.01"/>
                  <path d="M16 6h.01"/>
                  <path d="M12 6h.01"/>
                  <path d="M12 10h.01"/>
                  <path d="M12 14h.01"/>
                  <path d="M16 10h.01"/>
                  <path d="M16 14h.01"/>
                  <path d="M8 10h.01"/>
                  <path d="M8 14h.01"/>
                </svg>
                <span>楼宇商圈</span>
              </div>
              <div className="brand-item">
                <svg className="brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21h18"/>
                  <path d="M5 21V7l8-4v18"/>
                  <path d="M19 21V11l-6-4"/>
                </svg>
                <span>宋韵文化</span>
              </div>
              <div className="brand-item">
                <svg className="brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
                <span>全龄特有爱</span>
              </div>
            </div>
            <p className="brand-desc">
              着力构建宽领域、多层次、常态化的协商体系，不断提升委员工作室
              辨识度和影响力，密切与界别群众的联系，凝聚社会各界共识，
              助推区域经济高质量发展。
            </p>
          </div>

          <div className="intro-section card achievements">
            <h3>主要成就</h3>
            <div className="achievements-grid">
              <div className="achievement">
                <span className="achievement-num">50</span>
                <span className="achievement-label">委员工作室</span>
              </div>
              <div className="achievement">
                <span className="achievement-num">14</span>
                <span className="achievement-label">街道全覆盖</span>
              </div>
              <div className="achievement">
                <span className="achievement-num">25</span>
                <span className="achievement-label">五星级工作室</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
