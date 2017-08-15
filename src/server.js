
import Hapi from 'hapi'
import routes from './routes'
import conf from './conf'

const server = new Hapi.Server()

server.connection({
	host: conf.host,
	port: conf.port
})

server.route(routes)

server.start((err) => {
	if (err) {
		throw err
	}
	console.log(`------------------------------------`)
	console.log(`Server started at ${server.info.uri}`)
})
