import { ipsum, numbers } from './utils'

export default {
  createArticle: (args = {}) => {
    // Shortens the paragraph
    const title = ipsum.generateSentence()
    const content = ipsum.generateParagraph({ useStartingSentence: true })
    const _args = {
      title,
      content
    }
    return Object.assign({}, _args, args)
  },

  createMagazine: (args = {}) => {
    const name = ipsum.generateSentence()
    const issue = `#${numbers.randomBetween(1, 500)}`
    const publisher = ipsum.generateParagraph(1, { useStartingSentence: true })
    const _args = {
      name,
      issue,
      publisher
    }
    return Object.assign({}, _args, args)
  },

  apiUrl: ({ url, port, route }) => {
    const address = {}
    address.url  = url || 'http://localhost'
    address.port = port || '8080'
    address.route = route || ''
    return `${address.url}:${address.port}/${address.route}`
  }
}
