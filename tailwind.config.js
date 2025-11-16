/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 메인 컬러 - 신뢰감 있는 블루
        primary: {
          DEFAULT: '#4A7C99',
          dark: '#2C5F7A',
          light: '#6B9BB8',
        },
        // 악센트 컬러 - 따뜻한 베이지 골드
        accent: {
          DEFAULT: '#E8A87C',
          dark: '#D4956A',
        },
        // 상태 컬러
        success: '#52A885',
        warning: '#E6A23C',
        error: '#D85F5F',
        info: '#5F9FD8',
        // 중립 컬러
        background: '#F8F9FA',
        surface: '#FFFFFF',
        border: '#E1E4E8',
        text: {
          primary: '#2C3E50',
          secondary: '#6C757D',
          disabled: '#ADB5BD',
        },
        // 배찌 컬러
        badge: {
          university: '#4169E1',
          enterprise: '#1E90FF',
          'income-5k': '#FFD700',
          'income-10k': '#FF8C00',
          'asset-1': '#32CD32',
          'asset-3': '#228B22',
          'asset-5': '#006400',
        },
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
      },
    },
  },
  plugins: [],
}
