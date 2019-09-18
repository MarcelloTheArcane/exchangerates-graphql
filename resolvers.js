module.exports = {
  Query: {
    ExchangeRatesGetLatest: async (_source, { base }, { dataSources }, { fieldNodes }) => {
      const symbols = fieldNodes
        .find(node => node.name.value === 'ExchangeRatesGetLatest')
        .selectionSet.selections
        .find(node => node.name.value === 'rates')
        .selectionSet.selections
        .map(selection => selection.name.value)
        .filter(symbol => symbol !== '__typename')
      
      return dataSources.ExchangeRatesAPI.getLatest(base, symbols)
    },

    ExchangeRatesGetDate: async (_source, { date, base }, { dataSources }, { fieldNodes }) => {
      const symbols = fieldNodes
        .find(node => node.name.value === 'ExchangeRatesGetDate')
        .selectionSet.selections
        .find(node => node.name.value === 'rates')
        .selectionSet.selections
        .map(selection => selection.name.value)
        .filter(symbol => symbol !== '__typename')
      
      return dataSources.ExchangeRatesAPI.getDate(date, base, symbols)
    },

    ExchangeRatesGetHistory: async (_source, { start_date, end_date, base }, { dataSources }, { fieldNodes }) => {
      const symbols = fieldNodes
        .find(node => node.name.value === 'ExchangeRatesGetHistory')
        .selectionSet.selections
        .find(node => node.name.value === 'rates')
        .selectionSet.selections
        .map(selection => selection.name.value)
        .filter(symbol => symbol !== '__typename')
      
      return dataSources.ExchangeRatesAPI.getHistory(start_date, end_date, base, symbols)
    },
  },
}
