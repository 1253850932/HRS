import { resetRouter } from '@/router'
import { store } from '@/store'
import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'staff',
  state: (): appType => ({}),
  getters: {},
  actions: {
    // 退出登录
    logout() {
      // 清除本地缓存
      localStorage.clear()
    }
  }
})

export function useStaffStoreHook() {
  return useAppStore(store)
}
