import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        name: "HelloWorld",
        path: "/",
        component: () => import("@/views/HelloWorld.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "Error",
        component: () => import("@/views/Error.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
