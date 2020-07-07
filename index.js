const e = require("express")

;
'use stric'

const express = require('express'),
    { makeExecutableSchema } = require('graphql-tools'),
    { graphqlHTTP } = require('express-graphql'),
    { join } = require('path'),
    { readFileSync } = require('fs')
pruebaresolver = require('./resolvers/prueba.resolvers')
cursoresolver = require('./resolvers/curso.resolvers')
port = 3000

let app = express()

const typeDefs = readFileSync(join(__dirname, 'schemas', 'schemas.graphql'), 'utf-8');

const schemas = makeExecutableSchema({ typeDefs, resolvers: [pruebaresolver, cursoresolver] });

app.use('/gql', graphqlHTTP({
    schema: schemas,
    graphiql: true,
    rootValue: cursoresolver
}))

app.listen(port, () => {
    console.log(`El servidor funciona en http://localhost:${port}`)
})