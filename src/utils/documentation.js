const documentation = {
  GET: {
    publications: {
      path: 'api/publications',
      description: 'Get all publications.'
    },
    publication: {
      path: 'api/publications/{id}',
      description: 'Get the specific publication.'
    }
  },
  POST: {
    publications: {
      path: 'api/publications',
      description: 'Create a new publication.',
      params: {
        available: {
          title: "Publication's title. <String>",
          picture: "Publication's picture. <String>",
          description: "Publication's description. <String>",
          author: "Publication's author. <String>"
        },
        required: {
          title: "Publication's title. <String>",
          picture: "Publication's picture. <String>"
        }
      }
    },
    comments: {
      path: 'api/publications/${id}/comments',
      description: 'Create a new comment for its specific publication.',
      params: {
        available: {
          author: "Comment's author. <String>",
          content: "Comment's content. <String>"
        },
        required: {
          content: "Comment's content. <String>"
        }
      }
    }
  },
  DELETE: {
    publications: {
      path: 'api/publications/{id}',
      description: 'Remove the specific publication.'
    }
  },
  PATCH: {
    likes: {
      path: 'api/publications/{id}/likes',
      description: 'Add a like for its specific publication.'
    }
  }
}

module.exports = documentation