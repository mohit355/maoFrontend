import Axios from 'axios';
import { makeUseAxios } from 'axios-hooks';

// export const request = Axios.create({ baseURL: '/api/v1' });
export const request = Axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_APP_LIVE_URL || process.env.APP_LIVE_URL}/api`,
	headers: {
		'x-access-token':
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE5NWYyMzBkLTliZDEtNDcxOC1iZDdkLWMwZjk2NDA4ZGQxZSIsImlzQWRtaW4iOiIxIiwibmFtZSI6Ik1vaGl0IFJhaiIsInBob25lTnVtYmVyIjoiOTkzNDQwODgwNCIsImlhdCI6MTY2NzkxODEwNywiZXhwIjoxNjY4MDA0NTA3fQ.v7jGE2PFI_BSk_Lz8SJl_aI-R9-5244Ktfh5AsWj1Ns',
	},
});

export const useRequest = makeUseAxios({
	axios: request,
	cache: false,
	defaultOptions: {
		ssr: true,
		useCache: false,
	},
});
