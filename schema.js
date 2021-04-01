const { gql } = require('apollo-server')

module.exports = gql`
  type RateResponse {
    rates: Rates
    base: String
    date: String
  }

  type Rates {
    AED: Float
    AFN: Float
    ALL: Float
    AMD: Float
    ANG: Float
    AOA: Float
    ARS: Float
    AUD: Float
    AWG: Float
    AZN: Float
    BAM: Float
    BBD: Float
    BDT: Float
    BGN: Float
    BHD: Float
    BIF: Float
    BMD: Float
    BND: Float
    BOB: Float
    BRL: Float
    BSD: Float
    BTN: Float
    BWP: Float
    BYN: Float
    BZD: Float
    CAD: Float
    CDF: Float
    CHF: Float
    CLP: Float
    CNY: Float
    COP: Float
    CRC: Float
    CUC: Float
    CUP: Float
    CVE: Float
    CZK: Float
    DJF: Float
    DKK: Float
    DOP: Float
    DZD: Float
    EGP: Float
    ERN: Float
    ETB: Float
    EUR: Float
    FJD: Float
    FKP: Float
    FOK: Float
    GBP: Float
    GEL: Float
    GGP: Float
    GHS: Float
    GIP: Float
    GMD: Float
    GNF: Float
    GTQ: Float
    GYD: Float
    HKD: Float
    HNL: Float
    HRK: Float
    HTG: Float
    HUF: Float
    IDR: Float
    ILS: Float
    IMP: Float
    INR: Float
    IQD: Float
    IRR: Float
    ISK: Float
    JMD: Float
    JOD: Float
    JPY: Float
    KES: Float
    KGS: Float
    KHR: Float
    KID: Float
    KMF: Float
    KRW: Float
    KWD: Float
    KYD: Float
    KZT: Float
    LAK: Float
    LBP: Float
    LKR: Float
    LRD: Float
    LSL: Float
    LYD: Float
    MAD: Float
    MDL: Float
    MGA: Float
    MKD: Float
    MMK: Float
    MNT: Float
    MOP: Float
    MRU: Float
    MUR: Float
    MVR: Float
    MWK: Float
    MXN: Float
    MYR: Float
    MZN: Float
    NAD: Float
    NGN: Float
    NIO: Float
    NOK: Float
    NPR: Float
    NZD: Float
    OMR: Float
    PAB: Float
    PEN: Float
    PGK: Float
    PHP: Float
    PKR: Float
    PLN: Float
    PYG: Float
    QAR: Float
    RON: Float
    RSD: Float
    RUB: Float
    RWF: Float
    SAR: Float
    SBD: Float
    SCR: Float
    SDG: Float
    SEK: Float
    SGD: Float
    SHP: Float
    SLL: Float
    SOS: Float
    SRD: Float
    SSP: Float
    STN: Float
    SYP: Float
    SZL: Float
    THB: Float
    TJS: Float
    TMT: Float
    TND: Float
    TOP: Float
    TRY: Float
    TTD: Float
    TVD: Float
    TWD: Float
    TZS: Float
    UAH: Float
    UGX: Float
    USD: Float
    UYU: Float
    UZS: Float
    VES: Float
    VND: Float
    VUV: Float
    WST: Float
    XAF: Float
    XCD: Float
    XDR: Float
    XOF: Float
    XPF: Float
    YER: Float
    ZAR: Float
    ZMW: Float
  }

  enum RatesEnum {
    AED
    AFN
    ALL
    AMD
    ANG
    AOA
    ARS
    AUD
    AWG
    AZN
    BAM
    BBD
    BDT
    BGN
    BHD
    BIF
    BMD
    BND
    BOB
    BRL
    BSD
    BTN
    BWP
    BYN
    BZD
    CAD
    CDF
    CHF
    CLP
    CNY
    COP
    CRC
    CUC
    CUP
    CVE
    CZK
    DJF
    DKK
    DOP
    DZD
    EGP
    ERN
    ETB
    EUR
    FJD
    FKP
    FOK
    GBP
    GEL
    GGP
    GHS
    GIP
    GMD
    GNF
    GTQ
    GYD
    HKD
    HNL
    HRK
    HTG
    HUF
    IDR
    ILS
    IMP
    INR
    IQD
    IRR
    ISK
    JMD
    JOD
    JPY
    KES
    KGS
    KHR
    KID
    KMF
    KRW
    KWD
    KYD
    KZT
    LAK
    LBP
    LKR
    LRD
    LSL
    LYD
    MAD
    MDL
    MGA
    MKD
    MMK
    MNT
    MOP
    MRU
    MUR
    MVR
    MWK
    MXN
    MYR
    MZN
    NAD
    NGN
    NIO
    NOK
    NPR
    NZD
    OMR
    PAB
    PEN
    PGK
    PHP
    PKR
    PLN
    PYG
    QAR
    RON
    RSD
    RUB
    RWF
    SAR
    SBD
    SCR
    SDG
    SEK
    SGD
    SHP
    SLL
    SOS
    SRD
    SSP
    STN
    SYP
    SZL
    THB
    TJS
    TMT
    TND
    TOP
    TRY
    TTD
    TVD
    TWD
    TZS
    UAH
    UGX
    USD
    UYU
    UZS
    VES
    VND
    VUV
    WST
    XAF
    XCD
    XDR
    XOF
    XPF
    YER
    ZAR
    ZMW
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
  }
`
