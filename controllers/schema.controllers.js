;
'use stric'

const { makeExecutableSchema } = require("graphql-tools"), { graphqlHTTP } = require("express-graphql"), { join, dirname } = require("path"), { readFileSync } = require("fs"),
    pruebaresolver = require('../resolvers/prueba.resolvers'),
    cursoresolver = require('../resolvers/curso.resolvers'),


    typeDefs = readFileSync(join(dirname('../'), 'schemas', 'schemas.graphql'), 'utf-8'),
    schemas = makeExecutableSchema({ typeDefs, resolvers: [pruebaresolver, cursoresolver] });

let IniciarGraphql = graphqlHTTP({
    schema: schemas,
    // rootValue: cursoresolver,
    graphiql: true,
});

module.exports = IniciarGraphql