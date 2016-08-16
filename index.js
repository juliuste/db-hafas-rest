'use strict'

const db 	   = require('db-hafas')
const config       = require('config')
const fs           = require('fs')
const express      = require('express')
const spdy         = require('spdy')
const hsts         = require('hsts')
const corser       = require('corser')
const compression  = require('compression')
const nocache      = require('nocache')
const path         = require('path')

const ssl = {
	  key:  fs.readFileSync(config.key)
	, cert: fs.readFileSync(config.cert)
	, ca:   fs.readFileSync(config.ca)
}



const api = express()
const server = spdy.createServer(ssl, api)

api.use(hsts({maxAge: 24 * 60 * 60 * 1000}))
const allowed = corser.simpleRequestHeaders.concat(['User-Agent'])
api.use(corser.create({requestHeaders: allowed})) // CORS
api.use(compression())
const noCache = nocache()


api.get('/locations', function(req, res, next){
	db.locations(req.query.q)
	.then((data) => {res.json(data)}, next)
	.catch(next)
})

api.use((err, req, res, next) => {
	if (res.headersSent) return next()
	res.status(err.statusCode || 500).json({error: true, msg: err.message})
	next()
})

server.listen(config.port, (e) => {
	if (e) return console.error(e)
	console.log(`Listening on ${config.port}.`)
})
