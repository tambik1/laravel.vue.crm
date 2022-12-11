import {createRouter, createWebHistory} from 'vue-router';
import IndexView from "@/views/IndexView.vue";
import ExampleComponent from "@/components/ExampleComponent.vue";

const routes = [
    {
        path: '/',
        name: 'index-view',
        component: IndexView
    },
    {
        path: '/example',
        name: 'example',
        component: ExampleComponent
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;
