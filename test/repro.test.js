const tap = require('tap');
const buildServer = require('../server');

tap.test('add function test', async (t) => {

    let server;

    t.beforeEach(() => {
        server = buildServer();
    })
    
    t.afterEach(() => {
        server.close();
    })

    t.test('first test', async (t) => {
        t.test('GET /', async (t) => {
            const response = await server.inject({
                method: 'GET',
                url: '/'
            });
    
            t.equal(response.statusCode, 200);
            t.equal(response.headers['content-type'], 'application/json; charset=utf-8');
            t.same(response.json(), { hello: 'world' });
        });

        t.test('GET /', async (t) => {
            const response = await server.inject({
                method: 'GET',
                url: '/'
            });
    
            t.equal(response.statusCode, 200);
            t.equal(response.headers['content-type'], 'application/json; charset=utf-8');
            t.same(response.json(), { hello: 'world' });
        });
        t.end();
    });

    t.test('second test', async (t) => {
        t.test('GET /', async (t) => {
            const response = await server.inject({
                method: 'GET',
                url: '/'
            });
    
            t.equal(response.statusCode, 200);
            t.equal(response.headers['content-type'], 'application/json; charset=utf-8');
            t.same(response.json(), { hello: 'world' });
        });

        t.test('GET /', async (t) => {
            const response = await server.inject({
                method: 'GET',
                url: '/'
            });
    
            t.equal(response.statusCode, 200);
            t.equal(response.headers['content-type'], 'application/json; charset=utf-8');
            t.same(response.json(), { hello: 'world' });
        });
        t.end();
    });

    t.end();
});