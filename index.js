const jsonServer = require('json-server')
const path = require('path')
const express = require('express')
const cors = require('cors')  // Add this line

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db', 'db.json'))
const middlewares = jsonServer.defaults()

// Serve static files
server.use(express.static(__dirname))

// Use CORS middleware
server.use(cors())  // Add this line

// Use default middlewares
server.use(middlewares)

// Use the router
server.use(router)

// Serve index.html for the root route
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

// Start the server
server.listen(3000, () => {
    console.log('JSON Server está em execução!')
})
