
import {apiCallback} from '../services/http'

export const MASTERS_API = {
    getAllInfoCoins: () => {
        return apiCallback('global/')
      },
      getAllCoins: () => {
        return apiCallback('tickers/')
      },


}