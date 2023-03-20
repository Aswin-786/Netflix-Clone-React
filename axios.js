import axios from 'axios'
import { baseUrl } from './Netflix-Clone/Constant/Constant'
const instance = axios.create({
  baseURL: baseUrl

})

export default instance