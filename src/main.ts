import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import './assets/styles/main.scss';
import i18n from './i18n';

library.add(faUserSecret);

const app = createApp(App).use(i18n).use(router);
app.component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app');
