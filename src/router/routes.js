import Loadable from 'react-loadable';
import { HOMEPAGE_ROUTE, DETAILS_PAGE } from './constants';
import Loader from '../components/Loader';

const routeConfig = [
  {
    path: HOMEPAGE_ROUTE,
    name: 'homePage',
    exact: true,
    getModules: () => import('../containers/HomePage'),
  },
  {
    path: DETAILS_PAGE,
    name: 'detailsPage',
    getModules: () => import('../containers/DetailsPage'),
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
