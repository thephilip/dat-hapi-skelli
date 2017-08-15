
// buildRoute : String -> String
const buildRoute = uri => {
	return uri.indexOf('/') !== 0 ? uri = '/' + uri : uri
}

export default [
	{
		method: 'GET',
		path: buildRoute(''),
		handler: (request, reply) => {
			reply('Successfully fetched document root.')
		}
	}
]