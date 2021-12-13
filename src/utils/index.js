
import {apiCallback} from '../services/http'

export const MASTERS_API = {
    getAllInfoCoins: () => {
        return apiCallback('global/')
      },
      getAllCoins: (count) => {
        return apiCallback(`tickers/?start=${count*100}&limit=100`)
      },
      getCoin: (id) => {
        return apiCallback(`ticker/?id=${id}`)
      },
      getMarkets: (id) => {
        return apiCallback(`coin/markets/?id=${id}`)
      },
      getSocialStats: (id) => {
        return apiCallback(`coin/social_stats/?id=${id}`)
      },
      getAllExchanges: () => {
        return apiCallback('exchanges/')
      },
      getExchange: (id) => {
        return apiCallback(`exchange/'?id=${id}`)
      }

}