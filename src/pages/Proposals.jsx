import './Proposals.css'

function Proposals() {
  return (
    <div className="page proposals">
      <div className="container">
        <h1 className="page-title">政协提案</h1>

        <div className="proposals-intro card">
          <h3>提案工作概述</h3>
          <p>
            上城区政协高度重视提案工作，紧紧围绕区委、区政府中心工作，
            聚焦人民群众关心的热点难点问题，组织政协委员深入调研、
            积极建言献策，为推动上城区经济社会发展贡献智慧和力量。
          </p>
        </div>

        <div className="proposals-content">
          <div className="proposal-highlights">
            <div className="highlight-card card">
              <span className="hl-num">127</span>
              <span className="hl-label">年度征集提案</span>
            </div>
            <div className="highlight-card card">
              <span className="hl-num">117</span>
              <span className="hl-label">立案数量</span>
            </div>
            <div className="highlight-card card">
              <span className="hl-num">92.1%</span>
              <span className="hl-label">立案率</span>
            </div>
            <div className="highlight-card card">
              <span className="hl-num">10</span>
              <span className="hl-label">重点督办提案</span>
            </div>
          </div>

          <div className="proposal-categories">
            <h2 className="section-title">提案分类</h2>
            <div className="categories-grid">
              <div className="category-card card">
                <svg className="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21h18"/>
                  <path d="M5 21V7l8-4v18"/>
                  <path d="M19 21V11l-6-4"/>
                </svg>
                <h4>经济建设</h4>
                <p>关于区域经济发展、产业升级方面的提案</p>
              </div>
              <div className="category-card card">
                <svg className="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                <h4>城市建设</h4>
                <p>关于城市更新、基础设施建设方面的提案</p>
              </div>
              <div className="category-card card">
                <svg className="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
                <h4>文化建设</h4>
                <p>关于宋韵文化保护、公共文化服务方面的提案</p>
              </div>
              <div className="category-card card">
                <svg className="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22c4-4 8-7.582 8-12a8 8 0 1 0-16 0c0 4.418 4 8 8 12Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <h4>生态环境</h4>
                <p>关于环境保护、绿色发展方面的提案</p>
              </div>
              <div className="category-card card">
                <svg className="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
                <h4>民生福祉</h4>
                <p>关于教育、医疗、养老等民生方面的提案</p>
              </div>
              <div className="category-card card">
                <svg className="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>
                </svg>
                <h4>社会治理</h4>
                <p>关于基层治理、法治建设方面的提案</p>
              </div>
            </div>
          </div>
        </div>

        <div className="proposal-workflow card">
          <h3>提案工作流程</h3>
          <div className="workflow">
            <div className="workflow-step">
              <span className="step-num">1</span>
              <span className="step-label">提案征集</span>
            </div>
            <svg className="workflow-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
            <div className="workflow-step">
              <span className="step-num">2</span>
              <span className="step-label">审查立案</span>
            </div>
            <svg className="workflow-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
            <div className="workflow-step">
              <span className="step-num">3</span>
              <span className="step-label">交办办理</span>
            </div>
            <svg className="workflow-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
            <div className="workflow-step">
              <span className="step-num">4</span>
              <span className="step-label">答复反馈</span>
            </div>
            <svg className="workflow-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
            <div className="workflow-step">
              <span className="step-num">5</span>
              <span className="step-label">成果转化</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Proposals
