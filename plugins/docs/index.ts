import type { Plugin } from 'vite'
import mdToVue from '../mdToVue'
import getCode from '../utils/getCode'

export default (): Plugin => {
  return {
    name: 'vueToDoc',
    transform(code, id) {
      if (id.endsWith('.vue')) {
        const { script, template, style, docs } = getCode(code)
        // console.log(getCode(code))
        let content = `
          ${script}
          ${template}
          ${style}
        `
        content = content.trim()
        if (docs) {
          console.log(mdToVue(docs))
        }
        return {
          code: content,
          map: null,
        }
      }
    },
  }
}