<script setup lang="ts">
import { getDownloadApi } from '@/api/docs'
import { getAttendanceData, getCityData, getStaff } from '@/api/home'
import { currentDate, getCount, countData, attendanceData, getCityMedical, cityDataOption } from './utils/hooks'
import { useRenderIcon } from '@/components/ReIcon/src/hooks'
import { ref, watch, computed, type Ref, onUpdated } from 'vue'
import { message } from '@/utils/message'

import { useDark, useECharts, type EchartOptions } from '@pureadmin/utils'
import StaffChart from './staffChart.vue'
import DepartmentChart from './department.vue'
defineOptions({
  name: 'Welcome'
})
/** 个人信息 */
const staff = ref(sessionStorage.getItem('user-info') ? JSON.parse(sessionStorage.getItem('user-info')) : {})
const downloadApi = () => {
  return getDownloadApi()
}
/** 个人图片 */
const srcList = [downloadApi() + staff.value.avatar, downloadApi() + staff.value.avatar, downloadApi() + staff.value.avatar, downloadApi() + staff.value.avatar]

/** 员工考勤信息 */
const attendance = async () => {
  const result = await getAttendanceData(staff.value.id)
  if (result.code === 200) {
    attendanceData.list = result.data
  } else {
    message(result.message, { type: 'info' })
  }
}
watch(
  () => attendanceData.date,
  () => {
    attendance()
  },
  { immediate: true }
)
getCount()
attendance()

/** 城市社保缴纳比例 */
const cityMedical = async () => {
  const result = await getCityData()
  if (result.code === 200) {
    getCityMedical(result.data)
  } else {
    message(result.message, { type: 'info' })
  }
}
cityMedical()
const { isDark } = useDark()
const theme: EchartOptions['theme'] = computed(() => {
  return isDark.value ? 'dark' : 'default'
})
const barChartRef = ref<HTMLDivElement | null>(null)
const { setOptions } = useECharts(barChartRef as Ref<HTMLDivElement>, { theme })
onUpdated(() => {
  return setOptions(cityDataOption)
})
const staffChart = ref(null)
console.log(staffChart)
// 今年员工入职情况
const departmentChart = ref(null)

</script>

<template>
  <div>
    <div class="flex pl-5 pt-5">
      <div class="flex-auto w-4/12 pr-5">
        <el-card class="box-card">
          <div class="userTop flex mb-5 pb-5">
            <div class="demo-image__preview">
              <el-image class="w-36 h-36 rounded-full" :src="getDownloadApi() + staff.avatar" :zoom-rate="1.2" :preview-src-list="srcList" :initial-index="4" fit="cover" />
            </div>
            <div class="ml-8 mt-8">
              <div class="font-semibold text-lg">{{ currentDate() }}</div>
              <div class="text-4xl">{{ staff.name }}</div>
              <div class="text-2xl mt-3">欢迎登录~</div>
            </div>
          </div>
          <div class="flex flex-wrap flex-col user-info h-20 text-sm">
            <p>
              生日：<span class="ml-16">{{ staff.birthday }}</span>
            </p>
            <p>
              地址：<span class="ml-16">{{ staff.address }}</span>
            </p>
            <p>
              部门：<span class="ml-16">{{ staff.deptName }}</span>
            </p>
          </div>
        </el-card>
      </div>
      <div class="num flex-auto w-8/12 h-44 flex justify-evenly flex-wrap">
        <el-card class="w-1/3 max-w-xs h-20 mb-5 mr-10" :body-style="{ display: 'flex', padding: 0 }" v-for="(item, index) in countData" :key="index">
          <div :style="{ background: item.color }" class="w-20 h-20 flex justify-center items-center">
            <component :is="useRenderIcon(item.icon)" color="#fff" width="30px" height="30px" />
          </div>
          <div class="detail ml-3">
            <p class="txt mb-1" style="color: #999; font-size: 15px">{{ item.name }}</p>
            <p class="num mb-1 text-3xl">{{ item.value }}</p>
          </div>
        </el-card>
      </div>
    </div>
    <div class="flex pt-5 pl-5">
      <div class="w-4/12 mr-5" style="margin-top: 20px; height: 487px">
        <el-card class="calendar">
          <el-calendar v-model="attendanceData.date">
            <template #date-cell="{ data }">
              <span>{{ data.day.split('-').slice(2).join('') }}</span>
              <el-tag :type="attendanceData.tagType[attendanceData.list[data.day.split('-').slice(2).join('') - 1]]">
                {{ attendanceData.status[attendanceData.list[data.day.split('-').slice(2).join('') - 1]] }}
              </el-tag>
            </template>
          </el-calendar>
        </el-card>
      </div>
      <div class="w-8/12 h-60 ml-2 echart">
        <el-card>
          <div ref="barChartRef" class="w-full h-72" />
        </el-card>
        <div class="mt-3">
          <el-card class="w-1/2 h-80 float-left">
            <StaffChart ref="staffChart" />
          </el-card>
          <el-card class="w-1/2 float-right">
            <DepartmentChart ref="departmentChart" />
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.userTop {
  border-bottom: 1px solid #ccc;
}

.user-info {
  p {
    margin-top: 5px;
    color: #999;

    span {
      color: #666;
    }
  }
}

.echart {
  margin-top: -127px;
  background-color: #bfa;
}

.num {
  :deep(.el-card__body) {
    display: flex;
  }
}

.is-selected {
  color: #1989fa;
}

.calendar {
  height: 500px;

  :deep(.el-calendar-day) {
    width: 55px;
    height: 71px;
  }
}

.chart {
  width: 100%;
  height: 400px;
}
</style>
