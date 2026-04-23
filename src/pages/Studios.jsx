import { useState, useMemo } from 'react'
import './Studios.css'

// 委员工作室数据
const studiosData = [
  { id: 1, name: "政协湖滨小组委员工作室", leader: "查靖", address: "上城区羊血弄10号", street: "湖滨" },
  { id: 2, name: "政协清波小组委员工作室", leader: "徐洁", address: "上城区清波街道蔡官巷35号三楼", street: "清波" },
  { id: 3, name: "政协小营小组委员工作室", leader: "冷晓辉", address: "杭州市上城区建国南路98号小营街道办事处", street: "小营" },
  { id: 4, name: "政协望江小组委员工作室", leader: "毛静波", address: "上城区翡翠海岸1幢6号", street: "望江" },
  { id: 5, name: "政协南星小组委员工作室", leader: "游广敏", address: "上城区目术塘创意园2号楼7楼", street: "南星" },
  { id: 6, name: "紫阳街道\"三一\"委员工作室", leader: "王盈", address: "上城区金钗袋巷79号", street: "紫阳" },
  { id: 7, name: "闸弄口街道\"基层治理\"委员工作室", leader: "祝文雅", address: "上城区闸弄口街道党群服务中心", street: "闸弄口" },
  { id: 8, name: "政协凯旋小组委员工作室", leader: "金志伟", address: "上城区凤起东路127号", street: "凯旋" },
  { id: 9, name: "采荷街道\"幸福19\"委员工作室", leader: "赵丹晨", address: "上城区采荷街道洁莲社区", street: "采荷" },
  { id: 10, name: "政协四季青小组委员工作室", leader: "李岗", address: "上城区民心路280号平安金融中心B座3楼", street: "四季青" },
  { id: 11, name: "政协笕桥小组委员工作室", leader: "阮骏", address: "上城区笕桥街道政协会议室", street: "笕桥" },
  { id: 12, name: "政协彭埠小组委员工作室", leader: "任渊", address: "上城区S2杭甬高速附近罗家老宅", street: "彭埠" },
  { id: 13, name: "政协九堡小组委员工作室", leader: "胡建清", address: "上城区九乔街与杭乔路交叉口", street: "九堡" },
  { id: 14, name: "政协丁兰小组委员工作室", leader: "倪勇卿", address: "上城区临丁路699号丁丁兰街道办事处5号楼4楼", street: "丁兰" },
  { id: 15, name: "张瑞旭委员工作室", leader: "张瑞旭", address: "上城区凯旋街道凯益荟208室", street: "凯旋" },
  { id: 16, name: "缪渭川委员工作室", leader: "缪渭川", address: "上城区凯旋街道南肖埠社区", street: "凯旋" },
  { id: 17, name: "虞军红委员工作室", leader: "虞军红", address: "上城区运新花苑运新社区", street: "其他" },
  { id: 18, name: "商业服务智库委员工作室", leader: "姚华俊、黄晓芹", address: "上城区新业路8号UDC时代大厦3楼", street: "其他" },
  { id: 19, name: "俞富康宋韵文化委员工作室", leader: "俞富康", address: "上城区凯旋路151号", street: "其他" },
  { id: 20, name: "爱馨文化公益委员工作室", leader: "杨洁", address: "上城区南山路198号（杭州书房）", street: "其他" },
  { id: 21, name: "\"文润童心\"委员工作室", leader: "周媛媛", address: "杭州市上城区清波街道府学巷8号", street: "清波" },
  { id: 22, name: "\"老爸好商量\"委员工作室", leader: "俞富根", address: "上城区四宜路180号", street: "其他" },
  { id: 23, name: "侨见未来委员工作室", leader: "胡晓敏", address: "上城区兰巷101-104号（山蜂书房）", street: "其他" },
  { id: 24, name: "宋韵老字号委员工作室", leader: "屠明珏", address: "上城区江城路865号满江红大酒店二楼杭帮菜文化展览馆", street: "其他" },
  { id: 25, name: "幸福邻里委员工作室", leader: "尹兆青", address: "上城区闸弄口街道红梅社区", street: "闸弄口" },
  { id: 26, name: "大健康委员工作室", leader: "谢慧淼", address: "上城区凯旋路与凯林巷交叉口凯西社区", street: "凯旋" },
  { id: 27, name: "大成委员工作室", leader: "陈磊", address: "上城区钱江路1366号华润大厦A座18层", street: "其他" },
  { id: 28, name: "\"邻聚力\"委员工作室", leader: "余丹凤", address: "上城区凤起东路203号中豪五福天地商业中心B座2幢21层", street: "其他" },
  { id: 29, name: "东港社区委员工作室", leader: "蒋平樑", address: "上城区笕桥街道东港社区", street: "笕桥" },
  { id: 30, name: "建和社区委员工作室", leader: "周建卫", address: "上城区彭埠街道建和社区", street: "彭埠" },
  { id: 31, name: "杨柳郡社区委员工作室", leader: "王鹏", address: "上城区九和路660号绿城杨柳郡", street: "九堡" },
  { id: 32, name: "长睦幸福湾委员工作室", leader: "龚云玉", address: "上城区丁兰街道长睦苑社区", street: "丁兰" },
  { id: 33, name: "同心·共富委员工作室", leader: "吴韵", address: "上城区丁兰街道皋城村文化礼堂", street: "丁兰" },
  { id: 34, name: "乐动新声委员工作室", leader: "俞宙", address: "上城区金峰大厦1503室", street: "其他" },
  { id: 35, name: "茗荟聚智委员工作室", leader: "王容峰", address: "上城区大井巷30-4号", street: "紫阳" },
  { id: 36, name: "上城区政协无党派界别委员工作室", leader: "凌栋", address: "上城区凯旋路247-1号4楼", street: "其他" },
  { id: 37, name: "上城区政协工会界别委员工作室", leader: "蔡肇颖", address: "上城区工人文化宫（太平门直街458号）", street: "其他" },
  { id: 38, name: "上城区政协社会福利和保障界别委员工作室", leader: "吴国庆", address: "上城区凯旋路125号（特有爱·幸福体验馆）", street: "凯旋" },
  { id: 39, name: "有意思委员工作室", leader: "方晓阳", address: "上城区复兴南街130号", street: "其他" },
  { id: 40, name: "春泥委员工作室", leader: "沈春妮", address: "上城区采荷路34号杭州市上城区社会组织服务中心5楼", street: "采荷" },
  { id: 41, name: "两岸一家亲委员工作室", leader: "陆雯", address: "上城区解放路189号-2", street: "湖滨" },
  { id: 42, name: "\"视觉之思\"委员工作室", leader: "何晓菲", address: "上城区虎玉路16-18号", street: "紫阳" },
  { id: 43, name: "\"育共体 阳光行\"委员工作室", leader: "王梦婷", address: "上城区景芳三区58幢新社区邻里中心", street: "凯旋" },
  { id: 44, name: "非遗委员工作室", leader: "胡志强", address: "上城区大井巷55号", street: "紫阳" },
  { id: 45, name: "乐医汇委员工作室", leader: "潘乐屹", address: "上城区同协路1279号西子智慧产业园8号楼401室", street: "其他" },
  { id: 46, name: "全民阅读委员工作室", leader: "赵群伟", address: "上城区中山中路6号", street: "湖滨" },
  { id: 47, name: "健康九久委员工作室", leader: "李祖胜", address: "上城区九堡街道蓝桥卫生服务站", street: "九堡" },
  { id: 48, name: "智汇钱潮委员工作室", leader: "沈波", address: "上城区小院书房", street: "其他" },
  { id: 49, name: "环境资源和农业界别委员工作室", leader: "熊义勤、骆鉴湖", address: "浙江大学华家池校区新农村杂志3楼", street: "其他" },
  { id: 50, name: "漱玉集委员工作室", leader: "王盈", address: "上城区紫阳街道闻潮路77号", street: "紫阳" },
]

