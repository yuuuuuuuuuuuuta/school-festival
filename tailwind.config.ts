import type { Config } from 'tailwindcss'

const config = {
  // ダークモード切り替え（class で制御）
  darkMode: ['class'],

  // Tailwind を適用するファイル範囲
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',  // ← 全体を網羅しているため安心
  ],

  prefix: '', // クラス名の接頭辞なし

  theme: {
    // レスポンシブ用の中央寄せ container 設定
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',  // 最大幅
      },
    },

    extend: {
      // ======================
      // 🎨 カスタムカラー定義
      // ======================
      colors: {
        theme: 'hsl(68, 75%, 47%)', // 明るめの黄緑（bg-theme など）

        // 各種 UI トークン（背景、前景、アクセントなど）をグローバル変数から参照
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },

      // ======================
      // 📏 高さ・最小高さの定義
      // ======================
      height: {
        '60dvh': '60dvh',
        '70dvh': '70dvh',
        pcContent: 'calc(100dvh - 165px)', // PC版の main コンテンツ高さ
      },
      minHeight: {
        '60dvh': '60dvh',
      },

      // ======================
      // 🔳 角丸の定義（ベース変数連動）
      // ======================
      borderRadius: {
        lg: 'var(--radius)',              // 0.5rem
        md: 'calc(var(--radius) - 2px)',  // 小さめ
        sm: 'calc(var(--radius) - 4px)',  // さらに小さい
      },

      // ======================
      // 🎞 アニメーション定義
      // ======================
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },

  // Radix UI や dialog で使うアニメーションプラグイン
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config