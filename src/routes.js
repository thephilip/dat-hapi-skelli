
export default [
	{
		method: 'GET',
		path: '/',
		handler: (request, reply) => {
			reply('Successfully fetched document root.')
		}

	}
]