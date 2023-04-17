import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import components from './components/UI';
import VueCookies from 'vue-cookies';

const app = createApp(App);

components.forEach(el => {
    app.component(el.name, el);
});

app.use(router).use(VueCookies).mount('#app');
