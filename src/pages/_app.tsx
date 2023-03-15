import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div data-theme="dracula">
        <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
