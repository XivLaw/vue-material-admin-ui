import type { Plugin } from 'vite'
import mdToVue from '../mdToVue'
import getCode from '../utils/getCode'

export default (): Plugin => {
  return {
    name: 'vueToDoc',
    transform(code, id) {
      if (id.endsWith('.vue')) {
        const { script, template, style, docs } = getCode(code)
        console.log(docs)
        const content = (
          docs
            ? `
\`\`\`vue
${template}
${script}
${style}
\`\`\`
`
            : code
        )?.trim()
        console.log(content)
        // mdToVue(content)
        return {
          code: content,
          map: null,
        }
      }
    },
  }
}
