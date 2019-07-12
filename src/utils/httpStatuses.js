const httpStatuses = {
  success: {
    ok: 200,
    created: 201,
    noContent: 204
  },
  clientError: {
    badRequest: 400,
    notFound: 404,
    unprocessableEntity: 422
  }
}

module.exports = httpStatuses