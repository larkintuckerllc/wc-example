import { Router } from '@vaadin/router';
import './A';
import './B';
import './Fruit';
import './Home';
import './Nav';
import './NotFound';

const rootEl = document.getElementById('root');
const router = new Router(rootEl);
router.setRoutes([
  { path: '/', component: 'hello-home' },
  { path: '/a', component: 'hello-a' },
  { path: '/b', component: 'hello-b' },
  {
    path: '/nav',
    component: 'hello-nav',
    children: [
      { path: '/a', component: 'hello-a' },
      { path: '/b', component: 'hello-b' },
      { path: '(.*)', component: 'hello-not-found' },
    ],
  },
  { path: '/fruit/:id', component: 'hello-fruit' },
  { path: '(.*)', component: 'hello-not-found' },
]);
