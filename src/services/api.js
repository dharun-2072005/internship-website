import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
})

api.interceptors.response.use(
  (res) => res,
  (err) => {
    // unified error shape
    return Promise.reject(err?.response?.data || { message: err.message || 'Network error' })
  }
)

export const submitApplication = (payload) => api.post('/posts', payload)

export default api
