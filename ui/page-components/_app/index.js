import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../Layout/index';
import { useRequest } from '../../helpers/request-helper';

export const SessionContext = React.createContext({});

function Mao({ Component, pageProps }) {
	const { title: propTitle } = pageProps || {};
	let title = 'Mao';
	if (propTitle) {
		title = `${title} | ${propTitle}`;
	}
	const router = useRouter();
	const [userDetails, setUserDetails] = useState({});
	const [{ loading: getMeLoading }, getMe] = useRequest(
		{
			url: '/auth/me',
			method: 'GET',
		},
		{ manual: true },
	);

	useEffect(() => {
		async function getMyDetails() {
			await getMe({
				headers: {
					'x-access-token': localStorage.getItem('afjalMao-x-access-token'),
				},
			})
				.then((res) => {
					const { userDetails } = res.data;

					if (userDetails !== {}) {
						setUserDetails(userDetails);
					} else {
						setUserDetails({});
					}
				})
				.catch((err) => {
					setUserDetails({});
				});
		}
		getMyDetails();
	}, []);

	const Components = ['/auth'].includes(router.pathname) ? (
		<Component {...pageProps} />
	) : (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<link
				href="http://fonts.googleapis.com/css?family=Lato:400,700"
				rel="stylesheet"
				type="text/css"
			/>

			<link href="https://fonts.cdnfonts.com/css/sketsa-ramadhan" rel="stylesheet" />
			<SessionContext.Provider value={{ userDetails, setUserDetails }}>
				{Components}
			</SessionContext.Provider>
		</>
	);
}

export default Mao;
