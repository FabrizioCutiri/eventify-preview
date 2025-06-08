import HomeComponent from '../public/pages/home.component.vue'
import {createRouter, createWebHistory} from "vue-router";

const routes =[
    {path:'/home', name:'Home', component:HomeComponent, meta:{title: 'Home'}},
    {path:"/", name:"Default", redirect:'/home'}
];

const router = createRouter({
    history:createWebHistory(),
    routes:routes
});

router.beforeEach((to, from, next) => {
    console.log(`Navigating from ${from.name} to ${to.name}`);
    let baseTitle = "Eventify";
    document.title = `${baseTitle} | ${to.name}`;
    next();
})

export default router;