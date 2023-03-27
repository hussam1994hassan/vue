import { createRouter, createWebHistory } from "vue-router";

import AppLayout from "../layouts/AppLayout.vue";

import DashboardPage from "./DashboardPage.vue";
import TeamPage from "./TeamPage.vue";
import CalenderPage from "./CalenderPage.vue";
import ProjectPage from "./ProjectPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: AppLayout,
    children: [
      { path: "/dashboard", name: "Dashboard", component: DashboardPage },
      { path: "/team", name: "Team", component: TeamPage },
      { path: "/calender", name: "Calender", component: CalenderPage },
      { path: "/project", name: "Project", component: ProjectPage },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
