// 模拟后端动态生成路由
import { MockMethod } from 'vite-plugin-mock'

/**
 * roles：页面级别权限，这里模拟二种 "admin"、"common"
 * admin：管理员角色
 * common：普通角色
 */

const permissionRouter = {
  path: '/permission',
  meta: {
    title: '权限管理',
    icon: 'lollipop',
    rank: 10
  },
  children: [
    {
      path: '/permission/page/index',
      name: 'PermissionPage',
      meta: {
        title: '页面权限',
        roles: ['admin', 'common']
      }
    },
    {
      path: '/permission/button/index',
      name: 'PermissionButton',
      meta: {
        title: '按钮权限',
        roles: ['admin', 'common'],
        auths: ['btn_add', 'btn_edit', 'btn_delete']
      }
    }
  ]
}

const moneyRouter = {
  id: 17,
  code: 'money',
  name: 'Money',
  icon: 's-finance\r\n',
  path: '/money',
  parentId: 0,
  remark: '薪资管理',
  createTime: '2022-03-22 11:42:06',
  updateTime: '2023-01-06 22:07:30',
  deleteFlag: 0,
  meta: {
    title: '薪资管理'
  },
  children: [
    {
      id: 18,
      code: 'city',
      name: 'City',
      icon: 'coordinate\r\n',
      path: '/money/city',
      parentId: 17,
      remark: '参保城市',
      createTime: '2022-03-22 18:27:13',
      updateTime: '2023-01-06 22:07:33',
      deleteFlag: 0,
      meta: {
        title: '参保城市'
      }
    },
    {
      id: 15,
      code: 'insurance',
      name: 'Insurance',
      icon: 's-data',
      path: '/money/insurance',
      parentId: 17,
      remark: '五险一金',
      createTime: '2022-03-21 23:33:59',
      updateTime: '2023-01-06 22:07:22',
      deleteFlag: 0,
      meta: {
        title: '五险一金'
      }
    },
    {
      id: 16,
      code: 'salary',
      name: 'Salary',
      icon: 'data-line',
      path: '/money/salary',
      parentId: 17,
      remark: '工资管理',
      createTime: '2022-03-21 23:34:56',
      updateTime: '2023-01-06 22:07:26',
      deleteFlag: 0,

      meta: {
        title: '工资管理'
      }
    }
  ]
}

const systemRouter = {
  id: 5,
  code: 'system',
  name: 'System',
  icon: 's-management',
  path: '/system',
  parentId: 0,
  remark: '系统管理',
  createTime: '2022-01-27 14:36:17',
  updateTime: '2023-01-06 22:07:04',
  deleteFlag: 0,
  meta: {
    title: '系统管理'
  },
  children: [
    {
      id: 2,
      code: 'docs',
      name: 'Docs',
      icon: 'folder',
      path: '/system/docs',
      parentId: 5,
      remark: '文件管理',
      createTime: '2022-12-22 19:48:47',
      updateTime: '2023-01-06 22:06:48',
      deleteFlag: 0,
      meta: {
        title: '文件管理'
      }
    },
    {
      id: 1,
      code: 'staff',
      name: 'Staff',
      icon: 'user',
      path: '/system/staff',
      parentId: 5,
      remark: '员工管理',
      createTime: '2022-02-22 19:47:58',
      updateTime: '2023-01-06 22:05:58',
      deleteFlag: 0,
      meta: {
        title: '员工管理'
      }
    },
    {
      id: 13,
      code: 'department',
      name: 'Department',
      icon: 's-operation',
      path: '/system/department',
      parentId: 5,
      remark: '部门管理',
      createTime: '2022-03-07 15:36:59',
      updateTime: '2023-01-06 22:07:11',
      deleteFlag: 0,
      meta: {
        title: '部门管理'
      }
    }
  ]
}
const attendanceRouter = {
  id: 14,
  code: 'attendance',
  name: 'Attendance',
  icon: 'edit',
  path: '/attendance',
  parentId: 0,
  remark: '考勤管理',
  createTime: '2022-03-21 23:30:38',
  updateTime: '2023-01-06 22:07:15',
  deleteFlag: 0,
  meta: {
    title: '考勤管理'
  },
  children: [
    {
      id: 19,
      code: 'leave',
      name: 'Leave',
      icon: 'suitcase',
      path: '/attendance/leave',
      parentId: 14,
      remark: '请假审批',
      createTime: '2022-03-26 09:40:15',
      updateTime: '2023-01-06 22:07:37',
      deleteFlag: 0,
      meta: {
        title: '请假审批'
      }
    },
    {
      id: 20,
      code: 'performance',
      name: 'Performance',
      icon: 'reading',
      path: '/attendance/performance',
      parentId: 14,
      remark: '考勤表现',
      createTime: '2022-03-26 09:46:24',
      updateTime: '2023-01-06 22:07:46',
      deleteFlag: 0,
      meta: {
        title: '考勤表现'
      }
    }
  ]
}
const permission = {
  id: 6,
  code: 'permission',
  name: 'Permission',
  icon: 's-cooperation\r\n',
  path: '/permission',
  parentId: 0,
  remark: '权限管理',
  createTime: '2022-11-20 18:00:21',
  updateTime: '2023-01-06 22:07:08',
  deleteFlag: 0,
  meta: {
    title: '权限管理'
  },
  children: [
    {
      id: 3,
      code: 'role',
      name: 'Role',
      icon: 's-custom',
      path: '/permission/role',
      parentId: 6,
      remark: '角色管理',
      createTime: '2022-10-22 19:49:42',
      updateTime: '2023-01-06 22:06:53',
      deleteFlag: 0,
      meta: {
        title: '角色管理'
      }
    },
    {
      id: 4,
      code: 'menu',
      name: 'Menu',
      icon: 'collection',
      path: '/permission/menu',
      parentId: 6,
      remark: '菜单管理',
      createTime: '2022-01-27 14:32:37',
      updateTime: '2023-01-06 22:06:57',
      deleteFlag: 0,
      meta: {
        title: '菜单管理'
      }
    }
  ]
}
export default [
  {
    url: '/getAsyncRoutes',
    method: 'get',
    response: () => {
      return {
        success: true,
        data: [permissionRouter, moneyRouter, systemRouter, attendanceRouter, permission]
      }
    }
  }
] as MockMethod[]
