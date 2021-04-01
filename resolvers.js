module.exports = {
  Query: {
    ExchangeRatesGetLatest: async (_source, { base }, { dataSources }) => {
      return dataSources.ExchangeRatesAPI.getLatest(base)
    },
  },
}
