import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSync, faDog, faHome, faPeopleArrows, faComments, faSpaceShuttle,
  faCogs, faUserAstronaut, faDice,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import './assets/styles/main.scss';
import i18n from './i18n';

library.add(faSync);
library.add(faDog);
library.add(faHome);
library.add(faPeopleArrows);
library.add(faComments);
library.add(faSpaceShuttle);
library.add(faCogs);
library.add(faUserAstronaut);
library.add(faDice);

const app = createApp(App).use(i18n).use(router);
app.component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app');
