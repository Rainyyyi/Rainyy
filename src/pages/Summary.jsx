import './Summary.css'

function Summary() {
  return (
    <div className="page summary">
      <div className="container">
        <h1 className="page-title">活动总结报告</h1>

        <div className="summary-hero">
          <div className="year-badge">2026</div>
          <h2>上城区政协年度活动总结</h2>
          <p>砥砺奋进，履职担当，以实干书写上城政协新篇章</p>
        </div>

        <div className="summary-sections">
          <div className="summary-section card">
            <h3>一、深化协商民主，协商活动成效显著</h3>
            <p>
              2026年，上城区政协坚持"有事好商量、众人的事情由众人商量"的理念，
              聚焦区委区政府中心工作，创新协商形式，全年共开展各类协商活动56次，
              较上年增长12%，协商议题精准聚焦民生难点和发展堵点。
            </p>
            <ul>
              <li>召开全体会议协商2次，专题协商6次，对口协商8次</li>
              <li>重点围绕亚运后城市功能品质提升、营商环境优化等议题深入协商</li>
              <li>形成协商意见书14份，采纳率达89%</li>
            </ul>
          </div>

          <div className="summary-section card">
            <h3>二、委员工作室品牌建设持续深化</h3>
            <p>
              按照"向基层延伸覆盖、发挥委员主体作用"的工作导向，
              深化50个委员工作室"三位一体"功能建设，持续推进"一室一品"特色发展，
              多个工作室形成有影响力的履职品牌。
            </p>
            <ul>
              <li>评定五星级委员工作室25个、四星级工作室15个</li>
              <li>"楼宇商圈"品牌开展活动28场，联动企业120余家</li>
              <li>"宋韵文化"系列活动覆盖全区14个街道，受众逾万人</li>
              <li>"全龄特有爱"公益慈善品牌募集善款超60万元</li>
            </ul>
          </div>

          <div className="summary-section card">
            <h3>三、提案工作质量持续提升</h3>
            <p>
              全年共征集提案127件，立案117件，立案率达92.1%。
              重点提案督办10件，办复率100%，满意率达到历史最高水平。
              多件提案转化为区级政策文件或列入政府工作议程。
            </p>
            <ul>
              <li>民生类提案占比达58%，切实反映群众呼声</li>
              <li>经济发展类提案转化为政策成果3件</li>
              <li>城市更新类提案推动重点项目落地2个</li>
            </ul>
          </div>

          <div className="summary-section card">
            <h3>四、凝聚共识，社会影响持续扩大</h3>
            <p>
              密切委员与界别群众的联系，充分发挥政协作为最广泛爱国统一战线重要组织的作用，
              广泛汇聚各方共识，社会影响力和认可度不断提升。
            </p>
            <ul>
              <li>举办公益活动共120余场，直接服务群众6000余人次</li>
              <li>收集社情民意信息260余条，报送省市政协120余条</li>
              <li>主流媒体报道政协工作230余篇，网络传播量累计超百万</li>
            </ul>
          </div>
        </div>

        <div className="summary-features card">
          <h3>年度工作亮点</h3>
          <div className="features-grid">
            <div className="feature-item">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <div>
                <h4>履职成效显著</h4>
                <p>协商、提案、调研全面提质增效</p>
              </div>
            </div>
            <div className="feature-item">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/>
              </svg>
              <div>
                <h4>品牌特色鲜明</h4>
                <p>三大公益品牌影响力持续扩大</p>
              </div>
            </div>
            <div className="feature-item">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <div>
                <h4>群众参与广泛</h4>
                <p>联系服务群众6000余人次</p>
              </div>
            </div>
            <div className="feature-item">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
              </svg>
              <div>
                <h4>社会影响深远</h4>
                <p>媒体报道230余篇，传播超百万</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary
