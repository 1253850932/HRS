<!--
 * new page
 * @author: 
 * @since: 2023-01-12
 * staffChart.vue
-->
<script setup lang="ts">
import { getStaffData } from './utils/hooks'
import { ref, type Ref } from 'vue'
import { useECharts } from '@pureadmin/utils'
defineOptions({
  name: 'StaffChart'
})

const staffChart = ref<HTMLDivElement | null>(null)
const { setOptions } = useECharts(staffChart as Ref<HTMLDivElement>)
const result = getStaffData()
setOptions(result)
console.log(result)
defineExpose({ result })
</script>
<template>
  <div ref="staffChart" class="w-full h-80 float-left" />
</template>

<style lang="" scoped></style>
