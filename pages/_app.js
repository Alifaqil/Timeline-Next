import "../styles/globals.css";
import TimeProvider from "./Timecontext";

function MyApp({ Component, pageProps }) {
  return (
    <TimeProvider>
      <Component {...pageProps} />
    </TimeProvider>
  );
}

export default MyApp;
