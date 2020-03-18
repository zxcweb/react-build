import ajax from '@/utils/ajax'

export default {
  parseTk(params) {
    return ajax.post('/api/demo', params)
  }
}
