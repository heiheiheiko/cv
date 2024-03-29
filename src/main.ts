import { createApp } from 'vue'
import _upperFirst from 'lodash/upperFirst'
import _camelCase from 'lodash/camelCase'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSync,
  faDog,
  faHome,
  faPeopleArrows,
  faComments,
  faSpaceShuttle,
  faCogs,
  faUserAstronaut,
  faDice,
  faCode,
  faBook,
  faGraduationCap,
  faBirthdayCake,
  faHeart,
  faCar,
  faMoneyBillAlt,
  faHandRock,
  faHiking,
  faChess,
  faGamepad,
  faTree,
  faAddressCard,
  faMapMarkedAlt,
  faGhost,
  faProjectDiagram,
  faGem,
  faUserFriends
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faXing, faKickstarterK } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import router from './router'
import './main.scss'
import i18n from './i18n'

library.add(faSync)
library.add(faDog)
library.add(faHome)
library.add(faPeopleArrows)
library.add(faComments)
library.add(faSpaceShuttle)
library.add(faCogs)
library.add(faUserAstronaut)
library.add(faDice)
library.add(faCode)
library.add(faBook)
library.add(faGraduationCap)
library.add(faBirthdayCake)
library.add(faHeart)
library.add(faCar)
library.add(faMoneyBillAlt)
library.add(faHandRock)
library.add(faHiking)
library.add(faChess)
library.add(faGamepad)
library.add(faTree)
library.add(faAddressCard)
library.add(faMapMarkedAlt)
library.add(faGhost)
library.add(faProjectDiagram)
library.add(faGem)
library.add(faUserFriends)
library.add(faGithub)
library.add(faXing)
library.add(faKickstarterK)

const app = createApp(App).use(i18n).use(router)
app.component('FontAwesomeIcon', FontAwesomeIcon)

const componentFiles = import.meta.glob(['./components/*.vue'], { eager: true })

Object.entries(componentFiles).forEach(([path, m]) => {
  const componentName = _upperFirst(
    _camelCase(
      path
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  app.component(componentName, m.default)
})

app.mount('#app')
