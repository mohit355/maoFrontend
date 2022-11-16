import Axios from 'axios';
import { makeUseAxios } from 'axios-hooks';

export const request = Axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_APP_LIVE_URL || process.env.APP_LIVE_URL}/api`,
});
export const useRequest = makeUseAxios({
	axios: request,
	cache: false,
	defaultOptions: {
		ssr: true,
		useCache: false,
	},
});
