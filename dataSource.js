require('dotenv').config()
const { RESTDataSource } = require('apollo-datasource-rest')

module.exports = class ExchangeRatesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}`
  }

  async getLatest (base) {
    const data = await this.get(`/latest/${base}`)
    return {
      date: data.time_last_update_utc,
      base: data.base_code,
      rates: data.conversion_rates,
    }
  }
}
