interface Codes {
  script?: string,
  template?: string,
  style?: string,
  docs?: string
}

export default (code: string): Codes =>  {
  const regexes = {
    script: /<script[^>]*>([\s\S]*)<\/script>/,
    template: /<template[^>]*>([\s\S]*)<\/template>/,
    style: /(?<=<style>)([\s\S]*)(?=<\/style>)/,
    docs: /<docs[^>]*>([\s\S]*?)<\/docs>/
  }

  const temp: Codes = {}
  Object.keys(regexes).forEach(key => {
    const matches = code.match(regexes[key])

    if (key === 'docs') {
      temp.docs = matches ? matches[1].trim() : ''
    } else {
      temp[key] = matches ? matches[0] : ''
    }
  })
  
  return temp
}