const streets = ['全部', '湖滨', '清波', '小营', '望江', '南星', '紫阳', '闸弄口', '凯旋', '采荷', '四季青', '笕桥', '彭埠', '九堡', '丁兰', '其他']

function Studios() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStreet, setSelectedStreet] = useState('全部')

  const filteredStudios = useMemo(() => {
    return studiosData.filter(studio => {
      const matchesSearch = studio.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           studio.leader.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           studio.address.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStreet = selectedStreet === '全部' || studio.street === selectedStreet
      return matchesSearch && matchesStreet
    })
  }, [searchTerm, selectedStreet])

  return (
    <div className="page studios">
      <div className="container">
        <h1 className="page-title">委员工作室</h1>

        <div className="studios-intro card">
          <div className="intro-header">
            <h2>上城区政协委员工作室履职平台</h2>
            <p>按照"向基层延伸覆盖"和"不建机构建机制"工作要求，深化"一室一品"建设</p>
          </div>
          <div className="studio-stats">
            <div className="stat-item">
              <span className="stat-num">50</span>
              <span className="stat-label">工作室总数</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">25</span>
              <span className="stat-label">五星级</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">17</span>
              <span className="stat-label">四星级</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">14</span>
              <span className="stat-label">覆盖街道</span>
            </div>
          </div>
        </div>

        <div className="studios-filters">
          <div className="search-box">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="搜索委员工作室名称、负责人或地址..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="street-filters">
            {streets.map(street => (
              <button
                key={street}
                className={`filter-btn ${selectedStreet === street ? 'active' : ''}`}
                onClick={() => setSelectedStreet(street)}
              >
                {street}
              </button>
            ))}
          </div>
        </div>

        <div className="studios-count">
          共找到 <strong>{filteredStudios.length}</strong> 个委员工作室
        </div>

        <div className="studios-grid">
          {filteredStudios.map(studio => (
            <div key={studio.id} className="studio-card card">
              <div className="studio-header">
                <span className="studio-num">#{studio.id}</span>
                <span className="studio-street tag">{studio.street}</span>
              </div>
              <h3 className="studio-name">{studio.name}</h3>
              <div className="studio-info">
                <div className="info-row">
                  <span className="info-label">负责人：</span>
                  <span className="info-value">{studio.leader}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">地址：</span>
                  <span className="info-value">{studio.address}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredStudios.length === 0 && (
          <div className="no-results">
            <p>未找到符合条件的委员工作室</p>
            <button className="btn btn-outline" onClick={() => { setSearchTerm(''); setSelectedStreet('全部'); }}>
              清除筛选
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Studios
