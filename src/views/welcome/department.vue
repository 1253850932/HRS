<!--
 * new page
 * @author: 
 * @since: 2023-01-12
 * department.vue
-->
<script setup lang="ts">
import { getDepartment } from './utils/hooks'
import { ref, type Ref } from 'vue'
import { useECharts } from '@pureadmin/utils'
defineOptions({
  name: 'department'
})

const departmentRef = ref<HTMLDivElement | null>(null)
const { setOptions } = useECharts(departmentRef as Ref<HTMLDivElement>)
const result = getDepartment()
setOptions(result)
console.log(result)
defineExpose({ result })
</script>
<template>
  <div ref="departmentRef" class="w-full h-80 float-right" />
</template>

<style lang="" scoped></style>
