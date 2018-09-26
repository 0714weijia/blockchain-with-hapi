# RESTful Web API with hapi

This project is to build a web API using hapijs framework that will interact with private blockchain to submit and retrieve blockchain data.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Installing Node and NPM is pretty straightforward using the installer package available from the [(Node.js® web site)](https://nodejs.org/en/).

### Configuring the project

- Use NPM to initialize the project and create package.json to store project dependencies.
```
npm init
```
- Install crypto-js with --save flag to save dependency to our package.json file
```
npm install crypto-js --save
```
- Install level with --save flag
```
npm install level --save
```
- Install hapi with --save flag
```
npm install hapi --save
```

## GET Block Endpoint

The project configures a GET request using URL path with a block height parameter. The response for the endpoint will provide block object in JSON format.

### URL

http://localhost:8000/block/[blockheight]

**Example URL path:**

http://localhost:8000/block/0, where '0' is the block height.

### Response

The response for the endpoint will provide block object in JSON format.

**Example GET Response**

For URL, http://localhost:8000/block/0

    HTTP/1.1 200 OK
    content-type: application/json; charset=utf-8
    cache-control: no-cache
    content-length: 179
    accept-ranges: bytes
    Connection: close 
	{"hash":"49cce61ec3e6ae664514d5fa5722d86069cf981318fc303750ce66032d0acff3","height":0,"body":"First block in the chain - Genesis block","time":"1530311457","previousBlockHash":""}

## POST Block Endpoint

Post a new block with data payload option to add data to the block body. The block body should support a string of text. The response for the endpoint will provide block object in JSON format.

### Response

The response for the endpoint will provide block object in JSON format.

**Example POST response**

For URL: http://localhost:8000/block

	HTTP/1.1 200 OK
	content-type: application/json; charset=utf-8
	cache-control: no-cache
	content-length: 238
	Connection: close
	{"hash":"ffaffeb2330a12397acc069791323783ef1a1c8aab17ccf2d6788cdab0360b90","height":1,"body":"Testing block with test string data","time":"1531764891","previousBlockHash":"49cce61ec3e6ae664514d5fa5722d86069cf981318fc303750ce66032d0acff3"}

## Testing

Install CURL tool to assist with API development and testing. 
[CURL](https://curl.haxx.se/) is a command-line tool used to deliver requests supporting a variety of protocols like HTTP, HTTPS, FTP, FTPS, SFTP, and many more.

To test code:

- 1: Open a command prompt or shell terminal after install node.js.

- 2: Access to project path to launch the application by running npm start.

		cd project path

		npm start

- 3: Open another command prompt to run curl command.

- 4: Run post curl command below to add a new block to the blockchain.

 		curl -H "Content-Type: application/json" -d "{\"body\":\"Testing block with test string data\"}" http://localhost:8000/block

- 5: Run get curl command below to get a block with a given height.

		curl "http://localhost:8000/block/1"

## Dependency

- [Hapi](https://hapijs.com) - A restful framework for building applications and services

- [level](https://github.com/Level/level) - Persist data with LevelDB

- [crypto-js](https://github.com/brix/crypto-js) - SHA256 with Crypto-js

## Reference

https://cn.udacity.com/

https://github.com/seiedalirazaviomrani/RESTful-Web-API-with-Hapi.js-Framework