import GlobalStyle from '../styles/global';
import Head from "next/head";

function MyApp({Component, pageProps}) {

    return <>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800&display=swap"
                  rel="stylesheet"/>
        </Head>
        <GlobalStyle/>
        <Component {...pageProps} />
    </>
}

export default MyApp
