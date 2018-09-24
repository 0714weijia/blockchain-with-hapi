'use strict';

const Blockchain=require('./simpleChain');
const Hapi=require('hapi');
const Joi = require('joi');

// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:8000
});

// Add the route
server.route([
    {
        method:'GET',
        path:'/block/{blockHeight}',
        handler:function(request,h) {
            let blockHeight = encodeURIComponent(request.params.blockHeight);
            return getBlock(blockHeight);
        },
        options: {
            validate: {
                params: {
                    blockHeight: Joi.number().integer().min(0)
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/block',
        config: {
            handler: function (request, h) {
                let body = encodeURIComponent(request.payload.body);
                addBlock(body, h);
                return body;
            },
            validate: {
                payload: {
                    body: Joi.string().min(1).required()
                }                                   
            }
        }
    },
]);

async function addBlock(body, callback) {
    let blockchain = new Blockchain();
    blockchain.addBlockWithBody(body, function(err, newBlock) {
        if (callback) callback(err, newBlock);
    });
}

async function getBlock(blockHeight) {
    let blockchain = new Blockchain();
    try {
        let block = await blockchain.getBlock(blockHeight);
        return block;
    }
    catch (err) {
        let height = await blockchain.getBlockHeight();
        return "Fail to get block with height " + blockHeight 
        + ". Blockchain height is now " + height;
    }
}

// Start the server
const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();