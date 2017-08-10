
import Hapi from 'hapi'
import routes from './routes'

const server = new Hapi.Server()

server.connection({
	host: 'localhost',
	port: '3000'
})

server.route(routes)

server.start((err) => {
	if (err) {
		throw err
	}
	console.log(`Server started at ${server.info.uri}`)
})
