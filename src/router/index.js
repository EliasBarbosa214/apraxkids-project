import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Apraxkids - Bem Vindo(a)!'
    }
  },
  {
    path: '/treinamento-libras',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      title: 'ApraxKids - Treinamento de Libras'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = 'ApraxKids';
  }
  next();
});


// adiciona um ouvinte de eventos para quando a rota for alterada
router.afterEach(() => {
  window.scrollTo(0, 0); // rola a página para o topo
});

self.addEventListener('fetch', function(event) {
  event.respondWith(async function() {
    // faz o pré-carregamento dos recursos
    const preloadResponse = await event.preloadResponse;
    if (preloadResponse) {
      return preloadResponse;
    }

    // executa o request normalmente
    const response = await fetch(event.request);

    // salva o response no cache
    const cache = await caches.open('cacheName');
    cache.put(event.request, response.clone());

    return response;
  }());

  // espera até que o request de pré-carregamento seja concluído antes de continuar
  event.waitUntil(async function() {
    const preloadResponse = await event.preloadResponse;
    if (!preloadResponse) {
      return;
    }

    // salva o response no cache
    const cache = await caches.open('cacheName');
    cache.put(event.request, preloadResponse.clone());
  }());
});

export default router
