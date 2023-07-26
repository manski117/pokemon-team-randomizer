import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";
import 'public/fonts.css';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div data-theme="night">
        <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
