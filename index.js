const { ApolloServer, gql } = require('apollo-server')
const { RESTDataSource } = require('apollo-datasource-rest')

class ExchangeRatesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.exchangeratesapi.io'
  }

  async getLatest (base, symbols) {
    return this.get(`/latest`, {
      base: base,
      symbols: symbols.join(','),
    })
  }

  async getDate(date, base, symbols) {
    return this.get(`/${date}`, {
      base: base,
      symbols: symbols.join(','),
    })
  }
}

const typeDefs = gql`
  type RateResponse {
    rates: Rates
    base: String
    date: String
  }

  type Rates {
    CAD: Float
    HKD: Float
    ISK: Float
    PHP: Float
    DKK: Float
    HUF: Float
    CZK: Float
    GBP: Float
    RON: Float
    SEK: Float
    IDR: Float
    INR: Float
    BRL: Float
    RUB: Float
    HRK: Float
    JPY: Float
    THB: Float
    CHF: Float
    EUR: Float
    MYR: Float
    BGN: Float
    TRY: Float
    CNY: Float
    NOK: Float
    NZD: Float
    ZAR: Float
    USD: Float
    MXN: Float
    SGD: Float
    AUD: Float
    ILS: Float
    KRW: Float
    PLN: Float
  }

  enum RatesEnum {
    CAD
    HKD
    ISK
    PHP
    DKK
    HUF
    CZK
    GBP
    RON
    SEK
    IDR
    INR
    BRL
    RUB
    HRK
    JPY
    THB
    CHF
    EUR
    MYR
    BGN
    TRY
    CNY
    NOK
    NZD
    ZAR
    USD
    MXN
    SGD
    AUD
    ILS
    KRW
    PLN
  }

  type Query {
    """
    Get the latest foreign exchange reference rates.
    """
    ExchangeRatesGetLatest (
      """
      Base currency code, i.e. 'GBP'.
      """
      base: RatesEnum!
    ): RateResponse

    """
    Get historical rates for any day since 1999.
    """
    ExchangeRatesGetDate (
      """
      Date string to get historical data for in format 'YYYY-MM-DD'
      """
      date: String!
      """
      Base currency code, i.e. 'GBP'.
      """
      base: RatesEnum!
    ): RateResponse
  }
`

const resolvers = {
  Query: {
    ExchangeRatesGetLatest: async (_source, { base }, { dataSources }, { fieldNodes }) => {
      const symbols = fieldNodes
        .find(node => node.name.value === 'ExchangeRatesGetLatest')
        .selectionSet.selections
        .find(node => node.name.value === 'rates')
        .selectionSet.selections
        .map(selection => selection.name.value)
      
      return dataSources.ExchangeRatesAPI.getLatest(base, symbols)
    },

    ExchangeRatesGetDate: async (_source, { date, base }, { dataSources }, { fieldNodes }) => {
      const symbols = fieldNodes
        .find(node => node.name.value === 'ExchangeRatesGetDate')
        .selectionSet.selections
        .find(node => node.name.value === 'rates')
        .selectionSet.selections
        .map(selection => selection.name.value)
      
      return dataSources.ExchangeRatesAPI.getDate(date, base, symbols)
    },
  },
}

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
