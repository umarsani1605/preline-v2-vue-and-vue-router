import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/accordion',
      name: 'accordion',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AccordionView.vue')
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: () => import('../views/CarouselView.vue')
    },
    {
      path: '/collapse',
      name: 'collapse',
      component: () => import('../views/CollapseView.vue')
    },
    {
      path: '/dropdown',
      name: 'dropdown',
      component: () => import('../views/DropdownView.vue')
    },
    {
      path: '/input-number',
      name: 'input-number',
      component: () => import('../views/InputNumberView.vue')
    },
    {
      path: '/overlay',
      name: 'overlay',
      component: () => import('../views/OverlayView.vue')
    },
    {
      path: '/pin-input',
      name: 'pin-input',
      component: () => import('../views/PinInputView.vue')
    },
    {
      path: '/remove-element',
      name: 'remove-element',
      component: () => import('../views/RemoveElementView.vue')
    },
    {
      path: '/scrollspy',
      name: 'scrollspy',
      component: () => import('../views/ScrollspyView.vue')
    },
    {
      path: '/select',
      name: 'select',
      component: () => import('../views/SelectView.vue')
    },
    {
      path: '/stepper',
      name: 'stepper',
      component: () => import('../views/StepperView.vue')
    },
    {
      path: '/strong-password',
      name: 'strong-password',
      component: () => import('../views/StrongPasswordView.vue')
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: () => import('../views/TabsView.vue')
    },
    {
      path: '/toggle-count',
      name: 'toggle-count',
      component: () => import('../views/ToggleCountView.vue')
    },
    {
      path: '/toggle-password',
      name: 'toggle-password',
      component: () => import('../views/TogglePasswordView.vue')
    },
    {
      path: '/tooltip',
      name: 'tooltip',
      component: () => import('../views/TooltipView.vue')
    }
  ]
})

router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      HSStaticMethods.autoInit()
    }, 100)
  }
})

export default router
