const { ApolloServer } = require('apollo-server')

const ExchangeRatesAPI = require('./dataSource')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      ExchangeRatesAPI: new ExchangeRatesAPI(),
    }
  },
  introspection: true,
  playground: true,
})

server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
