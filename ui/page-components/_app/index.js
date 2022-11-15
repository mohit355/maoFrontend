import Head from 'next/head';
import React from 'react';
// import PageLayout from '../../components/layout/PageLayout';
import  SessionProvider  from '../../content/SessionContext';
import { request } from '../../helpers/request-helper';

function Mao({ Component, pageProps, session }) {
  const { title: propTitle } = pageProps || {};
  let title = 'Mao';
  if (propTitle) {
    title = `${title} | ${propTitle}`;
  }

  return (
    <SessionProvider>
      <Head>
        <title>{title}</title>
      </Head>
        {/* <PageLayout> */}
          <Component {...pageProps} />
        {/* </PageLayout> */}
    </SessionProvider>
  );
}

Mao.getInitialProps = async ({ ctx }) => {
  const isServer = !!ctx?.req;
  let session = {};
  if (isServer) {
    session = {
      user: ctx?.req?.session?.user,
      sessionId: ctx?.req?.sessionID,
    };
  } else {
    // for removing error provide full path
    const res = await request.get('/user/me');
    session = res.data;
  }
  return { session };
};

export default Mao;