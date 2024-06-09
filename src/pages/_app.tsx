import { Layout } from "@components/Layout";
import { FavoritesProvider } from "@contexts/FavoritesContext";
import "@styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FavoritesProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FavoritesProvider>
  );
}

export default MyApp;
