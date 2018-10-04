import Loadable from 'react-loadable';
import { HOMEPAGE_ROUTE } from './constants';
import Loader from '../components/Loader';

const routeConfig = [
  {
    path: HOMEPAGE_ROUTE,
    name: 'homePage',
    getModules: () => import('../containers/HomePage/index'),
  },
];

const getRoute = ({ path, name, getModules, ...props }) => ({
  path,
  name,
  component: Loadable({
    loader: getModules,
    loading: Loader,
    delay: 300,
  }),
  ...props,
});

export default function createRoutes() {
  return routeConfig.map((route) => getRoute(route));
}
