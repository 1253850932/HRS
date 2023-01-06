<script setup lang="ts">
import { getDownloadApi } from '@/api/docs'

defineOptions({
  name: 'Welcome'
})
const staff = sessionStorage.getItem('user-info') ? JSON.parse(sessionStorage.getItem('user-info')) : {}
const downloadApi = () => {
  return getDownloadApi()
}
const srcList = [downloadApi() + staff.avatar, downloadApi() + staff.avatar, downloadApi() + staff.avatar, downloadApi() + staff.avatar]
console.log(staff)
</script>

<template>
  <div class="flex flex-wrap">
    <el-card class="box-card">
      <div class="demo-image__preview">
        <el-image :src="downloadApi() + staff.avatar" :zoom-rate="1.2" :preview-src-list="srcList" :initial-index="4" fit="cover" />
      </div>
    </el-card>
    <div>2</div>
    <div>3</div>
  </div>
</template>
<style scoped>
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.demo-image__error .image-slot {
  font-size: 30px;
}

.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}

.demo-image__error .el-image {
  width: 100%;
  height: 200px;
}
</style>
