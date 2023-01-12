import { getCountData, getStaff, getDepartmentData } from '@/api/home'
import User from '@iconify-icons/ep/user'
import star from '@iconify-icons/ep/star'
import timer from '@iconify-icons/ep/timer'
import watch from '@iconify-icons/ep/watch'
import lock from '@iconify-icons/ep/lock'
import filled from '@iconify-icons/ep/info-filled'
import { reactive } from 'vue'
import { message } from '@/utils/message'

const dayOfWeek: [string] = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

export const countData: [countType] = reactive([
  {
    name: '员工总数',
    value: 0,
    icon: User,
    color: '#409EFF'
  },
  {
    name: '状态正常',
    value: 0,
    icon: star,
    color: '#67C23A'
  },
  {
    name: '状态异常',
    value: 0,
    icon: filled,
    color: '#F56C6C'
  },
  {
    name: '今日迟到',
    value: 0,
    icon: timer,
    color: '#409EFF'
  },
  {
    name: '今日早退',
    value: 0,
    icon: watch,
    color: '#67C23A'
  },
  {
    name: '今日旷工',
    value: 0,
    icon: lock,
    color: '#F56C6C'
  }
])
interface countType {
  name: string
  value: number
  color: string
  icon: string
}

export const attendanceData: attendanceType = reactive({
  date: '',
  list: [],
  status: ['正', '迟', '退', '旷', '休'],
  tagType: ['success', '', 'warning', 'danger', 'info']
})
interface attendanceType {
  /**
   * 数据
   */
  date: any
  /**
   * 当月数据
   */
  list: Array
  /**
   * 上班状态
   */
  status: Array<string>
  /**
   * tag类型
   */
  tagType: Array<any>
}
export const cityDataOption = {
  title: {
    text: '部分城市社保缴费比例'
  },
  tooltip: {
    trigger: 'item',
    formatter: function (params) {
      return '<a>' + params.name + '</a></a>' + '<br /><a>' + params.seriesName + ': ' + params.data[params.seriesIndex + 1] * 100 + '%</a>'
    },
    textStyle: {
      fontWeight: 'bold'
    }
  },
  legend: {
    data: ['成都', '重庆', '北京', '上海']
  },
  xAxis: {
    type: 'category',
    data: ['成都', '重庆', '北京', '上海']
  },
  yAxis: {
    name: '百分比',
    axisLabel: {
      formatter: function (val) {
        return val * 100 + '%'
      }
    }
  },
  series: []
}
const series = {
  name: '',
  type: 'line',
  symbolSize: 10,
  symbol: 'circle',

  data: []
}
export interface cityType {
  code: number
  data: cityDataType
  message: string
  token: null
}

interface cityDataType {
  /**
   * 城市ID
   */
  id: string
  /**
   * 城市名称
   */
  name: string
  /**
   * 职工上年度平均月工资
   */
  averageSalary: number
  /**
   * 生育保险企业缴费比例
   */
  comMaternityRate: number
  /**
   * 医疗保险企业缴费比例
   */
  comMedicalRate: number
  /**
   * 养老保险企业缴费比
   */
  comPensionRate: number
  /**
   * 失业保险企业缴费比例
   */
  comUnemploymentRate: number
  createTime: string
  deleteFlag: number
  /**
   * 公积金缴纳基数下限
   */
  houLowerLimit: number
  /**
   * 公积金缴纳基数上限
   */
  houUpperLimit: number
  id: number
  /**
   * 职工上年度最低月工资
   */
  lowerSalary: number
  /**
   * 医疗保险个人缴费比例
   */
  perMedicalRate: number
  /**
   * 养老保险个人缴费比例
   */
  perPensionRate: number
  /**
   * 失业保险个人缴费比例
   */
  perUnemploymentRate: number
  /**
   * 职工社保缴纳基数下限
   */
  socLowerLimit: number
  /**
   * 职工社保缴纳基数上限
   */
  socUpperLimit: number
  updateTime: string
}

/** 当前时间 */
export const currentDate = () => {
  const data = new Date()
  const year = data.getFullYear()
  const month = data.getMonth() + 1
  const current = data.getDate()
  const day = data.getDay()
  return `${year}年${month}月${current}日  ${dayOfWeek[day]}`
}
/** 获取首页统计信息 */
export const getCount = async () => {
  const result = await getCountData()
  if (result.code === 200) {
    countData[0].value = result.data.totalNum
    countData[1].value = result.data.normalNum
    countData[2].value = result.data.totalNum - result.data.normalNum
    countData[3].value = result.data.lateNum
    countData[4].value = result.data.leaveEarlyNum
    countData[5].value = result.data.absenteeismNum

    return countData
  } else {
    message(result.message, { type: 'info' })
  }
}
/** 获取城市社保数据 */
export const getCityMedical = (data: any) => {
  const cityData = data.map(item => [item.name, item.comPensionRate, item.comMedicalRate, item.comUnemploymentRate, item.comMaternityRate])
  cityData.map(item => {
    series.name = item[0]
    item.splice(0, 1)
    series.data = item
    cityDataOption.series.push(Object.assign({}, series))
  })
  console.log(cityDataOption)
  return cityDataOption
}
/**今年员工入职情况  */
export const getStaffData = () => {
  getStaff().then(result => {
    if (result.code === 200) {
      const quarters = ['一季度', '二季度', '三季度', '四季度']
      staffOption.xAxis.data = quarters
      staffOption.series.forEach(item => {
        item.data = result.data
      })
    }
  })
  return staffOption
}

const staffOption = {
  title: {
    text: new Date().getFullYear() + '年员工入职情况',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c}人',
    textStyle: {
      fontWeight: 'bold'
    }
  },
  xAxis: {
    type: 'category',
    data: []
  },
  yAxis: {
    type: 'value',
    name: '人数'
  },
  series: [
    {
      data: [],
      type: 'line'
    },
    {
      data: [],
      type: 'bar'
    }
  ]
}

const departmentOption = {
  title: {
    text: '员工分布情况',
    left: 'center'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c}人',
    textStyle: {
      fontWeight: 'bold'
    }
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [10, 120],
      center: ['50%', '55%'],
      roseType: 'area',
      label: {
        // 饼图图形上的文本标签
        normal: {
          show: true,
          position: 'inner', // 标签的位置
          textStyle: {
            fontWeight: 'bold'
          },
          formatter: '{d}%'
        }
      },
      itemStyle: {
        borderRadius: 3
      },
      data: []
    }
  ]
}

/** 部门员工分布情况查询 */
export const getDepartment = () => {
  getDepartmentData().then(result => {
    if (result.code === 200) {
      departmentOption.series[0].data = result.data
    }
  })
  return departmentOption
}
