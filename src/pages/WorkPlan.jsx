import './WorkPlan.css'

function WorkPlan() {
  return (
    <div className="page workplan">
      <div className="container">
        <h1 className="page-title">年度工作计划 · 履职清单</h1>

        <div className="plan-hero">
          <div className="year-badge">2026</div>
          <h2>上城区政协年度工作计划</h2>
          <p>全面贯彻党的二十大精神，围绕区委区政府中心工作，认真履职尽责</p>
        </div>

        <div className="plan-sections">
          <div className="plan-section card">
            <h3><span className="section-num">01</span> 思想政治建设</h3>
            <ul>
              <li>深入学习贯彻习近平新时代中国特色社会主义思想</li>
              <li>加强党的创新理论武装，不断提高政治判断力、政治领悟力、政治执行力</li>
              <li>严格落实意识形态工作责任制</li>
            </ul>
          </div>

          <div className="plan-section card">
            <h3><span className="section-num">02</span> 政协履职工作</h3>
            <ul>
              <li>围绕"三个一号工程"等重点工作开展专题协商</li>
              <li>聚焦亚运后时代城市能级提升建言献策</li>
              <li>紧扣民生实事开展民主监督</li>
              <li>围绕共同富裕示范区建设贡献政协力量</li>
            </ul>
          </div>

          <div className="plan-section card">
            <h3><span className="section-num">03</span> 委员工作室建设</h3>
            <ul>
              <li>深化"一室一品"特色品牌建设</li>
              <li>完善委员工作室"三位一体"工作机制</li>
              <li>开展星级委员工作室评定工作</li>
              <li>推动履职平台街道全覆盖</li>
            </ul>
          </div>

          <div className="plan-section card">
            <h3><span className="section-num">04</span> 凝聚共识</h3>
            <ul>
              <li>深化"楼宇商圈""宋韵文化""全龄特有爱"公益慈善品牌建设</li>
              <li>密切与界别群众的联系</li>
              <li>凝聚社会各界共识</li>
            </ul>
          </div>
        </div>

        <div className="plan-duties">
          <h2 className="section-title">年度履职清单</h2>
          <div className="duties-grid">
            <div className="duty-card card">
              <div className="duty-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h4>专题协商</h4>
              <p>围绕区委区政府中心工作，每季度至少开展1次专题协商，全年不少于4次。</p>
            </div>
            <div className="duty-card card">
              <div className="duty-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <h4>调研视察</h4>
              <p>组织委员深入基层开展调研视察，形成有份量的调研报告不少于10篇。</p>
            </div>
            <div className="duty-card card">
              <div className="duty-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              </div>
              <h4>提案办理</h4>
              <p>年度提案征集不少于100件，立案率不低于85%，重点提案督办不少于10件。</p>
            </div>
            <div className="duty-card card">
              <div className="duty-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/></svg>
              </div>
              <h4>工作室活动</h4>
              <p>每个委员工作室年度开展活动不少于8次，其中公益慈善类活动不少于3次。</p>
            </div>
            <div className="duty-card card">
              <div className="duty-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
              </div>
              <h4>界别联系</h4>
              <p>深化与界别群众联系，每位委员全年联系群众不少于50人次，反映社情民意信息不少于2条。</p>
            </div>
            <div className="duty-card card">
              <div className="duty-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <h4>民主监督</h4>
              <p>聚焦重点领域，组织开展民主监督活动不少于6次，形成监督报告及时反馈。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkPlan
