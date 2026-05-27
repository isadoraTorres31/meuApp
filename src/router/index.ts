import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";
import TarefasPage from "../views/TarefasPage.vue";
import LoginPage from "@/views/LoginPage.vue";

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
        meta: { requerNome: true },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
