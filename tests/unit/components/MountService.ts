import { mount } from '@vue/test-utils';
import {
  createRouter, RouteRecordRaw, createWebHistory, Router,
} from 'vue-router';

export default class MountService {
  subject = {};

  props = {};

  data = {};

  mocks = {};

  stubs = {};

  router: Router | undefined = undefined

  components = {};

  constructor(subject: object) {
    this.subject = subject;
  }

  withProps(props: object) {
    this.props = props;
    return this;
  }

  withMocks(mocks: object) {
    this.mocks = mocks;
    return this;
  }

  withData(data: object) {
    this.data = data;
    return this;
  }

  withStubs(stubs: object) {
    this.stubs = stubs;
    return this;
  }

  withComponents(components: object) {
    this.components = components;
    return this;
  }

  // TODO: Fix [Vue Router warn]
  withRouter(routes: Array<RouteRecordRaw>) {
    this.router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: [{ path: '/', name: 'root', component: {} }, ...routes],
    });
    return this;
  }

  buildWrapper() {
    const options: any = {};
    if (this.props) {
      options.props = this.props;
    }

    if (this.data) {
      options.data = () => this.data;
    }

    if (this.mocks || this.stubs || this.components) {
      options.global = {};
      if (this.mocks) {
        options.global.mocks = {
          ...this.mocks,
          $t: (key: string) => key,
        };
      }
      if (this.stubs) { options.global.stubs = this.stubs; }
      if (this.components) { options.global.components = this.components; }
      if (this.router) { options.global.plugins = [this.router]; }
    }
    return mount(this.subject, options);
  }
}
