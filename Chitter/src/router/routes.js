
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/PageHome.vue'), name:'Home' },
      { path: '/bookmarks', component: () => import('src/pages/PageBookmarks.vue'), name:'Bookmarks' },
      { path: '/explore', component: () => import('src/pages/PageExplore.vue'), name:'Explore' },
      { path: '/lists', component: () => import('src/pages/PageLists.vue'), name:'Lists' },
      { path: '/messages', component: () => import('src/pages/PageMessages.vue'), name:'Messages' },
      { path: '/notifications', component: () => import('src/pages/PageNotifications.vue'), name:'Notifications' },
      { path: '/profile', component: () => import('src/pages/PageProfile.vue'), name:'Profile' },
      { path: '/settings', component: () => import('src/pages/PageSettings.vue'), name:'Settings' },
      { path: '/about', component: () => import('src/pages/PageAbout.vue'), name:'About' }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
