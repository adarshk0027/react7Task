import axios from 'axios'

const fetch_api = axios.create({
  baseURL: 'https://622b525614ccb950d23688f3.mockapi.io',
})
export default fetch_api;