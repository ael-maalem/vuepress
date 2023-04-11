import { tailwindContent } from 'vitepress-blog-theme/node'

const icons = require('@jcamp/tailwindcss-plugin-icons')

module.exports = {
  content: [...tailwindContent],
  darkMode: 'class',
  plugins: [icons()],
}
