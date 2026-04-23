import './YearReport.css'

function YearReport() {
  return (
    <div className="page yearreport">
      <div className="container">
        <h1 className="page-title">年度工作总结</h1>

        <div className="report-hero">
          <div className="year-badge">2026</div>
          <h2>上城区政协年度工作总结</h2>
          <p>回顾过去一年的工作成绩，展望新一年的发展方向</p>
        </div>

        <div className="report-sections">
          <div className="report-section card">
            <h3>一、坚持党的领导，政治引领不断加强</h3>
            <p>
              深入学习贯彻习近平新时代中国特色社会主义思想和党的二十大精神，
              坚持党对政协工作的全面领导，确保政协事业始终沿着正确方向前进。
            </p>
            <ul>
              <li>严格落实"第一议题"学习制度</li>
              <li>加强政协系统党的建设</li>
              <li>强化意识形态工作责任制</li>
            </ul>
          </div>

          <div className="report-section card">
            <h3>二、聚焦中心大局，协商议政成效显著</h3>
            <p>
              围绕区委区政府中心工作和人民群众关心的热点难点问题，
              深入调研、积极建言，全年开展各类协商活动50余次。
            </p>
            <ul>
              <li>围绕亚运后时代城市能级提升建言献策</li>
              <li>聚焦"三个一号工程"开展专题协商</li>
              <li>紧扣民生实事开展民主监督</li>
              <li>围绕共同富裕示范区建设贡献政协力量</li>
            </ul>
          </div>

          <div className="report-section card">
            <h3>三、深化平台建设，委员工作室亮点纷呈</h3>
            <p>
              按照"向基层延伸覆盖"和"不建机构建机制"工作要求，
              深化委员工作室"三位一体"建设，打造"一室一品"特色品牌。
            </p>
            <div className="achievement-highlight">
              <div className="achievement-item">
                <span className="achieve-num">50</span>
                <span className="achieve-label">委员工作室</span>
              </div>
              <div className="achievement-item">
                <span className="achieve-num">25</span>
                <span className="achieve-label">五星级</span>
              </div>
              <div className="achievement-item">
                <span className="achieve-num">14</span>
                <span className="achieve-label">街道覆盖</span>
              </div>
            </div>
          </div>

          <div className="report-section card">
            <h3>四、广泛凝聚共识，社会影响持续扩大</h3>
            <p>
              深化"楼宇商圈""宋韵文化""全龄特有爱"公益慈善品牌建设，
              密切与界别群众的联系，凝聚社会各界共识。
            </p>
            <ul>
              <li>举办各类公益活动100余场</li>
              <li>联系服务群众5000余人次</li>
              <li>媒体报道200余篇</li>
            </ul>
          </div>
        </div>

        <div className="report-data">
          <h2 className="section-title">年度数据一览</h2>
          <div className="data-grid">
            <div className="data-card card">
              <span className="data-num">127</span>
              <span className="data-unit">件</span>
              <span className="data-label">年度提案总量</span>
            </div>
            <div className="data-card card">
              <span className="data-num">92.1</span>
              <span className="data-unit">%</span>
              <span className="data-label">提案立案率</span>
            </div>
            <div className="data-card card">
              <span className="data-num">56</span>
              <span className="data-unit">次</span>
              <span className="data-label">协商活动</span>
            </div>
            <div className="data-card card">
              <span className="data-num">18</span>
              <span className="data-unit">篇</span>
              <span className="data-label">调研报告</span>
            </div>
            <div className="data-card card">
              <span className="data-num">120+</span>
              <span className="data-unit">场</span>
              <span className="data-label">公益活动</span>
            </div>
            <div className="data-card card">
              <span className="data-num">6000+</span>
              <span className="data-unit">人次</span>
              <span className="data-label">服务群众</span>
            </div>
          </div>
        </div>

        <div className="report-outlook card">
          <h3>新一年工作展望</h3>
          <p>
            2026年，上城区政协将继续以习近平新时代中国特色社会主义思想为指导，
            深入贯彻落实党的二十大精神，紧紧围绕区委区政府决策部署，
            充分发挥政协专门协商机构作用，为助推上城经济社会高质量发展
            作出新的更大贡献。
          </p>
        </div>
      </div>
    </div>
  )
}

export default YearReport
