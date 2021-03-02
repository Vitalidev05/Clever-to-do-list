import Calendar from './components/Calendar';
import Login from './components/Login';
import { HOME_ROUTE, LOGIN_ROUTE } from './utils';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];

export const privateRoutes = [
  {
    path: HOME_ROUTE,
    Component: Calendar,
  },
];
