import "../styles/globals.css";
import Layout from "../components/layouts/agricultor";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
