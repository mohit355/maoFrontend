import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<link
				href="http://fonts.googleapis.com/css?family=Lato:400,700"
				rel="stylesheet"
				type="text/css"
			/>

			<link href="https://fonts.cdnfonts.com/css/sketsa-ramadhan" rel="stylesheet" />

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
