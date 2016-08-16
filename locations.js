'use strict'

const db = require('db-hafas')



module.exports = (req, res, next) => {
	db.locations(req.query.q)
	.then((data) => {res.json(data)}, next)
	.catch(next)
}
