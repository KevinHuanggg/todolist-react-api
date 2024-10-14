/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'"Noto Sans TC"',
					'ui-sans-serif',
					'system-ui',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"',
				],
			},

			fontSize: {
				...(() => {
					const sizes = {}
					const lineHeight = '1.5'
					const fontWeight = '700'

					// 定義 fs-1 到 fs-10 的字體大小
					const fontSizes = {
						'fs-1': '4px',
						'fs-2': '8px',
						'fs-3': '12px',
						'fs-4': '16px',
						'fs-5': '20px',
						'fs-6': '24px',
						'fs-7': '28px',
						'fs-8': '32px',
						'fs-9': '36px',
						'fs-10': '40px',
					}

					// 為每個字體大小設置固定的行高和字母間距
					for (const [key, size] of Object.entries(fontSizes)) {
						sizes[key] = [
							size,
							{
								lineHeight: lineHeight,
								fontWeight: fontWeight,
							},
						]
					}

					return sizes
				})(),
			},

			colors: {
				primary: {
					DEFAULT: '#FFD370',
				},
				dark: {
					DEFAULT: '#333333',
				},
        gray: {
          DEFAULT: '#9F9A91',
        },
				alert: {
					DEFAULT: '#D87355',
				},
			},
		},

		container: {
			center: true,
			padding: '12px',
		},
	},
	plugins: [],
}
