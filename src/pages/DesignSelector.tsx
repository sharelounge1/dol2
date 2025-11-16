const designs = [
  {
    id: 1,
    title: '컨셉 1: 프리미엄 럭셔리',
    subtitle: 'Premium Luxury',
    description: '고급스럽고 세련된 VIP 회원 전용 서비스 느낌',
    color: 'bg-gradient-to-br from-gray-900 to-gray-800',
    textColor: 'text-yellow-400',
    features: ['다크 테마 + 골드 악센트', '대형 프로필 카드', '배찌 시스템 강조'],
    target: '40~50대 고소득 사용자',
    path: '/frontend/designs/concept1-premium/index.html'
  },
  {
    id: 2,
    title: '컨셉 2: 모던 미니멀',
    subtitle: 'Modern Minimal',
    description: '깔끔하고 직관적인 모던 UI',
    color: 'bg-gradient-to-br from-blue-50 to-white',
    textColor: 'text-blue-600',
    features: ['화이트 + 블루', '카드 리스트형', '통계 대시보드'],
    target: '30~40대 바쁜 직장인',
    path: '/frontend/designs/concept2-minimal/index.html'
  },
  {
    id: 3,
    title: '컨셉 3: 따뜻한 친근함',
    subtitle: 'Warm & Friendly',
    description: '부드럽고 따뜻한 감성의 친근한 디자인',
    color: 'bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50',
    textColor: 'text-orange-600',
    features: ['파스텔 톤', '타임라인 피드', '이모지 풍부'],
    target: '40~50대 감성적 사용자',
    path: '/frontend/designs/concept3-warm/index.html'
  },
  {
    id: 4,
    title: '컨셉 4: 카드 스와이프',
    subtitle: 'Card Swipe',
    description: '틴더 스타일의 스와이프 인터랙션',
    color: 'bg-gradient-to-br from-red-400 via-orange-400 to-yellow-400',
    textColor: 'text-white',
    features: ['그라디언트 배경', '전체화면 카드', '스와이프 제스처'],
    target: '30대 모바일 익숙 사용자',
    path: '/frontend/designs/concept4-swipe/index.html'
  },
  {
    id: 5,
    title: '컨셉 5: 타임라인 피드',
    subtitle: 'Timeline Feed',
    description: '인스타그램 스타일의 소셜 피드형 디자인',
    color: 'bg-gradient-to-br from-purple-50 to-blue-50',
    textColor: 'text-purple-600',
    features: ['스토리 캐러셀', '피드 포스트', '소셜 미디어 스타일'],
    target: '30대 SNS 익숙 사용자',
    path: '/frontend/designs/concept5-feed/index.html'
  },
]

export default function DesignSelector() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            재연(再緣)
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            돌싱을 위한 프리미엄 소개팅 앱
          </p>
          <p className="text-lg text-gray-500">
            홈화면 디자인 컨셉 5종
          </p>
        </div>

        {/* Design Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design) => (
            <a
              key={design.id}
              href={design.path}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Color Preview */}
                <div className={`${design.color} h-48 flex items-center justify-center`}>
                  <div className={`${design.textColor} text-center`}>
                    <div className="text-6xl font-bold mb-2">{design.id}</div>
                    <div className="text-xl font-semibold">{design.subtitle}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {design.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {design.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">주요 특징</h4>
                    <ul className="space-y-1">
                      {design.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Target */}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      <span className="font-semibold">타겟:</span> {design.target}
                    </p>
                  </div>

                  {/* Button */}
                  <div className="mt-6">
                    <div className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold text-center group-hover:bg-primary-dark transition-colors">
                      디자인 보기 →
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-gray-500">
          <p className="mb-2">각 디자인을 클릭하면 새 창에서 상세 화면을 확인할 수 있습니다.</p>
          <p className="text-sm">모든 디자인은 모바일 최적화(max-width: 428px)되어 있습니다.</p>
        </div>
      </div>
    </div>
  )
}
