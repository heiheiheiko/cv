import { createApp } from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSync, faDog, faHome, faPeopleArrows, faComments, faSpaceShuttle,
  faCogs, faUserAstronaut, faDice, faCode, faBook, faGraduationCap,
  faBirthdayCake, faHeart, faCar, faMoneyBillAlt, faHandRock, faHiking,
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
library.add(faCode);
library.add(faBook);
library.add(faGraduationCap);
library.add(faBirthdayCake);
library.add(faHeart);
library.add(faCar);
library.add(faMoneyBillAlt);
library.add(faHandRock);
library.add(faHiking);

const app = createApp(App).use(i18n).use(router);
app.component('FontAwesomeIcon', FontAwesomeIcon);

const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/,
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')),
  );

  app.component(componentName, componentConfig.default || componentConfig);
});

app.mount('#app');
