const { RESTDataSource } = require('apollo-datasource-rest')

module.exports = class ExchangeRatesAPI extends RESTDataSource {
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

  async getDate (date, base, symbols) {
    return this.get(`/${date}`, {
      base: base,
      symbols: symbols.join(','),
    })
  }

  async getHistory (start_date, end_date, base, symbols) {
    const response = await this.get(`/history`, {
      start_at: start_date,
      end_at: end_date,
      base: base,
      symbols: symbols.join(','),
    })

    const array = []
    for (const date in response.rates) {
      array.push({
        date,
        rates: response.rates[date]
      })
    }

    return array
  }
}
