import axios from 'axios'

const instance = axios.create({
  baseURL: 'api'
})

instance.interceptors.request.use(
  (config) => config,
  (error) => error
)
instance.interceptors.response.use(
  (response) => response.data,
  (error) => error
)
export default {
  ...instance,
  responseHandler(response) {
    return Promise.resolve(response.data)
  }
}
