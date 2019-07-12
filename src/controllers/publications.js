const publications = []
const { Comment, Post } = require('../models')
const { httpStatuses } = require('../utils')

const index = (request, response) => {
  response.status(httpStatuses.success.ok).json(publications)
}

const create = (request, response) => {
  const { title, picture, description, author } = request.body

  if (!title || !picture) {
    return response.status(httpStatuses.clientError.badRequest).json({ error: "'title' and 'picture' are both required." })
  }

  const newPost = new Post({ title, picture, description, author })
  publications.push(newPost)

  response.status(httpStatuses.success.created).json(newPost)
}

const show = (request, response) => {
  const { id } = request.params

  const publication = publications.find(publication => publication.id === id)

  if (publication) {
    response.status(httpStatuses.success.ok).json(publication)
  } else {
    response.status(httpStatuses.clientError.notFound).json({ error: `Publication with id '${id}' not found.` })
  }
}

const destroy = (request, response) => {
  const { id } = request.params

  const publicationIndex = publications.findIndex(publication => publication.id === id)

  if (publicationIndex >= 0) {
    publications.splice(publicationIndex, 1)
    response.status(httpStatuses.success.noContent).json()
  } else {
    response.status(httpStatuses.clientError.notFound).json({ error: `Publication with id '${id}' not found.` })
  }
}

const comment = (request, response) => {
  const { id } = request.params
  const { author, content } = request.body

  if (!content) {
    return response.status(httpStatuses.clientError.badRequest).json({ error: "'content' is required." })
  }

  const publicationIndex = publications.findIndex(publication => publication.id === id)

  if (publicationIndex >= 0) {
    const newComment = new Comment({ author, content })
    publications[publicationIndex].comments.push(newComment)

    response.status(httpStatuses.success.created).json(publications[publicationIndex])
  } else {
    response.status(httpStatuses.clientError.notFound).json({ error: `Publication with id '${id}' not found.` })
  }
}

const like = (request, response) => {
  const { id } = request.params

  const publicationIndex = publications.findIndex(publication => publication.id === id)

  if (publicationIndex >= 0) {
    publications[publicationIndex].likes++

    response.status(httpStatuses.success.created).json(publications[publicationIndex])
  } else {
    response.status(httpStatuses.clientError.notFound).json({ error: `Publication with id '${id}' not found.` })
  }
}

module.exports = { index, create, show, destroy, comment, like }