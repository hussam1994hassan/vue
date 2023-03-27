import { createRouter, createWebHistory } from "vue-router";

import AppLayout from "../layouts/AppLayout.vue";

import DashboardPage from "./DashboardPage.vue";
import TeamPage from "./TeamPage.vue";
import CalenderPage from "./CalenderPage.vue";
import ProjectPage from "./ProjectPage.vue";

const routes = [
  {
    path: "/vue/",
    redirect: "/vue/dashboard",
    component: AppLayout,
    children: [
      { path: "/vue/dashboard", name: "Dashboard", component: DashboardPage },
      { path: "/vue/team", name: "Team", component: TeamPage },
      { path: "/vue/calender", name: "Calender", component: CalenderPage },
      { path: "/vue/project", name: "Project", component: ProjectPage },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
