import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "react-medium-image-zoom/dist/styles.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
