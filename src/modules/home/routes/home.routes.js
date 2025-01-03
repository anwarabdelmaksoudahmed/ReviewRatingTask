import WebsiteLayouts from "@/layouts/websiteLayouts.vue";
const Home = () => import("../home.vue");

export default [
  {
    path: "/",
    name: "WebsiteLayouts",
    component: WebsiteLayouts,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
    ],
  },
];
