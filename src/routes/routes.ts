import Dashboard, { RedirectToDashboard } from '@routes/Dashboard';

const routes = [
  { path: '/', component: RedirectToDashboard, name: 'Home' },
  { path: '/dashboard', component: Dashboard, name: 'Dashboard' }
];

export default routes;
