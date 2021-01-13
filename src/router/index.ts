import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import DashboardIndex from '../views/Dashboard/Index.vue'
import Components from '../views/Dashboard/Components/Index.vue'
import Mail from '../views/Dashboard/Mail/Index.vue'
import Statistics from '../views/Dashboard/Statistics/Index.vue'
import Dashboard from '../views/Dashboard/Dashboard.vue'
import NotFound from '../views/NotFound.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: 'default-layout' }
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardIndex,
    meta: { layout: 'dashboard-layout' },
// redirect:'/dashboard/stats/',
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: 'components',
        name: 'Components',
        component: Components,
        redirect: '/dashboard/components/alerts',
        children: [
          {
            path: 'alerts',
            name: 'Alerts',
            component: () => import('../views/Dashboard/Components/Alerts.vue'),
          },
          {
            path: 'avatars',
            name: 'Avatars',
            component: () => import('../views/Dashboard/Components/Avatars.vue'),
          },
          {
            path: 'badges',
            name: 'Badges',
            component: () => import('../views/Dashboard/Components/Badges.vue'),
          },
          {
            path: 'breadcrumbs',
            name: 'Breadcrumbs',
            component: () => import('../views/Dashboard/Components/Breadcrumbs.vue'),
          },
          {
            path: 'buttons',
            name: 'Buttons',
            component: () => import('../views/Dashboard/Components/Buttons.vue'),
          },
          {
            path: 'cards',
            name: 'Cards',
            component: () => import('../views/Dashboard/Components/Cards.vue'),
          },
          {
            path: 'chips',
            name: 'Chips',
            component: () => import('../views/Dashboard/Components/Chips.vue'),
          },
          {
            path: 'icons',
            name: 'Icons',
            component: () => import('../views/Dashboard/Components/Icons.vue'),
          },
          {
            path: 'tabs',
            name: 'Tabs',
            component: () => import('../views/Dashboard/Components/Tabs.vue'),
          },
        ],


      }, {
        path: 'mail',
        name: 'Mail',
        component: Mail,
        redirect: '/dashboard/mail/inbox',
        children: [
          {
            path: "/dashboard/mail/inbox",
            name: "Inbox",
            component: () => import('../views/Dashboard/Mail/Inbox.vue'),
          },
          {
            path: "/dashboard/mail/sent",
            name: "Sent",
            component: () => import('../views/Dashboard/Mail/Sent.vue'),
          },
          {
            path: "/dashboard/mail/draft",
            name: "Draft",
            component: () => import('../views/Dashboard/Mail/Draft.vue'),
          },
        ]
      },
      {
        path: 'stats',
        name: 'Statistics',
        component: Statistics,
        redirect: '/dashboard/stats/github-stats',
        children:[
          
            {
              path: 'github-stats',
              name: 'GitHub stats',
              component: () => import('../views/Dashboard/Statistics/GitHubStats.vue'),
            },
          
        ]

      }
    ]
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { layout: 'default-layout' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
