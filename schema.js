const { gql } = require('apollo-server')

module.exports = gql`
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

  type HistoryRateResponse {
    date: String!
    rates: Rates
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

    """
    Get historical rates between two dates since 1999.
    """
    ExchangeRatesGetHistory (
      """
      Date string to get data from in format 'YYYY-MM-DD' (inclusive)
      """
      start_date: String!
      """
      Date string to get data to in format 'YYYY-MM-DD' (inclusive)
      """
      end_date: String!
      """
      Base currency code, i.e. 'GBP'.
      """
      base: RatesEnum!
    ): [HistoryRateResponse]!
  }
`
