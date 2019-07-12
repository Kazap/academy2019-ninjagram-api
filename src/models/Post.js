const uuid = require('uuid/v1')

class Post {
  constructor(params = {}) {
    this.id = uuid()
    this.title = params.title
    this.picture = params.picture
    this.description = params.description
    this.author = params.author || 'Anônimo'
    this.likes = 0
    this.comments = []
    this.publishedAt = Date.now()
  }
}

module.exports = Post