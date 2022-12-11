
import './bootstrap';
import { createApp } from 'vue';
const app = createApp({});

// import ExampleComponent from './components/ExampleComponent.vue';
// app.component('example-component', ExampleComponent);
import MainLayout from "@/views/MainLayout.vue";
import router from "@/route/router";

app.component('main-layout', MainLayout)
    .use(router)
    .mount('#app')

