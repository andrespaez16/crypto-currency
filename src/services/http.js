import axios from 'axios'

const url = 'https://api.coinlore.net/api'


 export const apiCallback  = async (queryParams) => {
 return  axios(`${url}/${queryParams}`)
}