import { http } from '@/utils/http'
import { baseUrlApi } from './utils'

type Result = {
  success: boolean
  data: Array<any>
}

type asyncResult = {
  code: number
  message: string
  data: Datum[]
  token?: any
}

interface Datum {
  id: number
  code: string
  name: string
  icon: string
  path: string
  parentId: number
  remark?: string
  createTime: string
  updateTime: string
  deleteFlag: number
  children: Child[]
}

interface Child {
  id: number
  code: string
  name: string
  icon: string
  path: string
  parentId: number
  remark: string
  createTime: string
  updateTime: string
  deleteFlag: number
  children?: any
}

export const getAsyncRoutes = () => {
  return http.request<Result>('get', '/getAsyncRoutes')
}
/**
 * 获取异步路由
 * @returns
 */
export const getAsyncRouters = () => {
  return http.request<asyncResult>('get', baseUrlApi('menu/staff/1'))
}
/**
 *
 * @returns
 */
export const getAllMenu = () => {
  return http.request<asyncResult>('get', baseUrlApi('menu/all'))
}
