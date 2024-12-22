const axios = require('axios')
const cors = require('cors')
const express = require('express')

const app = express()
app.use(cors())

const port = require('node:process').env.PROXY_PORT || 5000

app.get('/*', async (req, res) => {
  const backendUrl = `https://api.carvago.com${req.originalUrl}`

  try {
    const response = await axios.get(backendUrl)
    res.status(response.status).send(response.data)
  }
  catch (error) {
    if (error.response) {
      // Ошибка ответа от сервера
      res.status(error.response.status).send({
        error: true,
        message: 'Error from the Carvago API',
        details: error.response.data,
      })
    }
    else if (error.request) {
      // Нет ответа от сервера
      res.status(503).send({
        error: true,
        message: 'No response from the Carvago API',
        details: 'The API server did not respond. Please try again later.',
      })
    }
    else {
      // Другая ошибка (например, ошибка в настройках запроса)
      res.status(500).send({
        error: true,
        message: 'Internal server error',
        details: error.message,
      })
    }
  }
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening at http://localhost:${port}`)
})
