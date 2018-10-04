import { get, SERVER_DOMAIN } from '../utils/api';

const SHOWS_URL = `/shows`;

export const fetchShow = (id) => get(`${SERVER_DOMAIN}${SHOWS_URL}/${id}`);
