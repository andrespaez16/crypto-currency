import { MASTERS_API } from '../../utils/index'


export class Masters {
    async getInfoAllcoins () {
        const response = await MASTERS_API.getAllInfoCoins()
        return response
      }
      async getAllcoins () {
        const response = await MASTERS_API.getAllCoins()
        return response
      }
      async getCoin (id) {
        const response = await MASTERS_API.getCoin(id)
        return response
      }
      async getMarkets (id) {
        const response = await MASTERS_API.getMarkets(id)
        return response
      }
      async getSocialStats (id) {
        const response = await MASTERS_API.getSocialStats(id)
        return response
      }
      async getAllExchanges () {
        const response = await MASTERS_API.getAllExchanges()
        return response
      }
      async getExchange (id) {
        const response = await MASTERS_API.getExchange(id)
        return response
      }
}