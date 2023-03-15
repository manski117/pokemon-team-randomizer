import Document, {Html, Head, Main, NextScript} from 'next/document';

//this actually NEEDS to be a class component bc we need to extend our Document to enable nextjs to use methods we need. 
export default class CustomDocument extends Document {
    render(): JSX.Element {
        return <Html>
            <Head>
                {/* <meta http-equiv="img-src 'self' data:" /> */}
            </Head>

            <body>
                <Main/>

            </body>

            <NextScript/>

        </Html>
    }
}

//this will be available on EVERY page, even ones that 404