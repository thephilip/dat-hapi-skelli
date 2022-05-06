
import Hapi from 'hapi'
import routes from './routes'
import conf from './conf'

const server = new Hapi.Server()

// configure connection
server.connection({
  host: conf.host,
  port: conf.port
})

// register routes
server.route(routes)

// start server
server.start((err) => {
  if (err) {
    console.error(`Error: -----------------------------\n${err}`)
    throw err
  }
  console.log(`------------------------------------`)
  console.log(`Server started at ${server.info.uri}`)
})
