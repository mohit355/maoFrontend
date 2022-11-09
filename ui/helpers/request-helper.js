import Axios from 'axios';
import { makeUseAxios } from 'axios-hooks';

// export const request = Axios.create({ baseURL: '/api/v1' });
export const request = Axios.create({ baseURL: `${process.env.NEXT_PUBLIC_APP_LIVE_URL || process.env.APP_LIVE_URL}/api`,headers:{
  'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE2Njc2NjUwLWI3YmEtNDg2Ny1hYjhiLThmMGNkMDBjM2EyYSIsImlzQWRtaW4iOiIxIiwibmFtZSI6Ik1vaGl0IFJhaiIsInBob25lTnVtYmVyIjoiMTExMTExMTExMSIsImlhdCI6MTY2ODAxNDA5MywiZXhwIjoxNjY4MTAwNDkzfQ.Gh-c117ymWJgk6NCO7HPrc_i1cK0LYDt6gp7i_HcxLw'

} });

export const useRequest = makeUseAxios(
  {
    axios: request,
    cache: false,
    defaultOptions: {
      ssr: true,
      useCache: false,
    },
  },
);
