import { http } from '@/utils/http'
import { baseUrlApi } from './utils'
const url = 'home'
interface CountData {
  /**
   * 状态码
   */
  code: number
  /**
   * 状态信息
   */
  message: string

  data: {
    /**
     * 今日旷工
     */
    absenteeismNum: number
    /**
     * 今日迟到
     */
    lateNum: number
    /**
     * 今日早退
     */
    leaveEarlyNum: number
    /**
     * 状态正常
     */
    normalNum: number
    /**
     * 员工总数
     */
    totalNum: number
  }
}
interface staffData {
  /**
   * 状态码
   */
  code: number
  /**
   * 状态信息
   */
  message: string

  data: []
}

interface AttendanceData {
  /**
   * 状态码
   */
  code: number
  /**
   * 状态信息
   */
  message: string
  data: Array
}
export interface CityData {
  code: number
  data: Datum[]
  message: string
  token: null
}

export interface Datum {
  /** 职工上年度最低月工资 */
  averageSalary: number
  /** 生育保险企业缴纳比例 */

  comMaternityRate: number
  /** 医疗保险企业缴纳比例 */

  comMedicalRate: number
  /** 养老保险企业缴纳比例 缴纳比例：0 ~ 1 */

  comPensionRate: number
  /** 失业保险企业缴纳比例 */

  comUnemploymentRate: number

  createTime: string

  deleteFlag: number
  /** 公积金缴纳基数下限 */

  houLowerLimit: number
  /** 公积金缴纳基数上限 */

  houUpperLimit: number

  id: number
  /** 职工上年度平均月工资 不低于500元 */

  lowerSalary: number
  /** 城市名称 */

  name: string
  /** 医疗保险个人缴纳比例 */

  perMedicalRate: number
  /** 养老保险个人缴纳比例 缴纳比例：0 ~ 1 */

  perPensionRate: number
  /** 失业保险个人缴纳比例 */

  perUnemploymentRate: number
  /** 职工社保缴纳基数下限 */

  socLowerLimit: number
  /** 职工社保缴纳基数上限 */

  socUpperLimit: number

  updateTime: string
}
export interface departmentData {
  code: number
  data: Datum[]
  message: string
  token: null
}

interface Datum {
  name: string
  value: number
}
/** 获取统计数据 */
export const getCountData = () => {
  return http.request<CountData>('get', baseUrlApi(`${url}/count`))
}

/** 获取员工考勤数据 */
export const getAttendanceData = id => {
  return http.request<AttendanceData>('get', baseUrlApi(`home/attendance?id=${id}`))
}

/** 获取城市社保数据 */
export const getCityData = () => {
  return http.request<CityData>('get', baseUrlApi('home/city'))
}

/**
 * 今年员工入职情况
 * GET /home/staff
 */
export const getStaff = () => {
  return http.request<staffData>('get', baseUrlApi('home/staff'))
}

/**
 * 统计各部门员工人数
 * GET /home/staff
 */
export const getDepartmentData = () => {
  return http.request<departmentData>('get', baseUrlApi('home/department'))
}
