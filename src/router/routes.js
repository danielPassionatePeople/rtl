import Loadable from 'react-loadable';
import { HOMEPAGE_ROUTE, DETAILS_PAGE, EPISODE_PAGE, NOT_FOUND_ROUTE } from './constants';
import Loader from '../components/Loader';

const routeConfig = [
  {
    path: HOMEPAGE_ROUTE,
    name: 'homePage',
    exact: true,
    getModules: () => import('../containers/HomePage'),
  },
  {
    path: `${DETAILS_PAGE}/:id`,
    name: 'detailsPage',
    exact: true,
    getModules: () => import('../containers/DetailsPage'),
  },
  {
    path: `${DETAILS_PAGE}/:id${EPISODE_PAGE}/:episodeId`,
    name: 'episodePage',
    exact: true,
    getModules: () => import('../containers/DetailsPage'),
  },
  {
    name: 'notFoundPage',
    path: NOT_FOUND_ROUTE,
    getModules: () => import('../containers/NotFoundPage'),
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
