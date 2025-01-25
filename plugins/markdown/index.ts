import MarkdownIt from 'markdown-it'
import type { Plugin } from 'vite'
import { highlight } from './plugins/highlight'
import Title from './plugins/title'

const md = MarkdownIt({
  highlight,
  html: true,
  linkify: true,
  breaks: true
}).use(Title)

export default (...arg): Plugin => {
  return { 
    name: 'mdToVue',
    transform(code, id) {
      if (id.endsWith('.md')) {
        // console.log(md.render(code))
        return {
          code: `<template>${md.render(code)}</template>`,
          map: null
        }
      }
    }
  }
}