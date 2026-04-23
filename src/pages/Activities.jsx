import { useState } from 'react'
import './Activities.css'

const photos = [
  { id: 1, src: '/images/activities/activity_001.webp', title: '协商民主实践活动' },
  { id: 2, src: '/images/activities/activity_002.webp', title: '委员工作室授牌' },
  { id: 3, src: '/images/activities/activity_003.webp', title: '调研视察活动' },
  { id: 4, src: '/images/activities/activity_004.webp', title: '协商座谈会' },
  { id: 5, src: '/images/activities/activity_005.webp', title: '公益慈善活动' },
  { id: 6, src: '/images/fenzhongxin/fzx_01.webp', title: '宋韵文化活动' },
  { id: 7, src: '/images/fenzhongxin/fzx_02.webp', title: '楼宇商圈协商' },
  { id: 8, src: '/images/fenzhongxin/fzx_03.webp', title: '民主监督活动' },
  { id: 9, src: '/images/fenzhongxin/fzx_04.webp', title: '委员工作室交流会' },
  { id: 10, src: '/images/fenzhongxin/fzx_05.webp', title: '基层协商活动' },
  { id: 11, src: '/images/fenzhongxin/fzx_06.webp', title: '政协全会' },
  { id: 12, src: '/images/fenzhongxin/fzx_07.webp', title: '专题协商会' },
  { id: 13, src: '/images/fenzhongxin/fzx_08.webp', title: '委员履职培训' },
  { id: 14, src: '/images/fenzhongxin/fzx_09.webp', title: '调研报告研讨' },
  { id: 15, src: '/images/fenzhongxin/fzx_10.webp', title: '协商成果汇报' },
  { id: 16, src: '/images/fenzhongxin/fzx_11.webp', title: '界别群众联络' },
  { id: 17, src: '/images/fenzhongxin/fzx_12.webp', title: '街道工作室活动' },
  { id: 18, src: '/images/fenzhongxin/fzx_13.webp', title: '协商议事厅' },
  { id: 19, src: '/images/fenzhongxin/fzx_14.webp', title: '政协品牌活动' },
  { id: 20, src: '/images/fenzhongxin/fzx_15.webp', title: '年度总结表彰' },
]

function Activities() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <div className="page activities">
      <div className="container">
        <h1 className="page-title">活动记录素材</h1>

        <div className="activities-intro card">
          <h3>2026 年度活动剪影</h3>
          <p>
            上城区政协围绕中心大局，认真履职尽责，全年开展协商活动56次、调研视察18次、
            举办公益活动120余场。以下精选各类型代表性活动现场照片，展现政协工作的生动实践。
          </p>
        </div>

        <div className="activities-grid">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="photo-card card"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img src={photo.src} alt={photo.title} />
              <div className="photo-overlay">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                  <path d="M11 8v6"/>
                  <path d="M8 11h6"/>
                </svg>
                <span>点击查看大图</span>
              </div>
            </div>
          ))}
        </div>

        {selectedPhoto && (
          <div className="photo-modal" onClick={() => setSelectedPhoto(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedPhoto(null)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18"/>
                  <path d="m6 6 12 12"/>
                </svg>
              </button>
              <div className="modal-image">
                <img src={selectedPhoto.src} alt={selectedPhoto.title} />
              </div>
              <div className="modal-info">
                <h3>{selectedPhoto.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Activities
