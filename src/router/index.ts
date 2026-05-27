import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
// imports de páginas são carregados dinamicamente nas rotas abaixo

const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/tabs/tarefas" },
  {
    path: "/tabs",
    component: () => import("../views/TabsPage.vue"),
    children: [
      { path: "", redirect: "/tabs/tarefas" },
      { path: "tarefas", component: () => import("../views/TarefasPage.vue") },
      {
        path: "tarefas/:id",
        component: () => import("../views/DetalhePage.vue"),
      },
      {
        path: "perfil",
        component: () => import("../views/PerfilPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Guarda global: verifica meta `requerNome` usando localStorage como fallback
router.beforeEach((to, _, next) => {
  const requerNome = (to.meta as any)?.requerNome;
  const nome = localStorage.getItem("nome");
  if (requerNome && !nome) {
    next("/tabs/tarefas");
  } else {
    next();
  }
});

export default router;
