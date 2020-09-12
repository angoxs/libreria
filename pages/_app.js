import "../styles/globals.css";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { StaticKitProvider } from "@statickit/react";

function MyApp({ Component, pageProps }) {
  return (
    <StaticKitProvider site="8cc40183445b">
      <Component {...pageProps} />;
    </StaticKitProvider>
  );
}

export default MyApp;
