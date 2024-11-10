import type { AppProps } from 'next/app';
import 'ress';
import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
