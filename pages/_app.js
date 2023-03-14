import "../styles/globals.css";
import "../styles/index.scss";
import Layout from "../props/Layout.js";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
