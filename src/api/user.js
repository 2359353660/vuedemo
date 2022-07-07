import request from '@/utils/request'
import axios from 'axios'

export function login(data) {
  return request({
    method: 'POST',
    url: 'http://localhost:8080/login',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}