import "@/styles/globals.css";
import { UIProvider } from "@yamada-ui/react"

export default function App({ Component, pageProps }) {
  return (
    <UIProvider>
      <Component {...pageProps} />
    </UIProvider>
  );
}
