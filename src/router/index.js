import Vue from "vue";
import VueRouter from "vue-router";
import TopAlbums from "@/pages/TopAlbums";
import AlbumDetail from "@/pages/AlbumDetail";

Vue.use(VueRouter);
export const routes = [
    {
        path: "/",
        name: "TopAlbums",
        component: TopAlbums
    },
    {
        path: "/album/:id",
        name: "AlbumDetail",
        component: AlbumDetail
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
