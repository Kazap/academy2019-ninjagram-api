class Comment {
  constructor(params = {}) {
    this.author = params.author || 'Anônimo'
    this.content = params.content
    this.createdAt = Date.now()
  }
}

module.exports = Comment