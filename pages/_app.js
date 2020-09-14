import "../styles/globals.css";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { StaticKitProvider } from "@statickit/react";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <StaticKitProvider site="8cc40183445b">
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />;
      </AnimatePresence>
    </StaticKitProvider>
  );
}

export default MyApp;
