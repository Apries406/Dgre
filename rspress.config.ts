import * as path from 'path'
import { defineConfig } from 'rspress/config'

export default defineConfig({
	root: path.join(__dirname, 'docs'),
	title: 'DpregBlog',
	description: '一个鶸的前端日常Blog',
	icon: '/rspress-icon.png',
	logo: {
		light: '/apries-light.png',
		dark: '/apries-dark.png',
	},
	themeConfig: {
		socialLinks: [
			{
				icon: 'github',
				mode: 'link',
				content: 'https://github.com/web-infra-dev/rspress',
			},
		],
	},
})
