import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import Layout from "../components/DefaultLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MUIThemeProvider theme={theme}>
      <Layout>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
    </MUIThemeProvider>
  );
}
