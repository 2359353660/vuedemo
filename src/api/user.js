import request from '@/utils/request'
import axios from 'axios'

export function login(data) {
  return axios({
    method: 'POST',
    url: '/api/login',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/api/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/api/user/logout',
    method: 'post'
  })
}
