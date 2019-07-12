const { documentation, httpStatuses } = require('../utils')

const index = (request, response) => {
  response.status(httpStatuses.success.ok).json(documentation)
}

module.exports = { index }