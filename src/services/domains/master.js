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

}