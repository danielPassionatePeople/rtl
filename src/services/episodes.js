import { get, SERVER_DOMAIN } from '../utils/api';
import { SHOWS_URL } from './shows';

const EPISODES_URL = `/episodes`;

export const fetchEpisodes = (showId) => get(`${SERVER_DOMAIN}${SHOWS_URL}/${showId}${EPISODES_URL}`);
