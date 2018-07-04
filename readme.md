# db-hafas-rest

**DEPRECATED: See [`db-rest`](https://github.com/derhuerst/db-rest) instead.**

A public HTTP REST API, exposing a clean interface to query Deutsche Bahn (German Railways).

The public endpoint is available at `https://db-hafas.juliuste.de`.

[![npm version](https://img.shields.io/npm/v/db-hafas-rest.svg)](https://www.npmjs.com/package/db-hafas-rest)
[![Build Status](https://travis-ci.org/juliuste/db-hafas-rest.svg?branch=master)](https://travis-ci.org/juliuste/db-hafas-rest)
[![dependency status](https://img.shields.io/david/juliuste/db-hafas-rest.svg)](https://david-dm.org/juliuste/db-hafas-rest)
[![dev dependency status](https://img.shields.io/david/dev/juliuste/db-hafas-rest.svg)](https://david-dm.org/juliuste/db-hafas-rest#info=devDependencies)
[![MIT License](https://img.shields.io/badge/license-MIT-black.svg)](https://opensource.org/licenses/MIT)

## Installation

```shell
npm install db-hafas-rest
```


## `GET /locations`

Output from [`require('db-hafas').locations(…)`](https://github.com/derhuerst/db-hafas/blob/master/docs/locations.md)

- `query`: **Required.** (e.g. `Berlin Hbf`)

`Content-Type`: `application/json`

```shell
curl 'https://db-hafas.juliuste.de/locations?query=Berlin%20Hbf'
```


## Similar Projects

- [db-hafas](https://github.com/derhuerst/db-hafas/) – "JavaScript client for the DB HAFAS API."
- [db-prices](https://github.com/juliuste/db-prices/) – " Find the cheapest routes using the DB Sparpreise API."



## Contributing

If you found a bug, want to propose a feature or feel the urge to complain about your life, feel free to visit [the issues page](https://github.com/juliuste/db-hafas-rest/issues).

Cheers to [Jannis R](https://github.com/derhuerst) for contributing.
