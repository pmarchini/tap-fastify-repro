// a fastify server that replies to requests with "Hello World"
// and logs the request to the console

const buildServer = () =>{
    const server = require('fastify')({
        logger: false
    });
    // Declare a route
    server.get('/', async (request, reply) => {
        return {
            hello: 'world'
        }
    });

    return server;
}

module.exports = buildServer;