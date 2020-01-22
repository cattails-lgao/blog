import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { //首页
      path: '/',
      name: 'index',
      component: () => import("@/view/index/index")
    },
    { // 指定的文章页
      path: '/detail-:art_id',
      name: 'art_detail',
      props: true,
      component: () => import('@/view/article/artDetail')
    },
    { // 指定标签页面
      path: '/tags',
      name: 'tags',
      component: () => import('@/view/tags/tags')
    },
    { // 标签墙
      path: '/tags-wall',
      name: 'tagsWall',
      component: () => import('@/view/tagsWall/tags-wall')
    },
    { // 归档页
      path: '/archives',
      name: 'archives',
      component: () => import('@/view/archives/archives')
    },
    { // 留言页
      path: '/leaveMessage',
      name: 'leaveMessage',
      component: () => import('@/view/leaveMessage/leaveMessage')
    }
  ]
})
